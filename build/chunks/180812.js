/** chunk id: 180812 params = (module,exports,require) **/
n.d(t, {
    default: () => v
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(468389),
    o = n(793574),
    u = n(50268),
    c = n(222311),
    A = n(803664),
    g = n(29293),
    m = n(291247),
    b = n(239211),
    E = n(707378),
    f = n(399476),
    h = n(889460),
    x = n(443439),
    j = n(198229),
    S = n(972432),
    C = n(77544),
    I = n(652215),
    _ = n(985018);

function p(e) {
    let {
        user: t,
        guildId: n,
        channelId: r,
        mediaEngineContext: d,
        onSelect: o,
        onShowProfile: I,
        onWatchStream: p,
        appContext: M
    } = e, v = (0, x.A)({
        onAction: () => {
            I?.()
        }
    }), y = (0, E.A)({
        user: t,
        context: M
    }), D = (0, g.A)({
        user: t,
        appContext: M
    }), T = (0, C.A)(t.id, p), U = (0, S.A)(t.id), L = (0, j.A)(t.id, d), V = (0, h.A)({
        user: t
    }), N = (0, s.A)(null, t), O = (0, A.A)({
        user: t,
        appContext: M
    }), G = (0, b.A)({
        user: t,
        appContext: M
    }), B = (0, f.A)({
        user: t,
        appContext: M
    }), R = (0, u.A)({
        id: t.id,
        label: _.intl.string(_.t["/AXYnE"])
    }), P = (0, c.A)(t), k = (0, m.A)(t, n, r), w = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": _.intl.string(_.t.liqwPJ),
        onSelect: o,
        children: [!w && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: P
            }), (0, i.jsxs)(l.rXV, {
                children: [v, y, D, T]
            }), (0, i.jsx)(l.rXV, {
                children: U
            }), (0, i.jsx)(l.rXV, {
                children: N
            }), (0, i.jsxs)(l.rXV, {
                children: [L, V, O, B, G]
            }), (0, i.jsx)(l.rXV, {
                children: k
            })]
        }), (0, i.jsx)(l.rXV, {
            children: R
        })]
    })
}

function M(e) {
    let {
        user: t,
        mediaEngineContext: n,
        onSelect: r,
        onShowProfile: d,
        onWatchStream: o,
        appContext: m
    } = e, I = (0, x.A)({
        onAction: () => {
            d?.()
        }
    }), p = (0, E.A)({
        user: t,
        context: m
    }), M = (0, g.A)({
        user: t,
        appContext: m
    }), v = (0, C.A)(t.id, o), y = (0, S.A)(t.id), D = (0, j.A)(t.id, n), T = (0, h.A)({
        user: t
    }), U = (0, s.A)(null, t), L = (0, A.A)({
        user: t,
        appContext: m
    }), V = (0, b.A)({
        user: t,
        appContext: m
    }), N = (0, f.A)({
        user: t,
        appContext: m
    }), O = (0, u.A)({
        id: t.id,
        label: _.intl.string(_.t["/AXYnE"])
    }), G = (0, c.A)(t), B = t.isNonUserBot();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": _.intl.string(_.t.liqwPJ),
        onSelect: r,
        children: [!B && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.rXV, {
                children: G
            }), (0, i.jsxs)(l.rXV, {
                children: [I, p, M, v]
            }), (0, i.jsx)(l.rXV, {
                children: y
            }), (0, i.jsx)(l.rXV, {
                children: U
            }), (0, i.jsxs)(l.rXV, {
                children: [D, T, L, N, V]
            })]
        }), (0, i.jsx)(l.rXV, {
            children: O
        })]
    })
}
let v = (0, d.A)((0, r.A)(function(e) {
    let {
        guildId: t,
        channelId: n,
        ...l
    } = e;
    return null != t && null != n ? (0, i.jsx)(p, {
        ...l,
        guildId: t,
        channelId: n
    }) : (0, i.jsx)(M, {
        ...l,
        guildId: t,
        channelId: n
    })
}, {
    object: I.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.USER_OVERLAY_CONTEXT_MENU])