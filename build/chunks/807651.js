/** chunk id: 807651 params = (module,exports,require) **/
i.d(l, {
    A: () => p
});
var n = i(627968);
i(64700);
var t = i(630054),
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
        user: l,
        currentUser: i,
        guildId: p,
        channelId: x,
        displayProfile: g,
        relationshipType: h,
        onClose: f
    } = e, {
        newestAnalyticsLocation: j
    } = (0, s.Ay)(), I = (0, a.A)({
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
    return h === m.eA$.BLOCKED ? null : l.id === i.id ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.A, {
            user: l,
            guildId: p,
            onClose: f
        }), (0, n.jsx)(c.A, {
            onClose: f
        }), (0, n.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: I
        })]
    }) : l.bot ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: I
        })]
    }) : h === m.eA$.PENDING_INCOMING ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(d.Zt, {
            user: l,
            guildId: p
        })]
    }) : h === m.eA$.FRIEND || h === m.eA$.PENDING_OUTGOING ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(u.Ef, {
            user: l,
            relationshipType: h,
            analyticsLocation: j
        }), (0, n.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: I
        })]
    }) : h === m.eA$.NONE && E ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.e, {
            userId: l.id,
            onClose: t.A.popAll,
            autoFocus: !0
        }), (0, n.jsx)(u.ES, {
            user: l,
            analyticsLocation: j,
            gameFriends: v,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: y,
            hasOutgoingPendingGameFriends: N
        }), (0, n.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: I
        })]
    }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.cO, {
            variant: "primary",
            userId: l.id,
            analyticsLocation: j,
            autoFocus: !0
        }), (0, n.jsx)(o.l, {
            userId: l.id,
            onClose: t.A.popAll,
            variant: "secondary"
        }), (0, n.jsx)(d.Zt, {
            user: l,
            guildId: p,
            viewProfileItem: I
        })]
    })
}