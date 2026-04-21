/** chunk id: 180812 params = (module,exports,require) **/
n.d(t, {
    default: () => M
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(465424),
    c = n(50268),
    A = n(222311),
    g = n(803664),
    b = n(29293),
    m = n(291247),
    x = n(239211),
    f = n(707378),
    h = n(399476),
    E = n(889460),
    j = n(443439),
    C = n(198229),
    I = n(972432),
    S = n(77544),
    _ = n(652215),
    v = n(985018);

function D(e) {
    let {
        user: t,
        guildId: n,
        channelId: r,
        mediaEngineContext: d,
        onSelect: o,
        onShowProfile: _,
        onWatchStream: D,
        appContext: p
    } = e, M = (0, j.A)({
        onAction: () => {
            _?.()
        }
    }), T = (0, f.A)({
        user: t,
        context: p
    }), y = (0, u.D)({
        userId: t.id
    }), N = (0, b.A)({
        user: t,
        appContext: p
    }), U = (0, S.A)(t.id, D), V = (0, I.A)(t.id), L = (0, C.A)(t.id, d), G = (0, E.A)({
        user: t
    }), O = (0, s.A)(null, t), B = (0, g.A)({
        user: t,
        appContext: p
    }), R = (0, x.A)({
        user: t,
        appContext: p
    }), k = (0, h.A)({
        user: t,
        appContext: p
    }), P = (0, c.A)({
        id: t.id,
        label: v.intl.string(v.t["/AXYnE"])
    }), w = (0, A.A)(t), F = (0, m.A)(t, n, r), X = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
        onSelect: o,
        children: [!X && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: w
            }), (0, i.jsxs)(l.rXV, {
                children: [M, y, T, N, U]
            }), (0, i.jsx)(l.rXV, {
                children: V
            }), (0, i.jsx)(l.rXV, {
                children: O
            }), (0, i.jsxs)(l.rXV, {
                children: [L, G, B, k, R]
            }), (0, i.jsx)(l.rXV, {
                children: F
            })]
        }), (0, i.jsx)(l.rXV, {
            children: P
        })]
    })
}

function p(e) {
    let {
        user: t,
        mediaEngineContext: n,
        onSelect: r,
        onShowProfile: d,
        onWatchStream: o,
        appContext: u
    } = e, m = (0, j.A)({
        onAction: () => {
            d?.()
        }
    }), _ = (0, f.A)({
        user: t,
        context: u
    }), D = (0, b.A)({
        user: t,
        appContext: u
    }), p = (0, S.A)(t.id, o), M = (0, I.A)(t.id), T = (0, C.A)(t.id, n), y = (0, E.A)({
        user: t
    }), N = (0, s.A)(null, t), U = (0, g.A)({
        user: t,
        appContext: u
    }), V = (0, x.A)({
        user: t,
        appContext: u
    }), L = (0, h.A)({
        user: t,
        appContext: u
    }), G = (0, c.A)({
        id: t.id,
        label: v.intl.string(v.t["/AXYnE"])
    }), O = (0, A.A)(t), B = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": v.intl.string(v.t.liqwPJ),
        onSelect: r,
        children: [!B && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: O
            }), (0, i.jsxs)(l.rXV, {
                children: [m, _, D, p]
            }), (0, i.jsx)(l.rXV, {
                children: M
            }), (0, i.jsx)(l.rXV, {
                children: N
            }), (0, i.jsxs)(l.rXV, {
                children: [T, y, U, L, V]
            })]
        }), (0, i.jsx)(l.rXV, {
            children: G
        })]
    })
}
let M = (0, d.A)((0, r.A)(function(e) {
    let {
        guildId: t,
        channelId: n,
        ...l
    } = e;
    return null != t && null != n ? (0, i.jsx)(D, {
        ...l,
        guildId: t,
        channelId: n
    }) : (0, i.jsx)(p, {
        ...l,
        guildId: t,
        channelId: n
    })
}, {
    object: _.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.USER_OVERLAY_CONTEXT_MENU])