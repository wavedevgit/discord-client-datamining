/** Chunk was on web.js **/
/** chunk id: 798400, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(585958),
    d = n(486020),
    f = n(854987),
    p = n(719718),
    _ = n(927989),
    h = n(155286),
    m = n(573138),
    g = n(877272),
    E = n(398225),
    y = n(532294),
    b = n(622865),
    O = n(985018),
    v = n(308021),
    A = n(211134);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N(e) {
    let {
        numDaysPlayed: t,
        game: n,
        index: a
    } = e, l = (0, i.useContext)(f.P), p = (0, c.rdh)(l.primaryColor).hex(), {
        id: h,
        name: m,
        coverImageHash: y
    } = n, {
        coverImageUrl: I
    } = (0, u.n)(h), S = null != I ? I : d.Ay.getGameAssetURL({
        id: h,
        hash: y
    }), T = (0, E.vy)();
    return (0, r.jsxs)(E.vw, {
        className: s()(A.Y_, {
            [A.Nf]: 0 === a
        }),
        spring: T,
        children: [(0, r.jsx)(_.A, {
            children: (0, r.jsxs)("div", {
                className: A.JS,
                children: [null != S ? (0, r.jsx)("img", {
                    className: A.CC,
                    alt: "",
                    src: S
                }) : (0, r.jsx)("div", {
                    className: A.CC,
                    style: {
                        borderColor: p
                    },
                    children: (0, r.jsx)(o._7Z, {
                        size: "lg",
                        className: A.QQ
                    })
                }), (0, r.jsx)("div", {
                    className: A.Tm,
                    style: {
                        backgroundColor: p
                    },
                    children: (0, r.jsxs)(g.A, {
                        variant: "text-lg/normal",
                        className: v.sH,
                        children: ["#", a + 1]
                    })
                })]
            })
        }), (0, r.jsx)(g.A, {
            variant: "eyebrow",
            className: A.UU,
            children: m
        }), (0, r.jsx)(g.A, {
            variant: "text-sm/bold",
            className: A.Mf,
            children: O.intl.format(b.default.MugpMu, {
                numSessions: t
            })
        })]
    })
}

function w() {
    let e = (0, i.useContext)(f.P),
        t = (0, c.rdh)(e.primaryColor).hex(),
        {
            applications: {
                totalGamesPlayed: n,
                applications: a
            } = {
                totalGamesPlayed: 0,
                applications: []
            }
        } = (0, l.bG)([p.A], () => p.A.getCheckpointData());
    return (0, r.jsxs)(m.A, {
        verticalFlow: !0,
        className: A.kL,
        children: [(0, r.jsxs)("div", {
            className: v.DD,
            children: [(0, r.jsx)(o._xR, {
                size: "refresh_sm",
                color: t,
                colorClass: v.d7
            }), (0, r.jsx)(g.A, {
                variant: "eyebrow",
                className: v.UP,
                children: O.intl.string(b.default.dW6EBf)
            })]
        }), (0, r.jsxs)("div", {
            className: A.wx,
            children: [(0, r.jsx)(g.A, {
                variant: "display-lg",
                className: A.Vy,
                children: O.intl.string(O.t.URyqtP)
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)(g.A, {
                    variant: "heading-xxl/medium",
                    className: A.VA,
                    children: O.intl.format(b.default.gzlOml, {
                        numGames: n,
                        gamesHook: (e, t) => (0, r.jsx)(g.A, {
                            variant: "heading-xxl/medium",
                            className: A.mG,
                            children: e
                        }, t)
                    })
                }), (0, r.jsx)(h.e, {
                    slide: y.P7.GAMING
                })]
            })]
        }), (0, r.jsx)("div", {
            className: A.ag,
            children: a.map((e, t) => (0, r.jsx)(N, C(S({}, e), {
                index: t
            }), "game-".concat(t)))
        })]
    })
}