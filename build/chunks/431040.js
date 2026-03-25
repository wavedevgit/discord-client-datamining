/** chunk id: 431040 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(541830),
    s = n(240248),
    c = n(899273),
    o = n(504186),
    d = n(814698),
    u = n(839671),
    m = n(936636),
    x = n(424994),
    f = n(985018),
    h = n(82890);

function g() {
    return (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: f.intl.string(f.t.GruYxV)
    })
}
let p = function(e) {
    let {
        application: t,
        detectedGame: n,
        trackAction: p
    } = e, _ = l.useMemo(() => n.genres.map(r.du).join(", "), [n]), v = n.publishers.join(", "), j = n.developers.join(", "), A = n.firstReleaseDate, C = (0, o.A)(n), I = (0, c.Y)(n), b = !(0, s.uJ)(_), E = !(0, s.uJ)(v), N = !(0, s.uJ)(j), S = !(0, s.uJ)(A), k = C.length > 0, T = I.length > 0 && !I.every(e => (0, s.uJ)(e.url));
    return (0, a.jsxs)("div", {
        className: h.uW,
        children: [(0, a.jsx)("div", {
            className: h.Gf,
            children: (0, a.jsx)(i.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: f.intl.string(f.t["7OjmmH"])
            })
        }), (0, a.jsxs)("div", {
            className: h.kL,
            children: [(0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.genres.length ? f.intl.string(f.t.pDgwYB) : f.intl.string(f.t.mjFKqn)
                }), b ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: h.Gu,
                    children: _
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.publishers.length ? f.intl.string(f.t.Hc7Enk) : f.intl.string(f.t["4Byy/G"])
                }), E ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: h.Gu,
                    children: v
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: 1 !== n.developers.length ? f.intl.string(f.t.KATEJB) : f.intl.string(f.t.na3PT0)
                }), N ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: h.Gu,
                    children: j
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: f.intl.string(f.t.H3mPDT)
                }), S ? (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: h.Gu,
                    children: new Date(A).toLocaleDateString(f.intl.currentLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: C.length > 1 ? f.intl.string(f.t.PNqxNe) : f.intl.string(f.t["UxAag+"])
                }), k ? (0, a.jsx)("div", {
                    className: h.Gu,
                    children: C.map(e => (0, a.jsx)(m.s, {
                        platform: e
                    }, e))
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: f.intl.string(f.t["Oj3o1/"])
                }), T ? (0, a.jsx)("div", {
                    className: h.Gu,
                    children: I.map(e => (0, a.jsx)(u.K, {
                        website: e,
                        trackAction: p
                    }, e.url))
                }) : (0, a.jsx)(g, {})]
            }), (0, a.jsxs)("div", {
                className: h.J1,
                children: [(0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: f.intl.string(f.t["BwQ+9e"])
                }), (0, a.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: h.Gu,
                    children: f.intl.format(f.t.XPFZVl, {
                        igdbLink: x.s8
                    })
                })]
            })]
        }), (0, a.jsx)("div", {
            className: h.OQ,
            children: (0, a.jsx)(d.A, {
                application: t,
                trackAction: p
            })
        })]
    })
}