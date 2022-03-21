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
            <td><a href="#"> Descargar</a> </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <button>Crear Reporte</button>
  </div>
</template>
<script>


  export default {

    data() {
        return {
          listReports:[]
        }
    },
    created() {
      
    },

    mounted() {
      this.reportList()
    },

    components:{

    },

    methods: {
      reportList(){

        this.axios.get(this.$uri+'/api/list-reports')
        .then(response => {
            console.log(response.data.response)
            this.listReports = response.data.response.data 
        })
        .catch(error => {

        })
        .finally(() => {

        })
      }
    },
  }
</script>
