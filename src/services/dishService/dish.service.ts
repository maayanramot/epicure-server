import { DishModel } from "../../models/DishModel";

export const getDishes = async () => {
    try {
        const dishes = await DishModel.find()
        return dishes;
    } catch (e) {
        throw Error('Error while Paginating Dishes')
    }
}

export const deleteDish = async (id: string) => {
    try {
      const dish = await DishModel.findByIdAndDelete(id)
      if (!dish) {
        throw Error('Dish not found')
      } else {
        console.log(dish, 'Dish deleted')
      }
    } catch (e) {
      throw Error('Error while tring delete Dish')
    }
  }