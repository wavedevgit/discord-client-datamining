/** chunk id: 370372, original params: n,e,r (module,exports,require) **/
r.d(e, {
    default: () => T
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
    o = r(515610),
    h = r(133238),
    x = r(795144),
    u = r(979807),
    j = r(671470),
    X = r(769591),
    V = r(533957),
    N = r(886393),
    E = r(477190),
    C = r(307623),
    _ = r(317910),
    m = r(475777),
    b = r(848977),
    g = r(995102),
    v = r(288104),
    S = r(661504),
    f = r(969128),
    k = r(652215),
    p = r(985018);

function y(n) {
    let {
        channel: e,
        onSelect: r
    } = n, s = (0, b.A)(e), a = (0, N.A)(e), d = (0, h.m)(e), o = (0, h.y)(e), V = (0, x.A)(e), E = (0, u.A)(e), C = (0, j.A)(e), m = (0, g.Ay)(e), f = (0, v.A)(e), k = (0, _.A)(e), y = (0, A.A)({
        id: e.id,
        label: p.intl.string(p.t.gFHI3k)
    }), M = (0, c.A)(e), T = (0, S.Ay)(e), H = (0, X.os)("ChannelContextFavoritesMenu");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: r,
        children: [(0, t.jsx)(i.rXV, {
            children: s
        }), (0, t.jsxs)(i.rXV, {
            children: [E, C, V, d]
        }), (0, t.jsxs)(i.rXV, {
            children: [m, H ? T : f]
        }), (0, t.jsx)(i.rXV, {
            children: k
        }), (0, t.jsx)(i.rXV, {
            children: M
        }), (0, t.jsx)(i.rXV, {
            children: o
        }), (0, t.jsx)(i.rXV, {
            children: a
        }), (0, t.jsx)(i.rXV, {
            children: y
        })]
    })
}

function M(n) {
    let {
        channel: e,
        guild: r,
        onSelect: s
    } = n, a = (0, b.A)(e), d = (0, N.A)(e), o = (0, h.m)(e), x = (0, h.y)(e), u = (0, f.A)(e), j = (0, g.Ay)(e), k = (0, _.A)(e), y = (0, m.A)(e, r), M = (0, V.A)(e, r), T = (0, E.A)(e, r), H = (0, C.A)(e), I = (0, A.A)({
        id: e.id,
        label: p.intl.string(p.t.gFHI3k)
    }), L = (0, c.A)(e), U = (0, v.A)(e), B = (0, S.Ay)(e), F = (0, X.os)("ChannelContextMenuNormal");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: s,
        children: [(0, t.jsxs)(i.rXV, {
            children: [a, o]
        }, "mark-as-read-or-favorite"), (0, t.jsxs)(i.rXV, {
            children: [y, u, d]
        }, "channel-actions"), (0, t.jsxs)(i.rXV, {
            children: [j, F ? B : U]
        }, "notifications"), (0, t.jsxs)(i.rXV, {
            children: [k, M, T, H]
        }, "admin-actions"), (0, t.jsx)(i.rXV, {
            children: L
        }), (0, t.jsx)(i.rXV, {
            children: x
        }), (0, t.jsx)(i.rXV, {
            children: I
        }, "developer-actions")]
    })
}
let T = (0, a.A)((0, s.A)(function(n) {
    return (0, o.A)() ? (0, t.jsx)(y, {
        ...n
    }) : (0, t.jsx)(M, {
        ...n
    })
}, {
    object: k.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])