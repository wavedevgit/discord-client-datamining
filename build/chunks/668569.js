/** chunk id: 668569 params = (module,exports,require) **/
n.d(t, {
    default: () => U
});
var i = n(627968);
n(64700);
var l = n(397927),
    d = n(442433),
    r = n(847767),
    a = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(465424),
    c = n(50268),
    A = n(222311),
    g = n(803664),
    b = n(29293),
    f = n(509302),
    x = n(497600),
    m = n(239211),
    h = n(707378),
    v = n(399476),
    j = n(889460),
    E = n(301541),
    p = n(460597),
    C = n(198229),
    _ = n(243949),
    D = n(972432),
    I = n(77544),
    L = n(652215),
    T = n(985018);
let U = (0, a.A)((0, r.A)(function(e) {
    let {
        user: t,
        guildId: n,
        channelId: r,
        showMediaItems: a = !1,
        mediaEngineContext: o,
        onSelect: U,
        onInteraction: O,
        appContext: N = L.BRT.APP
    } = e, y = (0, _.A)({
        userId: t.id,
        guildId: n,
        channelId: r
    }), G = (0, E.A)(t.id, N), S = (0, h.A)({
        user: t
    }), V = (0, u.D)({
        userId: t.id
    }), M = (0, x.A)({
        user: t,
        guildId: n,
        channelId: r,
        context: N
    }), P = (0, b.A)({
        user: t
    }), k = (0, I.A)(t.id), R = (0, D.A)(t.id), B = (0, C.A)(t.id, o), w = (0, j.A)({
        user: t
    }), F = (0, s.A)(null, t), X = (0, g.A)({
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
        label: T.intl.string(T.t["/AXYnE"])
    }), q = (0, A.A)(t), z = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: d.Z_,
        "aria-label": T.intl.string(T.t.liqwPJ),
        onSelect: U,
        onInteraction: O,
        children: [!z && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: q
            }), (0, i.jsxs)(l.rXV, {
                children: [y, G, V, S, M, P, k]
            }), a && (0, i.jsx)(l.rXV, {
                children: R
            }), (0, i.jsx)(l.rXV, {
                children: F
            }), (0, i.jsxs)(l.rXV, {
                children: [a && B, w, X, W, H, J, K]
            })]
        }), (0, i.jsx)(l.rXV, {
            children: Y
        })]
    })
}, {
    object: L.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.USER_GENERIC_MENU])