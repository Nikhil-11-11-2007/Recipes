import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SingleRecipe = () => {

    const { data, setData } = useContext(recipecontext)

    const navigate = useNavigate()

    const params = useParams()
    const recipe = data.find(recipe => params.id == recipe.id)

    const { register, handleSubmit, reset } = useForm(
        // {
        //     defaultValues: {
        //         title: recipe.title,
        //         image: recipe.image,
        //         desc: recipe.desc,
        //         chef: recipe.chef,
        //         ingr: recipe.ingr,
        //         inst: recipe.inst,
        //         category: recipe.category
        //     }
        // }
    )


    const UpdateHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        setData(copydata)
        toast.success("Recipe Updated!")
    }


    const DeleteHandler = () => {
        const filterData = data.filter((r) => r.id != params.id)
        setData(filterData)
        toast.success("Recipe Deleted !")
        navigate("/recipes")
    }

    useEffect(() => {
        console.log("mounted");
        return () => {
            console.log("unmounted");

        }
    }, [])

    return (
        recipe ? (
            <div className='w-full flex'>
                <div className="left w-1/2 p-2">
                    <h1 className='text-[4vw] font-black leading-18'>{recipe.title}</h1>
                    <img className='h-[20vh] ' src={recipe.image} alt="" />
                    <h2>{recipe.chef}</h2>
                    <p>{recipe.desc}</p>
                </div>
                <form className='w-1/2 p-2' onSubmit={handleSubmit(UpdateHandler)}>
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

                    <button className='block mt-4 bg-green-900 rounded px-3 py-1'>Update Recipe</button>
                    <button onClick={DeleteHandler}
                        className='block mt-4 bg-red-900 rounded px-3 py-1'
                    >
                        Delete Recipe
                    </button>
                </form>
            </div>
        ) : (
            "Loading..."
        )
    )
}

export default SingleRecipe