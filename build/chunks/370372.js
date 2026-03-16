/** chunk id: 370372 params = (module,exports,require) **/
e.d(r, {
    default: () => H
});
var i = e(627968);
e(64700);
var t = e(397927),
    l = e(442433),
    s = e(847767),
    c = e(358367),
    a = e(468389),
    d = e(793574),
    A = e(50268),
    o = e(515610),
    h = e(133238),
    x = e(795144),
    j = e(979807),
    X = e(671470),
    u = e(769591),
    V = e(533957),
    N = e(886393),
    E = e(477190),
    C = e(307623),
    _ = e(317910),
    m = e(475777),
    b = e(848977),
    g = e(995102),
    v = e(288104),
    S = e(661504),
    f = e(969128),
    k = e(652215),
    p = e(985018);

function M(n) {
    let {
        channel: r,
        onSelect: e
    } = n, s = (0, b.A)(r), c = (0, N.A)(r), d = (0, h.m)(r), o = (0, h.y)(r), V = (0, x.A)(r), E = (0, j.A)(r), C = (0, X.A)(r), m = (0, g.A)(r), f = (0, v.A)(r), k = (0, _.A)(r), M = (0, A.A)({
        id: r.id,
        label: p.intl.string(p.t.gFHI3k)
    }), T = (0, a.A)(r), H = (0, S.Ay)(r), I = (0, u.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(t.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: e,
        children: [(0, i.jsx)(t.rXV, {
            children: s
        }), (0, i.jsx)(t.rXV, {
            children: E
        }), (0, i.jsxs)(t.rXV, {
            children: [d, C]
        }), (0, i.jsxs)(t.rXV, {
            children: [m, I ? H : f]
        }), (0, i.jsx)(t.rXV, {
            children: V
        }), (0, i.jsx)(t.rXV, {
            children: k
        }), (0, i.jsx)(t.rXV, {
            children: T
        }), (0, i.jsx)(t.rXV, {
            children: o
        }), (0, i.jsx)(t.rXV, {
            children: c
        }), (0, i.jsx)(t.rXV, {
            children: M
        })]
    })
}

function T(n) {
    let {
        channel: r,
        guild: e,
        onSelect: s
    } = n, c = (0, b.A)(r), d = (0, N.A)(r), o = (0, h.m)(r), x = (0, h.y)(r), j = (0, f.A)(r), X = (0, g.A)(r), k = (0, _.A)(r), M = (0, m.A)(r, e), T = (0, V.A)(r, e), H = (0, E.A)(r, e), I = (0, C.A)(r), L = (0, A.A)({
        id: r.id,
        label: p.intl.string(p.t.gFHI3k)
    }), y = (0, a.A)(r), U = (0, v.A)(r), B = (0, S.Ay)(r), F = (0, u.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(t.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: s,
        children: [(0, i.jsx)(t.rXV, {
            children: c
        }, "mark-as-read-or-favorite"), (0, i.jsx)(t.rXV, {
            children: o
        }), (0, i.jsxs)(t.rXV, {
            children: [M, j, d]
        }, "channel-actions"), (0, i.jsxs)(t.rXV, {
            children: [X, F ? B : U]
        }, "notifications"), (0, i.jsxs)(t.rXV, {
            children: [k, T, H, I]
        }, "admin-actions"), (0, i.jsx)(t.rXV, {
            children: y
        }), (0, i.jsx)(t.rXV, {
            children: x
        }), (0, i.jsx)(t.rXV, {
            children: L
        }, "developer-actions")]
    })
}
let H = (0, c.A)((0, s.A)(function(n) {
    return (0, o.A)() ? (0, i.jsx)(M, {
        ...n
    }) : (0, i.jsx)(T, {
        ...n
    })
}, {
    object: k.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])