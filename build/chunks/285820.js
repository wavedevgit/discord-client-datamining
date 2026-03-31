/** chunk id: 285820 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    l = n(64700),
    i = n(476464),
    r = n(357599),
    s = n(37948),
    c = n(306897),
    o = n(753756),
    d = n(301979),
    u = n(985018);
let m = function(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, m = (0, i.y)("GameProfileStoreLinks"), x = (0, r._)(t), h = (0, s.A)(), g = l.useMemo(() => x.map(c.A).filter(e => null != e), [x]);
    if (!m || 0 === g.length || null == t) return null;
    if (1 === g.length) {
        let [e] = g;
        return (0, a.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), h(e.url)
            }
        })
    }
    return (0, a.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => (0, o.N)({
            detectedGame: t,
            websiteButtons: g,
            trackAction: n
        })
    })
}