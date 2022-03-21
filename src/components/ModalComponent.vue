<template>
    <vue-final-modal v-model="statusModal"  :hide-overlay="false" :click-to-close="false" >
     
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close"  @click="hideModal" ></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Títutlo del reporte</label>
                        <input type="text" class="form-control" placeholder="titulo">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Títutlo del reporte</label>
                        <input type="date" class="form-control"  placeholder="Fecha inicio">
                        </div>
                    </div>
                     <div class="col-6">
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Títutlo del reporte</label>
                        <input type="date" class="form-control" placeholder="Fecha fin">
                        </div>
                    </div>
                </div>
              
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        
    </vue-final-modal>

     
</template>

<script>
export default {
    name: 'ModalComponent',
    data() {
        return {
            statusModal:false,
            input : {
                title: null,
                start_date: null,
                end_date: null
            },
            error:{
                title: null,
                start_date: null,
                end_date: null
            }
        }
    },
    methods: {
        showModal(){
            this.statusModal = true;
        },
         hideModal(){
            this.statusModal = false;
        }
    },
}
</script>
    
<style>

</style>