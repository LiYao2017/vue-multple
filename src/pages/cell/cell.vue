<template>
    <div id="app">
       <cell></cell>
        <div>

        </div>
    </div>
</template>

<script>
import cell from 'components/cell.vue'
export default {
  name: 'app',
  components: { cell },
    created(){
        this.load();
    },
    mounted(){

    },
    methods:{
        load(){
            let url = '/api/scheduleJob/listLog?limit=10&page=1';
            this.$get(url).then(function(res){
                // console.log(res);
            })
        }
    }
}
</script>

<style lang="scss" type="text/scss"  scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
