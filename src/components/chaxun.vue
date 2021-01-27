<!-- @format -->

<template>
	<div>
		<div class="t-navs">
			<div @click="navClick(item.id)" v-for="item in navs" :key="item.id" :class="item.id == state ? 'active' : ''">{{ item.name }}</div>
		</div>
		<!-- 介绍 state === 1 -->
		<div v-if="state === 1">
			<div class="t-state-list">
				<el-form ref="form" :model="sizeForm" label-width="80px" size="mini" style="width: 900px">
					<el-form-item label="">
						<el-input type="textarea" :autosize="{ minRows: 12, maxRows: 43 }" placeholder="请输入查询内容" v-model="sizeForm.name">
						</el-input>
					</el-form-item>

					<el-form-item size="large">
						<el-button type="primary" @click="onSubmit">立即查询</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<!-- 零点查询 state === 1 -->
		<div v-if="state === 2">
			<div>
				<div class="yc-flex">
					<span style="width: 100px;">在线验证</span>
					<el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
					<el-button style="margin-left: 40px">验证</el-button>
				</div>
				<div class="yc-flex">
					<span style="width: 100px;">二维码验证</span>
					<!-- <el-input placeholder="请输入内容" v-model="input" clearable> </el-input> -->
					<el-button  >上传二维码</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navs: [
				{ name: "学历学位验证", id: 1 },
				{ name: "验证结果查询", id: 2 },
			],
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
	margin-top:50px;
	margin-left: 50px;
	width: 800px;
	display: flex;
	line-height: 40px;
}
</style>
