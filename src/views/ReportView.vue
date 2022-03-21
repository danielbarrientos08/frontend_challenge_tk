<template>
  <div class="about">
    <h1>Generador de reportes TK</h1>
      <table>
        <thead>
          <th>Título</th>
          <th>Fecha de creación</th>
          <th>Acción</th>
        </thead>
        <tbody>
          <tr v-for="report in listReports" v-bind:key="report.id">
            <td>{{report.title}}</td>
            <td>{{report.created_at}}</td>
            <td><a href="#" @click.prevent="downloadReport(report.id,report.title)"> Descargar</a> </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <button @click="showModal">Crear Reporte</button>
  </div>
    <modal-component ref="ModalComponent" />
</template>
<script>

import ModalComponent    from '@/components/ModalComponent'

  export default {

    data() {
        return {
          listReports: [],
        }
    },
    created() {
       this.reportList()
    },

    mounted() {
     
    },

    components:{
      ModalComponent
    },

    methods: {
      reportList(){

        let url = this.$uri+'/api/list-reports'

        this.axios.get(url)
        .then(response => {
            console.log(response.data.response)
            this.listReports = response.data.response 
        })
        .catch(error => {

        })
        .finally(() => {

        })
      },

      showModal(){
        this.$refs.ModalComponent.showModal(); 
      },

      downloadReport( report_id,report_tilte)
      {
        let url = this.$uri+'/api/get-report/'+report_id

        const req = this.axios({
            method: "get",
            url:url,
            responseType: "blob",
        })
        .then(response => {
            console.log('excel '+response.data)

            var my_blob = new Blob(
              [response.data],
              {type : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64"}
            )

            const a_excel = document.createElement("a");
            a_excel.href = window.URL.createObjectURL(my_blob);
            a_excel.download = 'Reporte '+report_tilte+'_'+new Date().getTime()+'.xlsx'
            a_excel.click();
        })
        .catch(error => {

        })
        .finally(() => {

        })
      }

    },
  }
</script>
