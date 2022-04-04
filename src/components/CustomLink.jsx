import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    console.log(match);

    return (
        <Link
            to={to}
            style={{
                color: match ? '#4762d8' : 'white'
            }}
            {...props}
        >
            {children}
        </Link>
    );
};

export { CustomLink };