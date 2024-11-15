function Personal({name , age})
{
  return (
   <div className="bg-vijay-100 sm:bg-blue-500 md:bg-green-500 h-4 sm:h-20">
     <h3>NAME:{name}</h3>
      <h3>AGE:{age}</h3>
    </div>
  );
}

function Professional({company , experience})
{
  return (
   <div>
     <h3>COMPANY:{company}</h3>
      <h3>EXPERIENCE:{experience}</h3>
    </div>
  );
}

export default Personal;
export {Professional};