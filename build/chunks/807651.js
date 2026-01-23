/** Chunk was on 64228 **/
/** chunk id: 807651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968);
n(64700);
var i = n(630054),
    r = n(688810),
    s = n(722868),
    o = n(822775),
    a = n(982985),
    c = n(853397),
    d = n(290090),
    u = n(697250),
    p = n(102951),
    m = n(652215);

function f(e) {
    let {
        user: t,
        currentUser: n,
        guildId: f,
        channelId: A,
        displayProfile: x,
        relationshipType: j,
        onClose: h
    } = e, {
        newestAnalyticsLocation: g
    } = (0, r.Ay)(), v = (0, s.A)({
        user: t,
        guildId: f,
        channelId: A,
        displayProfile: x,
        onClose: h
    }), {
        gameFriends: b,
        hasOutgoingPendingGameFriends: I,
        hasIncomingPendingGameFriends: y
    } = (0, p.J)({
        userId: t.id
    }), _ = b.length > 0 || I || y;
    return j === m.eA$.BLOCKED ? null : t.id === n.id ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.A, {
            user: t,
            guildId: f,
            onClose: h
        }), (0, l.jsx)(d.A, {
            onClose: h
        }), (0, l.jsx)(c.Zt, {
            user: t,
            guildId: f,
            viewProfileItem: v
        })]
    }) : t.bot ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(c.Zt, {
            user: t,
            guildId: f,
            viewProfileItem: v
        })]
    }) : j === m.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(c.Zt, {
            user: t,
            guildId: f
        })]
    }) : j === m.eA$.FRIEND || j === m.eA$.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(u.Ef, {
            user: t,
            relationshipType: j,
            analyticsLocation: g
        }), (0, l.jsx)(c.Zt, {
            user: t,
            guildId: f,
            viewProfileItem: v
        })]
    }) : j === m.eA$.NONE && _ ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(u.ES, {
            user: t,
            analyticsLocation: g,
            gameFriends: b,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: y,
            hasOutgoingPendingGameFriends: I
        }), (0, l.jsx)(c.Zt, {
            user: t,
            guildId: f,
            viewProfileItem: v
        })]
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.cO, {
            variant: "primary",
            userId: t.id,
            analyticsLocation: g,
            autoFocus: !0
        }), (0, l.jsx)(a.l, {
            userId: t.id,
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, l.jsx)(c.Zt, {
            user: t,
            guildId: f,
            viewProfileItem: v
        })]
    })
}