/** chunk id: 516259 params = (module,exports,require) **/
s.d(t, {
    default: () => k
}), s(321073);
var i = s(627968),
    n = s(64700),
    a = s(110259),
    o = s(732955),
    l = s(397927),
    c = s(311907),
    r = s(49229),
    d = s(688810),
    u = s(513297),
    p = s(414711),
    m = s(723690),
    h = s(657331),
    A = s(595623),
    b = s(652215),
    g = s(985018),
    _ = s(464908);

function N(e) {
    let {
        user: t,
        status: s,
        ignoredUser: n
    } = e, {
        analyticsLocations: a
    } = (0, d.Ay)(), o = e => {
        e.stopPropagation(), r.A.cancelFriendRequest(t.id, {
            location: "Spam requests modal"
        })
    }, c = e => {
        e.stopPropagation(), r.A.addRelationship({
            userId: t.id,
            context: {
                location: "Spam requests modal"
            }
        })
    }, A = s === b.clD.OFFLINE ? b.clD.UNKNOWN : s, N = n ? g.intl.string(g.t.pO68Oz) : g.intl.string(g.t["gp+Ytz"]);
    return (0, i.jsx)("div", {
        className: _.Bi,
        children: (0, i.jsx)(p.A, {
            isFocused: !1,
            user: t,
            className: _.Aw,
            activeClassName: _.vu,
            onClick: () => (0, h.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: a
            }),
            children: e => (0, i.jsxs)("div", {
                className: _.a4,
                children: [(0, i.jsx)(m.A, {
                    user: t,
                    hovered: e,
                    status: A,
                    subText: N,
                    className: _.eF
                }), (0, i.jsxs)("div", {
                    className: _.o1,
                    children: [(0, i.jsx)(u.A, {
                        icon: l.A9s,
                        actionType: u.A.ActionTypes.ACCEPT,
                        tooltip: g.intl.string(g.t.Zcibdf),
                        onClick: c,
                        shouldHighlight: e
                    }), (0, i.jsx)(u.A, {
                        icon: l.PGe,
                        actionType: u.A.ActionTypes.DENY,
                        tooltip: g.intl.string(g.t.xuio0C),
                        onClick: o,
                        shouldHighlight: e
                    })]
                })]
            })
        })
    })
}

function k(e) {
    let {
        transitionState: t,
        onClose: s
    } = e, {
        rows: l
    } = (0, c.cf)([A.Ay], () => A.Ay.getState()), d = l.filter(b.m3P.PENDING_IGNORED), u = l.filter(b.m3P.SPAM), p = u.length + d.length;
    n.useEffect(() => {
        0 === p && s()
    }, [p, s]);
    let m = n.useCallback(() => {
            r.A.clearPendingSpamAndIgnored(), s()
        }, [s]),
        h = n.useMemo(() => {
            let e = [];
            return p > 1 && e.push({
                text: g.intl.string(g.t.O8k7O4),
                onClick: m,
                variant: "secondary"
            }), e
        }, [m, p]);
    return (0, i.jsx)(o.aFV, {
        title: g.intl.string(g.t.kaYqnm),
        subtitle: g.intl.string(g.t.tRxb4H),
        actions: h,
        trackingProps: {
            impression: {
                impressionName: a.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
            }
        },
        onClose: s,
        transitionState: t,
        children: (0, i.jsxs)("div", {
            className: _.jE,
            children: [d.map(e => (0, n.createElement)(N, {
                ...e,
                isFocused: !1,
                key: e.key,
                ignoredUser: !0
            })), u.map(e => (0, n.createElement)(N, {
                ...e,
                isFocused: !1,
                key: e.key
            }))]
        })
    })
}