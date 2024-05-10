import { UserButton } from '@clerk/nextjs';
import { UserResource } from '@clerk/types'

interface HeaderProps {
    user: UserResource | undefined | null;
}
const Header = ({ user }: HeaderProps) => {
    return (
        <div className='bg-slate-300 h-[100px]'>
            
        <h1>
            <UserButton/>
            {user?.username}
        </h1>
        </div>
    )
}
export default Header