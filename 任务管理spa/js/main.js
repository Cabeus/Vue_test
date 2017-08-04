var store = {
	setStore(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	getStore(key) {
		return JSON.parse(localStorage.getItem(key)) || [];
	}
};

var list = store.getStore("list");

//store.setStore("taskList", [{
//		taskName: "学习Vue",
//		fini: false
//	},
//	{
//		taskName: "学习Angular",
//		fini: false
//	},
//	{
//		taskName: "学习JQ",
//		fini: false
//	}
//])

var Data = {
	newname: "",
	edit: "",
	vi: "",
	oldname: "",
	list
	//	[{
	//			name: "asdfasd",
	//			del: false
	//		},
	//		{
	//			name: "gggsd",
	//			del: false
	//		}
	//	]
};

var vm = new Vue({
	el: "#app",
	data: Data,
	methods: {
		tianjia() {
			this.list.unshift({
				name: this.newname,
				del: false
			})
			this.newname = ""

		},
		shanchu(a) {
			var index = this.list.indexOf(a);
			this.list.splice(index, 1)
		},
		xiugai(v) {
			this.edit = v;
			this.name = v.name;
		},
		quding() {
			this.edit = ""
		},
		quxiao(v) {
			v.name = this.name;
			this.edit = ""
		}

	},
	computed: {
		sum() {
			var arr = this.list.filter(function(v) {
				return v.del == false;
			})
			return arr.length;
		},
		filterList() {
			switch(this.vi) {
				case "all":
					return this.list;
					break;
				case "no":
					return this.list.filter(function(v) {
						return v.del == false;
					})
					break;
				case "ok":
					return this.list.filter(function(v) {
						return v.del == true;
					})
					break;
				default:
					return this.list;
					break;

			}
		}
	},
	watch: {
		list: {
			handler: function(v, o) {
				store.setStore("list",this.list)
			},
			deep: true
		}
	}
})

function fn1() {
	var hash = window.location.hash.slice(1);
	vm.vi = hash;
};
fn1();

window.addEventListener("hashchange", fn1);