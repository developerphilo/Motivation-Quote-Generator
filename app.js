
    let quote = document.querySelector('.quoted');
    let author = document.querySelector('.author');
    const getquote = document.getElementById('quote_btn');
    getquote.addEventListener('click',getrandomquote);


        function getrandomquote() {
          const api= `https://type.fit/api/quotes`;

          fetch(api)
          .then(response => response.json())
          .then(data =>{
            let rand = data[Math.floor(Math.random() * data.length)];
            if (rand.author === "undefined" || rand.author === "") {
              return ("John Philip");
            }else{
              return(rand.author);
            }
            // rand.author === undefined || rand.author === null || rand.author === 0 ? return "John Philip"
            quote.innerHTML = `<h3 class ="animated slideInLeft delay-1s">"${rand.text}"</h3>`;
            author.innerHTML = `<p class ="animated slideInRight delay-1s" >' by ${rand.author}'</p>`;
    });
       
   }

                      
                












                

              