<!-- @format -->

<template>
	<div>
		<div class="t-navs">
			<div @click="navClick(item.id)" v-for="item in navs" :key="item.id" :class="item.id == state ? 'active' : ''">{{ item.name }}</div>
		</div>
		<!-- 介绍 state === 1 -->
		<div v-if="state === 1">
			<div class="t-st1-text">
				关于个人查询的介绍xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx关于个人查询的介绍xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx关于个人查询的介绍xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			</div>
			<div class="t-state-list">
				<div>
					<div>
						<i class="el-icon-user" style="font-size:50px"></i>
					</div>
					<div>
						<span>
							<a href="#">学籍</a>
						</span>
						<span> <a href="#">学历</a></span>
					</div>
				</div>
			</div>
		</div>
		<!-- 零点查询 state === 1 -->
		<div v-if="state === 2">
			<div class="t-st1-text">
				关于个人查询的介绍xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx关于个人查询的介绍xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx关于个人查询的介绍xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			</div>
			<div class="t-st1-text">
				注意事项：请注意
				<br />
			</div>
			<div>
				<el-form ref="form" :model="sizeForm" label-width="80px" size="mini" style="width: 900px">
					<el-form-item label="证书编号">
						<el-input v-model="sizeForm.number"></el-input>
					</el-form-item>
					<el-form-item label="姓名">
						<el-input v-model="sizeForm.name"></el-input>
					</el-form-item>
					<el-form-item label="验证码">
						<el-input v-model="sizeForm.code"></el-input>
					</el-form-item>

					<el-form-item size="large">
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<!-- 零点查询 state === 1 -->
		<div v-if="state === 3" style="padding: 10px">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="查询记录" name="1">
					<div>查询记录</div>
					<div>2021-01-23：查询</div>
				</el-collapse-item>
				<el-collapse-item title="查询记录" name="2">
					<div>查询记录</div>
					<div>2021-01-23：查询</div>
				</el-collapse-item>
				<el-collapse-item title="查询记录" name="3">
					<div>查询记录</div>
					<div>2021-01-23：查询</div>
				</el-collapse-item>
				<el-collapse-item title="查询记录" name="4">
					<div>查询记录</div>
					<div>2021-01-23：查询</div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navs: [
				{ name: "个人查询", id: 1 },
				{ name: "零散查询", id: 2 },
				{ name: "历史查询", id: 3 },
			],
			state: 1,
			sizeForm: {
				name: "",
				code: "",
				number: "",
			},
			activeNames: ["1","2","3","4"],
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
</style>
