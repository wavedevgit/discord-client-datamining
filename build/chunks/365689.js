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
    o = n(468389),
    s = n(793574),
    u = n(50268),
    c = n(346247),
    A = n(700210),
    g = n(803664),
    m = n(29293),
    b = n(509302),
    E = n(497600),
    f = n(291247),
    h = n(239211),
    x = n(707378),
    M = n(399476),
    p = n(889460),
    C = n(448290),
    y = n(301541),
    S = n(252726),
    I = n(460597),
    j = n(198229),
    D = n(243949),
    v = n(180798),
    O = n(972432),
    T = n(77544),
    _ = n(652215),
    L = n(985018);
let U = (0, d.A)((0, r.A)(function(e) {
    let {
        user: t,
        guildId: n,
        showModalItems: r = !0,
        showMediaItems: d = !1,
        showChatItems: s = !0,
        context: U,
        onSelect: N
    } = e, R = {
        page: _.liQ.GUILD_CHANNEL,
        section: _.JJy.CHAT_USERNAME,
        object: _.ZSU.CONTEXT_MENU_ITEM
    }, G = (0, D.A)({
        userId: t.id,
        guildId: n
    }), B = (0, C.A)(t, n, U), V = (0, y.A)(t.id, U), P = (0, T.A)(t.id), k = (0, x.A)({
        user: t,
        context: U
    }), w = (0, E.A)({
        user: t,
        guildId: n,
        context: U
    }), F = (0, m.A)({
        user: t
    }), K = (0, O.A)(t.id), X = (0, j.A)(t.id), H = (0, c.A)({
        guildId: n,
        userId: t.id,
        analyticsLocation: R,
        context: U
    }), W = (0, A.A)({
        user: t,
        guildId: n
    }), Y = (0, p.A)({
        user: t,
        guildId: n
    }), J = (0, o.A)(null, t), q = (0, g.A)({
        user: t
    }), Z = (0, b.A)({
        user: t
    }), z = (0, I.A)({
        user: t
    }), $ = (0, h.A)({
        user: t,
        guildId: n,
        location: "GuildUserContextMenu"
    }), Q = (0, M.A)({
        user: t,
        guildId: n,
        location: "GuildUserContextMenu"
    }), ee = (0, f.A)(t, n), et = (0, v.A)(t.id, n), en = (0, S.A)(t, n), el = (0, u.A)({
        id: t.id,
        label: L.intl.string(L.t["/AXYnE"])
    }), ei = t.isNonUserBot();
    return (0, l.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": L.intl.string(L.t.liqwPJ),
        onSelect: N,
        children: [!ei && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(i.rXV, {
                children: [r && G, s && B, V, k, r && w, r && F, P]
            }), d && (0, l.jsx)(i.rXV, {
                children: K
            }), (0, l.jsx)(i.rXV, {
                children: r && J
            }), (0, l.jsxs)(i.rXV, {
                children: [d && X, r && H, r && Y, q, Z, z, W, r && Q, r && $]
            }), (0, l.jsx)(i.rXV, {
                children: en
            }), (0, l.jsxs)(i.rXV, {
                children: [et, ee]
            })]
        }), (0, l.jsx)(i.rXV, {
            children: el
        })]
    })
}, {
    object: _.ZSU.CONTEXT_MENU
}), [s.A.CONTEXT_MENU, s.A.GUILD_USER_MENU])