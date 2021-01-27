<!-- @format -->

<template>
	<el-container class="full">
		<el-header>区块链</el-header>
		<el-main>
			<!-- left -->
			<div class="left">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					<el-submenu :index="item.id" v-for="item in navs" :key="item.id">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{ item.name }}</span>
						</template>
					</el-submenu>
				</el-menu>
			</div>
			<!-- main -->
			<div class="right">
				<div class="r-head">
					<div v-for="item in rnavs" :key="item.id">
						<router-link :to="{ name: item.path }" tag="li"> {{ item.name }}</router-link>
					</div>
				</div>
				<router-view />
			</div>
		</el-main>
	</el-container>
</template>

<script>
// @ is an alias to /src

export default {
	data() {
		return {
			navs: [
				{ name: "在线验证", id: "1" },
				{ name: "验证报告简介", id: "2" },
				{ name: "防伪措施", id: "3" },
				{ name: "验证真伪", id: "4" },
				{ name: "特点和用途", id: "5" },
				{ name: "如何申请", id: "6" },
				{ name: "如何使用", id: "7" },
				{ name: "延长验证有效期", id: "8" },
				{ name: "特别声明", id: "9" },
			],
			rnavs: [
				{ name: "学籍查询", id: 1, path: "yanzheng" },
				{ name: "在线验证", id: 2, path: "chaxun" },
				{ name: "生成验证信息", id: 3, path: "shengcheng" },
				{ name: "个人信息修改", id: 4, path: "xinxi" },
			],
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>
<style lang="less">
.r-head {
	height: 50px;
	line-height: 40px;
	display: flex;
	border-bottom: 1px solid #aaa;
	> div {
		flex: 1;
		text-align: center;
	}
}
.left {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 300px;
}
.right {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 300px;
	right: 0;
}
.full {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	position: relative;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
</style>
