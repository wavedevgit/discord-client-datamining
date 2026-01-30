/** chunk id: 270424, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    a = n(158954),
    i = n(311907),
    l = n(492917),
    s = n(287809),
    o = n(307600),
    c = n(496587),
    d = n(800007),
    u = n(294726),
    m = n(985018),
    f = n(710882);

function g(e) {
    let {
        guildId: t
    } = e, n = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    if (null == n) return null;
    let g = (0, d.yC)(n.id, t);
    return (0, r.jsx)(c.A, {
        actions: (0, r.jsx)(a.$nd, {
            variant: "secondary",
            fullWidth: !0,
            text: m.intl.string(u.default.f0xbih),
            icon: a.I9m,
            iconPosition: "end",
            onClick: () => (0, o.h)({
                href: g
            })
        }),
        children: (0, r.jsxs)("div", {
            className: f.Q,
            children: [(0, r.jsx)(l.u7P, {
                alt: "",
                width: 117,
                height: 78
            }), (0, r.jsxs)("div", {
                className: f.y,
                children: [(0, r.jsx)(a.DZT, {
                    variant: "heading-md/semibold",
                    children: m.intl.string(u.default.qE2eqK)
                }), (0, r.jsx)(a.EYj, {
                    variant: "text-sm/medium",
                    children: m.intl.string(u.default.n4Towj)
                })]
            })]
        })
    })
}