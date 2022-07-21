<script setup>
    import {reactive} from 'vue'
    import {nextTick} from 'vue'
        const state = reactive({ count : 0 })

        const raw = {}
        const proxy = reactive(raw)

        console.log(raw == proxy)
        console.log(reactive(raw) === proxy)

        const obj = {
            nasted: {count: 0},
            arr1: ['ffo', 'ddl']
        }

        function increment() {
            obj.nasted.count++
            var elpush = 'hsa';
            obj.arr1.push(elpush)
            document.getElementById("contain").innerHTML = obj.nasted.count
            var elementli = document.createElement("li");
            var elementtext = document.createTextNode(elpush)
            elementli.appendChild(elementtext)
            document.getElementById("ul_arr").appendChild(elementli)
            console.log('Without NixtTick' + document.getElementById("contain").innerHTML)
            nextTick( () => {
                console.log('With NixtTick' + document.getElementById("contain").innerHTML)
            })
        }
</script>
<template>
    <div class="reactive">
        <div class="button">
            <button @click="increment()"> increment </button>
        </div>
        <div id="contain">{{obj.nasted.count}}</div>

        <ul id="ul_arr">
            <li v-for="(item,i) in obj.arr1">
                {{item}}
            </li>
        </ul>
    </div>
</template>