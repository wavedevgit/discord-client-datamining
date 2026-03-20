/** chunk id: 364616 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(837381),
    s = n(741918),
    d = n(158954),
    u = n(827734),
    p = n(990078),
    c = n(260762),
    _ = n(298072),
    E = n(274590),
    S = n(466459),
    h = n(623373),
    v = n(561769),
    g = n(985018),
    A = n(992732);
let I = e => {
        let {
            product: t,
            onVariantEnter: n,
            onVariantExit: l,
            isCollapsed: d,
            wrap: u,
            overflowProps: p
        } = e, E = (0, _.Q)(t), {
            shownVariants: S,
            totalVariants: v,
            hasOverflow: g
        } = i.useMemo(() => {
            let e = p?.maxVariantsToShow;
            return (0, h.B1)(t) ? null == e || e >= t.variants.length ? {
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
        }, [t, p?.maxVariantsToShow]), I = i.useCallback((e, n) => {
            e.stopPropagation(), (0, _.n)(t, n)
        }, [t]), R = (0, c.A)(`shop-variants-group-${t.storeListingId}`, s.Gl.HORIZONTAL);
        return 0 === S.length ? null : (0, a.jsx)(o.hD, {
            navigator: R,
            children: (0, a.jsx)(o.PR, {
                children: e => {
                    let {
                        ref: i,
                        ...o
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r()({
                            [A.yZ]: d,
                            [A.sz]: !d,
                            [A.LV]: u
                        }, A.lO),
                        ref: i,
                        ...o,
                        children: [S.map((e, t) => (0, a.jsx)(T, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === E,
                            onVariantEnter: () => n(t),
                            onVariantExit: l,
                            zIndex: v - Math.abs(E - t),
                            onVariantClick: I
                        }, e.variantValue)), null != p && g && (0, a.jsx)(y, {
                            zIndex: E >= p.maxVariantsToShow - 1 ? v + 1 : 0,
                            isSelected: E >= p.maxVariantsToShow - 1,
                            onOverflowClick: p.onClick,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    T = e => {
        let {
            variant: t,
            variantIndex: n,
            isSelected: l,
            onVariantClick: s,
            onVariantEnter: u,
            onVariantExit: c,
            zIndex: _
        } = e, {
            onFocus: E,
            ...h
        } = (0, o.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: v
        } = (0, S.h)(t), I = i.useCallback(e => {
            s(e, n), E()
        }, [s, E, n]);
        return (0, a.jsx)(p.m, {
            text: g.intl.string(g.t["6cfuDj"]),
            shouldShow: v,
            children: (0, a.jsx)(d.DUT, {
                "aria-label": t.variantLabel,
                onClick: I,
                onMouseEnter: u,
                onMouseLeave: c,
                onFocus: u,
                onBlur: c,
                className: r()(A.bP, {
                    [A.wH]: l
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: _
                },
                ...h,
                children: v && (0, a.jsx)(R, {
                    variant: t
                })
            })
        })
    },
    R = e => {
        let {
            variant: t
        } = e, n = (0, E.A)(t);
        return (0, a.jsx)(d.BNr, {
            className: A.U,
            color: n ? u.A.colors.BLACK.css : u.A.colors.WHITE.css
        })
    },
    y = e => {
        let {
            zIndex: t,
            isSelected: n,
            onOverflowClick: l,
            storeListingId: s
        } = e, {
            onFocus: u,
            ...p
        } = (0, o.rm)(`shop-variants-group-${s}-overflow`), c = i.useCallback(e => {
            e.stopPropagation(), l(e), u()
        }, [l, u]);
        return (0, a.jsx)(d.DUT, {
            "aria-label": g.intl.string(g.t["+0zcgs"]),
            onClick: c,
            className: r()(A.bP, A.V3, {
                [A.wH]: n
            }),
            style: {
                zIndex: t
            },
            ...p,
            children: (0, a.jsx)(d.j96, {
                className: A.ab,
                color: "white"
            })
        })
    },
    m = e => {
        let {
            skuId: t,
            isCollapsed: n = !1,
            wrap: i = !1,
            onVariantEnter: l,
            onVariantExit: r,
            overflowProps: o
        } = e, s = (0, v.Vm)(t);
        return null != s && (0, h.B1)(s) ? (0, a.jsx)(I, {
            product: s,
            onVariantEnter: l,
            onVariantExit: r,
            isCollapsed: n,
            wrap: i,
            overflowProps: o
        }) : null
    }