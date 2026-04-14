/** chunk id: 224850 params = (module,exports,require) **/
t.d(n, {
    A: () => f,
    n: () => h
});
var a = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    l = t(311907),
    c = t(397927),
    o = t(854627),
    d = t(560138),
    _ = t(778712),
    u = t(985018),
    m = t(969969);

function f(e) {
    let {
        smallerText: n,
        className: t,
        textColor: s,
        isApplicationHome: o,
        enablePremiumBrandRefresh: f
    } = e, x = (0, l.bG)([d.A], () => d.A.affinities.slice(0, 3).reverse()), A = x.map((e, n) => (0, a.jsx)(h, {
        affinity: e,
        applyMask: n !== x.length - 1,
        size: f ? _._3.SIZE_24 : _._3.SIZE_32
    }, e.id)), g = e => null != e.globalName ? e.globalName : e.username, p = i.useMemo(() => 3 === x.length ? u.intl.formatToPlainString(u.t.c7ETJH, {
        username: g(x[2])
    }) : 2 === x.length ? u.intl.formatToPlainString(u.t["st8Rh/"], {
        username: g(x[1]),
        otherUsername: g(x[0])
    }) : 1 === x.length ? u.intl.formatToPlainString(u.t.dpjXPL, {
        username: g(x[0])
    }) : "", [x]);
    return 0 === x.length ? null : (0, a.jsxs)("div", {
        className: r()(f ? m.bD : m.kL, t, {
            [m.gr]: !f && o
        }),
        children: [(0, a.jsx)("div", {
            className: m.zc,
            children: A
        }), (0, a.jsx)("div", {
            className: m.FS,
            children: (0, a.jsx)(function() {
                return f ? (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: s,
                    children: p
                }) : n || o ? (0, a.jsx)(c.Text, {
                    variant: o ? "text-sm/normal" : "text-lg/medium",
                    color: s,
                    children: p
                }) : (0, a.jsx)(c.Heading, {
                    variant: "heading-xl/medium",
                    color: s,
                    children: p
                })
            }, {})
        })]
    })
}

function h(e) {
    let {
        affinity: n,
        applyMask: t,
        size: i
    } = e, {
        avatarSrc: s,
        eventHandlers: l
    } = (0, o.A)({
        userId: n?.id,
        size: i,
        animateOnHover: !0
    });
    return (0, a.jsx)(c.euF, {
        className: r()(m.Kk, {
            [m.dK]: t
        }),
        src: s,
        "aria-label": n.username,
        size: i,
        ...l
    })
}