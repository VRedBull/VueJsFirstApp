import About from './About.vue'
import { shallowMount } from '@vue/test-utils'

describe('About', ()=>{
    it('renders correctly',()=>{
        const wrapper=shallowMount(About)
        let header=wrapper.find('.about h2')
        expect(header.exists()).toBe(true)
        expect(header.text()).toBe('ABOUT is abosut ME')
    })
})