/** chunk id: 516259 params = (module,exports,require) **/
i.d(t, {
    default: () => x
}), i(321073);
var s = i(627968),
    a = i(64700),
    n = i(110259),
    o = i(732955),
    c = i(397927),
    r = i(311907),
    l = i(49229),
    _ = i(688810),
    d = i(513297),
    u = i(414711),
    p = i(723690),
    m = i(657331),
    h = i(595623),
    g = i(652215),
    b = i(985018),
    f = i(452732);

function A(e) {
    let {
        user: t,
        status: i,
        ignoredUser: a
    } = e, {
        analyticsLocations: n
    } = (0, _.Ay)(), o = e => {
        e.stopPropagation(), l.A.cancelFriendRequest(t.id, {
            location: "Spam requests modal"
        })
    }, r = e => {
        e.stopPropagation(), l.A.addRelationship({
            userId: t.id,
            context: {
                location: "Spam requests modal"
            }
        })
    }, h = i === g.clD.OFFLINE ? g.clD.UNKNOWN : i, A = a ? b.intl.string(b.t.pO68Oz) : b.intl.string(b.t["gp+Ytz"]);
    return (0, s.jsx)("div", {
        className: f.Bi,
        children: (0, s.jsx)(u.A, {
            isFocused: !1,
            user: t,
            className: f.Aw,
            activeClassName: f.vu,
            noBorder: !0,
            onClick: () => (0, m.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: n
            }),
            children: e => (0, s.jsxs)("div", {
                className: f.a4,
                children: [(0, s.jsx)(p.A, {
                    user: t,
                    hovered: e,
                    status: h,
                    subText: A,
                    className: f.eF
                }), (0, s.jsxs)("div", {
                    className: f.o1,
                    children: [(0, s.jsx)(d.A, {
                        icon: c.A9s,
                        actionType: d.A.ActionTypes.ACCEPT,
                        tooltip: b.intl.string(b.t.Zcibdf),
                        onClick: r,
                        shouldHighlight: e
                    }), (0, s.jsx)(d.A, {
                        icon: c.PGe,
                        actionType: d.A.ActionTypes.DENY,
                        tooltip: b.intl.string(b.t.xuio0C),
                        onClick: o,
                        shouldHighlight: e
                    })]
                })]
            })
        })
    })
}

function x(e) {
    let {
        transitionState: t,
        onClose: i
    } = e, {
        rows: c
    } = (0, r.cf)([h.Ay], () => h.Ay.getState()), _ = c.filter(g.m3P.PENDING_IGNORED), d = c.filter(g.m3P.SPAM), u = d.length + _.length;
    a.useEffect(() => {
        0 === u && i()
    }, [u, i]);
    let p = a.useCallback(() => {
            l.A.clearPendingSpamAndIgnored(), i()
        }, [i]),
        m = a.useMemo(() => {
            let e = [];
            return u > 1 && e.push({
                text: b.intl.string(b.t.O8k7O4),
                onClick: p,
                variant: "secondary"
            }), e
        }, [p, u]);
    return (0, s.jsx)(o.aFV, {
        title: b.intl.string(b.t.kaYqnm),
        subtitle: b.intl.string(b.t.tRxb4H),
        actions: m,
        trackingProps: {
            impression: {
                impressionName: n.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
            }
        },
        onClose: i,
        transitionState: t,
        children: (0, s.jsxs)("div", {
            className: f.jE,
            children: [_.map(e => (0, a.createElement)(A, {
                ...e,
                isFocused: !1,
                key: e.key,
                ignoredUser: !0
            })), d.map(e => (0, a.createElement)(A, {
                ...e,
                isFocused: !1,
                key: e.key
            }))]
        })
    })
}