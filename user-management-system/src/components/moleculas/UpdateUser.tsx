// src/components/page/update-user.tsx
import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { UpdateUserForm } from '../forms/update';

export type Users = {
    name: string;
    email: string;
    address: string;
    telephone: string;
    profileImage: string;
};

type UpdateUser = {
    user: Users;
    onClose: () => void;
};

export function UpdateUser({ user, onClose }: UpdateUser) {
   

    return (
        <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-xl bg-white px-8 py-6 rounded-2xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Update User</h2>
                <UpdateUserForm
                    defaultValues={{
                        name: user.name,
                        email: user.email,
                        telephone: user.telephone,
                        address: user.address,
                    }}
                    onClose={onClose}
                   
                />
            </DialogContent>
        </Dialog>
    );
}
