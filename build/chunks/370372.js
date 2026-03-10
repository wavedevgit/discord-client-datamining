/** chunk id: 370372 params = (module,exports,require) **/
e.d(r, {
    default: () => M
});
var t = e(627968);
e(64700);
var i = e(397927),
    l = e(442433),
    s = e(847767),
    c = e(358367),
    a = e(468389),
    d = e(793574),
    A = e(50268),
    o = e(515610),
    h = e(133238),
    x = e(795144),
    u = e(979807),
    j = e(671470),
    X = e(769591),
    V = e(533957),
    N = e(886393),
    E = e(477190),
    C = e(307623),
    _ = e(317910),
    b = e(475777),
    m = e(848977),
    v = e(995102),
    g = e(288104),
    f = e(661504),
    S = e(969128),
    k = e(652215),
    p = e(985018);

function y(n) {
    let {
        channel: r,
        onSelect: e
    } = n, s = (0, m.A)(r), c = (0, N.A)(r), d = (0, h.m)(r), o = (0, h.y)(r), V = (0, x.A)(r), E = (0, u.A)(r), C = (0, j.A)(r), b = (0, v.Ay)(r), S = (0, g.A)(r), k = (0, _.A)(r), y = (0, A.A)({
        id: r.id,
        label: p.intl.string(p.t.gFHI3k)
    }), I = (0, a.A)(r), M = (0, f.Ay)(r), T = (0, X.os)("ChannelContextFavoritesMenu");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: e,
        children: [(0, t.jsx)(i.rXV, {
            children: s
        }), (0, t.jsx)(i.rXV, {
            children: E
        }), (0, t.jsxs)(i.rXV, {
            children: [d, C]
        }), (0, t.jsxs)(i.rXV, {
            children: [b, T ? M : S]
        }), (0, t.jsx)(i.rXV, {
            children: V
        }), (0, t.jsx)(i.rXV, {
            children: k
        }), (0, t.jsx)(i.rXV, {
            children: I
        }), (0, t.jsx)(i.rXV, {
            children: o
        }), (0, t.jsx)(i.rXV, {
            children: c
        }), (0, t.jsx)(i.rXV, {
            children: y
        })]
    })
}

function I(n) {
    let {
        channel: r,
        guild: e,
        onSelect: s
    } = n, c = (0, m.A)(r), d = (0, N.A)(r), o = (0, h.m)(r), x = (0, h.y)(r), u = (0, S.A)(r), j = (0, v.Ay)(r), k = (0, _.A)(r), y = (0, b.A)(r, e), I = (0, V.A)(r, e), M = (0, E.A)(r, e), T = (0, C.A)(r), H = (0, A.A)({
        id: r.id,
        label: p.intl.string(p.t.gFHI3k)
    }), L = (0, a.A)(r), G = (0, g.A)(r), U = (0, f.Ay)(r), B = (0, X.os)("ChannelContextMenuNormal");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: s,
        children: [(0, t.jsxs)(i.rXV, {
            children: [c, o]
        }, "mark-as-read-or-favorite"), (0, t.jsxs)(i.rXV, {
            children: [y, u, d]
        }, "channel-actions"), (0, t.jsxs)(i.rXV, {
            children: [j, B ? U : G]
        }, "notifications"), (0, t.jsxs)(i.rXV, {
            children: [k, I, M, T]
        }, "admin-actions"), (0, t.jsx)(i.rXV, {
            children: L
        }), (0, t.jsx)(i.rXV, {
            children: x
        }), (0, t.jsx)(i.rXV, {
            children: H
        }, "developer-actions")]
    })
}
let M = (0, c.A)((0, s.A)(function(n) {
    return (0, o.A)() ? (0, t.jsx)(y, {
        ...n
    }) : (0, t.jsx)(I, {
        ...n
    })
}, {
    object: k.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])