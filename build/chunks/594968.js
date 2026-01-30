/** chunk id: 594968, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(688810),
    c = n(587895),
    u = n(769015),
    d = n(640708),
    p = n(657331),
    h = n(287809),
    g = n(427262),
    f = n(390848),
    m = n(513297),
    A = n(414711),
    _ = n(723690),
    b = n(652215),
    E = n(985018),
    O = n(615078);

function y(e) {
    var t;
    let {
        user: n,
        applicationId: l,
        isGameRelationship: o,
        active: c
    } = e, u = (null == (t = h.default.getCurrentUser()) ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()), {
        acceptFriendRequest: d,
        cancelFriendRequest: p
    } = (0, f.I)({
        userId: n.id,
        applicationId: l,
        isGameRelationship: o,
        location: "Friends"
    }), g = i.useCallback(e => {
        e.stopPropagation(), d()
    }, [d]), A = i.useCallback(e => {
        e.stopPropagation(), p()
    }, [p]);
    return (0, r.jsxs)(r.Fragment, {
        children: [u && (0, r.jsx)("div", {
            className: O.ou,
            children: (0, r.jsx)(s.LpS, {
                color: a.A.unsafe_rawColors.BRAND_500.css,
                text: E.intl.string(E.t.oMx98L)
            })
        }), (0, r.jsx)(m.A, {
            icon: s.A9s,
            actionType: m.A.ActionTypes.ACCEPT,
            tooltip: E.intl.string(E.t.Zcibdf),
            onClick: g,
            shouldHighlight: c
        }), (0, r.jsx)(m.A, {
            icon: s.PGe,
            actionType: m.A.ActionTypes.DENY,
            tooltip: E.intl.string(E.t.xuio0C),
            onClick: A,
            shouldHighlight: c
        })]
    })
}

function I(e) {
    let {
        userId: t,
        applicationId: n,
        isGameRelationship: l,
        active: a
    } = e, {
        cancelFriendRequest: o
    } = (0, f.I)({
        userId: t,
        applicationId: n,
        isGameRelationship: l,
        location: "Friends"
    }), c = i.useCallback(e => {
        e.stopPropagation(), o()
    }, [o]);
    return (0, r.jsx)(m.A, {
        icon: s.PGe,
        actionType: m.A.ActionTypes.DENY,
        tooltip: E.intl.string(E.t.eaq81S),
        onClick: c,
        shouldHighlight: a
    })
}

function v(e) {
    let {
        isGameRelationship: t,
        applicationId: n,
        userTag: a,
        isProvisional: o
    } = e, p = i.useMemo(() => t ? E.intl.string(E.t["Uv/eTx"]) : a, [t, a]), h = (0, l.bG)([c.A], () => null != n ? c.A.getApplication(n) : null);
    return (0, r.jsxs)("div", {
        className: O.P9,
        children: [!o && (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: p
        }), null != h && (0, r.jsxs)(r.Fragment, {
            children: [!o && (0, r.jsx)(d.A, {
                height: 2,
                width: 2
            }), (0, r.jsx)(u.A, {
                game: h,
                size: u.M.XXSMALL
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: h.name
            })]
        })]
    })
}

function S(e) {
    let {
        user: t,
        hovered: n,
        status: i,
        isGameRelationship: l,
        applicationId: a
    } = e, s = g.Ay.useUserTag(t);
    return (0, r.jsx)(_.A, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !l && !t.isProvisional,
        subText: (0, r.jsx)(v, {
            isGameRelationship: l,
            isProvisional: t.isProvisional,
            applicationId: a,
            userTag: s
        })
    })
}

function C(e) {
    let {
        user: t,
        type: n,
        status: l,
        isFocused: a,
        applicationId: s,
        isGameRelationship: c
    } = e, {
        analyticsLocations: u
    } = (0, o.Ay)(), d = l === b.clD.OFFLINE ? b.clD.UNKNOWN : l, h = i.useCallback(() => (0, p.openUserProfileModal)({
        userId: t.id,
        sourceAnalyticsLocations: u
    }), [u, t.id]);
    return (0, r.jsx)(A.A, {
        isFocused: a,
        user: t,
        onClick: h,
        children: e => (0, r.jsxs)("div", {
            className: O.a4,
            children: [(0, r.jsx)(S, {
                user: t,
                hovered: e,
                status: d,
                isGameRelationship: c,
                applicationId: s
            }), (0, r.jsx)("div", {
                className: O.o1,
                children: n === b.eA$.PENDING_INCOMING ? (0, r.jsx)(y, {
                    user: t,
                    applicationId: s,
                    isGameRelationship: c,
                    active: e
                }) : (0, r.jsx)(I, {
                    userId: t.id,
                    applicationId: s,
                    isGameRelationship: c,
                    active: e
                })
            })]
        })
    })
}