/** chunk id: 44536 params = (module,exports,require) **/
t.d(n, {
    default: () => F
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(442433),
    a = t(358367),
    d = t(793574),
    o = t(50268),
    u = t(93055),
    s = t(133238),
    c = t(182061),
    f = t(886393),
    A = t(307623),
    h = t(848977),
    _ = t(660273),
    v = t(40389),
    E = t(707792),
    p = t(41402),
    b = t(990028),
    C = t(271456),
    g = t(200273),
    O = t(565846),
    T = t(57907),
    I = t(375500),
    R = t(707653),
    m = t(985018);

function y(e) {
    let {
        channel: n,
        onSelect: t
    } = e, a = (0, f.A)(n), d = (0, h.A)(n), u = (0, T.A)(n), c = (0, I.A)(n), A = (0, o.A)({
        id: n.id,
        label: m.intl.string(m.t.DQ797g)
    }), E = (0, s.m)(n), p = (0, _.A)(n, "Context Menu"), b = (0, v.A)(n), g = (0, C.A)(n), O = (0, s.y)(n);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": m.intl.string(m.t["1NBjqb"]),
        onSelect: t,
        children: [(0, i.jsx)(r.rXV, {
            children: d
        }, "mark-as-read-or-favorite"), (0, i.jsx)(r.rXV, {
            children: E
        }), (0, i.jsxs)(r.rXV, {
            children: [p, b, a]
        }, "thread-actions"), (0, i.jsxs)(r.rXV, {
            children: [u, c]
        }, "notifications"), (0, i.jsx)(r.rXV, {
            children: g
        }), (0, i.jsx)(r.rXV, {
            children: O
        }), (0, i.jsx)(r.rXV, {
            children: A
        }, "developer-actions")]
    })
}

function G(e) {
    let {
        channel: n,
        onSelect: t
    } = e, a = (0, f.A)(n), d = (0, h.A)(n), u = (0, T.A)(n), y = (0, c.A)(n), G = (0, E.A)(n), F = (0, A.A)(n), N = (0, o.A)({
        id: n.id,
        label: m.intl.string(m.t.DQ797g)
    }), x = (0, _.A)(n, "Context Menu"), S = (0, p.A)(n), j = (0, C.A)(n), D = (0, I.A)(n), L = (0, g.A)(n), U = (0, O.A)(n.id), V = (0, v.A)(n), w = (0, R.A)(n), X = (0, s.m)(n), k = (0, s.y)(n), M = (0, b.A)(n);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": m.intl.string(m.t["1NBjqb"]),
        onSelect: t,
        children: [(0, i.jsx)(r.rXV, {
            children: d
        }, "mark-as-read-or-favorite"), (0, i.jsx)(r.rXV, {
            children: X
        }), (0, i.jsxs)(r.rXV, {
            children: [x, V, y, G, L, U, a]
        }, "thread-actions"), (0, i.jsxs)(r.rXV, {
            children: [u, D]
        }, "notifications"), (0, i.jsxs)(r.rXV, {
            children: [w, S, M, j, F]
        }, "admin-actions"), (0, i.jsx)(r.rXV, {
            children: k
        }), (0, i.jsx)(r.rXV, {
            children: N
        }, "developer-actions")]
    })
}
let F = (0, a.A)(function(e) {
    return (0, u.DZ)() ? (0, i.jsx)(y, {
        ...e
    }) : (0, i.jsx)(G, {
        ...e
    })
}, [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_THREAD_MENU])