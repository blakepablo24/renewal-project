import diyPowerTools from '../assets/diy-power-tools.jpg';
import fashionAccessories from '../assets/fashion-accessories.jpg';
import gardenOutdoorEquipment from '../assets/garden-outdoor-equipment.jpg';
import homeDecor from '../assets/home-and-decor.jpg';
import homeApplianceElectronics from '../assets/home-aplliances-eletronics.jpg';
import laptopsDesktopsPrinters from '../assets/laptops-desktops-printers.jpg';
import musicSoundCameraPhotography from '../assets/music-sound-camera-photography.jpg';
import sportsFitnessEquipment from '../assets/sports-fitness-equipment.jpg';
import toysGames from '../assets/toys-games.jpg';
import renewableProducts from '../assets/renewable-products.png';

let myConstClass = {}

const shoppingCategories = [
  {
      title: "Renewable Products",
      image: renewableProducts,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "DIY and Power Tools",
      image: diyPowerTools,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Fashion Accessories",
      image: fashionAccessories,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Garden and Outdoor Equipment",
      image: gardenOutdoorEquipment,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Home Decor",
      image: homeDecor,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Home Appliances and Electronics",
      image: homeApplianceElectronics,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Laptops, Desktops and Printers",
      image: laptopsDesktopsPrinters,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Music, Sound, Camera and Photography",
      image: musicSoundCameraPhotography,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Sports and Fitness Equipment",
      image: sportsFitnessEquipment,
      link: "https://5d164f.myshopify.com/collections/all"
  },
  {
      title: "Toys and Games",
      image: toysGames,
      link: "https://5d164f.myshopify.com/collections/all"
  },
]

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  myConstClass = {
    BASE_URL: "http://localhost:8000",
    shoppingCategories: shoppingCategories 
  }
} else {
  myConstClass = {
    BASE_URL: "https://renewal-project.com/renewal-project-back/public",
    shoppingCategories: shoppingCategories
  }
}

export default myConstClass