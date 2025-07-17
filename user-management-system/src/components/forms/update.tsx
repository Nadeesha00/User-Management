// src/components/form/update.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
    name: string;
    email: string;
    telephone: string;
    address: string;
};

type UpdateUserFormProps = {
    defaultValues: FormValues;
    onClose: () => void;
};

export function UpdateUserForm({ defaultValues, onClose }: UpdateUserFormProps) {
    const { register,handleSubmit,formState: { errors }, } = useForm<FormValues>({ defaultValues});


    const handleFormSubmit = (data: FormValues) => {
        console.log('Updated User:', data);



        onClose();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full border rounded px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    className="w-full border rounded px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    {...register('telephone', { required: 'Phone number is required' })}
                    className="w-full border rounded px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.telephone && <p className="text-sm text-red-500 mt-1">{errors.telephone.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    {...register('address', { required: 'Address is required' })}
                    className="w-full border rounded px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address.message}</p>}
            </div>

            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}
