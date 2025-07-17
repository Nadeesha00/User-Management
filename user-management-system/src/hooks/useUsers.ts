import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, addUser } from '../services/userService';
import type { User } from '../types/user';

export const useUsers = () =>
    useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
    });

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};
