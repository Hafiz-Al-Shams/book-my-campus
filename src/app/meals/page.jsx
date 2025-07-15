import Image from 'next/image';
import MealSearchInput from './components/MealSearchInput';

const MealsPage = async ({ searchParams }) => {
    const { search } = await searchParams;

    const s = search || '';

    const fetchMeals = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`);
            const data = await response.json();
            // setColleges(data?.meals || []);
            return data.meals;
        }
        catch (err) {
            console.error("Error fetching colleges:", err);
            return [];
        }
    }

    const meals = await fetchMeals();
    // const colleges = [];



    return (
        <div className='mb-10'>
            {/* <p>{JSON.stringify(colleges)}</p> */}

            <MealSearchInput />

            {/* 3most students popular colleges grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meals?.map((singleMeal, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold">{singleMeal.strMeal}</h2>
                        {/* <img src={singleMeal.strMealThumb} alt={singleMeal.strMeal} className="w-full h-48 object-cover rounded-md" /> */}
                        <Image src={singleMeal.strMealThumb} alt={singleMeal.strMeal} className="object-cover rounded-md w-auto h-auto" width={250} height={100} />
                        <p className="mt-2 text-gray-600">{singleMeal.strInstructions}</p>
                    </div>
                ))}
            </div>



            {/* from auto-complete */}
            {/* {
                colleges.length > 0 ? (
                    <div className=""></div>
                ) : (
                    <p className="text-center text-gray-500">No colleges found.</p>
                )
            } */}



        </div>
    );
};

export default MealsPage;