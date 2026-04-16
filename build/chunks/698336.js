/** chunk id: 698336 params = (module,exports,require) **/
r.d(t, {
    default: () => g
});
var a = r(627968),
    n = r(64700),
    l = r(311907),
    s = r(397927),
    d = r(888940),
    i = r(235986),
    o = r(558179),
    c = r(355190),
    u = r(985018),
    h = r(191315);

function g(e) {
    let {
        eulaId: t,
        transitionState: r,
        onClose: g
    } = e, p = (0, l.bG)([c.A], () => c.A.getEULA(t));
    n.useEffect(() => {
        (0, d.E)(t)
    }, [t]);
    let m = p?.name ?? u.intl.string(u.t.ZTNur7),
        f = null != p ? (0, a.jsx)(o.A, {
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
            justify: i.A.Justify.BETWEEN,
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