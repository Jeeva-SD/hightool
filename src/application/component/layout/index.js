import Header from './header';

const index = ({ children, window }) => {

    return (
        <div>
            <Header window={5} />
            {children}
        </div>
    );
};

export default index;