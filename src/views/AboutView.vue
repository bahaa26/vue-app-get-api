<template>
    <div>
       
<h2>HTML Table</h2>



<div class="sending animated fadeIn" v-show="loding">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <rect x="0" y="0" width="4" height="10" fill="#333">
                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="10" y="0" width="4" height="10" fill="#333">
                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
                <rect x="20" y="0" width="4" height="10" fill="#333">
                <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform>
                </rect>
            </svg>
            <span> Checking </span>
        </div>



<table v-show="!loding">
   <tr>
        <td>id</td>
        <td>user_name</td>
        <td>Location</td>
        <td>phone number</td>
        <td>updated_at</td>
        <td>created_at</td>
    </tr>
  <tr v-for="(item, i) in data" :key="i">
  <td>{{item.id}}</td>
  <td>{{item.user_name}}</td>
  <td>{{item.location}}</td>
  <td>{{item.phone_number}}</td>
  <td>{{item.updated_at}}</td>
  <td>{{item.created_at}}</td>
  </tr>
</table>
    </div>
</template>


<script>
export default {
    data () {
        return {
            data: [],
            errors: [],
            loding: false,
        }
    },
    methods: {
        // async getData () {
        //     this.loding = true
        //     await this.axios(
        //         {
        //             method: 'get',
        //             url: 'https://test.deeb-egypt.com/api/orders',

        //             headers: {
        //                 'key' :'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg',
        //                 'MrAli-Api' : 'ali-abou-motta'

        //             },
        //             params: {
        //                 'key' : 'fadsf54',
        //             }
        //         }
        //     )
        //     .then (r => {
        //         if(r.status == 200) {
        //             this.data = r.data
        //              this.loding = false
        //         }
        //     })
        //     .catch (e => {
        //         this.errors =  this.showError(e.response.data);
        //     })
        // },

        async getData () {
            const res = await this.callApi('get','orders')
            if(res.status == 200) {
                this.data = res.data;
                console.log(res);
            } else {
                this.errors = this.showError(res.data);
                console.log(res);
            }
        },

        showError (v) {
            alert(v);
        }
    },
    created () {
        this.getData();
    }
}
</script>

<style>
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }

    td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    }

    tr:nth-child(even) {
    background-color: #dddddd;
    }
</style>

