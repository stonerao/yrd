<!-- @format -->

<template>
	<div class="xinxi">
		<!-- <div class="t-navs">
			<div @click="navClick(item.id)" v-for="item in navs" :key="item.id" :class="item.id == state ? 'active' : ''">{{ item.name }}</div>
		</div> -->
		<!-- 介绍 state === 1 -->
		<el-steps :space="200" :active="1" finish-status="success">
			<el-step title="提交申请"></el-step>
			<el-step title="审核中"></el-step>
			<el-step title="审核完成"></el-step>
		</el-steps>
		<div>
			<el-input type="textarea" :autosize="{ minRows: 12, maxRows: 43 }" placeholder="请输入查询内容" v-model="sizeForm.name"> </el-input>
		</div>
		<div>
			<el-button @click="onSubmit" style="">提交</el-button>
		</div>
	</div>
</template>

<script>
import img from "../assets/code.png";
export default {
	data() {
		return {
			img: img,
			state: 1,
			sizeForm: {
				name: "",
				code: "",
				number: "",
			},
			input: "",
		};
	},
	methods: {
		navClick(id) {
			console.log(this.state);
			this.state = id;
		},
		onSubmit() {
			this.$alert("提交成功", "提示", {
				confirmButtonText: "确定",
				callback: (action) => {
					this.$message({
						type: "info",
						message: `action: ${action}`,
					});
				},
			});
		},
		handleChange(val) {
			console.log(val);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.xinxi{
	margin:20px 40px;
	>div{
		margin:30px 0;
	}
}
</style>
