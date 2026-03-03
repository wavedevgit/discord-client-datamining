/** chunk id: 725756, original params: n,e,t (module,exports,require) **/
t.d(e, {
    default: () => N
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(442433),
    a = t(358367),
    d = t(793574),
    s = t(50268),
    c = t(515610),
    A = t(849867),
    o = t(795144),
    u = t(769591),
    h = t(134725),
    g = t(23724),
    _ = t(477190),
    p = t(307623),
    b = t(317910),
    y = t(848977),
    C = t(995102),
    f = t(288104),
    j = t(661504),
    v = t(969128),
    x = t(90509),
    E = t(985018);

function G(n) {
    let {
        channel: e,
        onSelect: t
    } = n, a = (0, y.A)(e), d = (0, C.Ay)(e), c = (0, f.A)(e), _ = (0, g.A)(e), p = (0, h.A)(e), b = (0, o.A)(e), v = (0, A.A)(e), G = (0, x.A)(e), O = (0, s.A)({
        id: e.id,
        label: E.intl.string(E.t["2visC6"])
    }), N = (0, u.os)("ChannelCategoryFavoritesMenu"), T = (0, j.Ay)(e);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: t,
        children: [(0, i.jsxs)(r.rXV, {
            children: [a, v, b]
        }), (0, i.jsxs)(r.rXV, {
            children: [d, N ? T : c]
        }), (0, i.jsxs)(r.rXV, {
            children: [_, p]
        }), (0, i.jsx)(r.rXV, {
            children: G
        }), (0, i.jsx)(r.rXV, {
            children: O
        })]
    })
}

function O(n) {
    let {
        channel: e,
        guild: t,
        onSelect: a
    } = n, d = (0, y.A)(e), c = (0, C.Ay)(e), A = (0, f.A)(e), x = (0, g.A)(e), G = (0, h.A)(e), O = (0, b.A)(e), N = (0, o.A)(e), T = (0, _.A)(e, t), M = (0, p.A)(e), m = (0, s.A)({
        id: e.id,
        label: E.intl.string(E.t["2visC6"])
    }), U = (0, v.A)(e), L = (0, u.os)("ChannelCategoryNormalMenu"), D = (0, j.Ay)(e);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: a,
        children: [(0, i.jsx)(r.rXV, {
            children: d
        }, "mark-as-read"), (0, i.jsxs)(r.rXV, {
            children: [U, x, G]
        }, "channel-actions"), (0, i.jsxs)(r.rXV, {
            children: [c, L ? D : A]
        }, "notifications"), (0, i.jsxs)(r.rXV, {
            children: [O, N, T, M]
        }, "admin-actions"), (0, i.jsx)(r.rXV, {
            children: m
        }, "developer-actions")]
    })
}
let N = (0, a.A)(function(n) {
    return (0, c.A)() ? (0, i.jsx)(G, {
        ...n
    }) : (0, i.jsx)(O, {
        ...n
    })
}, [d.A.CONTEXT_MENU, d.A.CHANNEL_CATEGORY_MENU])