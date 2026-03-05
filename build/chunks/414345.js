/** chunk id: 414345, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g1: () => i
});
let r = (0, n(250105).Ay)({
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

function i(e) {
    let {
        location: t,
        onPremiumTryItOutProfile: n = !1
    } = e, i = r.getConfig({
        location: t
    }).treatment;
    return !0 === n ? "UPDATE_ALL" === i : "CONTROL" !== i
}