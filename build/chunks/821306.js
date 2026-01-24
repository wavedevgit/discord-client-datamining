/** Chunk was on 36054 **/
/** chunk id: 821306, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(311907),
    o = n(397927),
    c = n(263834),
    d = n(865116),
    u = n(759136),
    m = n(661251);

function p(e) {
    let {
        devSettingsCategory: t
    } = e, n = (0, s.bG)([d.Ay], () => d.Ay.allByCategory(t), [t], s.My), r = l.useMemo(() => n.map(e => {
        let [t, n, {
            label: l
        }] = e;
        return (0, a.jsx)(o.dOG, {
            label: l,
            description: t,
            checked: n,
            onChange: e => (0, c.L)(t, e)
        }, t)
    }), [n]);
    return (0, a.jsx)("div", {
        className: i()(m.nd, u.n),
        children: r
    })
}