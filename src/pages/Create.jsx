import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'


const Create = () => {

    const { data, setData } = useContext(recipecontext)

    const { register, handleSubmit, reset } = useForm()

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid()
        // const copydata = [...data]
        // copydata.push(recipe)
        // setData(copydata)

        setData([...data, recipe])

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
                {...register("description")}
                placeholder='// start from here'
            ></textarea>

            <textarea
                className='block border-b p-1.5 outline-0'
                {...register("ingredients")}
                placeholder='// Write ingredients seprated by comma'
            ></textarea>

            <textarea
                className='block border-b p-1.5 outline-0'
                {...register("instructions")}
                placeholder='// Write instructions seprated by comma'
            ></textarea>

            <select
                className='block border-b p-1.5 outline-0'
                {...register("category")}
            >
                <option className='text-black' value="cat-1">Category 1</option>
                <option className='text-black' value="cat-2">Category 2</option>
                <option className='text-black' value="cat-3">Category 3</option>
            </select>

            <button className='block mt-4 bg-zinc-700 rounded px-3 py-1'>Save recipes</button>
        </form>
    )
}

export default Create