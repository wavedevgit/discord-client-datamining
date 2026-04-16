/** chunk id: 807651 params = (module,exports,require) **/
l.d(n, {
    A: () => g
});
var t = l(627968);
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
    A = l(102951),
    x = l(652215);

function g(e) {
    let {
        user: n,
        currentUser: l,
        guildId: g,
        originGuildId: f,
        channelId: h,
        displayProfile: v,
        relationshipType: j,
        onClose: I
    } = e, N = (0, a.X)("UserProfileModalV2Buttons"), {
        newestAnalyticsLocation: y
    } = (0, s.Ay)(), C = (0, r.A)({
        user: n,
        guildId: f,
        channelId: h,
        displayProfile: v,
        onClose: I
    }), {
        gameFriends: b,
        hasOutgoingPendingGameFriends: E,
        hasIncomingPendingGameFriends: T
    } = (0, A.J)({
        userId: n.id
    }), P = b.length > 0 || E || T;
    return j === x.eA$.BLOCKED ? null : n.id === l.id ? N ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: n.id,
            variant: "primary",
            disabled: !0
        }), (0, t.jsx)(m.A, {
            onClose: I
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g,
            viewProfileItem: C
        })]
    }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(o.A, {
            user: n,
            guildId: g,
            onClose: I
        }), (0, t.jsx)(m.A, {
            onClose: I
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g,
            viewProfileItem: C
        })]
    }) : n.bot ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: n.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g,
            viewProfileItem: C
        })]
    }) : j === x.eA$.PENDING_INCOMING ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: n.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(d.A, {
            user: n
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g
        })]
    }) : j === x.eA$.FRIEND || j === x.eA$.PENDING_OUTGOING ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: n.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(p.Ef, {
            user: n,
            relationshipType: j,
            analyticsLocation: y
        }), (0, t.jsx)(d.A, {
            user: n
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g,
            viewProfileItem: C
        })]
    }) : j === x.eA$.NONE && P ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: n.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(p.ES, {
            user: n,
            analyticsLocation: y,
            gameFriends: b,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: T,
            hasOutgoingPendingGameFriends: E
        }), (0, t.jsx)(d.A, {
            user: n
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g,
            viewProfileItem: C
        })]
    }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(p.cO, {
            variant: "primary",
            userId: n.id,
            analyticsLocation: y,
            autoFocus: !0
        }), (0, t.jsx)(c.l, {
            userId: n.id,
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, t.jsx)(d.A, {
            user: n
        }), (0, t.jsx)(u.Zt, {
            user: n,
            guildId: g,
            viewProfileItem: C
        })]
    })
}