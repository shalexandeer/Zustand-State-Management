import { useUserContext } from './context';

export function Sidebar({}) {
    const user = useUserContext();
    return (
        <div>
            <div>{user.name}</div>
            <div>Subscription status : {String(user.isSubscribed)} </div>
        </div>
    );
}

export function Profile({}) {
    const user = useUserContext();

    return <div>{user.name}</div>;
}
