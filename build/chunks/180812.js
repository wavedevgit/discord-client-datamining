/** chunk id: 180812 params = (module,exports,require) **/
n.d(t, {
    default: () => p
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
    h = n(239211),
    x = n(707378),
    f = n(399476),
    E = n(889460),
    j = n(443439),
    C = n(198229),
    S = n(972432),
    I = n(77544),
    v = n(652215),
    D = n(985018);

function M(e) {
    let {
        user: t,
        guildId: n,
        channelId: r,
        mediaEngineContext: d,
        onSelect: o,
        onShowProfile: v,
        onWatchStream: M,
        appContext: _
    } = e, p = (0, j.A)({
        onAction: () => {
            v?.()
        }
    }), y = (0, x.A)({
        user: t,
        context: _
    }), T = (0, u.D)({
        userId: t.id
    }), N = (0, b.A)({
        user: t,
        appContext: _
    }), U = (0, I.A)(t.id, M), L = (0, S.A)(t.id), V = (0, C.A)(t.id, d), G = (0, E.A)({
        user: t
    }), O = (0, s.A)(null, t), B = (0, g.A)({
        user: t,
        appContext: _
    }), P = (0, h.A)({
        user: t,
        appContext: _
    }), R = (0, f.A)({
        user: t,
        appContext: _
    }), k = (0, c.A)({
        id: t.id,
        label: D.intl.string(D.t["/AXYnE"])
    }), w = (0, A.A)(t), F = (0, m.A)(t, n, r), X = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": D.intl.string(D.t.liqwPJ),
        onSelect: o,
        children: [!X && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: w
            }), (0, i.jsxs)(l.rXV, {
                children: [p, T, y, N, U]
            }), (0, i.jsx)(l.rXV, {
                children: L
            }), (0, i.jsx)(l.rXV, {
                children: O
            }), (0, i.jsxs)(l.rXV, {
                children: [V, G, B, R, P]
            }), (0, i.jsx)(l.rXV, {
                children: F
            })]
        }), (0, i.jsx)(l.rXV, {
            children: k
        })]
    })
}

function _(e) {
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
    }), v = (0, x.A)({
        user: t,
        context: u
    }), M = (0, b.A)({
        user: t,
        appContext: u
    }), _ = (0, I.A)(t.id, o), p = (0, S.A)(t.id), y = (0, C.A)(t.id, n), T = (0, E.A)({
        user: t
    }), N = (0, s.A)(null, t), U = (0, g.A)({
        user: t,
        appContext: u
    }), L = (0, h.A)({
        user: t,
        appContext: u
    }), V = (0, f.A)({
        user: t,
        appContext: u
    }), G = (0, c.A)({
        id: t.id,
        label: D.intl.string(D.t["/AXYnE"])
    }), O = (0, A.A)(t), B = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": D.intl.string(D.t.liqwPJ),
        onSelect: r,
        children: [!B && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: O
            }), (0, i.jsxs)(l.rXV, {
                children: [m, v, M, _]
            }), (0, i.jsx)(l.rXV, {
                children: p
            }), (0, i.jsx)(l.rXV, {
                children: N
            }), (0, i.jsxs)(l.rXV, {
                children: [y, T, U, V, L]
            })]
        }), (0, i.jsx)(l.rXV, {
            children: G
        })]
    })
}
let p = (0, d.A)((0, r.A)(function(e) {
    let {
        guildId: t,
        channelId: n,
        ...l
    } = e;
    return null != t && null != n ? (0, i.jsx)(M, {
        ...l,
        guildId: t,
        channelId: n
    }) : (0, i.jsx)(_, {
        ...l,
        guildId: t,
        channelId: n
    })
}, {
    object: v.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.USER_OVERLAY_CONTEXT_MENU])