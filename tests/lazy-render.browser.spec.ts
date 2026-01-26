import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-vue'
import { h } from 'vue'
import { LazyRender } from '../src/lazy-render'

describe('lazy-render', () => {
  it('component is defined', () => {
    expect(LazyRender).toBeDefined()
  })

  it('component name is LazyRender', () => {
    expect(LazyRender.name).toBe('LazyRender')
  })

  describe('element not in viewport', () => {
    describe('porps', () => {
      it('default tag is div', () => {
        const Comp = render(() => h(LazyRender, null, { fallback: () => h('p', 'Hello world!') }))
        expect(Comp.container.firstChild?.nodeName).toBe('DIV')

        expect(Comp.getByText('Hello world!')).not.toBeInViewport()
      })

      it('custom tag works', () => {
        const Comp = render(LazyRender, { props: { tag: 'section' } })
        expect(Comp.container.firstChild?.nodeName).toBe('SECTION')
      })

      it('slot is work', async () => {
        const { getByText } = render(() => h(LazyRender, null, { fallback: () => h('p', 'Live!') }))
        await expect.element(getByText('Live!')).toBeInViewport()
      })
    })
  })

  it('demo', () => {
    const Comp = render(LazyRender)
  })
})
