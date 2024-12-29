import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Login captain
    const loginCaptain = async (credentials) => {
        try {
            setIsLoading(true);
            setError(null);
            // Add your API call here to login captain
            // const response = await api.loginCaptain(credentials);
            // setCaptain(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Logout captain
    const logoutCaptain = () => {
        setCaptain(null);
        // Add any cleanup logic here
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        error,
        loginCaptain,
        logoutCaptain
    };

    return (
        <CaptainDataContext.Provider value={[captain, setCaptain]}>
            {children}
        </CaptainDataContext.Provider>
    );
};



export default CaptainContext;