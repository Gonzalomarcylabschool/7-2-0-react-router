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
    <p>We are a small company that sells products online.</p>
  </section>
`

const productsHTML = `
  <section id="content">
    <h1>Products</h1>
    <ul>
      <li><a href="/products.html?id=1">Product 1</a></li>
      <li><a href="/products.html?id=2">Product 2</a></li>
      <li><a href="/products.html?id=3">Product 3</a></li>
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
  // Only handle clicks on anchor elements
  if (e.target.tagName === 'A') {
    e.preventDefault()
    const path = e.target.getAttribute('href')

    // Use history.pushState to update the URL without reloading the page
    history.pushState(null, '', path)

    if (path.includes('index.html')) {
      document.querySelector('#content').innerHTML = `
        <h1>Dashboard</h1>
      `
    } else if (path.includes('about.html')) {
      document.querySelector('#content').innerHTML = aboutHTML
    } else if (path.includes('products.html')) {
      const query = new URLSearchParams(path.split('?')[1])
      const id = query.get('id')

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

// Handle back/forward navigation using the browser's history
window.onpopstate = () => {
  const path = window.location.pathname + window.location.search

  if (path.includes('index.html')) {
    document.querySelector('#content').innerHTML = `
      <h1>Dashboard</h1>
    `
  } else if (path.includes('about.html')) {
    document.querySelector('#content').innerHTML = aboutHTML
  } else if (path.includes('products.html')) {
    const query = new URLSearchParams(path.split('?')[1])
    const id = query.get('id')

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

const main = () => {
  document.querySelector('#app').innerHTML = `
    <main id="root">
      <header>
        <nav>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/products.html">Products</a></li>
          </ul>
        </nav>
        <br>
        <section id="content">
          <h1>Dashboard</h1>
        </section>
      </header>
    </main>
  `

  // Attach event listener to the parent element (event delegation)
  document.querySelector('nav').addEventListener('click', handleNavigation)
}

main()
