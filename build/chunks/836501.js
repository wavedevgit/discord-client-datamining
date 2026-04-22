/** chunk id: 836501 params = (module,exports,require) **/
l.d(t, {
    A: () => w
});
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    d = l.n(r),
    o = l(311907),
    c = l(990078),
    u = l(397927),
    x = l(442433),
    m = l(966327),
    h = l(688810),
    j = l(624458),
    _ = l(844944),
    g = l(513461),
    A = l(663997),
    f = l(716416),
    b = l(417718),
    v = l(324023),
    T = l(534400),
    N = l(532197),
    E = l(657331),
    S = l(427157),
    C = l(71393),
    I = l(427262),
    R = l(985018),
    p = l(831084),
    M = l(494213),
    D = l(301050),
    y = l(62255);

function G(e) {
    let t, l, {
        status: s
    } = e;
    switch (s) {
        case g.B5.REJECTED:
            t = R.t["7YSJ6f"], l = R.t.i05OUR;
            break;
        case g.B5.APPROVED:
            t = R.t.bv82GS, l = R.t.D4OUHT;
            break;
        default:
            t = R.t["/wqiSv"], l = R.t.o47YZs
    }
    return (0, n.jsxs)("div", {
        className: p.do,
        children: [(0, n.jsx)(u.A9s, {
            size: "md",
            color: "currentColor",
            className: p.AI
        }), (0, n.jsx)(u.Heading, {
            variant: "heading-md/medium",
            children: R.intl.string(t)
        }), (0, n.jsx)(u.Text, {
            color: "text-muted",
            variant: "text-sm/medium",
            children: R.intl.string(l)
        })]
    })
}

