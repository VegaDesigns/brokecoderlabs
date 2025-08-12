import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lizard from "./pages/Lizard";
import DoItLady from "./pages/DoItLady";
import Affirmations from "./pages/Affirmations";
import Gear from "./pages/Gear";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lizard" element={<Lizard />} />
        <Route path="/doitlady" element={<DoItLady />} />
        <Route path="/affirmations" element={<Affirmations />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
