<!-- @format -->

<template>
	<div>
		<!-- <div class="t-navs">
			<div @click="navClick(item.id)" v-for="item in navs" :key="item.id" :class="item.id == state ? 'active' : ''">{{ item.name }}</div>
		</div> -->
		<!-- 介绍 state === 1 -->
		<div v-if="state === 1">
			<div>
				<div class="yc-flex">
					<span style="width: 100px;">证书验证码</span>
					<el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
				</div>
				<el-button @click="state = 2" style="margin-left: 140px;margin-top:40px">生成</el-button>
			</div>
		</div>
		<!-- 零点查询 state === 1 -->
		<div v-if="state === 2">
			<div class="ts-zs">
				<div>
					验证证书
				</div>
				<div>
					<img :src="img" alt="" style="width: 300px;" />
				</div>
				<div>
					<el-button @click="state = 1" style="">下载二维码</el-button>
				</div>
			</div>
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
			this.$alert("查询成功", "提示", {
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
.t-navs {
	display: flex;
	padding: 0 10%;
	height: 50px;
	line-height: 50px;
	border-bottom: 2px solid #aaa;
	> div {
		flex: 1;
		text-align: center;
		cursor: pointer;
	}
	> div.active {
		color: #ff0000;
	}
}
.t-st1-text {
	word-wrap: break-word;
	font-size: 18px;
	padding: 20px;
}
.t-state-list {
	margin-top: 20px;
	> div {
		width: 120px;
		text-align: center;
		span {
			margin: 0 5px;
			line-height: 24px;
		}
	}
}
.yc-flex {
	margin-top: 50px;
	margin-left: 50px;
	width: 800px;
	display: flex;
	line-height: 40px;
}
.ts-zs{
	margin-top:40px;
	text-align: center;
	>div{
		margin:50px 0;
	}
}
</style>
