/** Chunk was on 5606 **/
/** chunk id: 10094, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => l,
    Y: () => s
});
var r = n(73153),
    i = n(287809);
let l = (e, t) => {
        r.h.dispatch({
            type: "SET_PREMIUM_TYPE_OVERRIDE",
            premiumType: e
        });
        let n = null != t ? t : i.default.getCurrentUser();
        null != n && r.h.dispatch({
            type: "UPDATE_CLIENT_PREMIUM_TYPE",
            user: n
        })
    },
    s = e => {
        r.h.dispatch({
            type: "SET_CREATED_AT_OVERRIDE",
            createdAt: e
        })
    }