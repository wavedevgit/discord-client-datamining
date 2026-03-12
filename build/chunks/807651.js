/** chunk id: 807651 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var i = n(630054),
    s = n(688810),
    a = n(722868),
    r = n(822775),
    o = n(982985),
    d = n(853397),
    c = n(290090),
    u = n(697250),
    A = n(102951),
    m = n(652215);

function p(e) {
    let {
        user: t,
        currentUser: n,
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
    return h === m.eA$.BLOCKED ? null : t.id === n.id ? (0, l.jsxs)(l.Fragment, {
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
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    }) : h === m.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p
        })]
    }) : h === m.eA$.FRIEND || h === m.eA$.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.e, {
            userId: t.id,
            onClose: i.A.popAll,
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
            onClose: i.A.popAll,
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
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: p,
            viewProfileItem: j
        })]
    })
}