var store = {
	setStore(key, value){
		localStorage.setItem(key, JSON.stringify(value));
	},
	getStore(key){
		return JSON.parse(localStorage.getItem(key)) || [] ;
	}
};

var taskList = store.getStore("list");

var demoData = {
	newTaskName:"",
	beforeEditing: "",
	editingItem: "",
	visibility:"",
	taskList
};


var vm = new Vue({
	el: "#main",
	data: demoData,
	methods:{
		newTask(){
			
			this.taskList.push({
				taskName:this.newTaskName,
				isCompleted: false
			});
			this.newTaskName = "";
		},
		deleteTask(task){
			var index = this.taskList.indexOf(task);
			this.taskList.splice(index, 1);
		},
		editTask(v){
			this.beforeEditing = v.taskName; 
			this.editingItem = v; 
		},
		editOk(){
			this.editingItem = "";
		},
		cancelEdit(v){
			v.taskName = this.beforeEditing;
			this.editingItem = "";
		}	
	},
	computed: {
		noCompletedNum(){
			
			return this.taskList.filter(function(v){
				return v.isCompleted == false; 
			}).length; 
		},
		filterList(){
			switch(this.visibility){
				case "all":
					return this.taskList; 
					break; 
				case "unfinised":
					return this.taskList.filter(function(v){
						return v.isCompleted == false; 
					});
					break; 
				case "finished":
					return this.taskList.filter(function(v){
						return v.isCompleted == true; 
					});
					break; 
				default: 
					return this.taskList; 
					break; 
			}
		}
	},
	watch:{
		taskList: {
	      handler: function (val, oldVal) { 
	      	 store.setStore("list", this.taskList);
	      },
	      deep: true
	    }
	}
});



function watchHashChange(){
	var hash = window.location.hash.slice(1);
	vm.visibility = hash;
};
//
watchHashChange();

window.addEventListener("hashchange",watchHashChange);
