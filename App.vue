<template>
    <div class="bg">
        <div class="main-content" v-loading="loading">
            <el-button
                    type="primary"
                    class="add-btn"
                    @click="onAdd"
            >Add Product</el-button>
            <el-table
                class="product-table"
                :data="list"
                height="500px"
            >
                <el-table-column
                    label="product name"
                    prop="title"
                    min-width="20px"
                    show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                        label="desciption"
                        prop="description"
                        min-width="30px"
                        show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                        label="price"
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
                        >Update Info</el-button>
                        <el-button
                                type="danger"
                                size="small"
                                round
                                @click="onDel(row.id)"
                        >Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogFormVisible"
            @closed="onDialogClosed"
        >
            <el-form :model="dialogForm" label-width="130px">
                <el-form-item
                    label="Product Name"
                >
                    <el-input v-model="dialogForm.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item
                    label="Description"
                >
                    <el-input
                        v-model="dialogForm.description"
                        autocomplete="off"
                        type="textarea"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="Price"
                >
                    <el-input-number v-model="dialogForm.price"></el-input-number>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="onDialogFormConfirm">Confirm</el-button>
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
                return this.editingId? 'Editing Info':'Adding Product'
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
                        title: 'ABCDEFG',
                        price: 300,
                        description: 'ldjjfsf'
                    }, {
                        id: 1,
                        title: 'DFASFSF',
                        price: 200,
                        description: 'fdfsdaffjk'
                    }, {
                        id: 2,
                        title: 'FJSDLF',
                        price: 300,
                        description: 'fsdfasdfsfsl'
                    }, {
                        id: 3,
                        title: 'IDLFJASJ',
                        price: 300,
                        description: 'slfsdkjfasf'
                    }, {
                        id: 4,
                        title: 'FLLAJF',
                        price: 300,
                        description: 'dsjfaskfaklj'
                    }, {
                        id: 5,
                        title: 'ASDFSDS',
                        price: 300,
                        description: 'asdjlfdfd'
                    }, {
                        id: 6,
                        title: 'SFSDKFJK',
                        price: 300,
                        description: 'lkfsdfifs'
                    }];
                    this.loading = false;
                }, 500)
            },
            onDel(id) {
                this.$confirm('Your data will be deleted permanently, really mean it?', 'Warning', {
                    confirmButtonText: 'Confirm',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    const index = this.list.findIndex(i => i.id === id);
                    this.list.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: 'Deleted successfully!'
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
                if (this.editingId) { // editing
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

}
.product-table {
    margin-top: 20px;
    width: 100%;
}
</style>