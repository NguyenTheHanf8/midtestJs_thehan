const products = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Galaxy S21",
    price: 900,
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Xperia 1",
    price: 800,
    brand: "Sony",
  },
];

document.write(
  ` <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Brand</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${products[0].id}</td>
        <td>${products[0].name}</td>
        <td>${products[0].price}</td>
        <td>${products[0].brand}</td>
      </tr>
     <tr>
        <td>${products[1].id}</td>
        <td>${products[1].name}</td>
        <td>${products[1].price}</td>
        <td>${products[1].brand}</td>
      </tr>
      <tr>
        <td>${products[2].id}</td>
        <td>${products[2].name}</td>
        <td>${products[2].price}</td>
        <td>${products[2].brand}</td>
      </tr>
    </tbody>
  </table>`
);
