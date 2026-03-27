/** chunk id: 492498 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(378939),
    d = n(964486),
    u = n(475743),
    h = n(323073),
    A = n(202803),
    m = n(636922),
    _ = n(835835),
    p = n(566908),
    g = n(253932),
    f = n(734057),
    x = n(517019),
    E = n(309010),
    C = n(187508),
    I = n(576456),
    N = n(572448),
    b = n(963702),
    S = n(652215),
    T = n(985018),
    v = n(917831);
let y = {
    offset: {
        left: 4,
        right: -12
    }
};

function j(e, t, n) {
    let i = t ? C.Ay.guildFilter : null,
        s = t ? C.Ay.roleFilter : null,
        l = t ? C.Ay.everyoneFilter : null,
        a = null;
    null != e && null != i && (a = i === S.KE7.ALL_SERVERS ? null : e.getGuildId()), c.A.fetchRecentMentions({
        before: n,
        limit: S.Ue3,
        guildId: a,
        roles: s,
        everyone: l
    })
}

function R(e) {
    let {
        onJump: t
    } = e, n = (0, r.bG)([f.A, E.A], () => f.A.getChannel(E.A.getChannelId())), {
        messages: l,
        hasMore: o,
        loading: h,
        guildFilter: m,
        roleFilter: g,
        everyoneFilter: x
    } = (0, r.cf)([C.Ay], () => ({
        messages: C.Ay.getMentions(),
        hasMore: C.Ay.hasMore,
        loading: C.Ay.loading,
        guildFilter: C.Ay.guildFilter,
        roleFilter: C.Ay.roleFilter,
        everyoneFilter: C.Ay.everyoneFilter
    })), I = (0, p.Sc)(), N = (0, u.A)(m), b = (0, u.A)(g), y = (0, u.A)(x);
    s.useEffect(() => {
        C.Ay.hasLoadedEver ? (null != N && m !== N || null != b && g !== b || null != y && x !== y) && j(n, !0) : j(n, !0)
    }, [N, m, b, g, y, x, n, !0]), (0, d.Ay)(() => {
        l?.some(A.$r) && (c.A.clearMentions(), j(n, !0))
    }), s.useEffect(() => () => {
        c.A.truncateMentions(S.Ue3)
    }, []);
    let R = s.useCallback(() => null, []);
    return (0, i.jsx)(_.Ay, {
        className: a()(v.sH, {
            [v.qC]: I
        }),
        scrollerClassName: v.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function(e) {
            c.A.deleteRecentMention(e.id)
        },
        channel: n,
        messages: l,
        loading: h,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function() {
            j(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null)
        },
        canCloseAllMessages: !0,
        renderHeader: R,
        renderEmptyState: M,
        renderMessage: O,
        "aria-label": T.intl.string(T.t.jbV6MM),
        listName: "recents"
    })
}

function O(e, t) {
    return [(0, i.jsx)(L, {
        message: e,
        gotoMessage: t,
        dismissible: !0
    }, e.id)]
}

function L(e) {
    let {
        message: t,
        gotoMessage: n,
        dismissible: s
    } = e;
    if (null == t) return null;
    let l = f.A.getChannel(t.channel_id);
    if (null == l || (0, h.Jm)(l) || (0, h.$v)(l)) return null;
    let a = x.A.didAgree(l.getGuildId()),
        r = !!(0, h.Gc)(l) && !a;
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [(0, i.jsx)(N.A, {
            channel: l,
            gotoChannel: n,
            children: null != s ? (0, i.jsx)(o.JnF, {
                size: "sm",
                onClick: () => c.A.deleteRecentMention(t.id)
            }) : null
        }), (0, i.jsxs)("div", {
            className: v.zC,
            children: [(0, i.jsx)(I.A, {
                className: v.QT,
                onJump: n
            }), (0, i.jsx)(m.A, {
                message: t,
                channel: l,
                className: v.iU,
                hideAccessories: r,
                compact: g.hH.getSetting(),
                animateAvatar: !1,
                focusProps: y,
                trackAnnouncementViews: !0
            }, t.id)]
        })]
    })
}

function M() {
    return (0, i.jsx)(b.A, {
        Icon: o.XxR,
        header: T.intl.string(T.t.bgDz74),
        tip: T.intl.string(T.t.NS15vk)
    })
}