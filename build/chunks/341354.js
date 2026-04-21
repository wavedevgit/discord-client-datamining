/** chunk id: 341354 params = (module,exports,require) **/
n.d(t, {
    default: () => L
});
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(442433),
    a = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(50268),
    c = n(222311),
    A = n(803664),
    g = n(29293),
    f = n(509302),
    E = n(497600),
    b = n(239211),
    h = n(707378),
    v = n(399476),
    I = n(889460),
    x = n(460597),
    p = n(198229),
    m = n(243949),
    D = n(972432),
    N = n(77544),
    _ = n(566396),
    M = n(571964),
    S = n(708653),
    y = n(297460),
    C = n(652215),
    U = n(985018);
let L = (0, d.A)((0, a.A)(function(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        showMediaItems: d = !1,
        mediaEngineContext: o,
        onSelect: L,
        onInteraction: j,
        appContext: O = C.BRT.OVERLAY,
        friendGroupId: k,
        showManageFriendGroupsItems: R = !1,
        onMessageUser: V,
        widgetType: T
    } = e, F = (0, m.A)({
        userId: t.id,
        guildId: n,
        channelId: a
    }), G = (0, y.A)({
        kind: "DM_USER",
        userId: t.id,
        onOpenOverride: V
    }, T), {
        toggleFavoriteItem: w
    } = (0, S.As)(t.id, T), B = (0, h.A)({
        user: t
    }), H = (0, _.A)(t.id), P = (0, E.A)({
        user: t,
        guildId: n,
        channelId: a,
        context: O
    }), X = (0, g.A)({
        user: t
    }), W = (0, M.A)({
        user: t,
        groupId: k
    }), Y = (0, N.A)(t.id), K = (0, D.A)(t.id), Z = (0, p.A)(t.id, o), $ = (0, I.A)({
        user: t
    }), z = (0, s.A)(null, t), J = (0, A.A)({
        user: t
    }), q = (0, f.A)({
        user: t
    }), Q = (0, x.A)({
        user: t
    }), ee = (0, b.A)({
        user: t
    }), et = (0, v.A)({
        user: t
    }), en = (0, u.A)({
        id: t.id,
        label: U.intl.string(U.t["/AXYnE"])
    }), el = (0, c.A)(t), ei = t.isNonUserBot();
    return (0, l.jsxs)(i.W1t, {
        navId: "overlay-user-context",
        onClose: r.Z_,
        "aria-label": U.intl.string(U.t.liqwPJ),
        onSelect: L,
        onInteraction: j,
        children: [!ei && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(i.rXV, {
                children: el
            }), (0, l.jsxs)(i.rXV, {
                children: [G, B, H, Y]
            }), (0, l.jsxs)(i.rXV, {
                children: [F, P, X, w, R ? W : null]
            }), d && (0, l.jsx)(i.rXV, {
                children: K
            }), (0, l.jsx)(i.rXV, {
                children: z
            }), (0, l.jsxs)(i.rXV, {
                children: [d && Z, $, J, q, Q, et, ee]
            })]
        }), (0, l.jsx)(i.rXV, {
            children: en
        })]
    })
}, {
    object: C.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.USER_GENERIC_MENU])