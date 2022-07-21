import axios from 'axios';

export default {
    data () {
        return {
            api : {
                key: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg',
                name: 'ali-abou-motta',

            }
        }
    },
    methods : {
        async callApi (m,u,d) {
            try {
                return await axios(
                    {
                        method: m,
                        url: "https://test.deeb-egypt.com/api/"+u,
                        data: d,
                        headers : {
                            'key': this.api.key,
                            'MrAli-Api': this.api.name
                        },
                    }
                );
            }
            catch (e) {
                return e.response;
            }
        }
    }
}