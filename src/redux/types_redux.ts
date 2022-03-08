/**
 * 1-store state type
 *  1-initial store of root
 *  2-initial sotre of filter
 *   -2initialstore of user {
 *    user_name:"",
 *     loggedIn:false,
 *     table:[{}]
 * }
 * 
 * 2-type of table data
 * {
 * 
 *  }
 * 3- type of action in reducer
 * 
 * 4-
 */

interface userData{
      
          name:string,
        company:string,
        status:"Active" | "Closed",
        lastUpdate:string,
        notes:string,
        id:number 
    
   };

 interface user{
     userName:string,
     isLoggedIn:boolean
     data:userData[]
 };


let sortingType:"DEFAULT"|"ACTIVE" |"CLOSED";
let filterBy:"COMPANY";
 interface filter{

    sortBy:typeof sortingType,
    filterBy:typeof filterBy
    
 }

 type actionTypeUser_type ="ADD_USER" | "ADD_DATA" | "USER_LOGGED_IN";

 //two action 1- filterdata 2-user
 interface actionTypeUser{
    type:actionTypeUser_type,
    payload:user
};


type actionTypeFilter_type="SORT_BY" | "FILTER";

interface actionTypeFilter{
    type:actionTypeFilter_type,
    payload:filter
}

interface rootInitialState{
    UserReducer:user,
    FilterReducer:filter
};

export type {
     userData,
     filter,
     actionTypeFilter,
     actionTypeUser,
     user,
     sortingType,
     filterBy,
     rootInitialState as root
};