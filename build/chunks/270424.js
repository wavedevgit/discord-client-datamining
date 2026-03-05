/** chunk id: 270424, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    s = n(158954),
    i = n(311907),
    l = n(492917),
    r = n(287809),
    d = n(307600),
    c = n(496587),
    o = n(800007),
    u = n(738072),
    m = n(985018),
    _ = n(924780);

function x(e) {
    let {
        guildId: t
    } = e, n = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    if (null == n) return null;
    let x = (0, o.yC)(n.id, t);
    return (0, a.jsx)(c.A, {
        actions: (0, a.jsx)(s.$nd, {
            variant: "secondary",
            fullWidth: !0,
            text: m.intl.string(u.default.f0xbih),
            icon: s.I9m,
            iconPosition: "end",
            onClick: () => (0, d.h)({
                href: x
            })
        }),
        children: (0, a.jsxs)("div", {
            className: _.Q,
            children: [(0, a.jsx)(l.u7P, {
                alt: "",
                width: 117,
                height: 78
            }), (0, a.jsxs)("div", {
                className: _.y,
                children: [(0, a.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    children: m.intl.string(u.default.qE2eqK)
                }), (0, a.jsx)(s.EYj, {
                    variant: "text-sm/medium",
                    children: m.intl.string(u.default.n4Towj)
                })]
            })]
        })
    })
}