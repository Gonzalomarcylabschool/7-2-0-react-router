import './style.css'

const createProductHTML = (product) => `
  <section id="content">
    <h1>${product.name}</h1>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
  </section>
`

const aboutHTML = `
  <section id="content">
    <h1>About Us</h1>
  </section>
`

const productsHTML = `
  <section id="content">
    <h1>Products</h1>
    <ul>
      <li><a href="/products?id=1">Product 1</a></li>
      <li><a href="/products?id=2">Product 2</a></li>
      <li><a href="/products?id=3">Product 3</a></li>
    </ul>
  </section>
`

const product1 = {
  name: 'Product 1',
  description: 'This is a product description.',
  price: 9.99
}

const product2 = {
  name: 'Product 2',
  description: 'This is a product description.',
  price: 19.99
}

const product3 = {
  name: 'Product 3',
  description: 'This is a product description.',
  price: 29.99
}

const handleNavigation = (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault()
    const path = new URL(e.target.href).pathname
    const searchParams = new URL(e.target.href).searchParams
    const id = searchParams.get('id')

    history.pushState(null, '', path + (id ? `?id=${id}` : ''))

    if (path === '/index.html' || path === '/') {
      document.querySelector('#content').innerHTML = `<h1>Dashboard</h1>`
    } else if (path === '/about') {
      document.querySelector('#content').innerHTML = aboutHTML
    } else if (path === '/products') {
      if (id === '1') {
        document.querySelector('#content').innerHTML = createProductHTML(product1)
      } else if (id === '2') {
        document.querySelector('#content').innerHTML = createProductHTML(product2)
      } else if (id === '3') {
        document.querySelector('#content').innerHTML = createProductHTML(product3)
      } else {
        document.querySelector('#content').innerHTML = productsHTML
      }
    }
  }
}

const main = () => {
  document.querySelector('#app').innerHTML = `
    <main id="root">
      <header>
        <nav>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </nav>
        <br>
        <section id="content">
          <h1>Dashboard</h1>
        </section>
      </header>
    </main>
  `

  document.querySelector('nav').addEventListener('click', handleNavigation)
}

main()
