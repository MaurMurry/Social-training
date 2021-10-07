export const getAllUsers = (state) =>{
    return state.usersReducer.users;
}

export const maxAmountUsers = (state) =>{
    return state.usersReducer.maxAmountUsers
}

export const counterAddingUserPage = (state) =>{
    return state.usersReducer.counterLoadingUsers
}

export const nowLoadUsers = (state) =>{
    return state.usersReducer.amountLoadUsers
}

export const isFetching = (state) =>{
    return state.usersReducer.isFetching
}

export const followFetching = (state) =>{
    return state.usersReducer.followFetching
}