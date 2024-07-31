import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export interface UserInterface {
    address: string
}

const UserContext = createContext({
    state: {} as Partial<UserInterface>,
    setState: {} as Dispatch<SetStateAction<Partial<UserInterface>>>,
});

const UserProvider = ({
    children,
    value = {} as UserInterface,
  }: {
    children: React.ReactNode;
    value?: Partial<UserInterface>;
  }) => {
    const [state, setState] = useState(value);
    return (
      <UserContext.Provider value={{ state, setState }}>
        {children}
      </UserContext.Provider>
    );
  };


  const useUserState = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUserState must be used within a UserContext");
    }
    return context;
  };
  
  export { UserProvider, useUserState };