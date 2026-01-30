/** chunk id: 429707, original params: e,t,n (module,exports,require) **/
n.d(t, {
    At: () => h,
    F6: () => m,
    Mx: () => p
});
var a = n(247775),
    l = n(562465),
    r = n(73153),
    i = n(830215),
    s = n(626584),
    o = n(961350),
    c = n(274303),
    d = n(652215);
let u = new s.A("MultiAccountActionCreators");

function m() {
    let e = o.default.getId();
    c.A.getUsers().forEach(async t => {
        let n, {
                id: i
            } = t,
            s = a.getToken(i);
        if (null == s || "" === s) return void r.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: i
        });
        r.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: i
        });
        try {
            n = await l.Bo.get({
                url: d.Rsh.ME,
                headers: {
                    authorization: s
                },
                retries: 3,
                rejectWithError: !1
            })
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
            r.h.dispatch({
                type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                userId: i
            });
            return
        }
        r.h.dispatch({
            type: e === i ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
            user: n.body
        }), r.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
            userId: i
        })
    })
}

function p(e, t) {
    u.log("Switching account to ".concat(e), {
        switchSynchronously: t
    });
    let n = a.getToken(e);
    return null == n ? (u.log("Switching accounts failed because there was no token"), r.h.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: e
    }), Promise.resolve()) : i.A.switchAccountToken(n, t)
}

function h(e) {
    r.h.dispatch({
        type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
        userId: e
    })
}