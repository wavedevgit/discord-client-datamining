/** chunk id: 414345 params = (module,exports,require) **/
t.d(n, {
    g1: () => r
});
let _ = (0, t(250105).Ay)({
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

function r(e) {
    let {
        location: n,
        onPremiumTryItOutProfile: t = !1
    } = e, r = _.getConfig({
        location: n
    }).treatment;
    return !0 === t ? "UPDATE_ALL" === r : "CONTROL" !== r
}