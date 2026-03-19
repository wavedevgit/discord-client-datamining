/** chunk id: 821306 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(263834),
    c = n(865116),
    u = n(487810),
    m = n(930821);

function h(e) {
    let {
        devSettingsCategory: t
    } = e, n = (0, r.bG)([c.Ay], () => c.Ay.allByCategory(t), [t], r.My), l = i.useMemo(() => n.map(e => {
        let [t, n, {
            label: i
        }] = e;
        return (0, a.jsx)(o.dOG, {
            label: i,
            description: t,
            checked: n,
            onChange: e => (0, d.L)(t, e)
        }, t)
    }), [n]);
    return (0, a.jsx)("div", {
        className: s()(m.nd, u.n),
        children: l
    })
}