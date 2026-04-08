/** chunk id: 807651 params = (module,exports,require) **/
n.d(l, {
    A: () => g
});
var t = n(627968);
n(64700);
var i = n(630054),
    s = n(688810),
    a = n(591179),
    r = n(722868),
    o = n(822775),
    d = n(832696),
    c = n(982985),
    u = n(853397),
    m = n(290090),
    p = n(697250),
    x = n(102951),
    A = n(652215);

function g(e) {
    let {
        user: l,
        currentUser: n,
        guildId: g,
        originGuildId: f,
        channelId: h,
        displayProfile: j,
        relationshipType: I,
        onClose: v
    } = e, N = (0, a.X)("UserProfileModalV2Buttons"), {
        newestAnalyticsLocation: y
    } = (0, s.Ay)(), E = (0, r.A)({
        user: l,
        guildId: f,
        channelId: h,
        displayProfile: j,
        onClose: v
    }), {
        gameFriends: C,
        hasOutgoingPendingGameFriends: T,
        hasIncomingPendingGameFriends: b
    } = (0, x.J)({
        userId: l.id
    }), _ = C.length > 0 || T || b;
    return I === A.eA$.BLOCKED ? null : l.id === n.id ? N ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            variant: "primary",
            disabled: !0
        }), (0, t.jsx)(m.A, {
            onClose: v
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(o.A, {
            user: l,
            guildId: g,
            onClose: v
        }), (0, t.jsx)(m.A, {
            onClose: v
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : l.bot ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : I === A.eA$.PENDING_INCOMING ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(d.A, {
            user: l
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g
        })]
    }) : I === A.eA$.FRIEND || I === A.eA$.PENDING_OUTGOING ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(p.Ef, {
            user: l,
            relationshipType: I,
            analyticsLocation: y
        }), (0, t.jsx)(d.A, {
            user: l
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : I === A.eA$.NONE && _ ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(p.ES, {
            user: l,
            analyticsLocation: y,
            gameFriends: C,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: b,
            hasOutgoingPendingGameFriends: T
        }), (0, t.jsx)(d.A, {
            user: l
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(p.cO, {
            variant: "primary",
            userId: l.id,
            analyticsLocation: y,
            autoFocus: !0
        }), (0, t.jsx)(c.l, {
            userId: l.id,
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, t.jsx)(d.A, {
            user: l
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    })
}