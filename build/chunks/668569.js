/** chunk id: 668569, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => D
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(442433),
    a = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(50268),
    c = n(222311),
    A = n(803664),
    g = n(29293),
    b = n(509302),
    f = n(497600),
    m = n(239211),
    h = n(707378),
    x = n(399476),
    E = n(889460),
    p = n(301541),
    v = n(460597),
    j = n(198229),
    _ = n(243949),
    C = n(972432),
    L = n(77544),
    U = n(652215),
    y = n(985018);
let D = (0, d.A)((0, a.A)(function(t) {
    let {
        user: e,
        guildId: n,
        channelId: a,
        showMediaItems: d = !1,
        mediaEngineContext: o,
        onSelect: D,
        onInteraction: I,
        appContext: O = U.BRT.APP
    } = t, T = (0, _.A)({
        userId: e.id,
        guildId: n,
        channelId: a
    }), V = (0, p.A)(e.id, O), S = (0, h.A)({
        user: e
    }), M = (0, f.A)({
        user: e,
        guildId: n,
        channelId: a,
        context: O
    }), N = (0, g.A)({
        user: e
    }), G = (0, L.A)(e.id), P = (0, C.A)(e.id), k = (0, j.A)(e.id, o), R = (0, E.A)({
        user: e
    }), B = (0, s.A)(null, e), w = (0, A.A)({
        user: e
    }), F = (0, b.A)({
        user: e
    }), X = (0, v.A)({
        user: e
    }), H = (0, m.A)({
        user: e
    }), W = (0, x.A)({
        user: e
    }), K = (0, u.A)({
        id: e.id,
        label: y.intl.string(y.t["/AXYnE"])
    }), J = (0, c.A)(e), Y = e.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: r.Z_,
        "aria-label": y.intl.string(y.t.liqwPJ),
        onSelect: D,
        onInteraction: I,
        children: [!Y && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: J
            }), (0, i.jsxs)(l.rXV, {
                children: [T, V, S, M, N, G]
            }), d && (0, i.jsx)(l.rXV, {
                children: P
            }), (0, i.jsx)(l.rXV, {
                children: B
            }), (0, i.jsxs)(l.rXV, {
                children: [d && k, R, w, F, X, W, H]
            })]
        }), (0, i.jsx)(l.rXV, {
            children: K
        })]
    })
}, {
    object: U.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.USER_GENERIC_MENU])