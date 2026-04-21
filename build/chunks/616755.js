/** chunk id: 616755 params = (module,exports,require) **/
t.d(i, {
    A: () => b,
    H: () => L
});
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(110259),
    o = t(158954),
    d = t(397927),
    c = t(241524),
    u = t(260451),
    m = t(444316),
    _ = t(460760),
    x = t(115703),
    h = t(63342),
    g = t(438842),
    p = t(879472),
    A = t(649640),
    E = t(954571),
    j = t(54959),
    v = t(473644),
    I = t(57930),
    f = t(450382),
    y = t(652215),
    C = t(963120);

function T(e) {
    let {
        className: i,
        splashURL: t,
        backgroundColor: s,
        expanded: a
    } = e, r = (0, A.b2)();
    return null == t ? (0, l.jsx)("div", {
        className: n()(i, C.D7),
        style: {
            background: (0, A.n6)(s ?? r.hex())
        }
    }) : (0, l.jsx)("div", {
        className: i,
        style: {
            backgroundImage: `url(${t})`
        },
        "aria-hidden": !0,
        "data-expanded": a
    })
}

function N(e) {
    let {
        invite: i,
        guild: t,
        splashURL: a,
        friendMemberIds: r,
        discoveryGuild: o
    } = e, c = null != r && r.length > 0, [u, _] = s.useState(!1), x = s.useCallback(e => {
        _(e), E.default.track(y.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
            guild_id: t.id,
            invite_code: i.code,
            action: e ? "expanded" : "collapsed"
        })
    }, [t.id, i.code]);
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: C.g3,
            id: "invite-details",
            children: [(0, l.jsx)(T, {
                className: C.se,
                splashURL: a,
                expanded: u
            }), (0, l.jsxs)("div", {
                className: n()(C.qm, {
                    [C.rd]: u
                }),
                children: [(0, l.jsx)(I.A, {
                    guild: t,
                    outline: !0
                }), (0, l.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 16,
                    children: [(0, l.jsx)(v.A, {
                        guild: t,
                        invite: i,
                        discoveryGuild: o
                    }), c && (0, l.jsx)(m.A, {
                        friendMemberIds: r,
                        className: C.QS,
                        avatarSize: d._3J.SIZE_24
                    })]
                }), (0, l.jsx)(f.A, {
                    invite: i,
                    guild: t,
                    discoveryGuild: o,
                    expanded: u,
                    setExpanded: x,
                    scrollableSectionClassName: C.kw
                })]
            })]
        }), (0, l.jsx)(j.A, {
            invite: i,
            guild: t,
            className: C.i
        })]
    })
}

function D(e) {
    let {
        invite: i,
        guild: t,
        splashURL: s,
        friendMemberIds: a,
        discoveryGuild: n
    } = e, r = null != a && a.length > 0;
    return (0, l.jsxs)("div", {
        className: C.$5,
        id: "invite-details",
        children: [(0, l.jsx)(T, {
            className: C.je,
            splashURL: s
        }), (0, l.jsxs)("div", {
            className: C.x6,
            children: [(0, l.jsx)(I.A, {
                guild: t
            }), (0, l.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 16,
                children: [(0, l.jsx)(v.A, {
                    guild: t,
                    invite: i,
                    discoveryGuild: n
                }), r && (0, l.jsx)(m.A, {
                    friendMemberIds: a,
                    className: C.QS,
                    avatarSize: d._3J.SIZE_24
                })]
            }), (0, l.jsx)("div", {
                className: C.Sd,
                children: (0, l.jsx)(f.A, {
                    invite: i,
                    guild: t,
                    discoveryGuild: n,
                    scrollableSectionClassName: C.r_
                })
            }), (0, l.jsx)(j.A, {
                invite: i,
                guild: t,
                className: C.pU
            })]
        })]
    })
}

