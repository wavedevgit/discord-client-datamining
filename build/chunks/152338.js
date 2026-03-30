/** chunk id: 152338 params = (module,exports,require) **/
i.r(t), i.d(t, {
    default: () => o
});
var r = i(627968),
    n = i(64700),
    s = i(816288),
    a = i(914841);

function o() {
    let [e, t] = n.useState(1);
    return n.useEffect(() => {
        let e = setTimeout(() => {
            t(15)
        }, 500);
        return () => clearTimeout(e)
    }, []), (0, r.jsx)("div", {
        className: a.KD,
        children: (0, r.jsx)("div", {
            className: a.oU,
            children: (0, r.jsx)(s.n, {
                className: a.hr,
                appliedBoostCount: e,
                maxBoostCount: 20,
                premiumSubscriberCount: e
            })
        })
    })
}