/** chunk id: 787331, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(49229),
    a = n(688810),
    s = n(38910),
    o = n(657331),
    c = n(513297),
    u = n(414711),
    d = n(723690),
    p = n(652215),
    h = n(985018),
    g = n(276991);

function m(e) {
    let {
        user: t,
        nickname: n,
        status: m,
        isFocused: f
    } = e, {
        analyticsLocations: A
    } = (0, a.Ay)(), _ = e => {
        null == e || e.stopPropagation(), l.A.addRelationship({
            userId: t.id,
            context: {
                location: "Friends"
            },
            type: void 0,
            fromFriendSuggestion: !0
        })
    }, b = e => {
        null == e || e.stopPropagation(), s.A.ignore(t.id)
    }, E = m === p.clD.OFFLINE ? p.clD.UNKNOWN : m;
    return (0, r.jsx)(u.A, {
        isFocused: f,
        user: t,
        onClick: () => (0, o.openUserProfileModal)({
            userId: t.id,
            sourceAnalyticsLocations: A
        }),
        children: e => {
            let l = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(c.A, {
                    icon: i.A9s,
                    actionType: c.A.ActionTypes.ACCEPT,
                    tooltip: h.intl.string(h.t.Zcibdf),
                    onClick: _,
                    shouldHighlight: e
                }), (0, r.jsx)(c.A, {
                    icon: i.PGe,
                    actionType: c.A.ActionTypes.DENY,
                    tooltip: h.intl.string(h.t.xuio0C),
                    onClick: b,
                    shouldHighlight: e
                })]
            });
            return (0, r.jsxs)("div", {
                className: g.a,
                children: [(0, r.jsx)(d.A, {
                    user: t,
                    hovered: e,
                    status: E,
                    subText: n,
                    className: g.__invalid_userInfo
                }), (0, r.jsx)("div", {
                    className: g.o,
                    children: l
                })]
            })
        }
    })
}