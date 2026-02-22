# Context api

Maani ki aapke paas App -> Dashboard -> Sidebar -> Profile ki ek hierarchy hai. Agar App mein user ka data hai aur use Profile tak pahunchana hai, toh aapko beech ke har component ko data pass karna padega. Ise Prop Drilling kehte hain.

Context API is problem ko solve karta hai ek "Direct Pipeline" bana kar, jahan data seedha source se destination tak pahunchta hai.

# 3 main pillers

* A The defination
`const UserContext = React.createContext();`

* B The provider
`<UserContext.Provider value={{user, setUser}}>
    {children} 
</UserContext.Provider>`

* C The Consumer
 `const { user } = useContext(UserContext);`

# Workflow Summary (Aapka Project Flow)

Source: Login.jsx mein user details enter hoti hain aur setUser call hota hai.

Global Store: UserContextProvider us data ko store kar leta hai.

Destination: Profile.jsx usey retrieve karta hai aur screen par "Welcome Lovish" dikhata hai.