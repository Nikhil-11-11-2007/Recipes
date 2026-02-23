import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()
    const { data, setData } = useContext(recipecontext)

    const { register, handleSubmit, reset } = useForm()

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid()

        setData([...data, recipe])
        toast.success("New recipe created!")
        navigate("/recipes")
        reset()

    }

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input
                className="block border-b outline-0 p-1.5"
                {...register("image")}
                type="URL"
                placeholder="Enter image url"
            />
            <small className='text-red-400'>This is how the error shown</small>
            <input
                className="block border-b outline-0 p-1.5"
                {...register("title")}
                type="text"
                placeholder="Recipe Title"
            />

            <input
                className="block border-b outline-0 p-1.5"
                {...register("chef")}
                type="text"
                placeholder="chef name"
            />

            <textarea
                className='block border-b p-1.5 outline-0'
                {...register("desc")}
                placeholder='// start from here'
            ></textarea>

            <textarea
                className='block border-b p-1.5 outline-0'
                {...register("ingr")}
                placeholder='// Write ingredients seprated by comma'
            ></textarea>

            <textarea
                className='block border-b p-1.5 outline-0'
                {...register("inst")}
                placeholder='// Write instructions seprated by comma'
            ></textarea>

            <select
                className='block border-b p-1.5 outline-0'
                {...register("category")}
            >
                <option className='text-black' value="breakfast">Breakfast</option>
                <option className='text-black' value="lunch">Lunch</option>
                <option className='text-black' value="supper">Supper</option>
                <option className='text-black' value="dinner">Dinner</option>
            </select>

            <button className='block mt-4 bg-zinc-700 rounded px-3 py-1'>Save recipes</button>
        </form>
    )
}

export default Create