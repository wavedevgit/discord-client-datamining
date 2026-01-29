/** Chunk was on 2827 **/
/** chunk id: 551378, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(294433),
    o = n(438732),
    c = n(809697),
    d = n(834981),
    u = n(796497),
    _ = n(191627),
    p = n(842130),
    m = n(985018),
    g = n(555064),
    A = n(896498),
    f = n(272673),
    b = n(607913);
let h = () => {
        let e = (0, d.Li)(),
            t = (0, o.A)(),
            {
                handleTabChange: n
            } = (0, c.A)();
        return (0, d.xr)() || t && e ? null : (0, r.jsx)("div", {
            className: g.x6,
            children: t ? (0, r.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t.LhlgY9),
                onClick: () => n(_.u9.REQUESTS)
            }) : (0, r.jsx)(u.A, {})
        })
    },
    E = () => {
        let e = (0, o.A)(),
            t = (0, a.y)(m.intl.string(p.default["T7GyW+"]), m.intl.string(p.default.goKE2b)),
            n = (0, a.y)(m.intl.format(p.default.MXjDSv, {
                articleLink: "https://support.discord.com/hc/articles/14155060633623"
            }), m.intl.format(p.default.EMCf6j, {
                articleLink: "https://support.discord.com/hc/articles/14155043715735"
            }));
        return (0, r.jsxs)("div", {
            className: l()(g.kL, A.a),
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)("div", {
                    children: (0, r.jsxs)("div", {
                        className: g.TK,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-xl/medium",
                            children: (0, r.jsx)(s.Fmo, {
                                children: t
                            })
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: n
                        })]
                    })
                }), (0, r.jsx)(h, {})]
            }), (0, r.jsx)("div", {
                className: g.F0,
                children: (0, r.jsx)("img", {
                    src: e ? f : b,
                    alt: m.intl.string(p.default.ffg6xd)
                })
            })]
        })
    }