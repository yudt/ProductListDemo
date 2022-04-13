<template>
    <div class="bg">
        <div class="main-content" v-loading="loading">
            <el-button
                    type="primary"
                    class="add-btn"
                    @click="onAdd"
            >新增商品</el-button>
            <el-table
                class="product-table"
                :data="list"
                height="500px"
            >
                <el-table-column
                    label="商品名称"
                    prop="title"
                    min-width="20px"
                    show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                        label="商品描述"
                        prop="description"
                        min-width="30px"
                        show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                        label="价格"
                        prop="price"
                        min-width="20px"
                ></el-table-column>
                <el-table-column>
                    <template #default="{row}">
                        <el-button
                                type="success"
                                size="small"
                                round
                                @click="onUpdate(row)"
                        >更新</el-button>
                        <el-button
                                type="danger"
                                size="small"
                                round
                                @click="onDel(row.id)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogFormVisible"
            @closed="onDialogClosed"
        >
            <el-form :model="dialogForm" label-width="100px">
                <el-form-item
                    label="商品名称"
                >
                    <el-input v-model="dialogForm.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="商品描述"
                >
                    <el-input
                        v-model="dialogForm.description"
                        autocomplete="off"
                        type="textarea"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="价格"
                >
                    <el-input-number v-model="dialogForm.price"></el-input-number>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onDialogFormConfirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                count: 7,
                editingId: null,
                dialogFormVisible: false,
                dialogForm: {
                    title: null,
                    description: null,
                    price: null
                }
            }
        },
        computed: {
            dialogTitle() {
                return this.editingId? '编辑商品':'新增商品'
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                this.loading = true;
                setTimeout(() => {
                    this.list = [{
                        id: 0,
                        title: '打法上帝发誓',
                        price: 300,
                        description: '打发范德萨打发沙发上'
                    }, {
                        id: 1,
                        title: '艰苦艰苦士大夫',
                        price: 200,
                        description: '艾弗森东京地方地方'
                    }, {
                        id: 2,
                        title: '撒地方',
                        price: 300,
                        description: '接口连接的看法'
                    }, {
                        id: 3,
                        title: '礼服盛大私服',
                        price: 300,
                        description: '的数据库附件i'
                    }, {
                        id: 4,
                        title: '和方法',
                        price: 300,
                        description: '阿迪斯发数据库里'
                    }, {
                        id: 5,
                        title: '奥利夫卡是的',
                        price: 300,
                        description: '想法设法付款了'
                    }, {
                        id: 6,
                        title: '老师的分解算法',
                        price: 300,
                        description: '没事的发送大量'
                    }];
                    this.loading = false;
                }, 500)
            },
            onDel(id) {
                this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    const index = this.list.findIndex(i => i.id === id);
                    this.list.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {

                });
            },
            onUpdate(row) {
                this.editingId = row.id;
                this.dialogFormVisible = true;
                this.dialogForm = {
                    title: row.title,
                    description: row.description,
                    price: row.price
                }
            },
            onDialogFormConfirm() {
                if (this.editingId) { // 编辑
                    const index = this.list.findIndex(i => i.id === this.editingId);
                    this.list.splice(index, 1, { ...this.dialogForm, id: this.editingId });
                } else { // 新增
                    this.list.push({ ...this.dialogForm, id: this.count++ })
                }
                this.dialogFormVisible = false;
            },
            onDialogClosed() {
                this.editingId = null;
                this.dialogForm = {
                    title: null,
                    description: null,
                    price: null
                };
            },
            onAdd() {
                this.dialogFormVisible = true;
            }
        },
    }
</script>
<style scoped>
.bg {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main-content {
    width: 85%;
}
.add-btn {
    width: 100px;
}
.product-table {
    margin-top: 20px;
    width: 100%;
}
</style>