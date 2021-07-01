<template>
      <div class='text-subtitle-1 ml-4'>
            {{date}}
          </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    data(){
        return {
            date:''
        }
    },
    methods:{
        getDate(){
           // this.date = new Date(parts[0], parts[1] - 1, parts[2])
           this.date = format(new Date(), 'MMMM d, H:mm:ss')
           setTimeout(this.getDate,1000)
        }
    },
    mounted(){
        this.getDate()
    }

}
</script>

<style>

</style>