import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model 3", "Model Y", "Model S", "Model X", "Solar Roof", "Solar Panels"],
    menuitem: ["Existing Inventory", "Used Inventory", "Trade in", "Test Drive", "CyberTruck", "Roadster", "Semi", "Charging", "Powerwell", "Commercial Energy", "Utilities", "Find Us", "Support", "Investor Relations"],
}


const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
});

export const selectCars = state => state.car.cars;
export const selectMenuitem = state => state.car.menuitem;

export default carSlice.reducer;