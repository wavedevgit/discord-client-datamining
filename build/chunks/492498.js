/** Chunk was on 77870 **/
/** chunk id: 492498, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(378939),
    u = n(964486),
    d = n(475743),
    p = n(323073),
    h = n(202803),
    f = n(636922),
    g = n(835835),
    m = n(566908),
    b = n(253932),
    A = n(734057),
    y = n(517019),
    _ = n(309010),
    O = n(187508),
    j = n(576456),
    v = n(572448),
    x = n(963702),
    E = n(652215),
    C = n(985018),
    S = n(318136);
let I = {
    offset: {
        left: 4,
        right: -12
    }
};

function N(e, t, n) {
    let r = t ? O.Ay.guildFilter : null,
        l = t ? O.Ay.roleFilter : null,
        i = t ? O.Ay.everyoneFilter : null,
        s = null;
    null != e && null != r && (s = r === E.KE7.ALL_SERVERS ? null : e.getGuildId()), c.A.fetchRecentMentions({
        before: n,
        limit: E.Ue3,
        guildId: s,
        roles: l,
        everyone: i
    })
}

function T(e) {
    let {
        onJump: t
    } = e, n = (0, a.bG)([A.A, _.A], () => A.A.getChannel(_.A.getChannelId())), {
        messages: i,
        hasMore: o,
        loading: p,
        guildFilter: f,
        roleFilter: b,
        everyoneFilter: y
    } = (0, a.cf)([O.Ay], () => ({
        messages: O.Ay.getMentions(),
        hasMore: O.Ay.hasMore,
        loading: O.Ay.loading,
        guildFilter: O.Ay.guildFilter,
        roleFilter: O.Ay.roleFilter,
        everyoneFilter: O.Ay.everyoneFilter
    })), j = (0, m.Sc)({
        location: "RecentMentions"
    }), v = (0, d.A)(f), x = (0, d.A)(b), I = (0, d.A)(y);
    l.useEffect(() => {
        O.Ay.hasLoadedEver ? (null != v && f !== v || null != x && b !== x || null != I && y !== I) && N(n, !0) : N(n, !0)
    }, [v, f, x, b, I, y, n, !0]), (0, u.Ay)(() => {
        (null == i ? void 0 : i.some(h.$r)) && (c.A.clearMentions(), N(n, !0))
    }), l.useEffect(() => () => {
        c.A.truncateMentions(E.Ue3)
    }, []);
    let T = l.useCallback(() => null, []);
    return (0, r.jsx)(g.Ay, {
        className: s()(S.sH, {
            [S.qC]: j
        }),
        scrollerClassName: S.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function(e) {
            c.A.deleteRecentMention(e.id)
        },
        channel: n,
        messages: i,
        loading: p,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function() {
            N(n, !0, null != i && i.length > 0 ? i[i.length - 1].id : null)
        },
        canCloseAllMessages: !0,
        renderHeader: T,
        renderEmptyState: R,
        renderMessage: P,
        "aria-label": C.intl.string(C.t.jbV6MM),
        listName: "recents"
    })
}

function P(e, t) {
    return [(0, r.jsx)(w, {
        message: e,
        gotoMessage: t,
        dismissible: !0
    }, e.id)]
}

function w(e) {
    let {
        message: t,
        gotoMessage: n,
        dismissible: l
    } = e;
    if (null == t) return null;
    let i = A.A.getChannel(t.channel_id);
    if (null == i || (0, p.Jm)(i) || (0, p.$v)(i)) return null;
    let s = y.A.didAgree(i.getGuildId()),
        a = !!(0, p.Gc)(i) && !s;
    return (0, r.jsxs)("div", {
        className: S.kL,
        children: [(0, r.jsx)(v.A, {
            channel: i,
            gotoChannel: n,
            children: null != l ? (0, r.jsx)(o.JnF, {
                size: "sm",
                onClick: () => c.A.deleteRecentMention(t.id)
            }) : null
        }), (0, r.jsxs)("div", {
            className: S.zC,
            children: [(0, r.jsx)(j.A, {
                className: S.QT,
                onJump: n
            }), (0, r.jsx)(f.A, {
                message: t,
                channel: i,
                className: S.iU,
                hideAccessories: a,
                compact: b.hH.getSetting(),
                animateAvatar: !1,
                focusProps: I,
                trackAnnouncementViews: !0
            }, t.id)]
        })]
    })
}

function R() {
    return (0, r.jsx)(x.A, {
        Icon: o.XxR,
        header: C.intl.string(C.t.bgDz74),
        tip: C.intl.string(C.t.NS15vk)
    })
}