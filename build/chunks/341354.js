/** chunk id: 341354, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => M
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    o = n(358367),
    u = n(468389),
    s = n(793574),
    d = n(50268),
    c = n(222311),
    A = n(803664),
    f = n(29293),
    b = n(509302),
    g = n(497600),
    p = n(239211),
    v = n(707378),
    O = n(399476),
    y = n(889460),
    E = n(460597),
    m = n(198229),
    h = n(243949),
    j = n(972432),
    I = n(77544),
    D = n(571964),
    x = n(708653),
    S = n(297460),
    _ = n(652215),
    N = n(985018);
let M = (0, o.A)((0, a.A)(function(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        showMediaItems: o = !1,
        mediaEngineContext: s,
        onSelect: M,
        onInteraction: P,
        appContext: w = _.BRT.OVERLAY,
        friendGroupId: k,
        showManageFriendGroupsItems: C = !1,
        onMessageUser: L,
        widgetType: U
    } = e, R = (0, h.A)({
        userId: t.id,
        guildId: n,
        channelId: a
    }), V = (0, S.A)({
        kind: "DM_USER",
        userId: t.id,
        onOpenOverride: L
    }, U), {
        toggleFavoriteItem: T
    } = (0, x.As)(t.id, U), G = (0, v.A)({
        user: t
    }), F = (0, g.A)({
        user: t,
        guildId: n,
        channelId: a,
        context: w
    }), B = (0, f.A)({
        user: t
    }), H = (0, D.A)({
        user: t,
        groupId: k
    }), X = (0, I.A)(t.id), Y = (0, j.A)(t.id), W = (0, m.A)(t.id, s), K = (0, y.A)({
        user: t
    }), Z = (0, u.A)(null, t), J = (0, A.A)({
        user: t
    }), q = (0, b.A)({
        user: t
    }), $ = (0, E.A)({
        user: t
    }), z = (0, p.A)({
        user: t
    }), Q = (0, O.A)({
        user: t
    }), ee = (0, d.A)({
        id: t.id,
        label: N.intl.string(N.t["/AXYnE"])
    }), et = (0, c.A)(t), en = t.isNonUserBot();
    return (0, r.jsxs)(i.W1t, {
        navId: "overlay-user-context",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t.liqwPJ),
        onSelect: M,
        onInteraction: P,
        children: [!en && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(i.rXV, {
                children: et
            }), (0, r.jsxs)(i.rXV, {
                children: [R, V, T, G, F, B, C ? H : null, X]
            }), o && (0, r.jsx)(i.rXV, {
                children: Y
            }), (0, r.jsx)(i.rXV, {
                children: Z
            }), (0, r.jsxs)(i.rXV, {
                children: [o && W, K, J, q, $, Q, z]
            })]
        }), (0, r.jsx)(i.rXV, {
            children: ee
        })]
    })
}, {
    object: _.ZSU.CONTEXT_MENU
}), [s.A.CONTEXT_MENU, s.A.OVERLAY, s.A.USER_GENERIC_MENU])