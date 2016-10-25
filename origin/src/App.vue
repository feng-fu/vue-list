<template>
  <div id='app'>
    <h1 v-text='title'></h1>
    <div class='input-item'>
      <div>
        <label>name:</label>
        <input type='text' v-model='newName' placeholder="Please Enter Name.">
      </div>
      <div>
        <label>age:</label>
        <input type='text' v-model='newAge' placeholder="Please Enter Sex.">
      </div>
      <div>
        <label>sex:</label>
        <select v-model='newSex'>
          <option value='male'>male</option>
          <option value='female'>female</option>
        </select>
      </div>
      <div>
        <label></label>
        <button type='submit' value='addNew' v-on:click='addNew'>addNew</button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in items">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.sex }}</td>
          <td><button @click="deletePerson(person)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div class="console" v-bind:class='{active:isActive}'>请完善信息.</div>
  </div>
</template>

<script>
import Store from './store'

export default {
  data:function(){
    return {
      title:'People Manage System.',
      newName:'',
      newAge:'',
      newSex:'',
      isActive:false,
      items:Store.fetch()
    }
  },
  watch: {
    items:{
      handler:function(){
        Store.save(this.items)
      },
      deep:true
    }
  },
  methods: {
    addNew:function(){
      var timer;
      if(this.newSex && this.newAge && this.newName){
        this.items.push({
          'name':this.newName,
          'age':this.newAge,
          'sex':this.newSex
        })
        this.newName = ''
        this.newSex = ''
        this.newAge = ''
      }else{
        var self = this;
        self.isActive = true;
        timer = setTimeout(function(){
          self.isActive = false;
        },1000)
      }

    },
    deletePerson:function(item){
      this.items.splice(this.items.indexOf(item),1);
    }
  }
}
</script>

<style>
.finished {
  text-decoration:line-through;
}
html {
  height: 100%;
}

body {

}

#app {
  color: #2c3e50;
  width: 650px;
  margin: 20px auto 0;
  font-family: '微软雅黑',Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  min-height: 500px;
}
.input-item {
  width: 300px;
  margin: 0 auto;
}
.input-item>div {
  margin: 10px;
  text-align: left;
}
input,select {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 3px;
  border: 1px solid #42b983;
  outline: none;
}
label {
  display: inline-block;
  width: 50px;
  text-align: right;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}
button {
  outline: none;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #42b983;
  border:none;
  cursor: pointer;
  color: rgba(255,255,255,0.66);
}
.console {
  display: none;
  position: absolute;
  top: 40px;
  left: 45%;
  padding: 10px;
  border-radius: 4px;
  background-color: #42b983;
  transition: all .5s;
  color: rgba(255,255,255,0.66);
}
.console.active {
  display: inline-block;
}

</style>
