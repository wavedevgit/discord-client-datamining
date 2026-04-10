/** chunk id: 807651 params = (module,exports,require) **/
t.d(l, {
    A: () => g
});
var n = t(627968);
t(64700);
var i = t(630054),
    s = t(688810),
    a = t(591179),
    r = t(722868),
    o = t(822775),
    d = t(832696),
    c = t(982985),
    u = t(853397),
    m = t(290090),
    x = t(697250),
    p = t(102951),
    A = t(652215);

function g(e) {
    let {
        user: l,
        currentUser: t,
        guildId: g,
        originGuildId: f,
        channelId: h,
        displayProfile: j,
        relationshipType: v,
        onClose: I
    } = e, N = (0, a.X)("UserProfileModalV2Buttons"), {
        newestAnalyticsLocation: y
    } = (0, s.Ay)(), C = (0, r.A)({
        user: l,
        guildId: f,
        channelId: h,
        displayProfile: j,
        onClose: I
    }), {
        gameFriends: E,
        hasOutgoingPendingGameFriends: T,
        hasIncomingPendingGameFriends: b
    } = (0, p.J)({
        userId: l.id
    }), O = E.length > 0 || T || b;
    return v === A.eA$.BLOCKED ? null : l.id === t.id ? N ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: l.id,
            variant: "primary",
            disabled: !0
        }), (0, n.jsx)(m.A, {
            onClose: I
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: C
        })]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.A, {
            user: l,
            guildId: g,
            onClose: I
        }), (0, n.jsx)(m.A, {
            onClose: I
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: C
        })]
    }) : l.bot ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: C
        })]
    }) : v === A.eA$.PENDING_INCOMING ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(d.A, {
            user: l
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g
        })]
    }) : v === A.eA$.FRIEND || v === A.eA$.PENDING_OUTGOING ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(x.Ef, {
            user: l,
            relationshipType: v,
            analyticsLocation: y
        }), (0, n.jsx)(d.A, {
            user: l
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: C
        })]
    }) : v === A.eA$.NONE && O ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(c.e, {
            userId: l.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(x.ES, {
            user: l,
            analyticsLocation: y,
            gameFriends: E,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: b,
            hasOutgoingPendingGameFriends: T
        }), (0, n.jsx)(d.A, {
            user: l
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: C
        })]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(x.cO, {
            variant: "primary",
            userId: l.id,
            analyticsLocation: y,
            autoFocus: !0
        }), (0, n.jsx)(c.l, {
            userId: l.id,
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, n.jsx)(d.A, {
            user: l
        }), (0, n.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: C
        })]
    })
}