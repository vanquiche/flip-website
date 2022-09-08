import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextType {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
}

const initialState = {
  location: '',
  setLocation: () => {},
};

const LocationContext = createContext<ContextType>(initialState);

export default LocationContext;
