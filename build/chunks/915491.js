/** chunk id: 915491 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(435371),
    s = n(397927),
    o = n(449859),
    a = n(777347),
    u = n(967144),
    d = n(333354),
    c = n(985018),
    p = n(915666);

function _(e) {
    let {
        boost: t
    } = e, {
        timestamp: n,
        username: _,
        roleColor: m,
        roleColorStrings: f
    } = (0, a.U)(t), A = (0, u.gn)(t.guildId, t.userId, f ?? null);
    return (0, r.jsxs)("div", {
        className: p.og,
        children: [(0, r.jsx)(s._Jp, {
            className: p.Kk,
            color: "currentColor",
            size: "sm"
        }), (0, r.jsx)("span", {
            className: p.x$,
            children: (0, r.jsxs)(i.EYj, {
                tag: "span",
                variant: "text-md/medium",
                lineClamp: 1,
                children: [(0, r.jsx)(l.m_, {
                    text: _,
                    shouldShow: !0,
                    asContainer: !0,
                    delay: 1e3,
                    children: (0, r.jsx)(s.gyj, {
                        className: p.IP,
                        variant: "text-md/semibold",
                        name: _,
                        colorString: m ?? null,
                        colorStrings: A
                    })
                }), c.intl.string(d.default.plwH8d)]
            })
        }), (0, r.jsx)(o.A, {
            timestamp: n,
            timestampFormat: "L",
            className: p.vE
        })]
    })
}