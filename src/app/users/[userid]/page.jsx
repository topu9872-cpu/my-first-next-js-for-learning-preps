

const UsersDetailsPage = async({params}) => {
    const {userid}=await  params;
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    const user =await res.json();
    
    return (
        <div>
            <h2>{user.email}</h2>
            <h2>{user.name}</h2>
        </div>
    );
};

export default UsersDetailsPage;