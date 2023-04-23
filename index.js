/* 
    condicionales del desafio
    a = ai
    e = enter
    i = imes
    o = ober
    u = ufat
*/

function encriptador(){
    const text = document.getElementById("inputText").ariaValueMax.toLowerCase();
    textCifrado = text.replace("e","enter");
    textCifrado = textCifrado.replace("o","ober");
    textCifrado = textCifrado.replace("i","imes");
    textCifrado = textCifrado.replace("e","ai");
    textCifrado = textCifrado.replace("e","ufat");

    document.getElementById("img")
    document.getElementById("text2").innerHTML = txtCifrado;
}

function desencriptador(){
    
}


const fs = require('fs');

class ProductManager {
  constructor() {
    this.idCounter = 0;
    this.path = "./products.json";
  }

  async getProducts() {
    try {
      if (fs.existsSync(this.path)) {
        const products = await fs.promises.readFile(this.path, 'utf8');
        const productsJS = JSON.parse(products);
        return productsJS;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }

  async createProduct(title, description, price, thumbnail, code, stock) {
    try {
      const productsFile = await this.getProducts();
      const existingCode = productsFile.find(product => product.code === code);

      if (existingCode) {
        throw new Error(`Ya existe un producto con el código ${code}`);
      } else {
        const lastProduct = productsFile[productsFile.length - 1];
        const newId = lastProduct ? lastProduct.id + 1 : 1;
        const product = {
          id: newId,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };

        productsFile.push(product);
        await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
        return product;
      }
    } catch (error) {
      throw error;
    }
  }

  async removeProduct(idProduct) {
    try {
      const productsFile = await this.getProducts();
      const updatedProducts = productsFile.filter(product => product.id !== idProduct);

      if (updatedProducts.length === productsFile.length) {
        throw new Error('No se encontró el producto con el ID especificado');
      } else {
        await fs.promises.writeFile(this.path, JSON.stringify(updatedProducts));
        console.log(`Producto con ID ${idProduct} eliminado exitosamente`);
        return updatedProducts;
      }
    } catch (error) {
      throw error;
    }
  }

  async modifyProduct(idProduct, updatedFields) {
