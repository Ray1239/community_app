import "./App.css";

import HomePage from "./pages/HomePage";
import AllNGOS from "./pages/AllNGOS";
import NGOPage from "./pages/NGOPage";
import FoodDetails from "./pages/FoodDetails";
import CategorySelection from "./pages/CategorySelection";
import ChooseRole from "./pages/ChooseYourRole";
import DeliverSelection from "./pages/DeliverSelection";
import DonationSelection from "./pages/DonationSelection";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup";
import FirstPage from "./pages/FirstPage";

import { Switch, Route } from "react-router-dom";
import ConfirmFoodDetails from "./pages/ConfirmFoodDetails";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [ngoData, setData] = useState(null);
  const [donationType, setDonationType] = useState("");
  const [foodType, setFoodType] = useState("");
  const [foodData, setFoodData] = useState({ type: "", meal: "", quantity: 0 });
  const [isLoad, setLoad] = useState(true);
  const [userData, setUser] = useState({ isFetched: false, user: null });
  const [mealType, setMealType] = useState('');


  const getNgoData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/ngos`
      );
      setData([...data]);
    } catch (err) {
      console.log(err);
    }
  };


  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        {
          withCredentials: true,
        }
      );
      setUser({ isFetched: true, user: data.user });
    } catch (err) {
      setUser({ isFetched: true, user: null });
    }
  };

  useEffect(() => {
    getNgoData();
    getUser();
  }, []);


  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 3000);
  }, []);

  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFoodData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const logout = async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      withCredentials: true,
    });
    setUser({ user: null, isFetched: true });
  };

  const handleFoodInput = (e) => {
    const { name, value } = e.target;
    setFoodData(prev => ({ ...prev, [name]: value }));
  };

  const handleDonationTypeSelect = (type) => {
    setDonationType(type);
  };

  const handleFoodType = (type) => {
    setFoodType(type);
  }

  const handleMealType = (type) => {
    setMealType(type);
  }


  if (!userData.isFetched) {
    return <p>Loading...</p>;
  }

  if (userData.isFetched && !userData.user) {
    return <div className="App">{isLoad ? <FirstPage /> : <Signup />}</div>;
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/profile">
          <Profile user={userData.user} logout={logout} />
        </Route>

        <Route exact path="/">
          {ngoData ? <HomePage data={ngoData} /> : null}
        </Route>

        <Route path="/category" exact>
          <CategorySelection donationType={donationType} handleFoodType={handleFoodType}/>
        </Route>

        <Route path="/all" exact>
          {ngoData ? <AllNGOS data={ngoData} /> : null}
        </Route>

        <Route path="/all/:id" exact>
          {ngoData ? <NGOPage data={ngoData} /> : null}
        </Route>

        <Route path="/foodDetails" exact>
          <FoodDetails handleInput={handleFoodInput} foodData={foodData} donationType={donationType} foodType={foodType}  />
        </Route>

        <Route path="/delivery" exact>
          <DeliverSelection />
        </Route>

        <Route path="/chooseRole" exact>
          <ChooseRole />
        </Route>

        <Route path="/donationType" exact>
          <DonationSelection onSelect={handleDonationTypeSelect}/>
        </Route>

        <Route path="/confirmFoodDetails" exact>
          <ConfirmFoodDetails foodData={foodData} donationType={donationType} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
