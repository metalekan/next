const getMyAge = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};

const getMyGender = async (name: string) => {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  return response.json();
};

const getMyCountry = async (name: string) => {
  const response = await fetch(`https://api.nationalize.io/?name=${name}`);
  return response.json();
};

interface Params {
  params: { name: string };
}

export default async function page({ params }: Params) {
  const ageData = getMyAge(params.name);
  const genderData = getMyGender(params.name);
  const countryData = getMyCountry(params.name);

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
  return (
    <main className="min-h-screen text-center pt-32 px-5 bg-[#212121] text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        This is the {params.name} page
      </h1>

      <div className="">
        <ul>
            <li>Age: {age?.age}</li>
            <li>Gender:{gender?.gender}</li>
            <li>Country:{country?.country?.[0]?.country_id}</li>
        </ul>
      </div>
    </main>
  );
}
