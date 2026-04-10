/** chunk id: 876813 params = (module,exports,require) **/
n.d(t, {
    Q: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(573435),
    o = n(933297),
    d = n(661281);

function c(e) {
    let {
        icon: t,
        sizePx: n,
        positionClassName: l
    } = e, c = function(e) {
        switch (e) {
            case o.NF.ROUNDED:
                return d.Nb;
            case o.NF.SQUIRCLE:
                return d.uk
        }
    }(t.shape), u = s.useMemo(() => ({
        width: `${n}px`,
        height: `${n}px`
    }), [n]);
    switch (t.shape) {
        case o.NF.SQUIRCLE:
            return (0, i.jsx)("div", {
                className: r()(d.Gt, l),
                style: u,
                children: (0, i.jsx)(a.Ay, {
                    className: d.uk,
                    mask: a.Ay.Masks.SQUIRCLE,
                    width: n,
                    height: n,
                    children: (0, i.jsx)("div", {
                        className: d.A3,
                        children: (0, i.jsx)("div", {
                            className: d.ZY,
                            children: t.icon
                        })
                    })
                })
            });
        case o.NF.ROUNDED:
            return (0, i.jsx)("div", {
                className: r()(d.Gt, l, c),
                style: u,
                children: (0, i.jsx)("div", {
                    className: d.ZY,
                    children: t.icon
                })
            })
    }
}

function u(e) {
    let {
        decoration: t
    } = e, n = t.useIcons();
    if (null == n) return null;
    let {
        frontIcon: s,
        backIcon: l
    } = n;
    return (0, i.jsxs)("div", {
        className: d.VD,
        "aria-hidden": !0,
        children: [null != l && (0, i.jsx)(c, {
            icon: l,
            sizePx: 40,
            positionClassName: d.j2
        }), (0, i.jsx)(c, {
            icon: s,
            sizePx: 48,
            positionClassName: d.hU
        })]
    })
}

function m(e) {
    let {
        decoration: t
    } = e;
    if (t.type === o.wF.STACKED_ICONS) return (0, i.jsx)(u, {
        decoration: t
    })
}