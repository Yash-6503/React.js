import React, { useEffect, useState } from 'react';
import { getUserById } from '../api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function User() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        getUserById(id).then((res) => setData(res));
    }, [id]);

    return (
        
        <div className=" p-6 min-h-screen bg-gray-100 flex flex-col md:flex-row justify-around items-center gap-6">
            {/* <h1 className="text-2xl font-bold">User Profile</h1> */}

            <div className="img">
                <img
                    src="https://png.pngtree.com/png-clipart/20210502/original/pngtree-anime-characters-go-to-cmpus-use-mask-and-spectacles-eye-png-image_6259342.png"
                    alt="User avatar"
                    width={400}
                    className="rounded shadow"
                />
            </div>

            {data ? (
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xl">
                    <p><span className="font-semibold">ID:</span> {data.id}</p>
                    <p><span className="font-semibold">Name:</span> {data.name}</p>
                    <p><span className="font-semibold">Username:</span> {data.username}</p>
                    <p><span className="font-semibold">Email:</span> {data.email}</p>
                    <p><span className="font-semibold">Phone:</span> {data.phone}</p>
                    <Link to={`http://${data.website}`}>
                        <p><span className="font-semibold">Website:</span> {data.website}</p>
                    </Link>

                    <div className="mt-4">
                        <h2 className="font-bold text-lg mb-1">Address</h2>
                        <p>{data.address.street}, {data.address.suite}</p>
                        <p>{data.address.city} - {data.address.zipcode}</p>
                        <p>Lat: {data.address.geo.lat}, Lng: {data.address.geo.lng}</p>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-bold text-lg mb-1">Company</h2>
                        <p><span className="font-semibold">Name:</span> {data.company.name}</p>
                        <p><span className="font-semibold">Catch Phrase:</span> {data.company.catchPhrase}</p>
                        <p><span className="font-semibold">BS:</span> {data.company.bs}</p>
                    </div>
                </div>
            ) : (
                <p className="text-red-500 text-lg">Loading or No Data Found</p>
            )}
        </div>
    );
}

export default User;
