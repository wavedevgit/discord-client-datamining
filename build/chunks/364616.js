/** chunk id: 364616, original params: e,n,a (module,exports,require) **/
a.d(n, {
    A: () => S
});
var t = a(627968),
    i = a(64700),
    l = a(503698),
    r = a.n(l),
    s = a(837381),
    o = a(741918),
    d = a(158954),
    u = a(827734),
    c = a(990078),
    p = a(260762),
    g = a(298072),
    v = a(274590),
    h = a(466459),
    m = a(623373),
    A = a(561769),
    y = a(985018),
    k = a(219974);
let C = e => {
        let {
            product: n,
            onVariantEnter: a,
            onVariantExit: l,
            isCollapsed: d,
            wrap: u,
            overflowProps: c
        } = e, v = (0, g.Q)(n), {
            shownVariants: h,
            totalVariants: A,
            hasOverflow: y
        } = i.useMemo(() => {
            let e = c?.maxVariantsToShow;
            return (0, m.B1)(n) ? null == e || e >= n.variants.length ? {
                shownVariants: n.variants,
                totalVariants: n.variants.length,
                hasOverflow: !1
            } : {
                shownVariants: n.variants.slice(0, e - 1),
                totalVariants: n.variants.length,
                hasOverflow: !0
            } : {
                shownVariants: [],
                totalVariants: 0,
                hasOverflow: !1
            }
        }, [n, c?.maxVariantsToShow]), C = i.useCallback((e, a) => {
            e.stopPropagation(), (0, g.n)(n, a)
        }, [n]), b = (0, p.A)(`shop-variants-group-${n.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === h.length ? null : (0, t.jsx)(s.hD, {
            navigator: b,
            children: (0, t.jsx)(s.PR, {
                children: e => {
                    let {
                        ref: i,
                        ...s
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: r()({
                            [k.yZ]: d,
                            [k.sz]: !d,
                            [k.LV]: u
                        }, k.lO),
                        ref: i,
                        ...s,
                        children: [h.map((e, n) => (0, t.jsx)(f, {
                            variant: e,
                            variantIndex: n,
                            isSelected: n === v,
                            onVariantEnter: () => a(n),
                            onVariantExit: l,
                            zIndex: A - Math.abs(v - n),
                            onVariantClick: C
                        }, e.variantValue)), null != c && y && (0, t.jsx)(_, {
                            zIndex: v >= c.maxVariantsToShow - 1 ? A + 1 : 0,
                            isSelected: v >= c.maxVariantsToShow - 1,
                            onOverflowClick: c.onClick,
                            storeListingId: n.storeListingId
                        })]
                    })
                }
            })
        })
    },
    f = e => {
        let {
            variant: n,
            variantIndex: a,
            isSelected: l,
            onVariantClick: o,
            onVariantEnter: u,
            onVariantExit: p,
            zIndex: g
        } = e, {
            onFocus: v,
            ...m
        } = (0, s.rm)(`shop-variants-group-${n.storeListingId}-${n.variantLabel}`), {
            isPurchased: A
        } = (0, h.h)(n), C = i.useCallback(e => {
            o(e, a), v()
        }, [o, v, a]);
        return (0, t.jsx)(c.m, {
            text: y.intl.string(y.t["6cfuDj"]),
            shouldShow: A,
            children: (0, t.jsx)(d.DUT, {
                "aria-label": n.variantLabel,
                onClick: C,
                onMouseEnter: u,
                onMouseLeave: p,
                onFocus: u,
                onBlur: p,
                className: r()(k.bP, {
                    [k.wH]: l
                }),
                style: {
                    backgroundColor: n.variantValue,
                    zIndex: g
                },
                ...m,
                children: A && (0, t.jsx)(b, {
                    variant: n
                })
            })
        })
    },
    b = e => {
        let {
            variant: n
        } = e, a = (0, v.A)(n);
        return (0, t.jsx)(d.BNr, {
            className: k.U,
            color: a ? u.A.colors.BLACK.css : u.A.colors.WHITE.css
        })
    },
    _ = e => {
        let {
            zIndex: n,
            isSelected: a,
            onOverflowClick: l,
            storeListingId: o
        } = e, {
            onFocus: u,
            ...c
        } = (0, s.rm)(`shop-variants-group-${o}-overflow`), p = i.useCallback(e => {
            e.stopPropagation(), l(e), u()
        }, [l, u]);
        return (0, t.jsx)(d.DUT, {
            "aria-label": y.intl.string(y.t["+0zcgs"]),
            onClick: p,
            className: r()(k.bP, k.V3, {
                [k.wH]: a
            }),
            style: {
                zIndex: n
            },
            ...c,
            children: (0, t.jsx)(d.j96, {
                className: k.ab,
                color: "white"
            })
        })
    },
    S = e => {
        let {
            skuId: n,
            isCollapsed: a = !1,
            wrap: i = !1,
            onVariantEnter: l,
            onVariantExit: r,
            overflowProps: s
        } = e, o = (0, A.Vm)(n);
        return null != o && (0, m.B1)(o) ? (0, t.jsx)(C, {
            product: o,
            onVariantEnter: l,
            onVariantExit: r,
            isCollapsed: a,
            wrap: i,
            overflowProps: s
        }) : null
    }