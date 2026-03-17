/** chunk id: 668569 params = (module,exports,require) **/
n.d(t, {
    default: () => U
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(465424),
    c = n(50268),
    A = n(222311),
    b = n(803664),
    g = n(29293),
    f = n(509302),
    x = n(497600),
    m = n(239211),
    h = n(707378),
    v = n(399476),
    j = n(889460),
    E = n(301541),
    p = n(460597),
    C = n(198229),
    D = n(243949),
    _ = n(972432),
    I = n(77544),
    T = n(652215),
    L = n(985018);
let U = (0, d.A)((0, r.A)(function(e) {
    let {
        user: t,
        guildId: n,
        channelId: r,
        showMediaItems: d = !1,
        mediaEngineContext: o,
        onSelect: U,
        onInteraction: O,
        appContext: y = T.BRT.APP
    } = e, N = (0, D.A)({
        userId: t.id,
        guildId: n,
        channelId: r
    }), S = (0, E.A)(t.id, y), G = (0, h.A)({
        user: t
    }), M = (0, u.D)({
        userId: t.id
    }), V = (0, x.A)({
        user: t,
        guildId: n,
        channelId: r,
        context: y
    }), P = (0, g.A)({
        user: t
    }), k = (0, I.A)(t.id), R = (0, _.A)(t.id), B = (0, C.A)(t.id, o), w = (0, j.A)({
        user: t
    }), F = (0, s.A)(null, t), X = (0, b.A)({
        user: t
    }), W = (0, f.A)({
        user: t
    }), H = (0, p.A)({
        user: t
    }), K = (0, m.A)({
        user: t
    }), J = (0, v.A)({
        user: t
    }), Y = (0, c.A)({
        id: t.id,
        label: L.intl.string(L.t["/AXYnE"])
    }), q = (0, A.A)(t), z = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": L.intl.string(L.t.liqwPJ),
        onSelect: U,
        onInteraction: O,
        children: [!z && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: q
            }), (0, i.jsxs)(l.rXV, {
                children: [N, S, M, G, V, P, k]
            }), d && (0, i.jsx)(l.rXV, {
                children: R
            }), (0, i.jsx)(l.rXV, {
                children: F
            }), (0, i.jsxs)(l.rXV, {
                children: [d && B, w, X, W, H, J, K]
            })]
        }), (0, i.jsx)(l.rXV, {
            children: Y
        })]
    })
}, {
    object: T.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.USER_GENERIC_MENU])