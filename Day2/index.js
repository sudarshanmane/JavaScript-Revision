const fun = async () => {
  return await fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// fetch returns a promice. we handle it with the .then and .cath
// if the data is fetched successfully then controle goes to the .then
// section. In this section the response comes having a feild called as body and its values
// is RedableStream
// now to collect that stream
// stream means chunks the data comes in the form of the chunks
// no to collect this data we use to the res.json()
// the fetched data will not come in packed it will come in the format of
// the chunks to collect that data we make the use of the res.json() to make the data
// redable we collect the data we use to the json()

console.log(fun());

const fun1 = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  console.log(data);
};

// but in this case to handle to the reject state of the promise
// we make the use of the try catch block

const fun2 = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/product");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fun2();
