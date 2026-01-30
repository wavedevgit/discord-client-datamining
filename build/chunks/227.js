/** chunk id: 227, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(607470),
    l = n(12228),
    c = n(763673),
    u = n(967054),
    d = n(226540),
    f = n(267987);

function p(e) {
    let {
        nameplate: t,
        hovered: n,
        selected: a,
        content: s,
        placement: c
    } = e, p = (0, u._)(s, t, n, a, c), h = (0, l.i)(n, a), m = i.useRef(null == t);
    return (i.useEffect(() => {
        m.current || null != t || (m.current = !0)
    }, [t]), null == t) ? null : (0, r.jsx)("div", {
        className: o()(f.kL, {
            [f.qG]: m.current,
            [f.WB]: c === d.u.ACCOUNT
        }),
        style: {
            background: p.background
        },
        "aria-hidden": !0,
        children: (0, r.jsx)(_, {
            nameplate: t,
            className: o()(f._8, {
                [f.PT]: n,
                [f.wH]: a,
                [f.ct]: c === d.u.ACCOUNT,
                [f.VH]: c === d.u.PREVIEW,
                [f.Hh]: c === d.u.MINI_PREVIEW,
                [f.Ix]: c === d.u.CHANNEL
            }),
            style: {
                maskImage: p.maskImage
            },
            animate: h,
            loop: !0 === h && !0 === n
        })
    })
}

function _(e) {
    let {
        nameplate: t,
        className: n,
        style: i,
        animate: a,
        loop: o
    } = e, {
        staticAsset: s,
        animatedAsset: l
    } = (0, c.r)(t), u = !(null == l ? void 0 : l.endsWith(".webm"));
    return null == s || null == l ? null : u ? (0, r.jsx)(m, {
        asset: a ? l : s,
        className: n,
        style: i
    }) : (0, r.jsx)(h, {
        animatedAsset: l,
        staticAsset: s,
        animate: a,
        loop: o,
        style: i,
        className: n
    })
}

function h(e) {
    let {
        staticAsset: t,
        animatedAsset: n,
        animate: a,
        loop: o,
        className: l,
        style: c
    } = e, u = i.useRef(null);
    return i.useEffect(() => {
        null != u.current && (a || o ? u.current.play() : u.current.pause())
    }, [a, o]), (0, r.jsx)("div", {
        className: f.j,
        style: c,
        children: (0, r.jsx)(s.A, {
            src: n,
            poster: t,
            ref: u,
            playsInline: !0,
            loop: o,
            controls: !1,
            className: l,
            tabIndex: -1
        })
    })
}

function m(e) {
    let {
        asset: t,
        className: n,
        style: i
    } = e;
    return (0, r.jsx)("img", {
        src: t,
        className: n,
        style: i,
        alt: ""
    })
}