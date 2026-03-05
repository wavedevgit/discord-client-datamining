/** chunk id: 414345, original params: t,e,n (module,exports,require) **/
n.d(e, {
    g1: () => o
});
let a = (0, n(250105).Ay)({
    kind: "user",
    name: "2026-02-premium-brand-refresh-2026",
    defaultConfig: {
        treatment: "CONTROL"
    },
    variations: {
        0: {
            treatment: "CONTROL"
        },
        1: {
            treatment: "UPDATE_ALL"
        },
        2: {
            treatment: "EXCLUDE_TRY_IT_OUT"
        }
    }
});

function o(t) {
    let {
        location: e,
        onPremiumTryItOutProfile: n = !1
    } = t, o = a.getConfig({
        location: e
    }).treatment;
    return !0 === n ? "UPDATE_ALL" === o : "CONTROL" !== o
}