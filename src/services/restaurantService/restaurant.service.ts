import { RestaurantModel } from "../../models/RestaurantModel";

export const getRestaurants = async () => {
    try {
        const restaurants = await RestaurantModel.find()
        return restaurants
    } catch (e) {
        throw Error('Error while paginating Restaurants')
    }
}

export const deleteRestaurant = async (id: string) => {
    try {
      const restaurant = await RestaurantModel.findByIdAndDelete(id)
      if (!restaurant) {
        throw Error('Restaurant not found')
      } else {
        console.log(restaurant, 'Restaurant deleted')
      }
    } catch (e) {
      throw Error('Error while tring delete Restaurant')
    }
  }