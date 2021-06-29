<template>
<div class="home">
   <v-text-field
   v-model="newTaskTitle"
   class="pa-3"
            outlined
            label="Add Task"
            append-icon="mdi-plus"
            hide-details
            clearable
            @click:append="addTask"
            @keyup.enter="addTask"
          ></v-text-field>
<v-list
    v-if="tasks.length"
      subheader
    class="pt-0"
    >
 
<div
v-for="task in tasks"
        :key="task.id"
        >
  
        <v-list-item
        @click="doneTask(task.id)"
        :class="{'blue lighten-5': task.done}"
        >
          
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"
              color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{'text-decoration-line-through': task.done}">{{task.title}}</v-list-item-title>
            </v-list-item-content>
              <v-list-item-action>
          <v-btn 
          icon
          @click.stop="deleteTask(task.id)"
          >
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
</div>
     
   
    </v-list>
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
    data(){
      return{
        newTaskTitle:"",
        tasks:[
          {id:1,title:"Wake up", done: false},
           {id:2,title:"Code", done: false},
            {id:3,title:"Coffee", done: false},
        ]
      }
    },
    methods:{
      addTask(){
          console.log("add task")
          
          let newTask ={
            id:Date.now(),
            title: this.newTaskTitle,
            done:false
          }


          this.tasks.push(newTask),
          this.newTaskTitle = ''
      },
      doneTask(id){
        let task = this.tasks.filter(task=> task.id === id)[0]
        task.done = !task.done
      },
      deleteTask(id){
        this.tasks = this.tasks.filter(task=> task.id !== id)
      }
    }

  
  }
</script>
<style lang="css" >
.no-tasks{
display: flex;
justify-content: center;
align-items: center;
padding:50px;
opacity:.5
}
</style>


