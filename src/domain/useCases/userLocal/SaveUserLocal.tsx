import { UserLocalRepositoryImp } from '../../../data/repositories/UserLocalrepository';
import { User } from '../../entities/User';
const { save } = new UserLocalRepositoryImp();
export const SaveUserLocalUseCase = async(user: User) => {
return await save(user);
}