/** chunk id: 807651 params = (module,exports,require) **/
i.d(t, {
    A: () => p
});
var l = i(627968);
i(64700);
var n = i(630054),
    s = i(688810),
    a = i(722868),
    r = i(822775),
    o = i(982985),
    d = i(853397),
    c = i(290090),
    u = i(697250),
    A = i(102951),
    m = i(652215);

function p(e) {
    let {
        user: t,
        currentUser: i,
        guildId: p,
        channelId: x,
        displayProfile: g,
        relationshipType: h,
        onClose: f
    } = e, {
        newestAnalyticsLocation: I
    } = (0, s.Ay)(), j = (0, a.A)({
        user: t,
        guildId: p,
        channelId: x,
        displayProfile: g,
        onClose: f
    }), {
        gameFriends: v,
        hasOutgoingPendingGameFriends: N,
        hasIncomingPendingGameFriends: y
    } = (0, A.J)({
        userId: t.id
    }), E = v.length > 0 || N || y;
    return h === m.eA$.BLOCKED ? null : t.id === i.id ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.A, {
            user: t,
            guildId: p,
            onClose: f
        }), (0, l.jsx)(c.A, {
            onClose: f
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    }) : t.bot ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.e, {
            userId: t.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    }) : h === m.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.e, {
            userId: t.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p
        })]
    }) : h === m.eA$.FRIEND || h === m.eA$.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.e, {
            userId: t.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(u.Ef, {
            user: t,
            relationshipType: h,
            analyticsLocation: I
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    }) : h === m.eA$.NONE && E ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.e, {
            userId: t.id,
            onClose: n.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(u.ES, {
            user: t,
            analyticsLocation: I,
            gameFriends: v,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: y,
            hasOutgoingPendingGameFriends: N
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.cO, {
            variant: "primary",
            userId: t.id,
            analyticsLocation: I,
            autoFocus: !0
        }), (0, l.jsx)(o.l, {
            userId: t.id,
            onClose: n.A.popAll,
            variant: "secondary"
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    })
}