import { Link } from "react-router-dom"

const RecipeCard = (props) => {

    const { id, desc, image, chef, title } = props.recipe

    return (
        <Link
            to={`/recipes/details/${id}`}
            className="hover:scale-103 duration-150 block mr-3 mb-3 w-[15vw] rounded overflow-hidden shadow "
        >
            <img className="object-cover w-full h-[20vh] " src={image} alt="" />
            <h1 className="mt-2 font-black px-2 py-1">{title}</h1>
            <small className="px-2 text-red-400">{chef}</small>
            <p className="px-2 pb-3">
                {desc.slice(0, 100)}...{""}
                <small className="text-blue-400">more</small>
            </p>
        </Link>
    )
}

export default RecipeCard