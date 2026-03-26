/** chunk id: 224850 params = (module,exports,require) **/
t.d(n, {
    A: () => f,
    n: () => x
});
var i = t(627968),
    a = t(64700),
    s = t(503698),
    l = t.n(s),
    r = t(311907),
    c = t(397927),
    o = t(854627),
    u = t(560138),
    d = t(778712),
    m = t(985018),
    _ = t(969969);

function f(e) {
    let {
        smallerText: n,
        className: t,
        textColor: s,
        isApplicationHome: o,
        enablePremiumBrandRefresh: f
    } = e, h = (0, r.bG)([u.A], () => u.A.affinities.slice(0, 3).reverse()), p = h.map((e, n) => (0, i.jsx)(x, {
        affinity: e,
        applyMask: n !== h.length - 1,
        size: f ? d._3.SIZE_24 : d._3.SIZE_32
    }, e.id)), g = e => null != e.globalName ? e.globalName : e.username, E = a.useMemo(() => 3 === h.length ? m.intl.formatToPlainString(m.t.c7ETJH, {
        username: g(h[2])
    }) : 2 === h.length ? m.intl.formatToPlainString(m.t["st8Rh/"], {
        username: g(h[1]),
        otherUsername: g(h[0])
    }) : 1 === h.length ? m.intl.formatToPlainString(m.t.dpjXPL, {
        username: g(h[0])
    }) : "", [h]);
    return 0 === h.length ? null : (0, i.jsxs)("div", {
        className: l()(f ? _.bD : _.kL, t, {
            [_.gr]: !f && o
        }),
        children: [(0, i.jsx)("div", {
            className: _.zc,
            children: p
        }), (0, i.jsx)("div", {
            className: _.FS,
            children: (0, i.jsx)(function() {
                return f ? (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: s,
                    children: E
                }) : n || o ? (0, i.jsx)(c.Text, {
                    variant: o ? "text-sm/normal" : "text-lg/medium",
                    color: s,
                    children: E
                }) : (0, i.jsx)(c.Heading, {
                    variant: "heading-xl/medium",
                    color: s,
                    children: E
                })
            }, {})
        })]
    })
}

function x(e) {
    let {
        affinity: n,
        applyMask: t,
        size: a
    } = e, {
        avatarSrc: s,
        eventHandlers: r
    } = (0, o.A)({
        userId: n?.id,
        size: a,
        animateOnHover: !0
    });
    return (0, i.jsx)(c.euF, {
        className: l()(_.Kk, {
            [_.dK]: t
        }),
        src: s,
        "aria-label": n.username,
        size: a,
        ...r
    })
}