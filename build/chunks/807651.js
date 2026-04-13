/** chunk id: 807651 params = (module,exports,require) **/
l.d(t, {
    A: () => g
});
var n = l(627968);
l(64700);
var i = l(630054),
    s = l(688810),
    a = l(591179),
    r = l(722868),
    o = l(822775),
    d = l(832696),
    c = l(982985),
    u = l(853397),
    m = l(290090),
    p = l(697250),
    x = l(102951),
    A = l(652215);

function g(e) {
    let {
        user: t,
        currentUser: l,
        guildId: g,
        originGuildId: f,
        channelId: h,
        displayProfile: j,
        relationshipType: v,
        onClose: I
    } = e, N = (0, a.X)("UserProfileModalV2Buttons"), {
        newestAnalyticsLocation: y
    } = (0, s.Ay)(), C = (0, r.A)({
        user: t,
        guildId: f,
        channelId: h,
        displayProfile: j,
        onClose: I
    }), {
        gameFriends: E,
        hasOutgoingPendingGameFriends: T,
        hasIncomingPendingGameFriends: b
    } = (0, x.J)({
        userId: t.id
    }), P = E.length > 0 || T || b;
    return v === A.eA$.BLOCKED ? null : t.id === l.id ? N ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: t.id,
            variant: "primary",
            disabled: !0
        }), (0, n.jsx)(m.A, {
            onClose: I
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g,
            viewProfileItem: C
        })]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.A, {
            user: t,
            guildId: g,
            onClose: I
        }), (0, n.jsx)(m.A, {
            onClose: I
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g,
            viewProfileItem: C
        })]
    }) : t.bot ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g,
            viewProfileItem: C
        })]
    }) : v === A.eA$.PENDING_INCOMING ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(d.A, {
            user: t
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g
        })]
    }) : v === A.eA$.FRIEND || v === A.eA$.PENDING_OUTGOING ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(p.Ef, {
            user: t,
            relationshipType: v,
            analyticsLocation: y
        }), (0, n.jsx)(d.A, {
            user: t
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g,
            viewProfileItem: C
        })]
    }) : v === A.eA$.NONE && P ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(p.ES, {
            user: t,
            analyticsLocation: y,
            gameFriends: E,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: b,
            hasOutgoingPendingGameFriends: T
        }), (0, n.jsx)(d.A, {
            user: t
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g,
            viewProfileItem: C
        })]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(p.cO, {
            variant: "primary",
            userId: t.id,
            analyticsLocation: y,
            autoFocus: !0
        }), (0, n.jsx)(c.l, {
            userId: t.id,
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, n.jsx)(d.A, {
            user: t
        }), (0, n.jsx)(u.Zt, {
            user: t,
            guildId: g,
            viewProfileItem: C
        })]
    })
}