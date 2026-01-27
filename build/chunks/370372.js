/** Chunk was on 77666 **/
/** chunk id: 370372, original params: n,e,r (module,exports,require) **/
r.d(e, {
    default: () => T
});
var t = r(627968);
r(64700);
var i = r(397927),
    l = r(442433),
    c = r(847767),
    a = r(358367),
    s = r(468389),
    o = r(793574),
    d = r(50268),
    A = r(515610),
    u = r(133238),
    h = r(795144),
    x = r(979807),
    j = r(671470),
    b = r(769591),
    X = r(533957),
    f = r(886393),
    V = r(477190),
    E = r(307623),
    N = r(317910),
    m = r(475777),
    y = r(848977),
    g = r(995102),
    p = r(288104),
    C = r(661504),
    v = r(969128),
    _ = r(652215),
    S = r(985018);

function O(n) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            t = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
            return Object.getOwnPropertyDescriptor(r, n).enumerable
        }))), t.forEach(function(e) {
            var t;
            t = r[e], e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t
        })
    }
    return n
}

function k(n) {
    let {
        channel: e,
        onSelect: r
    } = n, c = (0, y.A)(e), a = (0, f.A)(e), o = (0, u.m)(e), A = (0, u.y)(e), X = (0, h.A)(e), V = (0, x.A)(e), E = (0, j.A)(e), m = (0, g.Ay)(e), v = (0, p.A)(e), _ = (0, N.A)(e), O = (0, d.A)({
        id: e.id,
        label: S.intl.string(S.t.gFHI3k)
    }), k = (0, s.A)(e), M = (0, C.Ay)(e), T = (0, b.os)("ChannelContextFavoritesMenu");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": S.intl.string(S.t.Xm41aV),
        onSelect: r,
        children: [(0, t.jsx)(i.rXV, {
            children: c
        }), (0, t.jsxs)(i.rXV, {
            children: [V, E, X, o]
        }), (0, t.jsxs)(i.rXV, {
            children: [m, T ? M : v]
        }), (0, t.jsx)(i.rXV, {
            children: _
        }), (0, t.jsx)(i.rXV, {
            children: k
        }), (0, t.jsx)(i.rXV, {
            children: A
        }), (0, t.jsx)(i.rXV, {
            children: a
        }), (0, t.jsx)(i.rXV, {
            children: O
        })]
    })
}

function M(n) {
    let {
        channel: e,
        guild: r,
        onSelect: c
    } = n, a = (0, y.A)(e), o = (0, f.A)(e), A = (0, u.m)(e), h = (0, u.y)(e), x = (0, v.A)(e), j = (0, g.Ay)(e), _ = (0, N.A)(e), O = (0, m.A)(e, r), k = (0, X.A)(e, r), M = (0, V.A)(e, r), T = (0, E.A)(e), w = (0, d.A)({
        id: e.id,
        label: S.intl.string(S.t.gFHI3k)
    }), H = (0, s.A)(e), I = (0, p.A)(e), L = (0, C.Ay)(e), P = (0, b.os)("ChannelContextMenuNormal");
    return (0, t.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": S.intl.string(S.t.Xm41aV),
        onSelect: c,
        children: [(0, t.jsxs)(i.rXV, {
            children: [a, A]
        }, "mark-as-read-or-favorite"), (0, t.jsxs)(i.rXV, {
            children: [O, x, o]
        }, "channel-actions"), (0, t.jsxs)(i.rXV, {
            children: [j, P ? L : I]
        }, "notifications"), (0, t.jsxs)(i.rXV, {
            children: [_, k, M, T]
        }, "admin-actions"), (0, t.jsx)(i.rXV, {
            children: H
        }), (0, t.jsx)(i.rXV, {
            children: h
        }), (0, t.jsx)(i.rXV, {
            children: w
        }, "developer-actions")]
    })
}
let T = (0, a.A)((0, c.A)(function(n) {
    return (0, A.A)() ? (0, t.jsx)(k, O({}, n)) : (0, t.jsx)(M, O({}, n))
}, {
    object: _.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])