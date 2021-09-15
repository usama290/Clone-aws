import React from 'react'
import'./Home.css';
import Product from './Product';
// import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    return (
        <div className="home">
        <div className="home_container">
            <img className="home_image"  
            src="./image/3.jpg" 
            alt="clever" />
 </div>
        {/* <div className="hover"> */}
        <div className="home_row">
             <Product 
             id="12321341"
             title='The lean startup:How constant innovation Creates Radically 
             Successful Business PaperPack'
             rating={5}
              price={25.99} 
            
             image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            
            
            <Product 
            id="49538094"
            title="Linux Server Hacks product image"
            rating={3} 
            price={20}
            image= "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg" />
        

          

        </div>
        <div className="home_row">
             <Product 
             id="49538095"
            title="Mac OS X Hacks product image, with 50% Discount"
            price={30.99}
            image= "http://images.amazon.com/images/P/0596004605.01._PE50_PI_SCMZZZZZZZ_.jpg" 
            rating={4} />
             
             <Product 
             id="49538096"
            title="Mac Book"
            price={500}
            image ="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" 
           
            rating={2} />

             <Product 
             id="49538097"
            title="Microphone"
            price={500}
            image= './image/micro1.jpg'
            rating={5} /> 
        </div>
        <div className="home_row">

        
        <Product 
        id="49538099"
            title="Samsung new model phone silver color with wifi system and 2.8ghz microprocessor 48Mpx camera Hd video system"
            price={400}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4} />
        

        <Product 
        id="495380910"
            title="Samsung new model LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3} />
        </div>
        <div className="home_row">
        <Product 
        id="495380911"
            title="A quite baby doll and the price is so reasonable and the stuff is so good no compromise of quality"
            price={250}
            image="./image/4.jpg"
            rating={2} />

             <Product 
             id="49538098"
            title="Microphone"
            price={500}
            image= './image/micro2.jpg'
            rating={5} /> 
             
        </div>
        <div className="home_row">
        <Product 
        id="495380912"
            title="Large numbers of collection"
            price={250}
            image="./image/cloth2.jpg"
            rating={4} />
            <Product 
        id="495380912"
            title="Child Clothes"
            price={220}
            image="./image/cloth3.jpg"
            rating={4} />
           

        </div>

        <div className="home_row">
        <Product 
        id="495380912"
            title="Child Clothes"
            price={200}
            image="./image/cloth4.jpg"
            rating={3} />
         
           <Product 
        id="495380912"
            title="Child Clothes"
            price={180}
            image="./image/cloth5.jpg"
            rating={5} />
             <Product 
        id="495380912"
            title="Child Clothes"
            price={180}
            image="./image/cloth6.jpg"
            rating={4} />

        </div>


        <div className="home_row">
        <Product 
        id="495380911"
            title="Samsung new model phone silver color with wifi system and 2.8ghz microprocessor 48Mpx camera Hd video system"
            price={250}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4} />
           

        </div>




        <div className="home_row">
        <Product 
        id="495380911"
            title="Samsung new model phone silver color with wifi system and 2.8ghz microprocessor 48Mpx camera Hd video system"
            price={250}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4} />
           

        </div>
        </div>
    )
}

export default Home;
