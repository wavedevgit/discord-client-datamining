/** chunk id: 364616 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(837381),
    o = n(741918),
    c = n(158954),
    d = n(827734),
    u = n(990078),
    m = n(260762),
    h = n(298072),
    p = n(274590),
    x = n(466459),
    f = n(623373),
    v = n(561769),
    _ = n(985018),
    g = n(992732);
let A = e => {
        let {
            product: t,
            onVariantEnter: n,
            onVariantExit: i,
            isCollapsed: c,
            wrap: d,
            overflowProps: u
        } = e, p = (0, h.Q)(t), {
            shownVariants: x,
            totalVariants: v,
            hasOverflow: _
        } = a.useMemo(() => {
            let e = u?.maxVariantsToShow;
            return (0, f.B1)(t) ? null == e || e >= t.variants.length ? {
                shownVariants: t.variants,
                totalVariants: t.variants.length,
                hasOverflow: !1
            } : {
                shownVariants: t.variants.slice(0, e - 1),
                totalVariants: t.variants.length,
                hasOverflow: !0
            } : {
                shownVariants: [],
                totalVariants: 0,
                hasOverflow: !1
            }
        }, [t, u?.maxVariantsToShow]), A = a.useCallback((e, n) => {
            e.stopPropagation(), (0, h.n)(t, n)
        }, [t]), C = (0, m.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === x.length ? null : (0, r.jsx)(s.hD, {
            navigator: C,
            children: (0, r.jsx)(s.PR, {
                children: e => {
                    let {
                        ref: a,
                        ...s
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l()({
                            [g.yZ]: c,
                            [g.sz]: !c,
                            [g.LV]: d
                        }, g.lO),
                        ref: a,
                        ...s,
                        children: [x.map((e, t) => (0, r.jsx)(j, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === p,
                            onVariantEnter: () => n(t),
                            onVariantExit: i,
                            zIndex: v - Math.abs(p - t),
                            onVariantClick: A
                        }, e.variantValue)), null != u && _ && (0, r.jsx)(N, {
                            zIndex: p >= u.maxVariantsToShow - 1 ? v + 1 : 0,
                            isSelected: p >= u.maxVariantsToShow - 1,
                            onOverflowClick: u.onClick,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    j = e => {
        let {
            variant: t,
            variantIndex: n,
            isSelected: i,
            onVariantClick: o,
            onVariantEnter: d,
            onVariantExit: m,
            zIndex: h
        } = e, {
            onFocus: p,
            ...f
        } = (0, s.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: v
        } = (0, x.h)(t), A = a.useCallback(e => {
            o(e, n), p()
        }, [o, p, n]);
        return (0, r.jsx)(u.m, {
            text: _.intl.string(_.t["6cfuDj"]),
            shouldShow: v,
            children: (0, r.jsx)(c.DUT, {
                "aria-label": t.variantLabel,
                onClick: A,
                onMouseEnter: d,
                onMouseLeave: m,
                onFocus: d,
                onBlur: m,
                className: l()(g.bP, {
                    [g.wH]: i
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: h
                },
                ...f,
                children: v && (0, r.jsx)(C, {
                    variant: t
                })
            })
        })
    },
    C = e => {
        let {
            variant: t
        } = e, n = (0, p.A)(t);
        return (0, r.jsx)(c.BNr, {
            className: g.U,
            color: n ? d.A.colors.BLACK.css : d.A.colors.WHITE.css
        })
    },
    N = e => {
        let {
            zIndex: t,
            isSelected: n,
            onOverflowClick: i,
            storeListingId: o
        } = e, {
            onFocus: d,
            ...u
        } = (0, s.rm)(`shop-variants-group-${o}-overflow`), m = a.useCallback(e => {
            e.stopPropagation(), i(e), d()
        }, [i, d]);
        return (0, r.jsx)(c.DUT, {
            "aria-label": _.intl.string(_.t["+0zcgs"]),
            onClick: m,
            className: l()(g.bP, g.V3, {
                [g.wH]: n
            }),
            style: {
                zIndex: t
            },
            ...u,
            children: (0, r.jsx)(c.j96, {
                className: g.ab,
                color: "white"
            })
        })
    },
    b = e => {
        let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: a = !1,
            onVariantEnter: i,
            onVariantExit: l,
            overflowProps: s
        } = e, o = (0, v.Vm)(t);
        return null != o && (0, f.B1)(o) ? (0, r.jsx)(A, {
            product: o,
            onVariantEnter: i,
            onVariantExit: l,
            isCollapsed: n,
            wrap: a,
            overflowProps: s
        }) : null
    }