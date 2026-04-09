/** chunk id: 285820 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    D: () => m
});
var a = n(627968),
    l = n(64700),
    i = n(476464),
    r = n(357599),
    s = n(37948),
    o = n(306897),
    c = n(753756),
    d = n(301979),
    u = n(985018);

function m(e) {
    let t = (0, i.y)("GameProfileStoreLinks"),
        n = (0, r._)(e);
    return {
        storeWebsites: n,
        showsStoreLinks: t && n.length > 0 && null != e
    }
}
let x = function(e) {
    let {
        game: t,
        trackAction: n
    } = e, i = (0, s.A)(), {
        showsStoreLinks: r,
        storeWebsites: x
    } = m(t), h = l.useMemo(() => x.map(o.A).filter(e => null != e), [x]);
    if (!r) return null;
    if (1 === h.length) {
        let [e] = h;
        return (0, a.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), i(e.url)
            }
        })
    }
    return (0, a.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => (0, c.N)({
            game: t,
            websiteButtons: h,
            trackAction: n
        })
    })
}