/** chunk id: 429707 params = (module,exports,require) **/
n.d(t, {
    At: () => p,
    F6: () => m,
    Mx: () => h
});
var a = n(247775),
    i = n(562465),
    s = n(73153),
    l = n(830215),
    r = n(626584),
    o = n(961350),
    d = n(274303),
    c = n(652215);
let u = new r.A("MultiAccountActionCreators");

function m() {
    let e = o.default.getId();
    d.A.getUsers().forEach(async t => {
        let n, {
                id: l
            } = t,
            r = a.getToken(l);
        if (null == r || "" === r) return void s.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: l
        });
        s.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: l
        });
        try {
            n = await i.Bo.get({
                url: c.Rsh.ME,
                headers: {
                    authorization: r
                },
                retries: 3,
                rejectWithError: !1
            })
        } catch (t) {
            let e = t?.status === 401 || t?.status === 403;
            s.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: l
            });
            return
        }
        s.h.dispatch({
            type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body
        }), s.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
            userId: l
        })
    })
}

function h(e, t) {
    u.log(`Switching account to ${e}`, {
        switchSynchronously: t
    });
    let n = a.getToken(e);
    return null == n ? (u.log("Switching accounts failed because there was no token"), s.h.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: e
    }), Promise.resolve()) : l.A.switchAccountToken(n, t)
}

function p(e) {
    s.h.dispatch({
        type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
        userId: e
    })
}