/** chunk id: 725756, original params: n,e,t (module,exports,require) **/
t.d(e, {
    default: () => O
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(442433),
    a = t(358367),
    s = t(793574),
    d = t(50268),
    c = t(515610),
    A = t(849867),
    o = t(795144),
    u = t(769591),
    g = t(134725),
    h = t(23724),
    _ = t(477190),
    p = t(307623),
    b = t(317910),
    y = t(848977),
    C = t(995102),
    f = t(288104),
    v = t(661504),
    j = t(969128),
    x = t(90509),
    E = t(985018);

function G(n) {
    let {
        channel: e,
        onSelect: t
    } = n, a = (0, y.A)(e), s = (0, C.Ay)(e), c = (0, f.A)(e), _ = (0, h.A)(e), p = (0, g.A)(e), b = (0, o.A)(e), j = (0, A.A)(e), G = (0, x.A)(e), N = (0, d.A)({
        id: e.id,
        label: E.intl.string(E.t["2visC6"])
    }), O = (0, u.os)("ChannelCategoryFavoritesMenu"), T = (0, v.Ay)(e);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-needs-review": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: t,
        children: [(0, i.jsxs)(r.rXV, {
            children: [a, j, b]
        }), (0, i.jsxs)(r.rXV, {
            children: [s, O ? T : c]
        }), (0, i.jsxs)(r.rXV, {
            children: [_, p]
        }), (0, i.jsx)(r.rXV, {
            children: G
        }), (0, i.jsx)(r.rXV, {
            children: N
        })]
    })
}

function N(n) {
    let {
        channel: e,
        guild: t,
        onSelect: a
    } = n, s = (0, y.A)(e), c = (0, C.Ay)(e), A = (0, f.A)(e), x = (0, h.A)(e), G = (0, g.A)(e), N = (0, b.A)(e), O = (0, o.A)(e), T = (0, _.A)(e, t), M = (0, p.A)(e), m = (0, d.A)({
        id: e.id,
        label: E.intl.string(E.t["2visC6"])
    }), U = (0, j.A)(e), L = (0, u.os)("ChannelCategoryNormalMenu"), D = (0, v.Ay)(e);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: a,
        children: [(0, i.jsx)(r.rXV, {
            children: s
        }, "mark-as-read"), (0, i.jsxs)(r.rXV, {
            children: [U, x, G]
        }, "channel-actions"), (0, i.jsxs)(r.rXV, {
            children: [c, L ? D : A]
        }, "notifications"), (0, i.jsxs)(r.rXV, {
            children: [N, O, T, M]
        }, "admin-actions"), (0, i.jsx)(r.rXV, {
            children: m
        }, "developer-actions")]
    })
}
let O = (0, a.A)(function(n) {
    return (0, c.A)() ? (0, i.jsx)(G, {
        ...n
    }) : (0, i.jsx)(N, {
        ...n
    })
}, [s.A.CONTEXT_MENU, s.A.CHANNEL_CATEGORY_MENU])