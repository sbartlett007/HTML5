            function getQuote(){
                //create the arrays
                quotes = new Array(4);
                sources = new Array(4);
                //init array with quotes
                quotes[0] = "This a quote by a famous person" + " and so forth";
                sources[0] = "Some Guy";

                quotes[1] = "This is really profound";
                sources[1] = "Some other person";

                quotes[2] = "So inspiring!!!";
                sources[2] = "An Athlete";

                quotes[3] = "I never thought of that!";
                sources[3] = "Clueless sucker";

               // i = Math.floor(Math.random() * quotes.length);

               

               // if (i == 1){
                   for (i=100; i <=30000; i++)
                   {
                    x = i/100;
                    if ( Math.floor(x) == 50)
                    {
                    document.write("<p style='background-color: #ffb6c1'>\"");
                    }
                    else
                    {
                        document.write("<p style='background-color: #4286f4'>\"");
                    }
                    document.write(x + " " + quotes[x] + "\"");
                    document.write("<em>- " + sources[x] + "</em>");
                    document.write("</p>");
                   }
               // }
               // else if (i)
               // {
                   // document.write("Not found" + "\"");
               // }

                
            }