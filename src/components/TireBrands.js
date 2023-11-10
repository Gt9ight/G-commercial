import React from "react";
import './tirebrands.css'

const tires = [

  {
    id: 1,
    name: 'Micheline',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2023/05/MichelinLogo2017.jpg'
    
  },
  {
    id: 2,
    name: 'Uniroyal',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2020/01/uniroyal.png'
    
  },
  {
    id: 3,
    name:'Firestone',
    imageUrl: 'https://1000logos.net/wp-content/uploads/2020/08/Firestone-Logo.png'
    
  },
  {
    id: 4,
    name: 'Bf-Goodrich',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2020/01/bf-goodrich.jpg'
    
  },
  {
    id: 5,
    name: 'Continental',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2019/08/continental-logo.png'
    
  },
  {
    id: 6,
    name: 'Bridgestone',
    imageUrl: 'https://i0.wp.com/koohejigroup.com/wp-content/uploads/2023/08/logo-05-edited.png?resize=417%2C261&ssl=1'
    
  },  {
    id: 7,
    name: 'Good Year',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0510/0090/1797/files/Goodyear_Option_2_18351256-59d9-47a6-8540-bd92b37ad816_480x480.png?v=1629218464'
    
  },
  {
    id: 8,
    name: 'Bandag',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2019/08/bandag-logo.png'
    
  },
  {
    id: 9,
    name: 'Hankook',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2019/08/hankook-logo.png'
    
  },
  {
    id: 10,
    name: 'Yokohama',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2023/04/yokohama-logo.jpg'
    
  },
  {
    id: 11,
    name: 'Ameri-Steel',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2023/04/ameristeel.jpg'
    
  },
  {
    id: 12,
    name: 'General',
    imageUrl: 'https://www.actire.com/wp-content/uploads/2019/08/general-tire.png'
    
  }

]

 const TireBrands = () => {
  const tireList = tires.map(tire => (
    <img key={tire.id} src={tire.imageUrl} alt={`Tire Brand ${tire.name}`} className="tire-image"/>
  ));
  return (
    <div className="Tire-container">
     <div className="tire-images">
        {tireList}
 </div>
    </div>
  )
}
export default TireBrands;
