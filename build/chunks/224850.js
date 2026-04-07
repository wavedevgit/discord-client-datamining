/** chunk id: 224850 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    n: () => m
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(854627),
    c = n(560138),
    u = n(778712),
    h = n(985018),
    A = n(969969);

function _(e) {
    let {
        smallerText: t,
        className: n,
        textColor: s,
        isApplicationHome: d,
        enablePremiumBrandRefresh: _
    } = e, p = (0, r.bG)([c.A], () => c.A.affinities.slice(0, 3).reverse()), g = p.map((e, t) => (0, i.jsx)(m, {
        affinity: e,
        applyMask: t !== p.length - 1,
        size: _ ? u._3.SIZE_24 : u._3.SIZE_32
    }, e.id)), f = e => null != e.globalName ? e.globalName : e.username, x = l.useMemo(() => 3 === p.length ? h.intl.formatToPlainString(h.t.c7ETJH, {
        username: f(p[2])
    }) : 2 === p.length ? h.intl.formatToPlainString(h.t["st8Rh/"], {
        username: f(p[1]),
        otherUsername: f(p[0])
    }) : 1 === p.length ? h.intl.formatToPlainString(h.t.dpjXPL, {
        username: f(p[0])
    }) : "", [p]);
    return 0 === p.length ? null : (0, i.jsxs)("div", {
        className: a()(_ ? A.bD : A.kL, n, {
            [A.gr]: !_ && d
        }),
        children: [(0, i.jsx)("div", {
            className: A.zc,
            children: g
        }), (0, i.jsx)("div", {
            className: A.FS,
            children: (0, i.jsx)(function() {
                return _ ? (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: s,
                    children: x
                }) : t || d ? (0, i.jsx)(o.Text, {
                    variant: d ? "text-sm/normal" : "text-lg/medium",
                    color: s,
                    children: x
                }) : (0, i.jsx)(o.Heading, {
                    variant: "heading-xl/medium",
                    color: s,
                    children: x
                })
            }, {})
        })]
    })
}

function m(e) {
    let {
        affinity: t,
        applyMask: n,
        size: l
    } = e, {
        avatarSrc: s,
        eventHandlers: r
    } = (0, d.A)({
        userId: t?.id,
        size: l,
        animateOnHover: !0
    });
    return (0, i.jsx)(o.euF, {
        className: a()(A.Kk, {
            [A.dK]: n
        }),
        src: s,
        "aria-label": t.username,
        size: l,
        ...r
    })
}