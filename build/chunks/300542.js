/** chunk id: 300542 params = (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968),
    i = r(64700),
    a = r(311907),
    s = r(397927),
    l = r(854627),
    o = r(560138),
    c = r(985018),
    d = r(521512);

function u() {
    let e = (0, a.bG)([o.A], () => o.A.affinities.slice(0, 3)),
        t = e[0],
        {
            avatarSrc: r,
            eventHandlers: u
        } = (0, l.A)({
            userId: t?.id,
            size: s._3J.SIZE_24,
            animateOnHover: !0
        }),
        m = e => null != e.globalName ? e.globalName : e.username,
        T = i.useMemo(() => e.length >= 2 ? c.intl.formatToPlainString(c.t.c7ETJH, {
            username: m(e[0])
        }) : 1 === e.length ? c.intl.formatToPlainString(c.t.dpjXPL, {
            username: m(e[0])
        }) : "", [e]);
    return 0 === e.length ? null : (0, n.jsxs)("div", {
        className: d.kL,
        children: [(0, n.jsx)(s.euF, {
            className: d.__invalid_icon,
            src: r,
            "aria-label": t.username,
            size: s._3J.SIZE_24,
            ...u
        }), (0, n.jsx)(s.Text, {
            className: d.Qq,
            variant: "text-sm/normal",
            color: "always-white",
            children: T
        })]
    })
}