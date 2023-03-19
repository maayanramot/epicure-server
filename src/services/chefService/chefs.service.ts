import { ChefModel } from '../../models/ChefModel'

export const getChefs = async () => {
  try {
    const chefs = await ChefModel.find()
    return chefs
  } catch (e) {
    throw Error('Error while Paginating Chefs')
  }
}

export const deleteChef = async (id: string) => {
  try {
    const chef = await ChefModel.findByIdAndDelete(id)
    if (!chef) {
      throw Error('Chef not found')
    } else {
      console.log(chef, 'chef deleted')
    }
  } catch (e) {
    throw Error('Error while tring delete Chef')
  }
}
