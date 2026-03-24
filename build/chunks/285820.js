/** chunk id: 285820 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    l = n(64700),
    i = n(60465),
    r = n(476464),
    s = n(357599),
    o = n(37948),
    c = n(306897),
    d = n(301979),
    u = n(985018);
let m = function(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, m = (0, r.y)("GameProfileStoreLinks"), x = (0, s._)(t), _ = (0, o.A)(), f = l.useMemo(() => x.map(c.A).filter(e => null != e), [x]);
    if (!m || 0 === f.length || null == t) return null;
    if (1 === f.length) {
        let [e] = f;
        return (0, a.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), _(e.url)
            }
        })
    }
    return (0, a.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => i.A.openGameProfileStoreLinksModal({
            detectedGame: t,
            websiteButtons: f,
            trackAction: n
        })
    })
}