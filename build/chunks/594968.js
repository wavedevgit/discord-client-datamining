/** chunk id: 594968 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(308528),
    d = n(688810),
    c = n(587895),
    u = n(769015),
    A = n(640708),
    h = n(657331),
    _ = n(994500),
    m = n(287809),
    g = n(954571),
    p = n(427262),
    E = n(390848),
    I = n(513297),
    f = n(414711),
    C = n(723690),
    T = n(652215),
    N = n(985018),
    S = n(211587);

function x(e) {
    let {
        user: t,
        applicationId: n,
        isGameRelationship: r,
        active: o,
        onAcceptFriendRequest: d
    } = e, [c, u] = l.useState(!1), A = m.default.getCurrentUser()?.isStaff() && t?.isStaff(), {
        acceptFriendRequest: h,
        cancelFriendRequest: _
    } = (0, E.I)({
        userId: t.id,
        applicationId: n,
        isGameRelationship: r,
        location: "Friends",
        onFinally: () => {
            u(!1)
        }
    }), g = l.useCallback(e => {
        u(!0), e.stopPropagation(), d(), h()
    }, [h, d]), p = l.useCallback(e => {
        e.stopPropagation(), _()
    }, [_]);
    return (0, i.jsxs)(i.Fragment, {
        children: [A && (0, i.jsx)("div", {
            className: S.ou,
            children: (0, i.jsx)(s.LpS, {
                color: a.A.unsafe_rawColors.BRAND_500.css,
                text: N.intl.string(N.t.oMx98L)
            })
        }), (0, i.jsx)(I.A, {
            icon: s.A9s,
            actionType: I.A.ActionTypes.ACCEPT,
            tooltip: N.intl.string(N.t.Zcibdf),
            onClick: g,
            shouldHighlight: o,
            loading: c
        }), (0, i.jsx)(I.A, {
            icon: s.PGe,
            actionType: I.A.ActionTypes.DENY,
            tooltip: N.intl.string(N.t.xuio0C),
            onClick: p,
            shouldHighlight: o
        })]
    })
}

function v(e) {
    let {
        userId: t,
        applicationId: n,
        isGameRelationship: r,
        active: a
    } = e, {
        cancelFriendRequest: o
    } = (0, E.I)({
        userId: t,
        applicationId: n,
        isGameRelationship: r,
        location: "Friends"
    }), d = l.useCallback(e => {
        e.stopPropagation(), o()
    }, [o]);
    return (0, i.jsx)(I.A, {
        icon: s.PGe,
        actionType: I.A.ActionTypes.DENY,
        tooltip: N.intl.string(N.t.eaq81S),
        onClick: d,
        shouldHighlight: a
    })
}

function b(e) {
    let {
        isGameRelationship: t,
        applicationId: n,
        userTag: a,
        isProvisional: o
    } = e, d = l.useMemo(() => t ? N.intl.string(N.t["Uv/eTx"]) : a, [t, a]), h = (0, r.bG)([c.A], () => null != n ? c.A.getApplication(n) : null);
    return (0, i.jsxs)("div", {
        className: S.P9,
        children: [!o && (0, i.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: d
        }), null != h && (0, i.jsxs)(i.Fragment, {
            children: [!o && (0, i.jsx)(A.A, {
                height: 2,
                width: 2
            }), (0, i.jsx)(u.A, {
                game: h,
                size: u.M.XXSMALL
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: h.name
            })]
        })]
    })
}

function y(e) {
    let {
        user: t,
        hovered: n,
        status: l,
        isGameRelationship: r,
        applicationId: o,
        isFriend: d
    } = e, c = p.Ay.useUserTag(t);
    return (0, i.jsx)(C.A, {
        user: t,
        hovered: n,
        status: l,
        showAccountIdentifier: !1,
        subText: d ? (0, i.jsxs)("div", {
            className: S.Tl,
            children: [(0, i.jsx)(s.Uzd, {
                size: "sm",
                color: a.A.colors.ICON_FEEDBACK_POSITIVE
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: N.intl.string(N.t.bgL68y)
            })]
        }) : (0, i.jsx)(b, {
            isGameRelationship: r,
            isProvisional: t.isProvisional,
            applicationId: o,
            userTag: c
        })
    })
}

function O(e) {
    let {
        user: t,
        type: n,
        status: a,
        isFocused: c,
        applicationId: u,
        isGameRelationship: A,
        onAcceptFriendRequest: m
    } = e, {
        analyticsLocations: p
    } = (0, d.Ay)(), E = a === T.clD.OFFLINE ? T.clD.UNKNOWN : a, I = (0, r.bG)([_.A], () => _.A.getRelationshipType(t.id)), C = l.useCallback(() => (0, h.openUserProfileModal)({
        userId: t.id,
        sourceAnalyticsLocations: p
    }), [p, t.id]), N = e => {
        e.stopPropagation(), g.default.track(T.HAw.FRIEND_REQUEST_ACCEPT_MESSAGE_CLICKED), o.A.openPrivateChannel({
            recipientIds: [t.id]
        })
    };
    return [T.eA$.PENDING_INCOMING, T.eA$.PENDING_OUTGOING, T.eA$.FRIEND].includes(I) ? (0, i.jsx)(f.A, {
        isFocused: c,
        user: t,
        analyticsLocations: p,
        onClick: C,
        children: e => (0, i.jsxs)("div", {
            className: S.a4,
            children: [(0, i.jsx)(y, {
                user: t,
                hovered: e,
                status: E,
                isGameRelationship: A,
                applicationId: u,
                isFriend: I === T.eA$.FRIEND
            }), (0, i.jsx)("div", {
                className: S.o1,
                children: I === T.eA$.FRIEND ? (0, i.jsx)(s.Button, {
                    text: "Message",
                    variant: "secondary",
                    icon: s.oyn,
                    onClick: N
                }) : n === T.eA$.PENDING_INCOMING ? (0, i.jsx)(x, {
                    user: t,
                    applicationId: u,
                    isGameRelationship: A,
                    active: e,
                    onAcceptFriendRequest: m
                }) : (0, i.jsx)(v, {
                    userId: t.id,
                    applicationId: u,
                    isGameRelationship: A,
                    active: e
                })
            })]
        })
    }) : null
}