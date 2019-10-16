import React from 'react';
import ReactDOM from 'react-dom';

const Rect = (props) => (
    <div  
        class='main' 
        style={{backgroundColor: props.color}}
    >
       I'm {props.children}
    </div>
)
const Circle = (props) => (
    <div  
        class='main' 
        style={{borderRadius: '50%', backgroundColor: props.color}}
    >
       I'm {props.children}
    </div>
)

const Address = (props) => (
    <address>
        <a 
          href={`https://www.google.com/maps/@${props.location.lat},${props.location.lng},18.01z`}>
            {props.street}, {props.city}, {props.country}
        </a>
    </address>
)



// const User = (props) => (
//     <div>
//       Hello, my name is {props.name}, I am {props.age}
//       I wanna say: {props.children}
//     </div>
//   );


// const color = 'green'

// ReactDOM.render(
//     <Rect
//         color={color}
//     >
//         Rect
//     </Rect>,
     
//     document.getElementById('root'),
//   );

// ReactDOM.render(
//     <Circle
//         color='red'
//     >
//         Circle
//     </Circle>,
    
//     document.getElementById('root'),
// );
const location = { lat: 49.5979715, lng: 34.5346919 }


ReactDOM.render(
    <Address
        country = 'Ukraine'
        city = 'Poltava'
        street = 'Sobornosti Street'
        location = {location}
    
    />,
     
    document.getElementById('root'),
  );