/** chunk id: 831056 params = (module,exports,require) **/
n.d(t, {
    KP: () => d,
    Kb: () => E,
    OH: () => v,
    lx: () => f,
    nY: () => c,
    pK: () => _,
    zj: () => m
});
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(158954),
    o = n(827734),
    u = n(246878);

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
        className: a()(u.Pb, {
            [u.II]: "portrait" === t
        }),
        children: n
    })
}

function E(e) {
    let {
        url: t,
        orientation: n,
        ref: s
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        ref: s,
        src: t,
        alt: "Video thumbnail",
        className: a()(u.C, {
            [u.TW]: "portrait" === n
        })
    })
}

function _(e) {
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
        ctaBtnLabel: s,
        onCTAClick: i,
        orientation: l,
        ctaIcon: o
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(u.pP, {
            [u.iC]: "portrait" === l
        }),
        children: [(0, r.jsx)(p, {
            title: t,
            subtitle: n
        }), (0, r.jsx)(S, {
            label: s,
            icon: o,
            onClick: i
        })]
    })
}

function p(e) {
    let {
        title: t,
        subtitle: n
    } = e;
    return (0, r.jsxs)("div", {
        className: u.PH,
        children: [(0, r.jsx)(l.DZT, {
            variant: "heading-md/semibold",
            className: u.m5,
            children: t
        }), (0, r.jsx)(l.DZT, {
            variant: "heading-sm/normal",
            className: u.s$,
            children: n
        })]
    })
}

function S(e) {
    let {
        label: t,
        icon: n,
        onClick: i,
        className: c
    } = e, [d, m] = s.useState(!1), E = () => {
        m(!0)
    }, _ = () => {
        m(!1)
    };
    return (0, r.jsxs)(l.DUT, {
        className: a()(u.uU, u.iM, c),
        onMouseEnter: E,
        onMouseLeave: _,
        onFocus: E,
        onBlur: _,
        onClick: i,
        children: [(0, r.jsx)(l.DZT, {
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

function v(e) {
    let {
        title: t,
        subtitle: n,
        icon: i,
        onClick: o,
        className: c,
        divider: d
    } = e, [m, E] = s.useState(!1), _ = () => {
        E(!0)
    }, f = () => {
        E(!1)
    };
    return (0, r.jsx)(l.DUT, {
        className: a()(u.Mr, u.iM, c),
        onMouseEnter: _,
        onMouseLeave: f,
        onFocus: _,
        onBlur: f,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: u.ee,
            children: [(0, r.jsxs)("div", {
                className: u.XU,
                children: [(0, r.jsx)(l.DZT, {
                    variant: "heading-md/semibold",
                    className: u.Zr,
                    children: t
                }), (0, r.jsx)(l.DZT, {
                    variant: "heading-sm/normal",
                    className: u.Hk,
                    children: n
                })]
            }), d, (0, r.jsx)(i, {
                size: "md",
                color: m ? "#FFFFFF" : "#B5BAC1",
                className: u.J5
            })]
        })
    })
}