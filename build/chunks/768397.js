/** chunk id: 768397 params = (module,exports,require) **/
s.d(t, {
    A: () => p,
    F: () => g
});
var r = s(627968);
s(64700);
var n = s(503698),
    i = s.n(n),
    l = s(397927),
    a = s(854378),
    d = s(496885),
    c = s(68965),
    u = s(651539),
    C = s(401755),
    o = s(985018),
    L = s(754196),
    m = s(818050);

function h() {
    return (0, r.jsx)(d.A, {
        className: L.w$,
        children: (0, r.jsx)("div", {
            className: L.SN,
            children: (0, r.jsx)(l.Uzd, {
                size: "xs",
                color: "currentColor",
                className: L.HE
            })
        })
    })
}

function x(e) {
    let {
        verified: t,
        text: s
    } = e;
    return t ? (0, r.jsxs)("div", {
        className: L.V,
        children: [(0, r.jsx)(h, {}), s]
    }) : s
}

function g(e) {
    let {
        className: t,
        count: s,
        creator: n,
        verifiedName: l
    } = e;
    return (0, r.jsx)("div", {
        className: i()(L.t5, t, L.fz),
        children: null != n || null != l ? o.intl.format(o.t.TTcKAw, {
            usageCount: s,
            creator: l ?? n,
            creatorHook: (e, t) => (0, r.jsx)(x, {
                text: e,
                verified: null != l
            }, t)
        }) : o.intl.format(o.t.cGXXHL, {
            usageCount: s
        })
    })
}

function p(e) {
    let {
        guildTemplate: t,
        error: s,
        tall: n,
        pillClassName: d
    } = e;
    if (null != s && "" !== s) return (0, r.jsxs)("div", {
        className: L.kL,
        children: [(0, r.jsx)(a.hE, {
            children: o.intl.string(o.t.mDFGFj)
        }), (0, r.jsx)(a.tK, {
            children: s
        })]
    });
    if (t.state === C.QB.RESOLVING) return (0, r.jsx)("div", {
        className: L.kL,
        children: (0, r.jsx)(l.y$y, {})
    });
    let h = (0, u.A)(t.code).header;
    return n ? (0, r.jsxs)("div", {
        className: L.kL,
        children: [(0, r.jsx)(a.hE, {
            className: L.DD,
            children: h
        }), (0, r.jsx)(a.tK, {
            className: i()(L.VA, m.__invalid_marginTop2),
            children: o.intl.string(o.t["h+vyO6"])
        }), (0, r.jsx)(a.hE, {
            className: i()(L.DD, L.fz),
            children: t.name
        }), null != t.description && "" !== t.description && (0, r.jsx)(a.tK, {
            className: i()(L.VA, L.fz, m.Ot),
            children: t.description
        }), (0, r.jsx)(g, {
            className: d,
            count: t.usageCount ?? 0,
            creator: t.creator.username,
            verifiedName: (0, c.c)(t.code)
        })]
    }) : (0, r.jsxs)("div", {
        className: L.kL,
        children: [(0, r.jsx)(a.hE, {
            className: L.DD,
            children: h
        }), (0, r.jsx)(a.tK, {
            className: i()(L.VA, L.fz),
            children: t.name
        })]
    })
}