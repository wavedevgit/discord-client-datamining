/** Chunk was on 28636 **/
/** chunk id: 487953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(230109),
    a = n(397927),
    s = n(735991),
    o = n(635350),
    c = n(486020),
    d = n(841985),
    u = n(985018),
    p = n(286453);
let h = function(e) {
    var t, n, h;
    let {
        application: m,
        onSelectApplication: g,
        showCategory: _ = !1
    } = e, b = l.useRef(null), f = null == (n = m.categories) ? void 0 : n[0], [x, v] = l.useState(!1), j = l.useCallback(e => {
        e && v(!0)
    }, []), A = (0, s.NO)(m), y = l.useCallback(() => {
        g(m.id)
    }, [g, m.id]), C = l.useMemo(() => x ? c.Ay.getApplicationIconURL({
        id: m.id,
        icon: m.icon,
        size: 48
    }) : void 0, [x, m]), O = _ && null != f;
    return (0, r.jsx)(i.L, {
        innerRef: b,
        onChange: j,
        active: !x,
        children: (0, r.jsx)("div", {
            ref: b,
            className: p.kL,
            children: (0, r.jsxs)(o.A, {
                className: p.Nr,
                onClick: y,
                onContextMenu: () => {},
                "aria-label": u.intl.string(u.t.np1Wru),
                children: [(0, r.jsxs)("div", {
                    className: p.wx,
                    children: [(0, r.jsx)("div", {
                        style: {
                            width: "100%",
                            display: "block",
                            aspectRatio: 16 / 9
                        },
                        children: x ? (0, r.jsx)(d.A, {
                            application: m,
                            bannerType: "card",
                            iconURL: C
                        }) : null
                    }), (0, r.jsx)("div", {
                        className: p.H,
                        style: {
                            height: 28
                        },
                        children: x ? (0, r.jsx)("img", {
                            src: C,
                            alt: "",
                            className: p.my,
                            height: 48,
                            width: 48,
                            style: {
                                borderWidth: 4,
                                marginLeft: 12
                            }
                        }) : null
                    })]
                }), (0, r.jsxs)("div", {
                    className: p.eV,
                    children: [(0, r.jsx)("div", {
                        className: p.gn,
                        children: (0, r.jsx)("div", {
                            className: p.DD,
                            children: (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                className: p.JB,
                                children: m.name
                            })
                        })
                    }), O || A ? (0, r.jsxs)("div", {
                        className: p.op,
                        children: [O ? (0, r.jsx)(a.Text, {
                            className: p.m4,
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: f.name
                        }) : null, O && A ? (0, r.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: "•"
                        }) : null, A ? (0, r.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: u.intl.string(u.t["/eVltv"])
                        }) : null]
                    }) : null, (0, r.jsx)(a.Text, {
                        className: p.h_,
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: O || A ? 2 : 3,
                        children: null != (t = null == (h = m.directory_entry) ? void 0 : h.short_description) ? t : m.description
                    })]
                })]
            })
        })
    })
}