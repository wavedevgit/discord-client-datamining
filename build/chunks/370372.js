/** chunk id: 370372 params = (module,exports,require) **/
t.d(n, {
    default: () => j
});
var i = t(627968);
t(64700);
var l = t(397927),
    r = t(442433),
    a = t(847767),
    s = t(358367),
    d = t(468389),
    o = t(793574),
    u = t(50268),
    c = t(515610),
    A = t(133238),
    f = t(795144),
    h = t(979807),
    v = t(671470),
    C = t(769591),
    g = t(533957),
    p = t(886393),
    m = t(477190),
    _ = t(307623),
    E = t(317910),
    b = t(475777),
    O = t(848977),
    T = t(995102),
    I = t(288104),
    x = t(661504),
    y = t(969128),
    N = t(652215),
    R = t(985018);

function G(e) {
    let {
        channel: n,
        onSelect: t
    } = e, a = (0, O.A)(n), s = (0, p.A)(n), o = (0, A.m)(n), c = (0, A.y)(n), g = (0, f.A)(n), m = (0, h.A)(n), _ = (0, v.A)(n), b = (0, T.Ay)(n), y = (0, I.A)(n), N = (0, E.A)(n), G = (0, u.A)({
        id: n.id,
        label: R.intl.string(R.t.gFHI3k)
    }), S = (0, d.A)(n), j = (0, x.Ay)(n), U = (0, C.os)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": R.intl.string(R.t.Xm41aV),
        onSelect: t,
        children: [(0, i.jsx)(l.rXV, {
            children: a
        }), (0, i.jsxs)(l.rXV, {
            children: [m, _, g, o]
        }), (0, i.jsxs)(l.rXV, {
            children: [b, U ? j : y]
        }), (0, i.jsx)(l.rXV, {
            children: N
        }), (0, i.jsx)(l.rXV, {
            children: S
        }), (0, i.jsx)(l.rXV, {
            children: c
        }), (0, i.jsx)(l.rXV, {
            children: s
        }), (0, i.jsx)(l.rXV, {
            children: G
        })]
    })
}

function S(e) {
    let {
        channel: n,
        guild: t,
        onSelect: a
    } = e, s = (0, O.A)(n), o = (0, p.A)(n), c = (0, A.m)(n), f = (0, A.y)(n), h = (0, y.A)(n), v = (0, T.Ay)(n), N = (0, E.A)(n), G = (0, b.A)(n, t), S = (0, g.A)(n, t), j = (0, m.A)(n, t), U = (0, _.A)(n), X = (0, u.A)({
        id: n.id,
        label: R.intl.string(R.t.gFHI3k)
    }), L = (0, d.A)(n), M = (0, I.A)(n), w = (0, x.Ay)(n), Y = (0, C.os)("ChannelContextMenuNormal");
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": R.intl.string(R.t.Xm41aV),
        onSelect: a,
        children: [(0, i.jsxs)(l.rXV, {
            children: [s, c]
        }, "mark-as-read-or-favorite"), (0, i.jsxs)(l.rXV, {
            children: [G, h, o]
        }, "channel-actions"), (0, i.jsxs)(l.rXV, {
            children: [v, Y ? w : M]
        }, "notifications"), (0, i.jsxs)(l.rXV, {
            children: [N, S, j, U]
        }, "admin-actions"), (0, i.jsx)(l.rXV, {
            children: L
        }), (0, i.jsx)(l.rXV, {
            children: f
        }), (0, i.jsx)(l.rXV, {
            children: X
        }, "developer-actions")]
    })
}
let j = (0, s.A)((0, a.A)(function(e) {
    return (0, c.A)() ? (0, i.jsx)(G, {
        ...e
    }) : (0, i.jsx)(S, {
        ...e
    })
}, {
    object: N.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])