/** chunk id: 364616 params = (module,exports,require) **/
r.d(t, {
    A: () => E
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(837381),
    u = r(741918),
    o = r(158954),
    c = r(827734),
    d = r(990078),
    m = r(260762),
    h = r(298072),
    p = r(274590),
    f = r(466459),
    x = r(623373),
    g = r(561769),
    C = r(985018),
    v = r(356529);
let A = e => {
        let {
            product: t,
            onVariantEnter: r,
            onVariantExit: i,
            isCollapsed: o,
            wrap: c,
            overflowProps: d
        } = e, p = (0, h.Q)(t), {
            shownVariants: f,
            totalVariants: g,
            hasOverflow: C
        } = l.useMemo(() => {
            let e = d?.maxVariantsToShow;
            return (0, x.B1)(t) ? null == e || e >= t.variants.length ? {
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
        }, [t, d?.maxVariantsToShow]), A = l.useCallback((e, r) => {
            e.stopPropagation(), (0, h.n)(t, r)
        }, [t]), b = (0, m.A)(`shop-variants-group-${t.storeListingId}`, u.Gl.HORIZONTAL);
        return 0 === f.length ? null : (0, n.jsx)(a.hD, {
            navigator: b,
            children: (0, n.jsx)(a.PR, {
                children: e => {
                    let {
                        ref: l,
                        ...a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s()({
                            [v.yZ]: o,
                            [v.sz]: !o,
                            [v.LV]: c
                        }, v.lO),
                        ref: l,
                        ...a,
                        children: [f.map((e, t) => (0, n.jsx)(k, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === p,
                            onVariantEnter: () => r(t),
                            onVariantExit: i,
                            zIndex: g - Math.abs(p - t),
                            onVariantClick: A
                        }, e.variantValue)), null != d && C && (0, n.jsx)(I, {
                            zIndex: p >= d.maxVariantsToShow - 1 ? g + 1 : 0,
                            isSelected: p >= d.maxVariantsToShow - 1,
                            onOverflowClick: d.onClick,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    k = e => {
        let {
            variant: t,
            variantIndex: r,
            isSelected: i,
            onVariantClick: u,
            onVariantEnter: c,
            onVariantExit: m,
            zIndex: h
        } = e, {
            onFocus: p,
            ...x
        } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: g
        } = (0, f.h)(t), A = l.useCallback(e => {
            u(e, r), p()
        }, [u, p, r]);
        return (0, n.jsx)(d.m, {
            text: C.intl.string(C.t["6cfuDj"]),
            shouldShow: g,
            children: (0, n.jsx)(o.DUT, {
                "aria-label": t.variantLabel,
                onClick: A,
                onMouseEnter: c,
                onMouseLeave: m,
                onFocus: c,
                onBlur: m,
                className: s()(v.bP, {
                    [v.wH]: i
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: h
                },
                ...x,
                children: g && (0, n.jsx)(b, {
                    variant: t
                })
            })
        })
    },
    b = e => {
        let {
            variant: t
        } = e, r = (0, p.A)(t);
        return (0, n.jsx)(o.BNr, {
            className: v.U,
            color: r ? c.A.colors.BLACK.css : c.A.colors.WHITE.css
        })
    },
    I = e => {
        let {
            zIndex: t,
            isSelected: r,
            onOverflowClick: i,
            storeListingId: u
        } = e, {
            onFocus: c,
            ...d
        } = (0, a.rm)(`shop-variants-group-${u}-overflow`), m = l.useCallback(e => {
            e.stopPropagation(), i(e), c()
        }, [i, c]);
        return (0, n.jsx)(o.DUT, {
            "aria-label": C.intl.string(C.t["+0zcgs"]),
            onClick: m,
            className: s()(v.bP, v.V3, {
                [v.wH]: r
            }),
            style: {
                zIndex: t
            },
            ...d,
            children: (0, n.jsx)(o.j96, {
                className: v.ab,
                color: "white"
            })
        })
    },
    E = e => {
        let {
            skuId: t,
            isCollapsed: r = !1,
            wrap: l = !1,
            onVariantEnter: i,
            onVariantExit: s,
            overflowProps: a
        } = e, u = (0, g.Vm)(t);
        return null != u && (0, x.B1)(u) ? (0, n.jsx)(A, {
            product: u,
            onVariantEnter: i,
            onVariantExit: s,
            isCollapsed: r,
            wrap: l,
            overflowProps: a
        }) : null
    }