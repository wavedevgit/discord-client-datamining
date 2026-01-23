/** Chunk was on 75052 **/
/** chunk id: 516259, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => E
}), n(321073);
var r = n(627968),
    i = n(64700),
    o = n(110259),
    s = n(732955),
    c = n(397927),
    a = n(311907),
    l = n(49229),
    u = n(688810),
    p = n(513297),
    g = n(414711),
    _ = n(723690),
    d = n(657331),
    f = n(595623),
    b = n(652215),
    O = n(985018),
    y = n(142371);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function S(e) {
    let {
        user: t,
        status: n,
        ignoredUser: i
    } = e, {
        analyticsLocations: o
    } = (0, u.Ay)(), s = e => {
        e.stopPropagation(), l.A.cancelFriendRequest(t.id, {
            location: "Spam requests modal"
        })
    }, a = e => {
        e.stopPropagation(), l.A.addRelationship({
            userId: t.id,
            context: {
                location: "Spam requests modal"
            }
        })
    }, f = n === b.clD.OFFLINE ? b.clD.UNKNOWN : n, m = i ? O.intl.string(O.t.pO68Oz) : O.intl.string(O.t["gp+Ytz"]);
    return (0, r.jsx)("div", {
        className: y.Bi,
        children: (0, r.jsx)(g.A, {
            isFocused: !1,
            user: t,
            className: y.Aw,
            activeClassName: y.vu,
            onClick: () => (0, d.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: o
            }),
            children: e => (0, r.jsxs)("div", {
                className: y.a4,
                children: [(0, r.jsx)(_.A, {
                    user: t,
                    hovered: e,
                    status: f,
                    subText: m,
                    className: y.eF
                }), (0, r.jsxs)("div", {
                    className: y.o1,
                    children: [(0, r.jsx)(p.A, {
                        icon: c.A9s,
                        actionType: p.A.ActionTypes.ACCEPT,
                        tooltip: O.intl.string(O.t.Zcibdf),
                        onClick: a,
                        shouldHighlight: e
                    }), (0, r.jsx)(p.A, {
                        icon: c.PGe,
                        actionType: p.A.ActionTypes.DENY,
                        tooltip: O.intl.string(O.t.xuio0C),
                        onClick: s,
                        shouldHighlight: e
                    })]
                })]
            })
        })
    })
}

function E(e) {
    let {
        transitionState: t,
        onClose: n
    } = e, {
        rows: c
    } = (0, a.cf)([f.Ay], () => f.Ay.getState()), u = c.filter(b.m3P.PENDING_IGNORED), p = c.filter(b.m3P.SPAM), g = p.length + u.length;
    i.useEffect(() => {
        0 === g && n()
    }, [g, n]);
    let _ = i.useCallback(() => {
            l.A.clearPendingSpamAndIgnored(), n()
        }, [n]),
        d = i.useMemo(() => {
            let e = [];
            return g > 1 && e.push({
                text: O.intl.string(O.t.O8k7O4),
                onClick: _,
                variant: "secondary"
            }), e
        }, [_, g]);
    return (0, r.jsx)(s.aFV, {
        title: O.intl.string(O.t.kaYqnm),
        subtitle: O.intl.string(O.t.tRxb4H),
        actions: d,
        trackingProps: {
            impression: {
                impressionName: o.ImpressionNames.FRIEND_REQUESTS_SPAM_INBOX
            }
        },
        onClose: n,
        transitionState: t,
        children: (0, r.jsxs)("div", {
            className: y.jE,
            children: [u.map(e => (0, i.createElement)(S, h(m({}, e), {
                isFocused: !1,
                key: e.key,
                ignoredUser: !0
            }))), p.map(e => (0, i.createElement)(S, h(m({}, e), {
                isFocused: !1,
                key: e.key
            })))]
        })
    })
}