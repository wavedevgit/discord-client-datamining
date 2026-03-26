/** chunk id: 930349 params = (module,exports,require) **/
l.d(t, {
    C: () => h
});
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(158954),
    o = l(990078),
    s = l(397927),
    c = l(985018),
    u = l(967024);

function d() {
    return (0, a.jsx)("div", {
        className: u.overlay
    })
}

function p(e) {
    let {
        iconAlignment: t
    } = e;
    return (0, a.jsx)("div", {
        className: r()(u.iconContainer, {
            [u.iconAlignCenter]: "center" === t,
            [u.iconAlignRight]: "right" === t
        }),
        children: (0, a.jsx)(s.j96, {
            size: "sm",
            color: "white",
            "aria-hidden": !0,
            className: u.overlayIcon
        })
    })
}

function m(e) {
    let {
        onClick: t,
        type: l,
        accessibleLabel: n
    } = e, r = "remove" === l ? c.intl.string(c.t["2A+piL"]) : c.intl.string(c.t.GaEG4t);
    return (0, a.jsx)(o.m, {
        text: r,
        ariaHidden: !0,
        children: (0, a.jsx)(i.K0, {
            "aria-label": n,
            icon: "remove" === l ? i.ucK : i.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: t
        })
    })
}

function h(e) {
    let {
        editingMode: t,
        variant: l,
        onClick: n,
        accessibleLabel: o,
        children: s,
        deleteButtonConfig: c,
        showOverlay: h
    } = e;
    return (0, a.jsxs)("div", {
        className: u.tileWrapper,
        children: [(0, a.jsxs)(i.DUT, {
            "aria-label": o,
            className: r()(u.base, u[l]),
            onClick: n,
            children: [(0, a.jsx)("div", {
                className: u.content,
                children: s
            }), h && (0, a.jsx)(d, {}), "add" === t && (0, a.jsx)(p, {
                iconAlignment: "bar" === l ? "right" : "center"
            })]
        }), null != c && (0, a.jsx)("div", {
            className: u.deleteButtonWrapper,
            children: (0, a.jsx)(m, {
                ...c
            })
        })]
    })
}
h.Overlay = d, h.OverlayIcon = p, h.DeleteButton = m