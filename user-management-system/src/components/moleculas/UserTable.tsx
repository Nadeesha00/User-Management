import React from 'react'
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { ColDef } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Table from './Table';
import { useState } from 'react';
import UserDetails from './ViewUserDetails';
import type { Users } from './ViewUserDetails';
import { UpdateUser } from './UpdateUser';
import { DeleteUser } from './DeleteUser';
import { Button } from '../ui/button';
import AddUser from './AddUser';



const rowData = [
    {
        name: "Smit Johnson",
        email: "smit.johnson@example.com",
        address: "123 Main St, New York",
        telephone: "(267) 739-6240",
        profileImage: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Ricky Smith",
        email: "ricky.smith@example.com",
        address: "456 Market Rd, California",
        telephone: "(618) 474-9169",
        profileImage: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Sarah Williams",
        email: "sarah.williams@example.com",
        address: "789 Park Ave, Florida",
        telephone: "(555) 123-4567",
        profileImage: "https://i.pravatar.cc/150?img=8",
    },
];




function UserTable() {


    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Users | null>(null);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addUserOpen, setAddUserOpen] = useState(false);

    const handleViewClick = (user: Users) => {
        setSelectedUser(user)
        setOpen(true)
    }

    const handleUpdateClick = (user: Users) => {
        setSelectedUser(user);
        setIsUpdateOpen(true);
    }

    const handleDelete = async (user: Users) => {
        setSelectedUser(user);
        setDeleteOpen(true);

    }


    const ActionCellRenderer = (params: any) => {
        return (
            <div className="flex items-center gap-2 ">
                <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700  focus:ring-2 focus:ring-blue-400" onClick={() => handleViewClick(params.data)}>
                    View
                </button>
                <button className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 " onClick={() => handleUpdateClick(params.data)}>
                    Update
                </button>
                <button className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400" onClick={() => handleDelete(params.data)}>
                    Delete
                </button>
            </div>
        );
    };


    const columnDefs: ColDef[] = [

        {
            headerName: "ProfileImage",
            field: "profileImage",
            cellRenderer: (params: any) => (
                <img
                    src={params.value}
                    alt="Profile"
                    className="w-10 h-10 items-center rounded-full object-cover"
                />
            ),


        },
        {
            headerName: "Name",
            field: "name",
            cellStyle: { fontWeight: "bold" },
        },
        {
            headerName: "Email",
            field: "email",
            cellStyle: { color: "#6B7280" },
        },
        {
            headerName: "Address",
            field: "address",
            cellStyle: { color: "#6B7280" },
        },
        {
            headerName: "Telephone",
            field: "telephone",
            cellStyle: { color: "#6B7280" },
        },

        {
            headerName: "",
            field: "action",
            cellRenderer: ActionCellRenderer,
            cellStyle: { display: "flex", alignItems: "center" },
            sortable: false,
            filter: false,
            resizable: false,


        },
    ];

    return (
        <div className="p-6 bg-white shadow-lg rounded-xl">
            <div className="flex gap-[50px] justify-between ">
                
                    <h2 className="text-2xl font-semibold  text-gray-800 mb-5">User Management</h2>
                
                <Button onClick={() => setAddUserOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white mt-15 ">
                    + Add User
                </Button>
            </div>
            <div className="overflow-x-auto mt-4">
                <Table
                    columnDefs={columnDefs}
                    rowData={rowData}
                    className="ag-theme-alpine w-full h-[500px] rounded-lg border-none outline-none shadow-none"
                    pagination={false}
                />


            </div>
            {open && selectedUser && (
                <UserDetails viewUser={selectedUser} onClose={() => setOpen(false)} />
            )}

            {isUpdateOpen && selectedUser && (
                <UpdateUser
                    user={selectedUser}
                    onClose={() => setIsUpdateOpen(false)}
                />
            )}

            {deleteOpen && selectedUser && (
                <DeleteUser
                    user={selectedUser}
                    open={deleteOpen}
                    onClose={() => setDeleteOpen(false)}

                />
            )}

            {addUserOpen && (
                <AddUser open={addUserOpen} setOpen={setAddUserOpen} />
            )


            }




        </div>
    );

}

export default UserTable