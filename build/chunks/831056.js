/** chunk id: 831056 params = (module,exports,require) **/
n.d(t, {
    KP: () => m,
    Kb: () => _,
    OH: () => h,
    lx: () => p,
    nY: () => E,
    pK: () => S,
    zj: () => f
});
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(158954),
    u = n(827734),
    o = n(445563),
    c = n(985018),
    d = n(834926);

function E(e) {
    let {
        url: t
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: d.bU
    })
}

function m() {
    return (0, r.jsx)("div", {
        className: d.MM,
        "data-testid": "discord-web-video-player-end-screen"
    })
}

function f(e) {
    let {
        orientation: t,
        children: n
    } = e;
    return (0, r.jsx)("div", {
        className: l()(d.Pb, {
            [d.II]: "portrait" === t
        }),
        children: n
    })
}

function _(e) {
    let {
        url: t,
        orientation: n,
        ref: s
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        ref: s,
        src: t,
        alt: c.intl.string(o.default.E527vj),
        className: l()(d.C, {
            [d.TW]: "portrait" === n
        })
    })
}

function S(e) {
    let {
        url: t,
        ref: n
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        ref: n,
        src: t,
        alt: c.intl.string(o.default.E527vj),
        className: d.xc
    })
}

function p(e) {
    let {
        title: t,
        subtitle: n,
        ctaBtnLabel: s,
        onCTAClick: a,
        orientation: i,
        ctaIcon: u
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(d.pP, {
            [d.iC]: "portrait" === i
        }),
        children: [(0, r.jsx)(v, {
            title: t,
            subtitle: n
        }), (0, r.jsx)(g, {
            label: s,
            icon: u,
            onClick: a
        })]
    })
}

function v(e) {
    let {
        title: t,
        subtitle: n
    } = e;
    return (0, r.jsxs)("div", {
        className: d.PH,
        children: [(0, r.jsx)(i.DZT, {
            variant: "heading-md/semibold",
            className: d.m5,
            children: t
        }), (0, r.jsx)(i.DZT, {
            variant: "heading-sm/normal",
            className: d.s$,
            children: n
        })]
    })
}

function g(e) {
    let {
        label: t,
        icon: n,
        onClick: a,
        className: o
    } = e, [c, E] = s.useState(!1), m = () => {
        E(!0)
    }, f = () => {
        E(!1)
    };
    return (0, r.jsxs)(i.DUT, {
        className: l()(d.uU, d.iM, o),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: a,
        children: [(0, r.jsx)(i.DZT, {
            variant: "heading-md/semibold",
            className: d.ce,
            children: t
        }), null != n && (0, r.jsx)(n, {
            size: "md",
            color: c ? u.A.colors.WHITE : "#B5BAC1",
            className: d.J5
        })]
    })
}

function h(e) {
    let {
        title: t,
        subtitle: n,
        icon: a,
        onClick: u,
        className: o,
        divider: c
    } = e, [E, m] = s.useState(!1), f = () => {
        m(!0)
    }, _ = () => {
        m(!1)
    };
    return (0, r.jsx)(i.DUT, {
        className: l()(d.Mr, d.iM, o),
        onMouseEnter: f,
        onMouseLeave: _,
        onFocus: f,
        onBlur: _,
        onClick: u,
        children: (0, r.jsxs)("div", {
            className: d.ee,
            children: [(0, r.jsxs)("div", {
                className: d.XU,
                children: [(0, r.jsx)(i.DZT, {
                    variant: "heading-md/semibold",
                    className: d.Zr,
                    children: t
                }), (0, r.jsx)(i.DZT, {
                    variant: "heading-sm/normal",
                    className: d.Hk,
                    children: n
                })]
            }), c, (0, r.jsx)(a, {
                size: "md",
                color: E ? "#FFFFFF" : "#B5BAC1",
                className: d.J5
            })]
        })
    })
}