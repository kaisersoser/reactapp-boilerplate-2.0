import authReducer from '../../reducers/auth';

test('Should test default state of auth reducer', () => {
    const authReducerDefaultState = {};
    expect(authReducer(undefined,{type: '@@INTIT'})).toEqual(authReducerDefaultState);
});

test('Should test login on authReducer', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };

    const state = authReducer({}, action);
    expect(state).toEqual({ uid: action.uid});
});

test('Should test logout on authReducer', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({}, action);
    expect(state).toEqual({});
});