function b(e) {
    let {
        guild: i,
        invite: t,
        discoveryGuild: a,
        transitionState: n,
        headerId: m,
        channel: x,
        onClose: h
    } = e;
    s.useEffect(() => {
        (0, _.Mu)()
    }, []);
    let {
        treatment: g
    } = u.zQ.useConfig({
        location: "AcceptInviteModalRedesign"
    }), p = (0, c.A)("(max-width: 600px)"), A = "v1" === g || p, E = s.useMemo(() => A ? N : D, [A]);
    return (0, l.jsxs)(d.dWK, {
        size: A ? "md" : "xxl",
        "aria-labelledby": m,
        "aria-label": i?.name ?? x?.name ?? "",
        transitionState: n,
        onClose: () => (h(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: {
                    guild_id: i?.id,
                    invite_code: t.code
                }
            }
        },
        children: [(0, l.jsx)("div", {
            className: C.cG,
            children: (0, l.jsx)(o.s_y, {
                shouldColorMix: !0
            })
        }), (0, l.jsx)(E, {
            ...e,
            discoveryGuild: a
        })]
    })
}

function L(e) {
    let {
        invite: i,
        guild: t,
        splashURL: a,
        friendMemberIds: n,
        profile: c,
        transitionState: _,
        headerId: f,
        channel: N,
        onClose: D
    } = e, {
        treatment: b
    } = u.SH.useConfig({
        location: "AcceptInviteModalRedesign"
    }), L = null != n && n.length > 0, {
        gamesToDisplay: S,
        lastGameToDisplay: U,
        remainingGames: R
    } = (0, x.A)(c), G = s.useMemo(() => c.traits.map((e, i) => ({
        key: `trait-${i}`,
        ...e
    })).filter(e => e.label.length > 0), [c]), O = (0, A.b2)(), k = (0, A.aG)({
        profile: c,
        defaultColor: O.hex(),
        forceDefaultColor: null != c.brandColorPrimary
    }), P = c.brandColorPrimary ?? k;
    return (0, l.jsxs)(d.dWK, {
        size: "md",
        "aria-labelledby": f,
        "aria-label": t?.name ?? N?.name ?? "",
        transitionState: _,
        onClose: () => (D(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: {
                    guild_id: t?.id,
                    invite_code: i.code
                }
            }
        },
        children: [(0, l.jsx)("div", {
            className: C.cG,
            children: (0, l.jsx)(o.s_y, {
                shouldColorMix: !0
            })
        }), (0, l.jsxs)("div", {
            className: C.g3,
            id: "invite-details",
            children: [(0, l.jsx)(T, {
                className: C.se,
                splashURL: a,
                backgroundColor: P
            }), (0, l.jsxs)("div", {
                className: C.qm,
                children: [(0, l.jsx)(I.A, {
                    guild: t,
                    outline: !0
                }), (0, l.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 16,
                    children: [(0, l.jsx)(v.A, {
                        guild: t,
                        invite: i,
                        showGuildTag: !0
                    }), L && (0, l.jsx)(m.A, {
                        friendMemberIds: n,
                        className: C.QS,
                        avatarSize: d._3J.SIZE_24
                    }), null != t.description && "" !== t.description && (0, l.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: t.description
                    }), 0 === S.length ? null : "v1" === b ? (0, l.jsx)(g.A, {
                        gamesToDisplay: S,
                        lastGameToDisplay: U,
                        remainingGames: R,
                        activity: c.gameActivity
                    }) : "v2" === b ? (0, l.jsx)(d.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, l.jsx)(h.A, {
                            gamesToDisplay: S,
                            lastGameToDisplay: U,
                            remainingGames: R,
                            activity: c.gameActivity,
                            onExpandClick: () => {
                                E.default.track(y.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
                                    guild_id: t.id,
                                    invite_code: i.code,
                                    action: "games_expanded"
                                })
                            }
                        })
                    }) : null, (0, l.jsx)(p.w, {
                        items: G,
                        traitColor: "text-subtle"
                    })]
                })]
            })]
        }), (0, l.jsx)(j.A, {
            invite: i,
            guild: t,
            className: C.i
        })]
    })
}