var demoData = {
	newTaskName:"",
	beforeEditing: "",
	editingItem: "",
	taskList: [
		{
			taskName: "学习Vue",
			isCompleted: false
		},
		{
			taskName: "学习Angular",
			isCompleted: false
			
		},
		{
			taskName: "学习JQ",
			isCompleted: false
		}
	]
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
		
		
	}
});
