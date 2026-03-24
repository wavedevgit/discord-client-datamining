/** chunk id: 431040 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(541830),
    s = n(240248),
    o = n(899273),
    c = n(504186),
    d = n(814698),
    u = n(839671),
    m = n(936636),
    x = n(424994),
    _ = n(985018),
    f = n(82890);

function g() {
    return (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: _.intl.string(_.t.GruYxV)
    })
}
let h = function(e) {
    let {
        application: t,
        detectedGame: n,
        trackAction: h
    } = e, p = l.useMemo(() => n.genres.map(r.du).join(", "), [n]), v = n.publishers.join(", "), A = n.developers.join(", "), j = n.firstReleaseDate, E = (0, c.A)(n), I = (0, o.Y)(n), C = !(0, s.uJ)(p), N = !(0, s.uJ)(v), b = !(0, s.uJ)(A), T = !(0, s.uJ)(j), S = E.length > 0, L = I.length > 0 && !I.every(e => (0, s.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: f.uW,
        children: [(0, a.jsx)("div", {
            className: f.Gf,
            children: (0, a.jsx)(i.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: _.intl.string(_.t["7OjmmH"])
            })
        }), (0, a.jsxs)("div", {
            className: f.kL,
            children: [(0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.genres.length ? _.intl.string(_.t.pDgwYB) : _.intl.string(_.t.mjFKqn)
                }), C ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: f.Gu,
                    children: p
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.publishers.length ? _.intl.string(_.t.Hc7Enk) : _.intl.string(_.t["4Byy/G"])
                }), N ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: f.Gu,
                    children: v
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.developers.length ? _.intl.string(_.t.KATEJB) : _.intl.string(_.t.na3PT0)
                }), b ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: f.Gu,
                    children: A
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: _.intl.string(_.t.H3mPDT)
                }), T ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: f.Gu,
                    children: new Date(j).toLocaleDateString(_.intl.currentLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: E.length > 1 ? _.intl.string(_.t.PNqxNe) : _.intl.string(_.t["UxAag+"])
                }), S ? (0, a.jsx)("div", {
                    className: f.Gu,
                    children: E.map(e => (0, a.jsx)(m.s, {
                        platform: e
                    }, e))
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: _.intl.string(_.t["Oj3o1/"])
                }), L ? (0, a.jsx)("div", {
                    className: f.Gu,
                    children: I.map(e => (0, a.jsx)(u.K, {
                        website: e,
                        trackClick: h
                    }, e.url))
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: f.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: _.intl.string(_.t["BwQ+9e"])
                }), (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: f.Gu,
                    children: _.intl.format(_.t.XPFZVl, {
                        igdbLink: x.s8
                    })
                })]
            })]
        }), (0, a.jsx)("div", {
            className: f.OQ,
            children: (0, a.jsx)(d.A, {
                application: t,
                trackAction: h
            })
        })]
    })
}