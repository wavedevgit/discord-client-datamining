/** chunk id: 44536 params = (module,exports,require) **/
t.d(n, {
    default: () => E
});
var r = t(627968);
t(64700);
var i = t(397927),
    l = t(442433),
    a = t(358367),
    d = t(793574),
    s = t(50268),
    o = t(93055),
    c = t(133238),
    u = t(182061),
    A = t(886393),
    h = t(307623),
    f = t(848977),
    _ = t(660273),
    x = t(40389),
    j = t(707792),
    g = t(41402),
    v = t(990028),
    b = t(271456),
    m = t(200273),
    p = t(565846),
    y = t(57907),
    C = t(375500),
    G = t(707653),
    T = t(985018);

function V(e) {
    let {
        channel: n,
        onSelect: t
    } = e, a = (0, A.A)(n), d = (0, f.A)(n), o = (0, y.A)(n), u = (0, C.A)(n), h = (0, s.A)({
        id: n.id,
        label: T.intl.string(T.t.DQ797g)
    }), j = (0, c.m)(n), g = (0, _.A)(n, "Context Menu"), v = (0, x.A)(n), m = (0, b.A)(n), p = (0, c.y)(n);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": T.intl.string(T.t["1NBjqb"]),
        onSelect: t,
        children: [(0, r.jsx)(i.rXV, {
            children: d
        }, "mark-as-read-or-favorite"), (0, r.jsx)(i.rXV, {
            children: j
        }), (0, r.jsxs)(i.rXV, {
            children: [g, v, a]
        }, "thread-actions"), (0, r.jsxs)(i.rXV, {
            children: [o, u]
        }, "notifications"), (0, r.jsx)(i.rXV, {
            children: m
        }), (0, r.jsx)(i.rXV, {
            children: p
        }), (0, r.jsx)(i.rXV, {
            children: h
        }, "developer-actions")]
    })
}

function X(e) {
    let {
        channel: n,
        onSelect: t
    } = e, a = (0, A.A)(n), d = (0, f.A)(n), o = (0, y.A)(n), V = (0, u.A)(n), X = (0, j.A)(n), E = (0, h.A)(n), N = (0, s.A)({
        id: n.id,
        label: T.intl.string(T.t.DQ797g)
    }), D = (0, _.A)(n, "Context Menu"), M = (0, g.A)(n), O = (0, b.A)(n), F = (0, C.A)(n), U = (0, m.A)(n), L = (0, p.A)(n.id), I = (0, x.A)(n), R = (0, G.A)(n), k = (0, c.m)(n), S = (0, c.y)(n), Y = (0, v.A)(n);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": T.intl.string(T.t["1NBjqb"]),
        onSelect: t,
        children: [(0, r.jsx)(i.rXV, {
            children: d
        }, "mark-as-read-or-favorite"), (0, r.jsx)(i.rXV, {
            children: k
        }), (0, r.jsxs)(i.rXV, {
            children: [D, I, V, X, U, L, a]
        }, "thread-actions"), (0, r.jsxs)(i.rXV, {
            children: [o, F]
        }, "notifications"), (0, r.jsxs)(i.rXV, {
            children: [R, M, Y, O, E]
        }, "admin-actions"), (0, r.jsx)(i.rXV, {
            children: S
        }), (0, r.jsx)(i.rXV, {
            children: N
        }, "developer-actions")]
    })
}
let E = (0, a.A)(function(e) {
    return (0, o.DZ)() ? (0, r.jsx)(V, {
        ...e
    }) : (0, r.jsx)(X, {
        ...e
    })
}, [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_THREAD_MENU])