import Vue from 'vue';
import App from './App.vue';
import {
    Table,
    TableColumn,
    Button,
    Dialog,
    MessageBox,
    Input,
    InputNumber,
    Form,
    Loading,
    FormItem
} from 'element-ui'

Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Button.name, Button);
Vue.component(MessageBox.name, MessageBox);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Dialog.name, Dialog);

Vue.use(Loading.directive);
Vue.prototype.$confirm = MessageBox.confirm;

const app = new Vue({
    el: '#app',
    render: h => h(App)
});