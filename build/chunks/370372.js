/** chunk id: 370372 params = (module,exports,require) **/
r.d(e, {
    default: () => I
});
var t = r(627968);
r(64700);
var i = r(397927),
    l = r(442433),
    s = r(847767),
    a = r(358367),
    c = r(468389),
    d = r(793574),
    A = r(50268),
    o = r(93055),
    h = r(133238),
    x = r(128001),
    u = r(979807),
    j = r(671470),
    X = r(769591),
    V = r(533957),
    N = r(886393),
    E = r(477190),
    C = r(307623),
    _ = r(317910),
    b = r(475777),
    m = r(848977),
    g = r(995102),
    v = r(288104),
    S = r(661504),
    f = r(969128),
    k = r(704543),
    p = r(652215),
    M = r(985018);

function T(n) {
    let {
        channel: e,
        onSelect: r
    } = n, s = (0, m.A)(e), a = (0, N.A)(e), d = (0, h.y)(e), o = (0, x.A)(e), V = (0, u.A)(e), E = (0, j.A)(e), C = (0, g.A)(e), _ = (0, v.A)(e), b = (0, A.A)({
        id: e.id,
        label: M.intl.string(M.t.gFHI3k)
    }), f = (0, c.A)(e), k = (0, S.Ay)(e), p = (0, X.os)("ChannelContextFavoritesMenu");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": M.intl.string(M.t.Xm41aV),
        onSelect: r,
        children: [(0, t.jsx)(i.rXV, {
            children: s
        }), (0, t.jsxs)(i.rXV, {
            children: [V, E, o]
        }), (0, t.jsx)(i.rXV, {
            children: a
        }), (0, t.jsxs)(i.rXV, {
            children: [C, p ? k : _]
        }), (0, t.jsx)(i.rXV, {
            children: f
        }), (0, t.jsx)(i.rXV, {
            children: d
        }), (0, t.jsx)(i.rXV, {
            children: b
        })]
    })
}

function H(n) {
    let {
        channel: e,
        guild: r,
        onSelect: s
    } = n, a = (0, m.A)(e), d = (0, N.A)(e), o = (0, h.m)(e), x = (0, h.y)(e), u = (0, k.A)(e), j = (0, f.A)(e), p = (0, g.A)(e), T = (0, _.A)(e), H = (0, b.A)(e, r), I = (0, V.A)(e, r), L = (0, E.A)(e, r), y = (0, C.A)(e), U = (0, A.A)({
        id: e.id,
        label: M.intl.string(M.t.gFHI3k)
    }), Z = (0, c.A)(e), B = (0, v.A)(e), F = (0, S.Ay)(e), G = (0, X.os)("ChannelContextMenuNormal");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": M.intl.string(M.t.Xm41aV),
        onSelect: s,
        children: [(0, t.jsx)(i.rXV, {
            children: a
        }, "mark-as-read-or-favorite"), (0, t.jsx)(i.rXV, {
            children: o
        }), (0, t.jsxs)(i.rXV, {
            children: [H, u, j, d]
        }, "channel-actions"), (0, t.jsxs)(i.rXV, {
            children: [p, G ? F : B]
        }, "notifications"), (0, t.jsxs)(i.rXV, {
            children: [T, I, L, y]
        }, "admin-actions"), (0, t.jsx)(i.rXV, {
            children: Z
        }), (0, t.jsx)(i.rXV, {
            children: x
        }), (0, t.jsx)(i.rXV, {
            children: U
        }, "developer-actions")]
    })
}
let I = (0, a.A)((0, s.A)(function(n) {
    return (0, o.DZ)() ? (0, t.jsx)(T, {
        ...n
    }) : (0, t.jsx)(H, {
        ...n
    })
}, {
    object: p.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])