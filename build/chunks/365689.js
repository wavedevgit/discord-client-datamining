/** chunk id: 365689 params = (module,exports,require) **/
n.d(t, {
    default: () => U
});
var l = n(627968);
n(64700);
var i = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(465424),
    c = n(50268),
    A = n(346247),
    g = n(700210),
    b = n(803664),
    m = n(29293),
    E = n(509302),
    f = n(497600),
    h = n(291247),
    x = n(239211),
    M = n(707378),
    C = n(399476),
    p = n(889460),
    I = n(448290),
    j = n(301541),
    v = n(252726),
    D = n(460597),
    S = n(198229),
    y = n(243949),
    T = n(180798),
    O = n(972432),
    _ = n(77544),
    N = n(652215),
    L = n(985018);
let U = (0, d.A)((0, r.A)(function(e) {
    let {
        user: t,
        guildId: n,
        showModalItems: r = !0,
        showMediaItems: d = !1,
        showChatItems: o = !0,
        context: U,
        onSelect: G
    } = e, R = {
        page: N.liQ.GUILD_CHANNEL,
        section: N.JJy.CHAT_USERNAME,
        object: N.ZSU.CONTEXT_MENU_ITEM
    }, B = (0, y.A)({
        userId: t.id,
        guildId: n
    }), V = (0, I.A)(t, n, U), P = (0, j.A)(t.id, U), k = (0, _.A)(t.id), F = (0, M.A)({
        user: t,
        context: U
    }), w = (0, u.D)({
        userId: t.id
    }), K = (0, f.A)({
        user: t,
        guildId: n,
        context: U
    }), W = (0, m.A)({
        user: t
    }), X = (0, O.A)(t.id), H = (0, S.A)(t.id), Y = (0, A.A)({
        guildId: n,
        userId: t.id,
        analyticsLocation: R,
        context: U
    }), J = (0, g.A)({
        user: t,
        guildId: n
    }), q = (0, p.A)({
        user: t,
        guildId: n
    }), z = (0, s.A)(null, t), Z = (0, b.A)({
        user: t
    }), $ = (0, E.A)({
        user: t
    }), Q = (0, D.A)({
        user: t
    }), ee = (0, x.A)({
        user: t,
        guildId: n,
        location: "GuildUserContextMenu"
    }), et = (0, C.A)({
        user: t,
        guildId: n,
        location: "GuildUserContextMenu"
    }), en = (0, h.A)(t, n), el = (0, T.A)(t.id, n), ei = (0, v.A)(t, n), ea = (0, c.A)({
        id: t.id,
        label: L.intl.string(L.t["/AXYnE"])
    }), er = t.isNonUserBot();
    return (0, l.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": L.intl.string(L.t.liqwPJ),
        onSelect: G,
        children: [!er && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(i.rXV, {
                children: [r && B, o && V, P, w, F, r && K, r && W, k]
            }), d && (0, l.jsx)(i.rXV, {
                children: X
            }), (0, l.jsx)(i.rXV, {
                children: r && z
            }), (0, l.jsxs)(i.rXV, {
                children: [d && H, r && Y, r && q, Z, $, Q, J, r && et, r && ee]
            }), (0, l.jsx)(i.rXV, {
                children: ei
            }), (0, l.jsxs)(i.rXV, {
                children: [el, en]
            })]
        }), (0, l.jsx)(i.rXV, {
            children: ea
        })]
    })
}, {
    object: N.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.GUILD_USER_MENU])