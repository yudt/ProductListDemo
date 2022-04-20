import App from '../App.vue';
import { mount } from '@vue/test-utils';

describe('demo test', () => {
    const wrapper = mount(App);

    it('render properly', async () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Click Add Button', async () => {
        await wrapper.find('.add-btn').trigger('click');
        expect(wrapper.vm.dialogFormVisible).toBe(true);
    });
});