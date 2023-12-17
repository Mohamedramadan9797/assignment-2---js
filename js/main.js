function randomtext(){
    var username = ["--Oscar Wilde","--Marilyn Monroe","--Albert Einstein"];
    var text = ["“Be yourself; everyone else is already taken.”","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"];
    var num = Math.floor(Math.random()  * username.length);
    // document.getElementById('Quote').innerHTML= "text[num]" + "username[num]" ;
    document.getElementById('Quote').innerHTML=text[num] ;
    document.getElementById('Quote1').innerHTML=username[num] ;

}
