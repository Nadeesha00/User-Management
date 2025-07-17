import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';

type User = {
  
  name: string;
  email: string;
  address: string;
  telephone: string;
};

type DeleteUserProps = {
  user: User;
  open: boolean;
  onClose: () => void;
  
};

export function DeleteUser({ user, open, onClose }: DeleteUserProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-md bg-white p-6 rounded-2xl text-center space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Delete User</h2>
        <p className="text-gray-700">
          Are you sure you want to delete <strong>{user.name}</strong>?
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log('Deleting user:', user.name); 
              
            }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Confirm Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
