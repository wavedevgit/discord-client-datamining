/** chunk id: 6503 params = (module,exports,require) **/
n.d(t, {
    KP: () => d,
    Kb: () => p,
    OH: () => x,
    lx: () => f,
    nY: () => c,
    pK: () => E,
    zj: () => m
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(158954),
    o = n(827734),
    u = n(655833);

function c(e) {
    let {
        url: t
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: u.bU
    })
}

function d() {
    return (0, r.jsx)("div", {
        className: u.MM,
        "data-testid": "discord-web-video-player-end-screen"
    })
}

function m(e) {
    let {
        orientation: t,
        children: n
    } = e;
    return (0, r.jsx)("div", {
        className: i()(u.Pb, {
            [u.II]: "portrait" === t
        }),
        children: n
    })
}

function p(e) {
    let {
        url: t,
        orientation: n,
        ref: l
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        ref: l,
        src: t,
        alt: "Video thumbnail",
        className: i()(u.C, {
            [u.TW]: "portrait" === n
        })
    })
}

function E(e) {
    let {
        url: t,
        ref: n
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        ref: n,
        src: t,
        alt: "Video thumbnail",
        className: u.xc
    })
}

function f(e) {
    let {
        title: t,
        subtitle: n,
        ctaBtnLabel: l,
        onCTAClick: a,
        orientation: s,
        ctaIcon: o
    } = e;
    return (0, r.jsxs)("div", {
        className: i()(u.pP, {
            [u.iC]: "portrait" === s
        }),
        children: [(0, r.jsx)(h, {
            title: t,
            subtitle: n
        }), (0, r.jsx)(v, {
            label: l,
            icon: o,
            onClick: a
        })]
    })
}

function h(e) {
    let {
        title: t,
        subtitle: n
    } = e;
    return (0, r.jsxs)("div", {
        className: u.PH,
        children: [(0, r.jsx)(s.DZT, {
            variant: "heading-md/semibold",
            className: u.m5,
            children: t
        }), (0, r.jsx)(s.DZT, {
            variant: "heading-sm/normal",
            className: u.s$,
            children: n
        })]
    })
}

function v(e) {
    let {
        label: t,
        icon: n,
        onClick: a,
        className: c
    } = e, [d, m] = l.useState(!1), p = () => {
        m(!0)
    }, E = () => {
        m(!1)
    };
    return (0, r.jsxs)(s.DUT, {
        className: i()(u.uU, u.iM, c),
        onMouseEnter: p,
        onMouseLeave: E,
        onFocus: p,
        onBlur: E,
        onClick: a,
        children: [(0, r.jsx)(s.DZT, {
            variant: "heading-md/semibold",
            className: u.ce,
            children: t
        }), null != n && (0, r.jsx)(n, {
            size: "md",
            color: d ? o.A.colors.WHITE : "#B5BAC1",
            className: u.J5
        })]
    })
}

function x(e) {
    let {
        title: t,
        subtitle: n,
        icon: a,
        onClick: o,
        className: c,
        divider: d
    } = e, [m, p] = l.useState(!1), E = () => {
        p(!0)
    }, f = () => {
        p(!1)
    };
    return (0, r.jsx)(s.DUT, {
        className: i()(u.Mr, u.iM, c),
        onMouseEnter: E,
        onMouseLeave: f,
        onFocus: E,
        onBlur: f,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: u.ee,
            children: [(0, r.jsxs)("div", {
                className: u.XU,
                children: [(0, r.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    className: u.Zr,
                    children: t
                }), (0, r.jsx)(s.DZT, {
                    variant: "heading-sm/normal",
                    className: u.Hk,
                    children: n
                })]
            }), d, (0, r.jsx)(a, {
                size: "md",
                color: m ? "#FFFFFF" : "#B5BAC1",
                className: u.J5
            })]
        })
    })
}