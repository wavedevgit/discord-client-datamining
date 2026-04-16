/** chunk id: 370372 params = (module,exports,require) **/
r.d(e, {
    default: () => L
});
var i = r(627968);
r(64700);
var l = r(397927),
    t = r(442433),
    a = r(847767),
    s = r(358367),
    c = r(468389),
    d = r(793574),
    A = r(50268),
    o = r(93055),
    h = r(133238),
    x = r(795144),
    u = r(979807),
    j = r(671470),
    X = r(769591),
    V = r(465371),
    N = r(533957),
    C = r(886393),
    E = r(477190),
    g = r(307623),
    p = r(317910),
    _ = r(475777),
    b = r(848977),
    v = r(995102),
    S = r(288104),
    m = r(661504),
    f = r(969128),
    k = r(704543),
    M = r(652215),
    T = r(985018);

function H(n) {
    let {
        channel: e,
        onSelect: r
    } = n, a = (0, b.A)(e), s = (0, C.A)(e), d = (0, h.y)(e), o = (0, x.A)(e), V = (0, u.A)(e), N = (0, j.A)(e), E = (0, v.A)(e), g = (0, S.A)(e), p = (0, A.A)({
        id: e.id,
        label: T.intl.string(T.t.gFHI3k)
    }), _ = (0, c.A)(e), f = (0, m.Ay)(e), k = (0, X.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": T.intl.string(T.t.Xm41aV),
        onSelect: r,
        children: [(0, i.jsx)(l.rXV, {
            children: a
        }), (0, i.jsxs)(l.rXV, {
            children: [V, N, o]
        }), (0, i.jsx)(l.rXV, {
            children: s
        }), (0, i.jsxs)(l.rXV, {
            children: [E, k ? f : g]
        }), (0, i.jsx)(l.rXV, {
            children: _
        }), (0, i.jsx)(l.rXV, {
            children: d
        }), (0, i.jsx)(l.rXV, {
            children: p
        })]
    })
}

function I(n) {
    let {
        channel: e,
        guild: r,
        onSelect: a
    } = n, s = (0, b.A)(e), d = (0, C.A)(e), o = (0, h.m)(e), x = (0, h.y)(e), u = (0, k.A)(e), j = (0, f.A)(e), M = (0, V.A)(e), H = (0, v.A)(e), I = (0, p.A)(e), L = (0, _.A)(e, r), y = (0, N.A)(e, r), U = (0, E.A)(e, r), Z = (0, g.A)(e), G = (0, A.A)({
        id: e.id,
        label: T.intl.string(T.t.gFHI3k)
    }), B = (0, c.A)(e), D = (0, S.A)(e), F = (0, m.Ay)(e), W = (0, X.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: t.Z_,
        "aria-label": T.intl.string(T.t.Xm41aV),
        onSelect: a,
        children: [(0, i.jsx)(l.rXV, {
            children: s
        }, "mark-as-read-or-favorite"), (0, i.jsx)(l.rXV, {
            children: o
        }), (0, i.jsxs)(l.rXV, {
            children: [L, u, j, d]
        }, "channel-actions"), (0, i.jsxs)(l.rXV, {
            children: [H, W ? F : D]
        }, "notifications"), (0, i.jsx)(l.rXV, {
            children: M
        }, "spoiler"), (0, i.jsxs)(l.rXV, {
            children: [I, y, U, Z]
        }, "admin-actions"), (0, i.jsx)(l.rXV, {
            children: B
        }), (0, i.jsx)(l.rXV, {
            children: x
        }), (0, i.jsx)(l.rXV, {
            children: G
        }, "developer-actions")]
    })
}
let L = (0, s.A)((0, a.A)(function(n) {
    return (0, o.DZ)() ? (0, i.jsx)(H, {
        ...n
    }) : (0, i.jsx)(I, {
        ...n
    })
}, {
    object: M.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])