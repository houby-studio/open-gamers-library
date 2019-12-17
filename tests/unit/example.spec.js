import { shallowMount } from '@vue/test-utils'
import Launch from '@/components/Launch.vue'

describe('Launch.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Launch, {
      propsData: { msg }
    })
    const propMsg = wrapper.find('p')
    expect(propMsg.text()).toMatch(msg)
  })
})
