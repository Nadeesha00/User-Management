import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';

export type Users = {
    name: string;
    email: string;
    address: string;
    telephone: string;
    profileImage: string;
};

type UserListProps = {
    viewUser: Users;
    onClose: () => void;
};

export default function UserDetails({ viewUser, onClose }: UserListProps) {
    return (
        <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-[1120px] min-h-[420px] bg-white px-8 py-6 rounded-2xl">
                <div className="flex gap-6 w-full h-full items-start">

                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                        <img
                            src={viewUser.profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-5 w-full">

                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold text-gray-900">{viewUser.name}</h3>
                        </div>

                        <div className="text-sm text-green-700 bg-green-100 w-fit px-3 py-1 rounded-full">
                            Active
                        </div>


                        <div className="flex flex-wrap gap-8 text-gray-700">
                            <div>
                                <span className="block text-sm text-black-500 font-inter font-medium ">Email</span>
                                <span className="text-base">{viewUser.email}</span>
                            </div>
                            <div>
                                <span className="block text-sm text-black-500 font-inter font-medium">Phone</span>
                                <span className="text-base">{viewUser.telephone}</span>
                            </div>
                        </div>


                        <div className="text-gray-700 pt-2">
                            <span className="block text-sm text-black-500 font-inter font-medium">Address</span>
                            <span className="text-base">{viewUser.address}</span>
                        </div>


                        <div className="pt-4 border-t text-sm text-gray-500">
                            <span className="font-medium">Registered Date:</span> Jun 3, 2025
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>

    );
}
