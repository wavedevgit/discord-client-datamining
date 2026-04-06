/** chunk id: 807651 params = (module,exports,require) **/
i.d(l, {
    A: () => g
});
var t = i(627968);
i(64700);
var n = i(630054),
    s = i(688810),
    a = i(591179),
    r = i(722868),
    o = i(822775),
    d = i(832696),
    c = i(982985),
    u = i(853397),
    m = i(290090),
    x = i(697250),
    A = i(102951),
    p = i(652215);

function g(e) {
    let {
        user: l,
        currentUser: i,
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
        hasIncomingPendingGameFriends: _
    } = (0, A.J)({
        userId: l.id
    }), b = C.length > 0 || T || _;
    return I === p.eA$.BLOCKED ? null : l.id === i.id ? N ? (0, t.jsxs)(t.Fragment, {
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
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : I === p.eA$.PENDING_INCOMING ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(d.A, {
            user: l
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g
        })]
    }) : I === p.eA$.FRIEND || I === p.eA$.PENDING_OUTGOING ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(x.Ef, {
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
    }) : I === p.eA$.NONE && b ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(c.e, {
            userId: l.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, t.jsx)(x.ES, {
            user: l,
            analyticsLocation: y,
            gameFriends: C,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: _,
            hasOutgoingPendingGameFriends: T
        }), (0, t.jsx)(d.A, {
            user: l
        }), (0, t.jsx)(u.Zt, {
            user: l,
            guildId: g,
            viewProfileItem: E
        })]
    }) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(x.cO, {
            variant: "primary",
            userId: l.id,
            analyticsLocation: y,
            autoFocus: !0
        }), (0, t.jsx)(c.l, {
            userId: l.id,
            onClose: n.A.popAll,
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