/** chunk id: 915491 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(435371),
    l = n(397927),
    o = n(449859),
    a = n(777347),
    d = n(967144),
    u = n(136708),
    c = n(985018),
    m = n(271453);

function p(e) {
    let {
        boost: t
    } = e, {
        timestamp: n,
        username: p,
        roleColor: _,
        roleColorStrings: f
    } = (0, a.U)(t), g = (0, d.gn)(t.guildId, t.userId, f ?? null);
    return (0, r.jsxs)("div", {
        className: m.og,
        children: [(0, r.jsx)(l._Jp, {
            className: m.Kk,
            color: "currentColor",
            size: "sm"
        }), (0, r.jsx)("span", {
            className: m.x$,
            children: (0, r.jsxs)(i.EYj, {
                tag: "span",
                variant: "text-md/medium",
                lineClamp: 1,
                children: [(0, r.jsx)(s.m_, {
                    text: p,
                    shouldShow: !0,
                    asContainer: !0,
                    delay: 1e3,
                    children: (0, r.jsx)(l.gyj, {
                        className: m.IP,
                        variant: "text-md/semibold",
                        name: p,
                        colorString: _ ?? null,
                        colorStrings: g
                    })
                }), c.intl.string(u.default.plwH8d)]
            })
        }), (0, r.jsx)(o.A, {
            timestamp: n,
            timestampFormat: "L",
            className: m.vE
        })]
    })
}