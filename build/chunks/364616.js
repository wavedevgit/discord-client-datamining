/** chunk id: 364616 params = (module,exports,require) **/
r.d(t, {
    A: () => E
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(837381),
    o = r(741918),
    u = r(158954),
    c = r(827734),
    d = r(990078),
    p = r(260762),
    k = r(298072),
    C = r(274590),
    m = r(466459),
    x = r(623373),
    g = r(561769),
    A = r(758836),
    h = r(985018),
    I = r(356529);
let v = e => {
        let {
            product: t,
            onVariantEnter: r,
            onVariantExit: i,
            isCollapsed: u,
            wrap: c,
            overflowProps: d,
            onTrackClick: C
        } = e, m = (0, k.Q)(t), {
            shownVariants: g,
            totalVariants: A,
            hasOverflow: h
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
        }, [t, d?.maxVariantsToShow]), v = l.useCallback((e, r) => {
            e.stopPropagation(), (0, k.n)(t, r)
        }, [t]), T = (0, p.A)(`shop-variants-group-${t.storeListingId}`, o.Gl.HORIZONTAL);
        return 0 === g.length ? null : (0, n.jsx)(a.hD, {
            navigator: T,
            children: (0, n.jsx)(a.PR, {
                children: e => {
                    let {
                        ref: l,
                        ...a
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s()({
                            [I.yZ]: u,
                            [I.sz]: !u,
                            [I.LV]: c
                        }, I.lO),
                        ref: l,
                        ...a,
                        children: [g.map((e, t) => (0, n.jsx)(_, {
                            variant: e,
                            variantIndex: t,
                            isSelected: t === m,
                            onVariantEnter: () => r(t),
                            onVariantExit: i,
                            zIndex: A - Math.abs(m - t),
                            onVariantClick: v,
                            onTrackClick: C
                        }, e.variantValue)), null != d && h && (0, n.jsx)(f, {
                            zIndex: m >= d.maxVariantsToShow - 1 ? A + 1 : 0,
                            isSelected: m >= d.maxVariantsToShow - 1,
                            onOverflowClick: d.onClick,
                            onTrackClick: C,
                            storeListingId: t.storeListingId
                        })]
                    })
                }
            })
        })
    },
    _ = e => {
        let {
            variant: t,
            variantIndex: r,
            isSelected: i,
            onVariantClick: o,
            onVariantEnter: c,
            onVariantExit: p,
            zIndex: k,
            onTrackClick: C
        } = e, {
            onFocus: x,
            ...g
        } = (0, a.rm)(`shop-variants-group-${t.storeListingId}-${t.variantLabel}`), {
            isPurchased: v
        } = (0, m.h)(t), _ = l.useCallback(e => {
            C?.(A.sH.VARIANT_CLICK, r), o(e, r), x()
        }, [o, x, r, C]);
        return (0, n.jsx)(d.m, {
            text: h.intl.string(h.t["6cfuDj"]),
            shouldShow: v,
            children: (0, n.jsx)(u.DUT, {
                "aria-label": t.variantLabel,
                onClick: _,
                onMouseEnter: c,
                onMouseLeave: p,
                onFocus: c,
                onBlur: p,
                className: s()(I.bP, {
                    [I.wH]: i
                }),
                style: {
                    backgroundColor: t.variantValue,
                    zIndex: k
                },
                ...g,
                children: v && (0, n.jsx)(T, {
                    variant: t
                })
            })
        })
    },
    T = e => {
        let {
            variant: t
        } = e, r = (0, C.A)(t);
        return (0, n.jsx)(u.BNr, {
            className: I.U,
            color: r ? c.A.colors.BLACK.css : c.A.colors.WHITE.css
        })
    },
    f = e => {
        let {
            zIndex: t,
            isSelected: r,
            onOverflowClick: i,
            storeListingId: o,
            onTrackClick: c
        } = e, {
            onFocus: d,
            ...p
        } = (0, a.rm)(`shop-variants-group-${o}-overflow`), k = l.useCallback(e => {
            e.stopPropagation(), c?.(A.sH.VARIANT_CLICK_MORE), i(e), d()
        }, [i, d, c]);
        return (0, n.jsx)(u.DUT, {
            "aria-label": h.intl.string(h.t["+0zcgs"]),
            onClick: k,
            className: s()(I.bP, I.V3, {
                [I.wH]: r
            }),
            style: {
                zIndex: t
            },
            ...p,
            children: (0, n.jsx)(u.j96, {
                className: I.ab,
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
            overflowProps: a,
            onTrackClick: o
        } = e, u = (0, g.Vm)(t);
        return null != u && (0, x.B1)(u) ? (0, n.jsx)(v, {
            product: u,
            onVariantEnter: i,
            onVariantExit: s,
            isCollapsed: r,
            wrap: l,
            overflowProps: a,
            onTrackClick: o
        }) : null
    }