function L(e) {
    let {
        sortOrder: t,
        onSortChange: l
    } = e;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: D.Yk,
            children: [(0, n.jsx)("th", {
                className: p.e4,
                children: (0, n.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    children: R.intl.string(R.t.Es7n9c)
                })
            }), (0, n.jsx)("th", {
                className: a()(p.e4, y.QB),
                children: (0, n.jsxs)(u.DUT, {
                    className: p.KF,
                    onClick: l,
                    children: [(0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: R.intl.string(R.t.EZ5QWL)
                    }), t === g._e.TIMESTAMP_ASC ? (0, n.jsx)(N.A, {
                        className: p.GM,
                        direction: N.A.Directions.UP
                    }) : (0, n.jsx)(N.A, {
                        className: p.GM,
                        direction: N.A.Directions.DOWN
                    })]
                })
            }), (0, n.jsx)("th", {
                className: a()(p.e4, p.UX),
                children: (0, n.jsx)(u.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    children: R.intl.string(R.t["5Q9xGr"])
                })
            })]
        })
    })
}
let P = s.memo(function(e) {
        let {
            joinRequest: t,
            user: l
        } = e, {
            joinRequestId: i,
            guildId: a
        } = t, {
            analyticsLocations: r
        } = (0, h.Ay)(), d = s.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), (0, E.openUserProfileModal)({
                userId: l.id,
                joinRequestId: i,
                sourceAnalyticsLocations: r
            })
        }, [l, i, r]);
        return (0, n.jsxs)("div", {
            className: y.FD,
            children: [(0, n.jsx)(u.DUT, {
                className: y.Wn,
                onClick: d,
                children: (0, n.jsx)(m.A, {
                    user: l
                })
            }), (0, n.jsx)("div", {
                className: y.eg,
                children: (0, n.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    children: (0, n.jsxs)(u.DUT, {
                        onClick: d,
                        className: y.VW,
                        children: [l.globalName, (0, n.jsx)(T.Ay, {
                            primaryGuild: l?.primaryGuild,
                            userId: l?.id,
                            contextGuildId: a,
                            containerClassName: y.Dz
                        })]
                    })
                })
            }), (0, n.jsx)("div", {
                className: y.Br,
                children: (0, n.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    tag: "span",
                    children: (0, n.jsx)(u.DUT, {
                        onClick: d,
                        tag: "span",
                        children: I.Ay.getUserTag(l)
                    })
                })
            })]
        })
    }),
    k = s.memo(function(e) {
        let {
            joinRequest: t,
            onSelect: i
        } = e, {
            guildId: r,
            createdAt: m,
            applicationStatus: h
        } = t, j = s.useMemo(() => new S.A(t.user), [t.user]), _ = (0, f.R)({
            guildId: r
        }), A = (0, o.bG)([C.A], () => C.A.getGuild(r)), b = h === g.B5.SUBMITTED;
        return null == j ? null : (0, n.jsxs)("tr", {
            onClick: i,
            className: a()(y.yF, y.iA, {
                [y.wH]: _?.joinRequestId === t.joinRequestId
            }),
            children: [(0, n.jsx)("td", {
                children: (0, n.jsx)(P, {
                    joinRequest: t,
                    user: j
                })
            }), (0, n.jsx)("td", {
                className: y.QB,
                children: (0, n.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: d()(m).format("lll")
                })
            }), (0, n.jsx)("td", {
                className: p.UX,
                children: b && (0, n.jsx)(c.m, {
                    text: R.intl.string(R.t.x8Nn4M),
                    children: (0, n.jsx)(u.DUT, {
                        onClick: e => {
                            (0, x.L3)(e, async () => {
                                let {
                                    default: e
                                } = await l.e("32660").then(l.bind(l, 772063));
                                return t => (0, n.jsx)(e, {
                                    ...t,
                                    guild: A,
                                    user: j
                                })
                            }, {
                                position: "bottom",
                                align: "right"
                            })
                        },
                        className: y.x6,
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
    U = () => {
        let e = `${Math.floor(50*Math.random())+100}px`,
            t = `${Math.floor(50*Math.random())+100}px`,
            l = `${Math.floor(25*Math.random())+50}px`;
        return (0, n.jsxs)("tr", {
            className: a()(y.yF, y.iA),
            children: [(0, n.jsx)("td", {
                children: (0, n.jsxs)("div", {
                    className: y.FD,
                    children: [(0, n.jsx)("div", {
                        className: a()(p.RH, y.Wn)
                    }), (0, n.jsx)("div", {
                        className: y.eg,
                        children: (0, n.jsx)("div", {
                            className: p.RC,
                            style: {
                                width: e
                            }
                        })
                    }), (0, n.jsx)("div", {
                        className: y.Br,
                        children: (0, n.jsx)("div", {
                            className: p.w7,
                            style: {
                                width: t
                            }
                        })
                    })]
                })
            }), (0, n.jsx)("td", {
                className: y.QB,
                children: (0, n.jsx)("div", {
                    className: p.RC,
                    style: {
                        width: l
                    }
                })
            }), (0, n.jsx)("td", {
                className: p.UX
            })]
        })
    };

function w(e) {
    let {
        guildId: t,
        currentTab: l
    } = e, i = s.useRef(null), a = (0, o.bG)([C.A], () => C.A.getGuild(t)), r = (0, b.n)({
        guildId: t
    }), d = (0, o.bG)([_.A], () => _.A.isFetching()), {
        guildJoinRequests: c
    } = (0, v.K)({
        guildId: t,
        applicationStatus: l,
        sortOrder: r
    }), {
        fetchNextPage: x
    } = (0, A.K)({
        guildId: t,
        guildJoinRequests: c
    }), m = s.useCallback(async () => {
        let e = r === g._e.TIMESTAMP_ASC ? g._e.TIMESTAMP_DESC : g._e.TIMESTAMP_ASC;
        j.A.setSelectedSortOrder(t, e), await x(e, l)
    }, [r, t, x, l]);
    return null == a ? null : (0, n.jsx)("div", {
        className: M.FV,
        children: (0, n.jsx)(u.T7Y, {
            className: M.A0,
            ref: i,
            orientation: "horizontal",
            children: (0, n.jsxs)("table", {
                className: p.tp,
                children: [(0, n.jsx)(L, {
                    sortOrder: r,
                    onSortChange: m
                }), (0, n.jsx)("tbody", {
                    children: d ? [, , , , , ].fill(0).map((e, t) => (0, n.jsx)(U, {}, `placeholder-${t}`)) : 0 === c.length ? (0, n.jsx)("td", {
                        colSpan: 3,
                        children: (0, n.jsx)(G, {
                            status: l
                        })
                    }) : c.map(e => (0, n.jsx)(k, {
                        joinRequest: e,
                        onSelect: () => j.A.setSelectedGuildJoinRequest(t, e)
                    }, e.joinRequestId))
                })]
            })
        })
    })
}