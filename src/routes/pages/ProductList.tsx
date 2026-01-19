import React from 'react';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const handleBuy = () => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div 
      className="product-card"
      style={{
        /* contentVisibility: 'auto',
        containIntrinsicSize: '300px', */
        background: 'white',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s'
      }}
      onMouseEnter={(e) => {
        const target = e.target as HTMLElement;
        target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const target = e.target as HTMLElement;
        target.style.transform = 'translateY(0)';
      }}
    >
      <div 
        className="product-image"
        style={{
          width: '100%',
          height: '150px',
          background: `hsl(${index * 25}, 65%, 75%)`,
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          color: '#666',
          marginBottom: '12px'
        }}
      >
        {product.image}
      </div>
      
      <h3 
        className="product-title"
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#333'
        }}
      >
        {product.name}
      </h3>
      
      <div 
        className="product-price"
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#2196F3',
          marginBottom: '12px'
        }}
      >
        ${product.price}
      </div>
      
      <button 
        onClick={handleBuy}
        style={{
          width: '100%',
          padding: '10px',
          background: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.background = '#1976D2';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.background = '#2196F3';
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

const ProductList: React.FC = () => {
  const products: Product[] = [
    { name: 'MacBook Pro 16"', price: 2499, image: 'Laptop' },
    { name: 'iPhone 15 Pro', price: 999, image: 'Phone' },
    { name: 'AirPods Pro', price: 249, image: 'Audio' },
    { name: 'Apple Watch Ultra', price: 799, image: 'Watch' },
    { name: 'iPad Pro 12.9"', price: 1099, image: 'Tablet' },
    { name: 'Magic Mouse', price: 79, image: 'Mouse' },
    { name: 'Magic Keyboard', price: 179, image: 'Keyboard' },
    { name: 'Studio Display', price: 1599, image: 'Monitor' },
    { name: 'AirTag 4-Pack', price: 99, image: 'Tracker' },
    { name: 'HomePod mini', price: 99, image: 'Speaker' },
    { name: 'MagSafe Charger', price: 39, image: 'Charger' },
    { name: 'Apple TV 4K', price: 179, image: 'Streaming' },
    { name: 'Mac Studio', price: 1999, image: 'Desktop' },
    { name: 'Studio Display', price: 1599, image: 'Display' },
    { name: 'Mac mini', price: 699, image: 'Mini PC' },
    { name: 'iMac 24"', price: 1299, image: 'All-in-One' },
    { name: 'MacBook Air M2', price: 1199, image: 'Laptop' },
    { name: 'iPad Air', price: 599, image: 'Tablet' },
    { name: 'iPhone 15', price: 799, image: 'Phone' },
    { name: 'Apple Pencil', price: 129, image: 'Stylus' },
    { name: 'Smart Keyboard Folio', price: 179, image: 'Accessory' },
    { name: 'AirPods Max', price: 549, image: 'Headphones' },
    { name: 'Mac Pro', price: 6999, image: 'Workstation' },
    { name: 'Pro Display XDR', price: 4999, image: 'Pro Monitor' },
    { name: 'iPhone 14', price: 699, image: 'Phone' },
    { name: 'iPad mini', price: 499, image: 'Tablet' },
    { name: 'Apple Watch SE', price: 249, image: 'Watch' },
    { name: 'AirPods 3rd Gen', price: 179, image: 'Audio' },
    { name: 'Lightning Cable', price: 19, image: 'Cable' },
    { name: 'USB-C Cable', price: 19, image: 'Cable' },
    { name: 'MagSafe Battery Pack', price: 99, image: 'Battery' },
    { name: 'Smart Folio Case', price: 79, image: 'Case' },
    { name: 'Leather Wallet', price: 59, image: 'Wallet' },
    { name: 'Clear Case', price: 49, image: 'Case' },
    { name: 'Silicone Case', price: 49, image: 'Case' },
    { name: 'Screen Protector', price: 29, image: 'Protection' },
    { name: 'Car Mount', price: 39, image: 'Mount' },
    { name: 'Wireless Stand', price: 89, image: 'Stand' },
    { name: 'Cleaning Kit', price: 19, image: 'Cleaning' },
    { name: 'Storage Box', price: 25, image: 'Storage' },
    { name: 'Cable Organizer', price: 15, image: 'Organizer' },
    { name: 'Desk Pad', price: 35, image: 'Desk' },
    { name: 'Monitor Arm', price: 149, image: 'Mount' },
    { name: 'Webcam Cover', price: 9, image: 'Privacy' },
    { name: 'Blue Light Glasses', price: 79, image: 'Glasses' },
    { name: 'Ergonomic Cushion', price: 45, image: 'Comfort' },
    { name: 'Standing Desk', price: 399, image: 'Furniture' },
    { name: 'Office Chair', price: 299, image: 'Chair' },
    { name: 'Desk Lamp', price: 89, image: 'Lighting' },
    { name: 'USB Hub', price: 49, image: 'Hub' },
    { name: 'Portable SSD', price: 129, image: 'Storage' },
    { name: 'Wireless Earbuds', price: 199, image: 'Audio' },
    { name: 'Smart Home Hub', price: 149, image: 'Smart Home' },
    { name: 'Fitness Tracker', price: 99, image: 'Fitness' },
    { name: 'Bluetooth Speaker', price: 89, image: 'Audio' },
    { name: 'Gaming Mouse', price: 59, image: 'Gaming Mouse' },
    { name: 'Mechanical Keyboard', price: 129, image: 'Gaming Keyboard' },
    { name: 'VR Headset', price: 399, image: 'VR' },
    { name: 'Smart Thermostat', price: 199, image: 'Smart Home' },
    { name: 'Smart Light Bulb', price: 29, image: 'Lighting' },
    { name: 'Wireless Charger', price: 49, image: 'Charger' },
    { name: 'Action Camera', price: 299, image: 'Camera' },
    { name: 'Drone', price: 499, image: 'Drone' },
    { name: 'Smart Lock', price: 199, image: 'Security' },
    { name: 'Smart Plug', price: 29, image: 'Smart Home' },
    { name: 'Portable Projector', price: 249, image: 'Projector' },
    { name: 'Streaming Device', price: 49, image: 'Streaming' },
    { name: 'Digital Photo Frame', price: 99, image: 'Photo Frame' },
    { name: 'Smart Scale', price: 79, image: 'Health' },
    { name: 'Wireless Headphones', price: 149, image: 'Audio' },
    { name: 'Smartwatch', price: 199, image: 'Watch' },
    { name: 'E-Reader', price: 129, image: 'E-Reader' },
    { name: 'Portable Battery Pack', price: 39, image: 'Battery' },
    { name: 'Smart Mirror', price: 299, image: 'Mirror' },
    { name: 'Smart Coffee Maker', price: 149, image: 'Kitchen' },
    { name: 'Smart Air Purifier', price: 199, image: 'Air Purifier' },
    { name: 'Smart Vacuum Cleaner', price: 299, image: 'Vacuum' },
    { name: 'Smart Water Bottle', price: 39, image: 'Water Bottle' },
    { name: 'Smart Garden', price: 99, image: 'Garden' },
    { name: 'Smart Pet Feeder', price: 129, image: 'Pet' },
    { name: 'Smart Bike Lock', price: 79, image: 'Bike Lock' },
    { name: 'Smart Luggage Tracker', price: 49, image: 'Luggage' },
    { name: 'Smart Umbrella', price: 59, image: 'Umbrella' },
    { name: 'Smart Key Finder', price: 29, image: 'Key Finder' },
    { name: 'Smart Wallet', price: 99, image: 'Wallet' },
    { name: 'Smart Glasses', price: 299, image: 'Glasses' },
    { name: 'Smart Ring', price: 199, image: 'Ring' },
    { name: 'Smart Sleep Mask', price: 79, image: 'Sleep Mask' },
    { name: 'Smart Water Filter', price: 149, image: 'Water Filter' },
    { name: 'Smart Air Quality Monitor', price: 99, image: 'Air Quality' },
    { name: 'Smart Humidifier', price: 129, image: 'Humidifier' },
    { name: 'Smart Dehumidifier', price: 149, image: 'Dehumidifier' },
    { name: 'Smart Thermometer', price: 39, image: 'Thermometer' },
    { name: 'Smart Blood Pressure Monitor', price: 79, image: 'Health Monitor' },
    { name: 'Smart Glucose Monitor', price: 99, image: 'Health Monitor' },
    { name: 'Smart Pulse Oximeter', price: 49, image: 'Health Monitor' },
    { name: 'Smart ECG Monitor', price: 199, image: 'Health Monitor' },
    { name: 'Smart Fitness Scale', price: 89, image: 'Fitness Scale' },
    { name: 'Smart Posture Corrector', price: 59, image: 'Posture' },
    { name: 'Smart Massage Gun', price: 129, image: 'Massage' },
    { name: 'Smart Yoga Mat', price: 99, image: 'Yoga' },
    { name: 'Smart Jump Rope', price: 49, image: 'Jump Rope' },
    { name: 'Smart Resistance Bands', price: 39, image: 'Resistance Bands' },
    { name: 'Smart Foam Roller', price: 79, image: 'Foam Roller' },
    { name: 'Smart Balance Board', price: 199, image: 'Balance Board' },
    { name: 'Smart Pilates Ring', price: 59, image: 'Pilates Ring' },
    { name: 'Smart Kettlebell', price: 149, image: 'Kettlebell' },
    { name: 'Smart Dumbbells', price: 199, image: 'Dumbbells' },
    { name: 'Smart Barbell', price: 249, image: 'Barbell' },
    { name: 'Smart Treadmill', price: 999, image: 'Treadmill' },
    { name: 'Smart Elliptical', price: 899, image: 'Elliptical' },
    { name: 'Smart Stationary Bike', price: 799, image: 'Stationary Bike' },
    { name: 'Smart Rowing Machine', price: 699, image: 'Rowing Machine' },
    { name: 'Smart Stair Climber', price: 599, image: 'Stair Climber' },
    { name: 'Smart Punching Bag', price: 399, image: 'Punching Bag' },
    { name: 'Smart Boxing Gloves', price: 149, image: 'Boxing Gloves' },
    { name: 'Smart Speed Bag', price: 99, image: 'Speed Bag' },
    { name: 'Smart Agility Ladder', price: 49, image: 'Agility Ladder' },
    { name: 'Smart Battle Rope', price: 79, image: 'Battle Rope' },
    { name: 'Smart Resistance Bands Set', price: 89, image: 'Resistance Bands Set' },
    { name: 'Smart Yoga Wheel', price: 59, image: 'Yoga Wheel' },
    { name: 'Smart Pilates Reformer', price: 499, image: 'Pilates Reformer' },
    { name: 'Smart Foam Roller Set', price: 69, image: 'Foam Roller Set' },
    { name: 'Smart Massage Chair', price: 1999, image: 'Massage Chair' },
    { name: 'Smart Foot Massager', price: 149, image: 'Foot Massager' },
    { name: 'Smart Neck Massager', price: 99, image: 'Neck Massager' },
    { name: 'Smart Back Massager', price: 129, image: 'Back Massager' },
    { name: 'Smart Hand Massager', price: 79, image: 'Hand Massager' },
    { name: 'Smart Eye Massager', price: 89, image: 'Eye Massager' },
    { name: 'Smart Scalp Massager', price: 59, image: 'Scalp Massager' },
    { name: 'Smart Body Massager', price: 199, image: 'Body Massager' },
    { name: 'Smart Acupressure Mat', price: 49, image: 'Acupressure Mat' },
    { name: 'Smart Shiatsu Pillow', price: 69, image: 'Shiatsu Pillow' },
    { name: 'Smart Heated Blanket', price: 129, image: 'Heated Blanket' },
    { name: 'Smart Cooling Pillow', price: 89, image: 'Cooling Pillow' },
    { name: 'Smart Weighted Blanket', price: 159, image: 'Weighted Blanket' },
    { name: 'Smart Sleep Tracker', price: 99, image: 'Sleep Tracker' },
    { name: 'Smart Alarm Clock', price: 49, image: 'Alarm Clock' },
    { name: 'Smart Sleep Mask with Speakers', price: 79, image: 'Sleep Mask with Speakers' },
    { name: 'Smart White Noise Machine', price: 59, image: 'White Noise Machine' },
    { name: 'Smart Essential Oil Diffuser', price: 39, image: 'Essential Oil Diffuser' },
    { name: 'Smart Air Freshener', price: 29, image: 'Air Freshener' },
    { name: 'Smart Humidifier with Essential Oils', price: 99, image: 'Humidifier with Essential Oils' },
    { name: 'Smart Air Purifier with HEPA Filter', price: 199, image: 'Air Purifier with HEPA Filter' },
    { name: 'Smart Water Bottle with Hydration Reminder', price: 49, image: 'Water Bottle with Hydration Reminder' },
    { name: 'Smart Pet Camera', price: 129, image: 'Pet Camera' },
    { name: 'Smart Pet Tracker', price: 79, image: 'Pet Tracker' },
    { name: 'Smart Pet Doorbell', price: 99, image: 'Pet Doorbell' },
    { name: 'Smart Pet Feeder with Camera', price: 149, image: 'Pet Feeder with Camera' },
    { name: 'Smart Pet Toy', price: 59, image: 'Pet Toy' },
    { name: 'Smart Pet Bed', price: 199, image: 'Pet Bed' },
    { name: 'Smart Pet Water Fountain', price: 89, image: 'Pet Water Fountain' },
    { name: 'Smart Pet Litter Box', price: 299, image: 'Pet Litter Box' }

  ];

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: '#f5f5f5',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '24px',
          color: '#333'
        }}>
          Product List
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;