/** chunk id: 364616 params = (module,exports,require) **/
r.d(t, {
    A: () => _
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(837381),
    u = r(741918),
    o = r(158954),
    d = r(827734),
    c = r(990078),
    p = r(260762),
    m = r(298072),
    x = r(274590),
    g = r(466459),
    h = r(623373),
    C = r(561769),
    A = r(985018),
    k = r(356529);
let I = e => {
        let {
            product: t,
            onVariantEnter: r,
            onVariantExit: i,
            isCollapsed: o,
            wrap: d,
            overflowProps: c
        } = e, x = (0, m.Q)(t), {
            shownVariants: g,
            totalVariants: C,
            hasOverflow: A
        } = l.useMemo(() => {
            let e = c?.maxVariantsToShow;
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
        }, [t, c?.maxVariantsToShow]), I = l.useCallback((e, r) => {
            e.stopPropagation(), (0, m.n)(t, r)
        }, [t]), f = (0, p.A)(`shop-variants-group-${t.storeListingId}`, u.Gl.HORIZONTAL);
        return 0 === g.length ? null : (0, n.jsx)(a.hD, {
            navigator: f,
            children: (0, n.jsx)(a.PR, {
                children: e => {
                    let {
                        ref: l,
                        ...a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s()({
                            [k.yZ]: o,
                            [k.sz]: !o,
                            [k.LV]: d
                        }, k.lO),
                        ref: l,
                        ...a,
                        children: [g.map((e, t) => (0, n.jsx)(v, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === x,
                            onVariantEnter: () => r(t),
                            onVariantExit: i,
                            zIndex: C - Math.abs(x - t),
                            onVariantClick: I
                        }, e.variantValue)), null != c && A && (0, n.jsx)(y, {
                            zIndex: x >= c.maxVariantsToShow - 1 ? C + 1 : 0,
                            isSelected: x >= c.maxVariantsToShow - 1,
                            onOverflowClick: c.onClick,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    v = e => {
        let {
            variant: t,
            variantIndex: r,
            isSelected: i,
            onVariantClick: u,
            onVariantEnter: d,
            onVariantExit: p,
            zIndex: m
        } = e, {
            onFocus: x,
            ...h
        } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: C
        } = (0, g.h)(t), I = l.useCallback(e => {
            u(e, r), x()
        }, [u, x, r]);
        return (0, n.jsx)(c.m, {
            text: A.intl.string(A.t["6cfuDj"]),
            shouldShow: C,
            children: (0, n.jsx)(o.DUT, {
                "aria-label": t.variantLabel,
                onClick: I,
                onMouseEnter: d,
                onMouseLeave: p,
                onFocus: d,
                onBlur: p,
                className: s()(k.bP, {
                    [k.wH]: i
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: m
                },
                ...h,
                children: C && (0, n.jsx)(f, {
                    variant: t
                })
            })
        })
    },
    f = e => {
        let {
            variant: t
        } = e, r = (0, x.A)(t);
        return (0, n.jsx)(o.BNr, {
            className: k.U,
            color: r ? d.A.colors.BLACK.css : d.A.colors.WHITE.css
        })
    },
    y = e => {
        let {
            zIndex: t,
            isSelected: r,
            onOverflowClick: i,
            storeListingId: u
        } = e, {
            onFocus: d,
            ...c
        } = (0, a.rm)(`shop-variants-group-${u}-overflow`), p = l.useCallback(e => {
            e.stopPropagation(), i(e), d()
        }, [i, d]);
        return (0, n.jsx)(o.DUT, {
            "aria-label": A.intl.string(A.t["+0zcgs"]),
            onClick: p,
            className: s()(k.bP, k.V3, {
                [k.wH]: r
            }),
            style: {
                zIndex: t
            },
            ...c,
            children: (0, n.jsx)(o.j96, {
                className: k.ab,
                color: "white"
            })
        })
    },
    _ = e => {
        let {
            skuId: t,
            isCollapsed: r = !1,
            wrap: l = !1,
            onVariantEnter: i,
            onVariantExit: s,
            overflowProps: a
        } = e, u = (0, C.Vm)(t);
        return null != u && (0, h.B1)(u) ? (0, n.jsx)(I, {
            product: u,
            onVariantEnter: i,
            onVariantExit: s,
            isCollapsed: r,
            wrap: l,
            overflowProps: a
        }) : null
    }