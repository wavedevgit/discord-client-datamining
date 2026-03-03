/** chunk id: 616755, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => v
});
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(110259),
    d = i(397927),
    c = i(241524),
    o = i(260451),
    u = i(444316),
    m = i(460760),
    x = i(954571),
    _ = i(54959),
    h = i(473644),
    g = i(57930),
    A = i(450382),
    E = i(652215),
    p = i(492171);

function j(e) {
    let {
        invite: t,
        guild: i,
        splashURL: a,
        friendMemberIds: r,
        discoveryGuild: c
    } = e, o = null != r && r.length > 0, [m, j] = n.useState(!1), I = n.useCallback(e => {
        j(e), x.default.track(E.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
            guild_id: i.id,
            invite_code: t.code,
            action: e ? "expanded" : "collapsed"
        })
    }, [i.id, t.code]);
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
            className: p.g3,
            id: "invite-details",
            children: [null != a && (0, l.jsx)("div", {
                className: p.se,
                style: {
                    backgroundImage: `url(${a})`
                },
                "aria-hidden": !0,
                "data-expanded": m
            }), (0, l.jsxs)("div", {
                className: s()(p.qm, {
                    [p.rd]: m
                }),
                children: [(0, l.jsx)(g.A, {
                    guild: i,
                    outline: !0
                }), (0, l.jsxs)("div", {
                    className: p.X$,
                    children: [(0, l.jsx)(h.A, {
                        guild: i,
                        invite: t,
                        discoveryGuild: c
                    }), o && (0, l.jsx)(u.A, {
                        friendMemberIds: r,
                        className: p.QS,
                        avatarSize: d._3J.SIZE_24
                    })]
                }), (0, l.jsx)(A.A, {
                    invite: t,
                    guild: i,
                    discoveryGuild: c,
                    expanded: m,
                    setExpanded: I,
                    scrollableSectionClassName: p.kw
                })]
            })]
        }), (0, l.jsx)(_.A, {
            invite: t,
            guild: i,
            className: p.i
        })]
    })
}

function I(e) {
    let {
        invite: t,
        guild: i,
        splashURL: n,
        friendMemberIds: a,
        discoveryGuild: s
    } = e, r = null != a && a.length > 0;
    return (0, l.jsxs)("div", {
        className: p.$5,
        id: "invite-details",
        children: [null != n && (0, l.jsx)("div", {
            className: p.je,
            style: {
                backgroundImage: `url(${n})`
            },
            "aria-hidden": !0
        }), (0, l.jsxs)("div", {
            className: p.x6,
            children: [(0, l.jsx)(g.A, {
                guild: i
            }), (0, l.jsxs)("div", {
                className: p.X$,
                children: [(0, l.jsx)(h.A, {
                    guild: i,
                    invite: t,
                    discoveryGuild: s
                }), r && (0, l.jsx)(u.A, {
                    friendMemberIds: a,
                    className: p.QS,
                    avatarSize: d._3J.SIZE_24
                })]
            }), (0, l.jsx)("div", {
                className: p.Sd,
                children: (0, l.jsx)(A.A, {
                    invite: t,
                    guild: i,
                    discoveryGuild: s,
                    scrollableSectionClassName: p.r_
                })
            }), (0, l.jsx)(_.A, {
                invite: t,
                guild: i,
                className: p.pU
            })]
        })]
    })
}

function v(e) {
    let {
        guild: t,
        invite: i,
        discoveryGuild: a,
        transitionState: s,
        headerId: u,
        channel: x,
        onClose: _
    } = e;
    n.useEffect(() => {
        (0, m.Mu)()
    }, []);
    let {
        treatment: h
    } = o.z.useConfig({
        location: "AcceptInviteModalRedesign"
    }), g = (0, c.A)("(max-width: 600px)"), A = "v1" === h || g, E = n.useMemo(() => A ? j : I, [A]);
    return (0, l.jsx)(d.dWK, {
        size: A ? "md" : "xxl",
        "aria-labelledby": u,
        "aria-label": t?.name ?? x?.name ?? "",
        transitionState: s,
        onClose: () => (_(), Promise.resolve()),
        trackingProps: {
            impression: {
                impressionName: r.ImpressionNames.INVITE_ACCEPT,
                impressionProperties: {
                    guild_id: t?.id,
                    invite_code: i.code
                }
            }
        },
        children: (0, l.jsx)(E, {
            ...e,
            discoveryGuild: a
        })
    })
}