/** Chunk was on 5606 **/
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
    p = n(191627),
    _ = n(842130),
    m = n(985018),
    g = n(555064),
    f = n(896498),
    b = n(272673),
    h = n(607913);
let A = () => {
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
                onClick: () => n(p.u9.REQUESTS)
            }) : (0, r.jsx)(u.A, {})
        })
    },
    E = () => {
        let e = (0, o.A)(),
            t = (0, a.y)(m.intl.string(_.default["T7GyW+"]), m.intl.string(_.default.goKE2b)),
            n = (0, a.y)(m.intl.format(_.default.MXjDSv, {
                articleLink: "https://support.discord.com/hc/articles/14155060633623"
            }), m.intl.format(_.default.EMCf6j, {
                articleLink: "https://support.discord.com/hc/articles/14155043715735"
            }));
        return (0, r.jsxs)("div", {
            className: l()(g.kL, f.a),
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
                }), (0, r.jsx)(A, {})]
            }), (0, r.jsx)("div", {
                className: g.F0,
                children: (0, r.jsx)("img", {
                    src: e ? b : h,
                    alt: m.intl.string(_.default.ffg6xd)
                })
            })]
        })
    }