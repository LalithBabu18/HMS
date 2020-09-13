export function m_loginFlag( /* state */ state, lflag) {
    console.log(state);
    state.loginFlag = lflag;
    console.log(state);
}
export function m_accountCreated( /* state */ state, lflag) {
    console.log("in mutations");
    console.log(lflag);
    state.accountFlag = lflag;
    console.log(state);
}