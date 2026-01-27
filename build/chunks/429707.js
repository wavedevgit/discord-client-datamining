/** Chunk was on 86142 **/
/** chunk id: 429707, original params: e,t,n (module,exports,require) **/
n.d(t, {
    At: () => g,
    F6: () => h,
    Mx: () => p
});
var r = n(247775),
    i = n(562465),
    s = n(73153),
    l = n(830215),
    a = n(626584),
    o = n(961350),
    c = n(274303),
    d = n(652215);
let u = new a.A("MultiAccountActionCreators");

function h() {
    let e = o.default.getId();
    c.A.getUsers().forEach(async t => {
        let n, {
                id: l
            } = t,
            a = r.getToken(l);
        if (null == a || "" === a) return void s.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
            userId: l
        });
        s.h.dispatch({
            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
            userId: l
        });
        try {
            n = await i.Bo.get({
                url: d.Rsh.ME,
                headers: {
                    authorization: a
                },
                retries: 3,
                rejectWithError: !1
            })
        } catch (t) {
            let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
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

function p(e, t) {
    u.log("Switching account to ".concat(e), {
        switchSynchronously: t
    });
    let n = r.getToken(e);
    return null == n ? (u.log("Switching accounts failed because there was no token"), s.h.dispatch({
        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
        userId: e
    }), Promise.resolve()) : l.A.switchAccountToken(n, t)
}

function g(e) {
    s.h.dispatch({
        type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
        userId: e
    })
}