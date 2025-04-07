import { UserLocalRepositoryImp } from '../../../data/repositories/UserLocalrepository';
const { getUser } = new UserLocalRepositoryImp();
export const GetUserLocalUseCase = async() => {
return await getUser();
}