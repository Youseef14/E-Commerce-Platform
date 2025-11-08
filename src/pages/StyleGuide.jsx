import React from 'react'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import { products, categories } from '../data/products'

const StyleGuide = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4">Style Guide</h1>
          <p className="text-lg text-neutral-600">
            Design system for the Everlane Fashion E-Commerce platform
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-32 bg-white border-2 border-neutral-900 mb-3" />
              <p className="text-sm font-medium">White</p>
              <p className="text-xs text-neutral-600">#FFFFFF</p>
            </div>
            <div>
              <div className="h-32 bg-beige mb-3" />
              <p className="text-sm font-medium">Beige</p>
              <p className="text-xs text-neutral-600">#F5F1ED</p>
            </div>
            <div>
              <div className="h-32 bg-neutral-100 mb-3" />
              <p className="text-sm font-medium">Neutral 100</p>
              <p className="text-xs text-neutral-600">#F5F5F5</p>
            </div>
            <div>
              <div className="h-32 bg-neutral-200 mb-3" />
              <p className="text-sm font-medium">Neutral 200</p>
              <p className="text-xs text-neutral-600">#E5E5E5</p>
            </div>
            <div>
              <div className="h-32 bg-neutral-300 mb-3" />
              <p className="text-sm font-medium">Neutral 300</p>
              <p className="text-xs text-neutral-600">#D4D4D4</p>
            </div>
            <div>
              <div className="h-32 bg-neutral-600 mb-3" />
              <p className="text-sm font-medium">Neutral 600</p>
              <p className="text-xs text-neutral-600">#525252</p>
            </div>
            <div>
              <div className="h-32 bg-neutral-800 mb-3" />
              <p className="text-sm font-medium">Neutral 800</p>
              <p className="text-xs text-neutral-600">#262626</p>
            </div>
            <div>
              <div className="h-32 bg-neutral-900 mb-3" />
              <p className="text-sm font-medium">Neutral 900</p>
              <p className="text-xs text-neutral-600">#171717</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Typography</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-neutral-600 mb-2">Font Family: Playfair Display (Serif)</p>
              <h1 className="text-6xl font-serif font-bold mb-2">Heading 1</h1>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-6xl font-serif font-bold</code>
            </div>
            
            <div>
              <h2 className="text-5xl font-serif font-bold mb-2">Heading 2</h2>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-5xl font-serif font-bold</code>
            </div>
            
            <div>
              <h3 className="text-4xl font-serif font-bold mb-2">Heading 3</h3>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-4xl font-serif font-bold</code>
            </div>
            
            <div>
              <h4 className="text-3xl font-serif font-bold mb-2">Heading 4</h4>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-3xl font-serif font-bold</code>
            </div>

            <div>
              <h5 className="text-2xl font-serif font-bold mb-2">Heading 5</h5>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-2xl font-serif font-bold</code>
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-4">Font Family: Inter (Sans-serif)</p>
              <p className="text-lg mb-2">Body Large - The quick brown fox jumps over the lazy dog</p>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-lg</code>
            </div>

            <div>
              <p className="text-base mb-2">Body Regular - The quick brown fox jumps over the lazy dog</p>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-base</code>
            </div>

            <div>
              <p className="text-sm mb-2">Body Small - The quick brown fox jumps over the lazy dog</p>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-sm</code>
            </div>

            <div>
              <p className="text-xs mb-2">Caption - The quick brown fox jumps over the lazy dog</p>
              <code className="text-xs bg-neutral-100 px-2 py-1">text-xs</code>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Buttons</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Button</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
              </div>
              <code className="text-xs bg-neutral-100 px-2 py-1 block">
                {'<Button variant="primary" size="md">Button Text</Button>'}
              </code>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Secondary Button</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button variant="secondary" size="sm">Small Button</Button>
                <Button variant="secondary" size="md">Medium Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
              </div>
              <code className="text-xs bg-neutral-100 px-2 py-1 block">
                {'<Button variant="secondary" size="md">Button Text</Button>'}
              </code>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Outline Button</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button variant="outline" size="sm">Small Button</Button>
                <Button variant="outline" size="md">Medium Button</Button>
                <Button variant="outline" size="lg">Large Button</Button>
              </div>
              <code className="text-xs bg-neutral-100 px-2 py-1 block">
                {'<Button variant="outline" size="md">Button Text</Button>'}
              </code>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Text Button</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button variant="text" size="sm">Small Button</Button>
                <Button variant="text" size="md">Medium Button</Button>
                <Button variant="text" size="lg">Large Button</Button>
              </div>
              <code className="text-xs bg-neutral-100 px-2 py-1 block">
                {'<Button variant="text" size="md">Button Text</Button>'}
              </code>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Form Elements</h2>
          
          <div className="space-y-6 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-2">Text Input</label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Input</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Textarea</label>
              <textarea
                rows="4"
                placeholder="Enter message..."
                className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Select</label>
              <select className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 appearance-none cursor-pointer">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Checkbox label</span>
              </label>
            </div>

            <div>
              <label className="flex items-center">
                <input type="radio" name="radio" className="mr-2" />
                <span className="text-sm">Radio button label</span>
              </label>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Components</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Product Card</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard product={products[0]} />
                <ProductCard product={products[1]} />
              </div>
              <code className="text-xs bg-neutral-100 px-2 py-1 block mt-4">
                {'<ProductCard product={productData} />'}
              </code>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Category Card</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <CategoryCard category={categories[0]} />
                <CategoryCard category={categories[1]} />
              </div>
              <code className="text-xs bg-neutral-100 px-2 py-1 block mt-4">
                {'<CategoryCard category={categoryData} />'}
              </code>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Spacing Scale</h2>
          
          <div className="space-y-4">
            {[
              { size: '4px', class: 'space-1', value: '0.25rem' },
              { size: '8px', class: 'space-2', value: '0.5rem' },
              { size: '12px', class: 'space-3', value: '0.75rem' },
              { size: '16px', class: 'space-4', value: '1rem' },
              { size: '24px', class: 'space-6', value: '1.5rem' },
              { size: '32px', class: 'space-8', value: '2rem' },
              { size: '48px', class: 'space-12', value: '3rem' },
              { size: '64px', class: 'space-16', value: '4rem' },
              { size: '96px', class: 'space-24', value: '6rem' },
            ].map(space => (
              <div key={space.class} className="flex items-center gap-4">
                <div className="w-32">
                  <code className="text-xs">{space.class}</code>
                </div>
                <div className="h-8 bg-neutral-900" style={{ width: space.size }} />
                <span className="text-sm text-neutral-600">{space.size} ({space.value})</span>
              </div>
            ))}
          </div>
        </section>

        {/* Grid System */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Grid System</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-neutral-600 mb-4">2 Column Grid</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Column 1</div>
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Column 2</div>
              </div>
            </div>

            <div>
              <p className="text-sm text-neutral-600 mb-4">3 Column Grid</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Column 1</div>
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Column 2</div>
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Column 3</div>
              </div>
            </div>

            <div>
              <p className="text-sm text-neutral-600 mb-4">4 Column Grid</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Col 1</div>
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Col 2</div>
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Col 3</div>
                <div className="h-20 bg-neutral-200 flex items-center justify-center">Col 4</div>
              </div>
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8">Responsive Breakpoints</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-neutral-100">
              <code className="text-sm font-medium">sm: 640px</code>
              <p className="text-sm text-neutral-600 mt-2">Small devices (mobile landscape)</p>
            </div>
            <div className="p-4 bg-neutral-100">
              <code className="text-sm font-medium">md: 768px</code>
              <p className="text-sm text-neutral-600 mt-2">Medium devices (tablets)</p>
            </div>
            <div className="p-4 bg-neutral-100">
              <code className="text-sm font-medium">lg: 1024px</code>
              <p className="text-sm text-neutral-600 mt-2">Large devices (desktops)</p>
            </div>
            <div className="p-4 bg-neutral-100">
              <code className="text-sm font-medium">xl: 1280px</code>
              <p className="text-sm text-neutral-600 mt-2">Extra large devices (large desktops)</p>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8">Design Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-beige">
              <h3 className="text-xl font-semibold mb-3">Minimalism</h3>
              <p className="text-neutral-600 text-sm">
                Clean, uncluttered layouts with generous white space. Every element serves a purpose.
              </p>
            </div>
            <div className="p-6 bg-beige">
              <h3 className="text-xl font-semibold mb-3">Clarity</h3>
              <p className="text-neutral-600 text-sm">
                Clear hierarchy and intuitive navigation. Users should never be confused about where to go or what to do.
              </p>
            </div>
            <div className="p-6 bg-beige">
              <h3 className="text-xl font-semibold mb-3">Consistency</h3>
              <p className="text-neutral-600 text-sm">
                Consistent use of colors, typography, and spacing throughout the entire experience.
              </p>
            </div>
            <div className="p-6 bg-beige">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-neutral-600 text-sm">
                Designed to be accessible to all users, with proper contrast ratios and semantic HTML.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StyleGuide
