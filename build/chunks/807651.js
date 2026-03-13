/** chunk id: 807651 params = (module,exports,require) **/
n.d(l, {
    A: () => p
});
var i = n(627968);
n(64700);
var t = n(630054),
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
        user: l,
        currentUser: n,
        guildId: p,
        channelId: x,
        displayProfile: g,
        relationshipType: h,
        onClose: f
    } = e, {
        newestAnalyticsLocation: I
    } = (0, s.Ay)(), j = (0, a.A)({
        user: l,
        guildId: p,
        channelId: x,
        displayProfile: g,
        onClose: f
    }), {
        gameFriends: v,
        hasOutgoingPendingGameFriends: N,
        hasIncomingPendingGameFriends: y
    } = (0, A.J)({
        userId: l.id
    }), E = v.length > 0 || N || y;
    return h === m.eA$.BLOCKED ? null : l.id === n.id ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.A, {
            user: l,
            guildId: p,
            onClose: f
        }), (0, i.jsx)(c.A, {
            onClose: f
        }), (0, i.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: j
        })]
    }) : l.bot ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, i.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: j
        })]
    }) : h === m.eA$.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, i.jsx)(d.Zt, {
            user: l,
            guildId: p
        })]
    }) : h === m.eA$.FRIEND || h === m.eA$.PENDING_OUTGOING ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, i.jsx)(u.Ef, {
            user: l,
            relationshipType: h,
            analyticsLocation: I
        }), (0, i.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: j
        })]
    }) : h === m.eA$.NONE && E ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, i.jsx)(u.ES, {
            user: l,
            analyticsLocation: I,
            gameFriends: v,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: y,
            hasOutgoingPendingGameFriends: N
        }), (0, i.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: j
        })]
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.cO, {
            variant: "primary",
            userId: l.id,
            analyticsLocation: I,
            autoFocus: !0
        }), (0, i.jsx)(o.l, {
            userId: l.id,
            onClose: t.A.popAll,
            variant: "secondary"
        }), (0, i.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: j
        })]
    })
}