/** chunk id: 836501, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => U
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(989349),
    o = l.n(a),
    c = l(311907),
    d = l(990078),
    u = l(397927),
    x = l(442433),
    m = l(966327),
    j = l(688810),
    b = l(624458),
    h = l(844944),
    f = l(513461),
    g = l(663997),
    v = l(716416),
    _ = l(417718),
    A = l(324023),
    p = l(534400),
    T = l(532197),
    E = l(657331),
    S = l(427157),
    y = l(71393),
    O = l(427262),
    N = l(985018),
    I = l(566737),
    R = l(663282),
    C = l(236671),
    D = l(918372);

function P(e) {
    let t, l, {
        status: r
    } = e;
    switch (r) {
        case f.B5.REJECTED:
            t = N.t["7YSJ6f"], l = N.t.i05OUR;
            break;
        case f.B5.APPROVED:
            t = N.t.bv82GS, l = N.t.D4OUHT;
            break;
        default:
            t = N.t["/wqiSv"], l = N.t.o47YZs
    }
    return (0, n.jsxs)("div", {
        className: I.do,
        children: [(0, n.jsx)(u.A9s, {
            size: "md",
            color: "currentColor",
            className: I.AI
        }), (0, n.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: N.intl.string(t)
        }), (0, n.jsx)(u.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: N.intl.string(l)
        })]
    })
}

function M(e) {
    let {
        sortOrder: t,
        onSortChange: l
    } = e;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: C.Yk,
            children: [(0, n.jsx)("th", {
                className: I.e4,
                children: (0, n.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    children: N.intl.string(N.t.Es7n9c)
                })
            }), (0, n.jsx)("th", {
                className: s()(I.e4, D.QB),
                children: (0, n.jsxs)(u.DUT, {
                    className: I.KF,
                    onClick: l,
                    children: [(0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: N.intl.string(N.t.EZ5QWL)
                    }), t === f._e.TIMESTAMP_ASC ? (0, n.jsx)(T.A, {
                        className: I.GM,
                        direction: T.A.Directions.UP
                    }) : (0, n.jsx)(T.A, {
                        className: I.GM,
                        direction: T.A.Directions.DOWN
                    })]
                })
            }), (0, n.jsx)("th", {
                className: s()(I.e4, I.UX),
                children: (0, n.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    children: N.intl.string(N.t["5Q9xGr"])
                })
            })]
        })
    })
}
let w = r.memo(function(e) {
        let {
            joinRequest: t,
            user: l
        } = e, {
            joinRequestId: i,
            guildId: s
        } = t, {
            analyticsLocations: a
        } = (0, j.Ay)(), o = r.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), (0, E.openUserProfileModal)({
                userId: l.id,
                joinRequestId: i,
                sourceAnalyticsLocations: a
            })
        }, [l, i, a]);
        return (0, n.jsxs)("div", {
            className: D.FD,
            children: [(0, n.jsx)(u.DUT, {
                className: D.Wn,
                onClick: o,
                children: (0, n.jsx)(m.A, {
                    user: l
                })
            }), (0, n.jsx)("div", {
                className: D.eg,
                children: (0, n.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    children: (0, n.jsxs)(u.DUT, {
                        onClick: o,
                        className: D.VW,
                        children: [l.globalName, (0, n.jsx)(p.Ay, {
                            primaryGuild: null == l ? void 0 : l.primaryGuild,
                            userId: null == l ? void 0 : l.id,
                            contextGuildId: s,
                            containerClassName: D.Dz
                        })]
                    })
                })
            }), (0, n.jsx)("div", {
                className: D.Br,
                children: (0, n.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    tag: "span",
                    children: (0, n.jsx)(u.DUT, {
                        onClick: o,
                        tag: "span",
                        children: O.Ay.getUserTag(l)
                    })
                })
            })]
        })
    }),
    G = r.memo(function(e) {
        let {
            joinRequest: t,
            onSelect: i
        } = e, {
            guildId: a,
            createdAt: m,
            applicationStatus: j
        } = t, b = r.useMemo(() => new S.A(t.user), [t.user]), h = (0, v.R)({
            guildId: a
        }), g = (0, c.bG)([y.A], () => y.A.getGuild(a)), _ = j === f.B5.SUBMITTED;
        return null == b ? null : (0, n.jsxs)("tr", {
            onClick: i,
            className: s()(D.yF, D.iA, {
                [D.wH]: (null == h ? void 0 : h.joinRequestId) === t.joinRequestId
            }),
            children: [(0, n.jsx)("td", {
                children: (0, n.jsx)(w, {
                    joinRequest: t,
                    user: b
                })
            }), (0, n.jsx)("td", {
                className: D.QB,
                children: (0, n.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o()(m).format("lll")
                })
            }), (0, n.jsx)("td", {
                className: I.UX,
                children: _ && (0, n.jsx)(d.m, {
                    text: N.intl.string(N.t.x8Nn4M),
                    children: (0, n.jsx)(u.DUT, {
                        onClick: e => {
                            (0, x.L3)(e, async () => {
                                let {
                                    default: e
                                } = await l.e("32660").then(l.bind(l, 772063));
                                return t => {
                                    var l, r;
                                    return (0, n.jsx)(e, (l = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var l = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(l);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                                                return Object.getOwnPropertyDescriptor(l, e).enumerable
                                            }))), n.forEach(function(t) {
                                                var n;
                                                n = l[t], t in e ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : e[t] = n
                                            })
                                        }
                                        return e
                                    }({}, t), r = r = {
                                        guild: g,
                                        user: b
                                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                                        var l = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            l.push.apply(l, n)
                                        }
                                        return l
                                    })(Object(r)).forEach(function(e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
                                    }), l))
                                }
                            }, {
                                position: "bottom",
                                align: "right"
                            })
                        },
                        className: D.x6,
                        children: (0, n.jsx)(u.FHP, {
                            size: "custom",
                            color: "currentColor",
                            width: 18,
                            height: 18
                        })
                    })
                })
            })]
        })
    }),
    L = () => {
        let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            t = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
            l = "".concat(Math.floor(25 * Math.random()) + 50, "px");
        return (0, n.jsxs)("tr", {
            className: s()(D.yF, D.iA),
            children: [(0, n.jsx)("td", {
                children: (0, n.jsxs)("div", {
                    className: D.FD,
                    children: [(0, n.jsx)("div", {
                        className: s()(I.RH, D.Wn)
                    }), (0, n.jsx)("div", {
                        className: D.eg,
                        children: (0, n.jsx)("div", {
                            className: I.RC,
                            style: {
                                width: e
                            }
                        })
                    }), (0, n.jsx)("div", {
                        className: D.Br,
                        children: (0, n.jsx)("div", {
                            className: I.w7,
                            style: {
                                width: t
                            }
                        })
                    })]
                })
            }), (0, n.jsx)("td", {
                className: D.QB,
                children: (0, n.jsx)("div", {
                    className: I.RC,
                    style: {
                        width: l
                    }
                })
            }), (0, n.jsx)("td", {
                className: I.UX
            })]
        })
    };

function U(e) {
    let {
        guildId: t,
        currentTab: l
    } = e, i = r.useRef(null), s = (0, c.bG)([y.A], () => y.A.getGuild(t)), a = (0, _.n)({
        guildId: t
    }), o = (0, c.bG)([h.A], () => h.A.isFetching()), {
        guildJoinRequests: d
    } = (0, A.K)({
        guildId: t,
        applicationStatus: l,
        sortOrder: a
    }), {
        fetchNextPage: x
    } = (0, g.K)({
        guildId: t,
        guildJoinRequests: d
    }), m = r.useCallback(async () => {
        let e = a === f._e.TIMESTAMP_ASC ? f._e.TIMESTAMP_DESC : f._e.TIMESTAMP_ASC;
        b.A.setSelectedSortOrder(t, e), await x(e, l)
    }, [a, t, x, l]);
    return null == s ? null : (0, n.jsx)("div", {
        className: R.FV,
        children: (0, n.jsx)(u.T7Y, {
            className: R.A0,
            ref: i,
            orientation: "horizontal",
            children: (0, n.jsxs)("table", {
                className: I.tp,
                children: [(0, n.jsx)(M, {
                    sortOrder: a,
                    onSortChange: m
                }), (0, n.jsx)("tbody", {
                    children: o ? [, , , , , ].fill(0).map((e, t) => (0, n.jsx)(L, {}, "placeholder-".concat(t))) : 0 === d.length ? (0, n.jsx)("td", {
                        colSpan: 3,
                        children: (0, n.jsx)(P, {
                            status: l
                        })
                    }) : d.map(e => (0, n.jsx)(G, {
                        joinRequest: e,
                        onSelect: () => b.A.setSelectedGuildJoinRequest(t, e)
                    }, e.joinRequestId))
                })]
            })
        })
    })
}