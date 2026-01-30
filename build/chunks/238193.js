/** chunk id: 238193, original params: e,t,n (module,exports,require) **/
n.d(t, {
    cD: () => x,
    gs: () => h,
    sl: () => p
}), n(65821);
var a = n(110259),
    l = n(73153),
    r = n(830215),
    i = n(662502),
    s = n(427157),
    o = n(499785),
    c = n(559),
    d = n(624622),
    u = n(652215),
    m = n(835002);

function p(e, t) {
    var n;
    let a = d.A.getUser(t);
    if (null == a) throw Error("User not found");
    let l = null == (n = d.A.getPool(e)) ? void 0 : n.password;
    if (null == l) throw Error("Pool password not found");
    if (null == a.email) throw Error("User email not found");
    return r.A.login({
        login: a.email,
        password: l,
        isMultiAccount: !0,
        source: "generated_test_user"
    }).catch(() => (i.A.showFailedToast(m.OB.GENERIC_ERROR), null))
}
async function h(e, t) {
    return await o.A.get({
        url: u.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: {
            event: a.NetworkActionNames.USER_LOGIN
        },
        rejectWithError: !1
    }).then(e => {
        let {
            ok: n,
            body: a
        } = e;
        if (!n) return void i.A.showFailedToast(m.OB.GENERIC_ERROR);
        let {
            generated_pool: r,
            users: o
        } = a;
        l.h.dispatch({
            type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
            pool: c.N.fromServer(r).setPassword(t),
            users: o.map(e => new s.A(e))
        })
    }).catch(() => (i.A.showFailedToast(m.OB.GENERIC_ERROR), null))
}

function x(e) {
    l.h.dispatch({
        type: "GENERATED_POOL_REMOVE_FROM_LIST",
        poolId: e
    })
}