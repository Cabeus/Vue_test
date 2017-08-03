var Data = {
	newname: "",
	edit : "",
	list: [{
			name: "asdfasd",
			del: false
		},
		{
			name: "gggsd",
			del: false
		}
	]
};

var vm = new Vue({
	el: "#app",
	data: Data,
	methods: {
		tianjia() {
			this.list.push({
				name: this.newname,
				del: false
			})
			this.newname = ""

		},
		shanchu(a) {
			var index = this.list.indexOf(a);
			this.list.splice(index, 1)
		},
		xiugai(v){
			this.edit = v;
			console.log(135)
		}

	}
})