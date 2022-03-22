<template>

    <loading v-model:active="isLoading"
              :is-full-page="true"
    />
    <vue-final-modal v-model="statusModal"  :hide-overlay="false"  :click-to-close="true"    content-class="modal-dialog"   :esc-to-close="true" >
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent="submitData">
                    <div class="modal-body">
                        <h1 class="title pt-2">Reporte por fecha de nacimiento</h1>
                        <p class="subtitle pt-2">Ingresa los siguientes datos para generar tu reporte</p>   
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3 text-start" >
                                    <label for="exampleFormControlInput1" class="form-label">Descripción del reporte</label>
                                    <input type="text" class="form-control" v-model="input.title" placeholder="">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="mb-3  text-start">
                                    <label  class="form-label">Fecha inicio</label>
                                    <v-date-picker class="" v-model="input.start_date">
                                        <template v-slot="{ inputValue, togglePopover }">
                                        <div class=" ">
                                        
                                            <input
                                            :value="inputValue"
                                            class="bg-white form-control"
                                            readonly
                                            @click="togglePopover()"
                                            />
                                        </div>
                                        </template>
                                    </v-date-picker>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3  text-start">
                                    <label class="form-label">Fecha Fin</label>
                                    
                                    <v-date-picker class="" v-model="input.end_date">
                                        <template v-slot="{ inputValue, togglePopover }">
                                        <div class="">
                                        
                                            <input
                                            :value="inputValue"
                                            class="bg-white form-control"
                                            readonly
                                            placeholder=""
                                            @click="togglePopover()"
                                            />
                                        </div>
                                        </template>
                                    </v-date-picker>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto mt-3 mb-4">
                            <button class=" btn btn-custom btn-warning shadow" type="submit">Generar reporte</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </vue-final-modal>
</template>

<script>

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: 'ModalComponent',
    data() {
        return {
            statusModal:false,
            isLoading: false,
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
    components:{
        Loading
    },
    methods: {
        showModal(){
            this.statusModal = true;
        },

         hideModal(){
            this.statusModal = false;
        },

        submitData()
        {
            this.isLoading= true

            let url = this.$uri+'/api/generate-report'
            let data = this.input

            this.axios.post(url,data)
            .then(response => {
                console.log(response.data.response)
               
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.isLoading= false
            })
        },
    },
}
</script>
    


<style>
.title {
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 2px;
    text-align: center;
    color: #373737;
}

.sub-title {
    font-size: 12px;
    line-height: 15px;
    color: #565656;
}
.btn-custom {
    width: 220px;
    height: 50px;
    font-weight: 600;
    padding: 8px 0px;
    border-radius: 25px;
    text-align: center;
    font-size: 16px;
    line-height: 1.42857;
}
</style>