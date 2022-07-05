{
  /* <div id="joke" class="joke">Awesome joke is loading...</div>
      <button id="jokeBtn" class="btn">NEXT JOKE</button> */
}

// (A) PROMISE -> callback hell se bachne ke liye we use promise. it has .then() and catch()  :
// means kisi se promise krte hai ik saal baad akr dikhaege either vo aayega ya nhi aayega

// 2 condition: 1. success 2. fail

// fetch() Api -> pehle AJAX XMLRequest use krte the but uski jgh ab yeh use krte hai

// fetch("pass the API link here")

// so data ya to milega ya to nahi
// milega (fullfiled) => sahi hai
// nahi milega (reject) => internal error, server error

// fetch() method always return a Promise

// Note: 90% promise consumed krte hai na ki create
// consumed means fetch() isko call krna hai, so hame data consumed krna hai either
// data is fullfiled or reject

// --------WORKING -> ---------------------------
// GET https://icanhazdadjoke.com

// THROUGH PROMISES
// const jokes = document.querySelector("#joke");
// const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) =>
//       // console.log(res.json()); //res.json -> isse html aayega pura, or yeh bhi ik promise return krta hai
//       res.json()
//     )
//     .then((data) => {
//       jokes.innerHTML = data.jokes;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// jokeBtn.addEventListener("click", generateJokes);
// generateJokes(); // wapas khud se call kra because agr koi page refresh kre 1st time to automatically yeh load hojega

// -------------------------------------------------------

// (B) ASYNC AWAIT -> ES8 feature

// jo kaam hum promise se kar re the voi kaam hum async await se kr skte hai
// and yeh bhi promise return krta hai but iska promise ko handle krne ka tarika different hai
//isme error handling jo hai vo try catch block me hoti hai jo bhi likha hai usko
// sabko try block me put krdo

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`The error is ${err}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
