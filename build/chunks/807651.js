/** chunk id: 807651, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var i = n(630054),
    r = n(688810),
    s = n(722868),
    o = n(822775),
    a = n(982985),
    d = n(853397),
    c = n(290090),
    u = n(697250),
    p = n(102951),
    f = n(652215);

function m(e) {
    let {
        user: t,
        currentUser: n,
        guildId: m,
        channelId: A,
        displayProfile: x,
        relationshipType: g,
        onClose: j
    } = e, {
        newestAnalyticsLocation: h
    } = (0, r.Ay)(), b = (0, s.A)({
        user: t,
        guildId: m,
        channelId: A,
        displayProfile: x,
        onClose: j
    }), {
        gameFriends: v,
        hasOutgoingPendingGameFriends: I,
        hasIncomingPendingGameFriends: y
    } = (0, p.J)({
        userId: t.id
    }), _ = v.length > 0 || I || y;
    return g === f.eA$.BLOCKED ? null : t.id === n.id ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.A, {
            user: t,
            guildId: m,
            onClose: j
        }), (0, l.jsx)(c.A, {
            onClose: j
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: m,
            viewProfileItem: b
        })]
    }) : t.bot ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: m,
            viewProfileItem: b
        })]
    }) : g === f.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: m
        })]
    }) : g === f.eA$.FRIEND || g === f.eA$.PENDING_OUTGOING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(u.Ef, {
            user: t,
            relationshipType: g,
            analyticsLocation: h
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: m,
            viewProfileItem: b
        })]
    }) : g === f.eA$.NONE && _ ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.e, {
            userId: t.id,
            onClose: i.A.popAll,
            autoFocus: !0
        }), (0, l.jsx)(u.ES, {
            user: t,
            analyticsLocation: h,
            gameFriends: v,
            tooltipPosition: "top",
            tooltipAlign: "center",
            hasIncomingPendingGameFriends: y,
            hasOutgoingPendingGameFriends: I
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: m,
            viewProfileItem: b
        })]
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.cO, {
            variant: "primary",
            userId: t.id,
            analyticsLocation: h,
            autoFocus: !0
        }), (0, l.jsx)(a.l, {
            userId: t.id,
            onClose: i.A.popAll,
            variant: "secondary"
        }), (0, l.jsx)(d.Zt, {
            user: t,
            guildId: m,
            viewProfileItem: b
        })]
    })
}