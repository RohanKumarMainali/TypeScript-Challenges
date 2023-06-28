type User = {
    name: string,
    address: 'Kathmandu'| 'Pokhara', 
    phone: number,
    password: string,
}

type PartialUser = Pick<User, "name" | "address">

const getName =()=>{
   const user : PartialUser = {
       name: 'rohan',
       address: 'Pokhara'
   }
   console.log('user', user)
}

getName();
