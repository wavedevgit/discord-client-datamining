/** chunk id: 364616 params = (module,exports,require) **/
a.d(t, {
    A: () => V
});
var n = a(627968),
    l = a(64700),
    r = a(503698),
    s = a.n(r),
    i = a(837381),
    o = a(741918),
    u = a(158954),
    c = a(827734),
    d = a(990078),
    h = a(260762),
    p = a(298072),
    v = a(274590),
    C = a(466459),
    k = a(623373),
    g = a(561769),
    m = a(758836),
    A = a(985018),
    x = a(952769);
let _ = e => {
        let {
            product: t,
            onVariantEnter: a,
            onVariantExit: r,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: v
        } = e, C = (0, p.Q)(t), {
            shownVariants: g,
            totalVariants: m,
            hasOverflow: A
        } = l.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, k.B1)(t) ? null == e || e >= t.variants.length ? {
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
        }, [t, d?.maxVariantsToShow]), _ = l.useCallback((e, a) => {
            e.stopPropagation(), (0, p.n)(t, a)
        }, [t]), R = (0, h.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === g.length ? null : (0, n.jsx)(i.hD, {
            navigator: R,
            children: (0, n.jsx)(i.PR, {
                children: e => {
                    let {
                        ref: l,
                        ...i
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s()({
                            [x.yZ]: u,
                            [x.sz]: !u,
                            [x.LV]: c
                        }, x.lO),
                        ref: l,
                        ...i,
                        children: [g.map((e, t) => (0, n.jsx)(b, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === C,
                            onVariantEnter: () => a(t),
                            onVariantExit: r,
                            zIndex: m - Math.abs(C - t),
                            onVariantClick: _,
                            onTrackClick: v
                        }, e.variantValue)), null != d && A && (0, n.jsx)(I, {
                            zIndex: C >= d.maxVariantsToShow - 1 ? m + 1 : 0,
                            isSelected: C >= d.maxVariantsToShow - 1,
                            onOverflowClick: d.onClick,
                            onTrackClick: v,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    b = e => {
        let {
            variant: t,
            variantIndex: a,
            isSelected: r,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: h,
            zIndex: p,
            onTrackClick: v
        } = e, {
            onFocus: k,
            ...g
        } = (0, i.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: _
        } = (0, C.h)(t), b = l.useCallback(e => {
            v?.(m.sH.VARIANT_CLICK, a), o(e, a), k()
        }, [o, k, a, v]);
        return (0, n.jsx)(d.m, {
            text: A.intl.string(A.t["6cfuDj"]),
            shouldShow: _,
            children: (0, n.jsx)(u.DUT, {
                "aria-label": t.variantLabel,
                onClick: b,
                onMouseEnter: c,
                onMouseLeave: h,
                onFocus: c,
                onBlur: h,
                className: s()(x.bP, {
                    [x.wH]: r
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: p
                },
                ...g,
                children: _ && (0, n.jsx)(R, {
                    variant: t
                })
            })
        })
    },
    R = e => {
        let {
            variant: t
        } = e, a = (0, v.A)(t);
        return (0, n.jsx)(u.BNr, {
            className: x.U,
            color: a ? c.A.colors.BLACK.css : c.A.colors.WHITE.css
        })
    },
    I = e => {
        let {
            zIndex: t,
            isSelected: a,
            onOverflowClick: r,
            storeListingId: o,
            onTrackClick: c
        } = e, {
            onFocus: d,
            ...h
        } = (0, i.rm)(`shop-variants-group-${o}-overflow`), p = l.useCallback(e => {
            e.stopPropagation(), c?.(m.sH.VARIANT_CLICK_MORE), r(e), d()
        }, [r, d, c]);
        return (0, n.jsx)(u.DUT, {
            "aria-label": A.intl.string(A.t["+0zcgs"]),
            onClick: p,
            className: s()(x.bP, x.V3, {
                [x.wH]: a
            }),
            style: {
                zIndex: t
            },
            ...h,
            children: (0, n.jsx)(u.j96, {
                className: x.ab,
                color: "white"
            })
        })
    },
    V = e => {
        let {
            skuId: t,
            isCollapsed: a = !1,
            wrap: l = !1,
            onVariantEnter: r,
            onVariantExit: s,
            overflowProps: i,
            onTrackClick: o
        } = e, u = (0, g.Vm)(t);
        return null != u && (0, k.B1)(u) ? (0, n.jsx)(_, {
            product: u,
            onVariantEnter: r,
            onVariantExit: s,
            isCollapsed: a,
            wrap: l,
            overflowProps: i,
            onTrackClick: o
        }) : null
    }