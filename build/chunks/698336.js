/** chunk id: 698336, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => g
});
var a = r(627968),
    n = r(64700),
    l = r(311907),
    s = r(397927),
    i = r(888940),
    d = r(235986),
    c = r(558179),
    o = r(355190),
    u = r(985018),
    h = r(542836);

function g(e) {
    let {
        eulaId: t,
        transitionState: r,
        onClose: g
    } = e, p = (0, l.bG)([o.A], () => o.A.getEULA(t));
    n.useEffect(() => {
        (0, i.E)(t)
    }, [t]);
    let m = p?.name ?? u.intl.string(u.t.ZTNur7),
        f = null != p ? (0, a.jsx)(c.A, {
            children: p.content,
            className: h.w
        }) : (0, a.jsx)(s.y$y, {
            className: h.u
        });
    return (0, a.jsxs)(s.EOs, {
        "data-migration-pending": !0,
        transitionState: r,
        size: s.rIJ.SMALL,
        "aria-label": m,
        parentComponent: "EULA",
        children: [(0, a.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            justify: d.A.Justify.BETWEEN,
            children: [(0, a.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: m
            }), (0, a.jsx)(s.s_y, {
                "data-migration-pending": !0,
                onClick: g
            })]
        }), (0, a.jsx)(s.$mQ, {
            "data-migration-pending": !0,
            children: f
        })]
    })
}