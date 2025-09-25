import React, { useState } from 'react'

const Product = () => {
  const [productName, setproductName] = useState('')
  const [productPrice, setproductPrice] = useState('')
  const [productDescription, setproductDescription] = useState('')
  const [productImage, setproductImage] = useState('')
  const [allProduct, setallProduct] = useState([])

  const addProducts = () => {
    if (!productName || !productPrice) return;
    let newProduct = { productName, productPrice, productDescription, productImage }
    setallProduct([...allProduct, newProduct])
    // console.log(allProduct);
    // document.getElementById('show').innerHTML = allProduct

    setproductName('');
    setproductPrice('');
    setproductDescription('');
    setproductImage('');
  }
  return (
    <>
      <h1>Mini Mart</h1>
      <p>Welcome to mini mart! Your one-stop shop for all your needs.</p>
      <input type="text" placeholder='Product Name' onChange={(e) => setproductName(e.target.value)} />
      <input type="number" placeholder='Product Price' onChange={(e) => setproductPrice(e.target.value)} />
      <input type="text" placeholder='Product Description' onChange={(e) => setproductDescription(e.target.value)} />
      <input type="text" placeholder='Product Image URL' onChange={(e) => setproductImage(e.target.value)} />
      <button onClick={addProducts}>Add Product</button>
      <hr />
      <div id="show">
        {allProduct.map((item, index) => (
          <div key={index} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <h3>{item.productName}</h3>
            <p>Price: ${item.productPrice}</p>
            <p>{item.productDescription}</p>
            {item.productImage && <img src={item.productImage} alt={item.productName} width="100" />}
          </div>
        ))}
      </div>
    </>
  )
}

export default Product