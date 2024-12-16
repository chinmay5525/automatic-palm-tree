import { Provider } from 'react-redux';
import { store } from './store/store';
// import Cart from './components/Cart/Cart';

import Footer from "./components/Footer/Footer";
import NotificationBar from "./NotificationBar/NotificationBar";
import "./fonts/fonts.css";
import ProductList from "./components/ProductList";
import ProductListTwo from "./components/ProductListTwo";
import Home from "./components/Home";
import FaqCarousel from "./components/FaqCarousel";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import WelcomeModal from "./components/WelcomeModal";
import MediaShowcase from "./components/MediaShowcase/MediaShowcase";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import RewardsProgram from "./components/RewardsProgram/RewardsProgram";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NotificationBar />
        <Navbar />
     
        <Banner />
        {/* <Cart /> */}
        <main className="" style={{ paddingTop: "70px", paddingBottom: "100px" }}>
          <ProductList />
        </main>
        <FaqCarousel />
        <main className="" style={{ paddingTop: "70px", paddingBottom: "50px" }}>
          <ProductListTwo />
        </main>
        <RewardsProgram />

        <main className="" style={{ paddingTop: "70px", paddingBottom: "50px" }}>
          <ProductListTwo />
        </main>
        <main className="" style={{ paddingTop: "70px", paddingBottom: "100px" }}>
          <ProductList />
        </main>

        <Home />
        <Testimonials />
        <MediaShowcase />
        <FeatureSection />
        <Footer />
        <WhatsAppButton />
        <WelcomeModal />
      </div>
    </Provider>
  );
};

export default App;
