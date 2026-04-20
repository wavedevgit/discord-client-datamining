/** chunk id: 431040 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(155718),
    s = n(405269),
    o = n(541830),
    c = n(240248),
    d = n(899273),
    u = n(504186),
    m = n(814698),
    f = n(839671),
    h = n(936636),
    x = n(424994),
    g = n(985018),
    p = n(60541);

function _() {
    return (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: g.intl.string(g.t.GruYxV)
    })
}
let v = function(e) {
    let {
        application: t,
        game: n,
        trackAction: v
    } = e, A = a.useMemo(() => n.genres.map(o.du).join(", "), [n]), b = n.getCompanyByRole(r.wk.PUBLISHER), E = n.getCompanyByRole(r.wk.DEVELOPER), j = b.map(e => e.name).join(", "), I = E.map(e => e.name).join(", "), C = n.firstReleaseDate, N = (0, u.A)(n), S = (0, d.Y)(n), L = !(0, c.uJ)(A), T = !(0, c.uJ)(j), y = !(0, c.uJ)(I), k = !(0, c.uJ)(C), R = N.length > 0, O = S.length > 0 && !S.every(e => (0, c.uJ)(e.url));
    return (0, l.jsxs)("div", {
        className: p.uW,
        children: [(0, l.jsx)("div", {
            className: p.Gf,
            children: (0, l.jsx)(i.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: g.intl.string(g.t["7OjmmH"])
            })
        }), (0, l.jsxs)("div", {
            className: p.kL,
            children: [(0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.genres.length ? g.intl.string(g.t.pDgwYB) : g.intl.string(g.t.mjFKqn)
                }), L ? (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: p.Gu,
                    children: A
                }) : (0, l.jsx)(_, {})]
            }), (0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== b.length ? g.intl.string(g.t.Hc7Enk) : g.intl.string(g.t["4Byy/G"])
                }), T ? (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: p.Gu,
                    children: j
                }) : (0, l.jsx)(_, {})]
            }), (0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== E.length ? g.intl.string(g.t.KATEJB) : g.intl.string(g.t.na3PT0)
                }), y ? (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: p.Gu,
                    children: I
                }) : (0, l.jsx)(_, {})]
            }), (0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: g.intl.string(g.t.H3mPDT)
                }), k ? (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: p.Gu,
                    children: s.i$(new Date(C), "LL")
                }) : (0, l.jsx)(_, {})]
            }), (0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: N.length > 1 ? g.intl.string(g.t.PNqxNe) : g.intl.string(g.t["UxAag+"])
                }), R ? (0, l.jsx)("div", {
                    className: p.Gu,
                    children: N.map(e => (0, l.jsx)(h.s, {
                        platform: e
                    }, e))
                }) : (0, l.jsx)(_, {})]
            }), (0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: g.intl.string(g.t["Oj3o1/"])
                }), O ? (0, l.jsx)("div", {
                    className: p.Gu,
                    children: S.map(e => (0, l.jsx)(f.K, {
                        website: e,
                        trackAction: v
                    }, e.url))
                }) : (0, l.jsx)(_, {})]
            }), (0, l.jsxs)("div", {
                className: p.J1,
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: g.intl.string(g.t["BwQ+9e"])
                }), (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: p.Gu,
                    children: g.intl.format(g.t.XPFZVl, {
                        igdbLink: x.s8
                    })
                })]
            })]
        }), (0, l.jsx)("div", {
            className: p.OQ,
            children: (0, l.jsx)(m.A, {
                application: t,
                trackAction: v
            })
        })]
    })
}