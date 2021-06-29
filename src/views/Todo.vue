<template>
<div class="home">
  <field-add-task/>
   
<list-tasks
v-if="$store.state.tasks.length"
/>
     <div class='text-h5 primary--text no-tasks' v-else
     
     >
       <v-icon
       large
       color=green darken-2
       >
       mdi-check
       </v-icon>
        No Tasks
        </div>
  </div>
</template>

<script>

 

  export default {
    name: 'Todo',
    
components:{
    'field-add-task':require('@/components/Todo/FieldAddTask.vue').default,
    'list-tasks':require('@/components/Todo/ListTasks.vue').default

  }
  
  }
</script>



