/** chunk id: 492498 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(378939),
    c = n(964486),
    u = n(475743),
    h = n(323073),
    A = n(202803),
    _ = n(636922),
    m = n(835835),
    p = n(566908),
    g = n(253932),
    f = n(734057),
    E = n(517019),
    x = n(309010),
    I = n(187508),
    C = n(576456),
    N = n(572448),
    T = n(963702),
    S = n(652215),
    b = n(985018),
    y = n(575863);
let v = {
    offset: {
        left: 4,
        right: -12
    }
};

function R(e, t, n) {
    let i = t ? I.Ay.guildFilter : null,
        l = t ? I.Ay.roleFilter : null,
        s = t ? I.Ay.everyoneFilter : null,
        a = null;
    null != e && null != i && (a = i === S.KE7.ALL_SERVERS ? null : e.getGuildId()), d.A.fetchRecentMentions({
        before: n,
        limit: S.Ue3,
        guildId: a,
        roles: l,
        everyone: s
    })
}

function j(e) {
    let {
        onJump: t
    } = e, n = (0, r.bG)([f.A, x.A], () => f.A.getChannel(x.A.getChannelId())), {
        messages: s,
        hasMore: o,
        loading: h,
        guildFilter: _,
        roleFilter: g,
        everyoneFilter: E
    } = (0, r.cf)([I.Ay], () => ({
        messages: I.Ay.getMentions(),
        hasMore: I.Ay.hasMore,
        loading: I.Ay.loading,
        guildFilter: I.Ay.guildFilter,
        roleFilter: I.Ay.roleFilter,
        everyoneFilter: I.Ay.everyoneFilter
    })), C = (0, p.Sc)(), N = (0, u.A)(_), T = (0, u.A)(g), v = (0, u.A)(E);
    l.useEffect(() => {
        I.Ay.hasLoadedEver ? (null != N && _ !== N || null != T && g !== T || null != v && E !== v) && R(n, !0) : R(n, !0)
    }, [N, _, T, g, v, E, n, !0]), (0, c.Ay)(() => {
        s?.some(A.$r) && (d.A.clearMentions(), R(n, !0))
    }), l.useEffect(() => () => {
        d.A.truncateMentions(S.Ue3)
    }, []);
    let j = l.useCallback(() => null, []);
    return (0, i.jsx)(m.Ay, {
        className: a()(y.sH, {
            [y.qC]: C
        }),
        scrollerClassName: y.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function(e) {
            d.A.deleteRecentMention(e.id)
        },
        channel: n,
        messages: s,
        loading: h,
        hasMore: o,
        analyticsName: "Recent Mentions",
        loadMore: function() {
            R(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null)
        },
        canCloseAllMessages: !0,
        renderHeader: j,
        renderEmptyState: M,
        renderMessage: O,
        "aria-label": b.intl.string(b.t.jbV6MM),
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
        dismissible: l
    } = e;
    if (null == t) return null;
    let s = f.A.getChannel(t.channel_id);
    if (null == s || (0, h.Jm)(s) || (0, h.$v)(s)) return null;
    let a = E.A.didAgree(s.getGuildId()),
        r = !!(0, h.Gc)(s) && !a;
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [(0, i.jsx)(N.A, {
            channel: s,
            gotoChannel: n,
            children: null != l ? (0, i.jsx)(o.JnF, {
                size: "sm",
                onClick: () => d.A.deleteRecentMention(t.id)
            }) : null
        }), (0, i.jsxs)("div", {
            className: y.zC,
            children: [(0, i.jsx)(C.A, {
                className: y.QT,
                onJump: n
            }), (0, i.jsx)(_.A, {
                message: t,
                channel: s,
                className: y.iU,
                hideAccessories: r,
                compact: g.hH.getSetting(),
                animateAvatar: !1,
                focusProps: v,
                trackAnnouncementViews: !0
            }, t.id)]
        })]
    })
}

function M() {
    return (0, i.jsx)(T.A, {
        Icon: o.XxR,
        header: b.intl.string(b.t.bgDz74),
        tip: b.intl.string(b.t.NS15vk)
    })
}