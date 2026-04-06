/** chunk id: 930349 params = (module,exports,require) **/
i.d(n, {
    N: () => p,
    k: () => A
});
var t = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    s = i(158954),
    r = i(990078),
    d = i(985018),
    o = i(967024);

function c() {
    return (0, t.jsx)("div", {
        className: o.overlay
    })
}

function u(e) {
    let {
        icon: n,
        iconAlignment: i
    } = e;
    return (0, t.jsx)("div", {
        className: l()(o.iconContainer, {
            [o.iconAlignCenter]: "center" === i,
            [o.iconAlignRight]: "right" === i
        }),
        children: (0, t.jsx)(n, {
            size: "md",
            color: "white",
            "aria-hidden": !0,
            className: o.overlayIcon
        })
    })
}

function _(e) {
    let {
        onClick: n,
        type: i,
        accessibleLabel: a
    } = e, l = "remove" === i ? d.intl.string(d.t.N86XcP) : d.intl.string(d.t.wgIPss);
    return (0, t.jsx)(r.m, {
        text: l,
        ariaHidden: !0,
        children: (0, t.jsx)(s.K0, {
            "aria-label": a,
            icon: "remove" === i ? s.ucK : s.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: n
        })
    })
}

function A(e) {
    let {
        variant: n,
        onClick: i,
        accessibleLabel: a,
        children: r
    } = e;
    return (0, t.jsx)("div", {
        className: o.tileWrapper,
        children: (0, t.jsxs)(s.DUT, {
            "aria-label": a,
            className: l()(o.base, o[n]),
            onClick: i,
            children: [(0, t.jsx)("div", {
                className: o.content,
                children: r
            }), (0, t.jsx)(c, {}), (0, t.jsx)(u, {
                icon: s.TIR,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        })
    })
}

function p(e) {
    let {
        variant: n,
        onClick: i,
        accessibleLabel: a,
        children: r,
        showOverlay: d,
        deleteButtonConfig: u
    } = e;
    return (0, t.jsxs)("div", {
        className: o.tileWrapper,
        children: [(0, t.jsxs)(s.DUT, {
            "aria-label": a,
            className: l()(o.base, o[n]),
            onClick: i,
            children: [(0, t.jsx)("div", {
                className: o.content,
                children: r
            }), d && (0, t.jsx)(c, {})]
        }), null != u && (0, t.jsx)("div", {
            className: o.deleteButtonWrapper,
            children: (0, t.jsx)(_, {
                ...u
            })
        })]
    })
}