/** chunk id: 364616 params = (module,exports,require) **/
a.d(t, {
    A: () => T
});
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(837381),
    o = a(741918),
    c = a(158954),
    d = a(827734),
    u = a(990078),
    m = a(260762),
    p = a(298072),
    _ = a(274590),
    h = a(466459),
    x = a(623373),
    f = a(561769),
    g = a(985018),
    v = a(286156);
let A = e => {
        let {
            product: t,
            onVariantEnter: a,
            onVariantExit: i,
            isCollapsed: c,
            wrap: d,
            overflowProps: u
        } = e, _ = (0, p.Q)(t), {
            shownVariants: h,
            totalVariants: f,
            hasOverflow: g
        } = r.useMemo(() => {
            let e = u?.maxVariantsToShow;
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
        }, [t, u?.maxVariantsToShow]), A = r.useCallback((e, a) => {
            e.stopPropagation(), (0, p.n)(t, a)
        }, [t]), I = (0, m.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === h.length ? null : (0, n.jsx)(l.hD, {
            navigator: I,
            children: (0, n.jsx)(l.PR, {
                children: e => {
                    let {
                        ref: r,
                        ...l
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s()({
                            [v.yZ]: c,
                            [v.sz]: !c,
                            [v.LV]: d
                        }, v.lO),
                        ref: r,
                        ...l,
                        children: [h.map((e, t) => (0, n.jsx)(C, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === _,
                            onVariantEnter: () => a(t),
                            onVariantExit: i,
                            zIndex: f - Math.abs(_ - t),
                            onVariantClick: A
                        }, e.variantValue)), null != u && g && (0, n.jsx)(j, {
                            zIndex: _ >= u.maxVariantsToShow - 1 ? f + 1 : 0,
                            isSelected: _ >= u.maxVariantsToShow - 1,
                            onOverflowClick: u.onClick,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    C = e => {
        let {
            variant: t,
            variantIndex: a,
            isSelected: i,
            onVariantClick: o,
            onVariantEnter: d,
            onVariantExit: m,
            zIndex: p
        } = e, {
            onFocus: _,
            ...x
        } = (0, l.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: f
        } = (0, h.h)(t), A = r.useCallback(e => {
            o(e, a), _()
        }, [o, _, a]);
        return (0, n.jsx)(u.m, {
            text: g.intl.string(g.t["6cfuDj"]),
            shouldShow: f,
            children: (0, n.jsx)(c.DUT, {
                "aria-label": t.variantLabel,
                onClick: A,
                onMouseEnter: d,
                onMouseLeave: m,
                onFocus: d,
                onBlur: m,
                className: s()(v.bP, {
                    [v.wH]: i
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: p
                },
                ...x,
                children: f && (0, n.jsx)(I, {
                    variant: t
                })
            })
        })
    },
    I = e => {
        let {
            variant: t
        } = e, a = (0, _.A)(t);
        return (0, n.jsx)(c.BNr, {
            className: v.U,
            color: a ? d.A.colors.BLACK.css : d.A.colors.WHITE.css
        })
    },
    j = e => {
        let {
            zIndex: t,
            isSelected: a,
            onOverflowClick: i,
            storeListingId: o
        } = e, {
            onFocus: d,
            ...u
        } = (0, l.rm)(`shop-variants-group-${o}-overflow`), m = r.useCallback(e => {
            e.stopPropagation(), i(e), d()
        }, [i, d]);
        return (0, n.jsx)(c.DUT, {
            "aria-label": g.intl.string(g.t["+0zcgs"]),
            onClick: m,
            className: s()(v.bP, v.V3, {
                [v.wH]: a
            }),
            style: {
                zIndex: t
            },
            ...u,
            children: (0, n.jsx)(c.j96, {
                className: v.ab,
                color: "white"
            })
        })
    },
    T = e => {
        let {
            skuId: t,
            isCollapsed: a = !1,
            wrap: r = !1,
            onVariantEnter: i,
            onVariantExit: s,
            overflowProps: l
        } = e, o = (0, f.Vm)(t);
        return null != o && (0, x.B1)(o) ? (0, n.jsx)(A, {
            product: o,
            onVariantEnter: i,
            onVariantExit: s,
            isCollapsed: a,
            wrap: r,
            overflowProps: l
        }) : null
    }