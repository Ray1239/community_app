import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  ngoData: null,
  userData: { isFetched: false, user: null },
  foodData: { type: "", meal: "", quantity: 0 },
  isLoad: true,

  // Fetch NGO data
  getNgoData: async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/ngos`);
      set({ ngoData: [...data] });
    } catch (err) {
      console.log(err);
    }
  },

  // Fetch User data
  getUser: async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
        withCredentials: true,
      });
      set({ userData: { isFetched: true, user: data.user } });
    } catch (err) {
      set({ userData: { isFetched: true, user: null } });
    }
  },

  // Set food data
  setFoodData: (name, value) =>
    set((state) => ({
      foodData: {
        ...state.foodData,
        [name]: value,
      },
    })),

  // Logout user
  logout: async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, { withCredentials: true });
    set({ userData: { isFetched: true, user: null } });
  },

  // Simulate loading
  setLoad: (value) => set({ isLoad: value }),
}));

export default useStore;
