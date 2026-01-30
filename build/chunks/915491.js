/** chunk id: 915491, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(435371),
    o = n(397927),
    s = n(449859),
    a = n(777347),
    u = n(967144),
    d = n(333354),
    c = n(985018),
    p = n(445735);

function m(e) {
    let {
        boost: t
    } = e, {
        timestamp: n,
        username: m,
        roleColor: f,
        roleColorStrings: v
    } = (0, a.U)(t), g = (0, u.gn)(t.guildId, t.userId, null != v ? v : null);
    return (0, r.jsxs)("div", {
        className: p.og,
        children: [(0, r.jsx)(o._Jp, {
            className: p.Kk,
            color: "currentColor",
            size: "sm"
        }), (0, r.jsx)("span", {
            className: p.x$,
            children: (0, r.jsxs)(l.EYj, {
                tag: "span",
                variant: "text-md/medium",
                lineClamp: 1,
                children: [(0, r.jsx)(i.m_, {
                    text: m,
                    shouldShow: !0,
                    asContainer: !0,
                    delay: 1e3,
                    children: (0, r.jsx)(o.gyj, {
                        className: p.IP,
                        variant: "text-md/semibold",
                        name: m,
                        colorString: null != f ? f : null,
                        colorStrings: g
                    })
                }), c.intl.string(d.default.plwH8d)]
            })
        }), (0, r.jsx)(s.A, {
            timestamp: n,
            timestampFormat: "L",
            className: p.vE
        })]
    })
}