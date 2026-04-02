/** chunk id: 551378 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(294433),
    o = n(438732),
    d = n(809697),
    c = n(834981),
    u = n(796497),
    m = n(191627),
    g = n(842130),
    _ = n(985018),
    x = n(397381),
    A = n(452567),
    h = n(272673),
    p = n(607913);
let T = () => {
        let e = (0, c.Li)(),
            t = (0, o.A)(),
            {
                handleTabChange: n
            } = (0, d.A)();
        return (0, c.xr)() || t && e ? null : (0, i.jsx)("div", {
            className: x.x6,
            children: t ? (0, i.jsx)(a.Button, {
                variant: "primary",
                text: _.intl.string(_.t.LhlgY9),
                onClick: () => n(m.u9.REQUESTS)
            }) : (0, i.jsx)(u.A, {})
        })
    },
    f = () => {
        let e = (0, o.A)(),
            t = (0, r.y)(_.intl.string(g.default["T7GyW+"]), _.intl.string(g.default.goKE2b)),
            n = (0, r.y)(_.intl.format(g.default.MXjDSv, {
                articleLink: "https://support.discord.com/hc/articles/14155060633623"
            }), _.intl.format(g.default.EMCf6j, {
                articleLink: "https://support.discord.com/hc/articles/14155043715735"
            }));
        return (0, i.jsxs)("div", {
            className: l()(x.kL, A.a),
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                        className: x.TK,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-xl/medium",
                            children: (0, i.jsx)(a.Fmo, {
                                children: t
                            })
                        }), (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: n
                        })]
                    })
                }), (0, i.jsx)(T, {})]
            }), (0, i.jsx)("div", {
                className: x.F0,
                children: (0, i.jsx)("img", {
                    src: e ? h : p,
                    alt: _.intl.string(g.default.ffg6xd)
                })
            })]
        })
    }