/** chunk id: 831056 params = (module,exports,require) **/
n.d(t, {
    KP: () => m,
    Kb: () => f,
    OH: () => g,
    lx: () => S,
    nY: () => E,
    pK: () => p,
    zj: () => _
});
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(158954),
    u = n(827734),
    o = n(354361),
    c = n(985018),
    d = n(246878);

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

function _(e) {
    let {
        orientation: t,
        children: n
    } = e;
    return (0, r.jsx)("div", {
        className: a()(d.Pb, {
            [d.II]: "portrait" === t
        }),
        children: n
    })
}

function f(e) {
    let {
        url: t,
        orientation: n,
        ref: s
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
        ref: s,
        src: t,
        alt: c.intl.string(o.default.E527vj),
        className: a()(d.C, {
            [d.TW]: "portrait" === n
        })
    })
}

function p(e) {
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

function S(e) {
    let {
        title: t,
        subtitle: n,
        ctaBtnLabel: s,
        onCTAClick: i,
        orientation: l,
        ctaIcon: u
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(d.pP, {
            [d.iC]: "portrait" === l
        }),
        children: [(0, r.jsx)(v, {
            title: t,
            subtitle: n
        }), (0, r.jsx)(h, {
            label: s,
            icon: u,
            onClick: i
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
        children: [(0, r.jsx)(l.DZT, {
            variant: "heading-md/semibold",
            className: d.m5,
            children: t
        }), (0, r.jsx)(l.DZT, {
            variant: "heading-sm/normal",
            className: d.s$,
            children: n
        })]
    })
}

function h(e) {
    let {
        label: t,
        icon: n,
        onClick: i,
        className: o
    } = e, [c, E] = s.useState(!1), m = () => {
        E(!0)
    }, _ = () => {
        E(!1)
    };
    return (0, r.jsxs)(l.DUT, {
        className: a()(d.uU, d.iM, o),
        onMouseEnter: m,
        onMouseLeave: _,
        onFocus: m,
        onBlur: _,
        onClick: i,
        children: [(0, r.jsx)(l.DZT, {
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

function g(e) {
    let {
        title: t,
        subtitle: n,
        icon: i,
        onClick: u,
        className: o,
        divider: c
    } = e, [E, m] = s.useState(!1), _ = () => {
        m(!0)
    }, f = () => {
        m(!1)
    };
    return (0, r.jsx)(l.DUT, {
        className: a()(d.Mr, d.iM, o),
        onMouseEnter: _,
        onMouseLeave: f,
        onFocus: _,
        onBlur: f,
        onClick: u,
        children: (0, r.jsxs)("div", {
            className: d.ee,
            children: [(0, r.jsxs)("div", {
                className: d.XU,
                children: [(0, r.jsx)(l.DZT, {
                    variant: "heading-md/semibold",
                    className: d.Zr,
                    children: t
                }), (0, r.jsx)(l.DZT, {
                    variant: "heading-sm/normal",
                    className: d.Hk,
                    children: n
                })]
            }), c, (0, r.jsx)(i, {
                size: "md",
                color: E ? "#FFFFFF" : "#B5BAC1",
                className: d.J5
            })]
        })
    })
}