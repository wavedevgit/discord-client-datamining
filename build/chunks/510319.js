/** chunk id: 510319 params = (module,exports,require) **/
n.d(t, {
    default: () => b
});
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(793574),
    c = n(688810),
    o = n(571827),
    d = n(725807),
    u = n(919395),
    m = n(84540),
    p = n(287809),
    f = n(954571),
    x = n(927578),
    g = n(979286),
    A = n(993408),
    h = n(821701),
    _ = n(841702),
    E = n(618644),
    C = n(788426),
    j = n(652215),
    y = n(788868),
    I = n(985018),
    P = n(289138);

function v(e) {
    let {
        user: t,
        product: n,
        purchase: i,
        onApply: s,
        onClose: a,
        onOpenShop: c,
        disableApplyButton: u,
        canUsePremiumCollectibles: m,
        selectedProfileEffect: p
    } = e, f = null != i ? (0, A.gA)(i) : (0, A.G0)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(l.jlY, {
            "data-migration-pending": !0,
            className: P.Hx,
            children: [null != i && (m || !f) || null === p ? (0, r.jsx)(l.Button, {
                variant: "primary",
                text: I.intl.string(I.t.Jh8fJz),
                onClick: s,
                disabled: u
            }) : null == i && (m || !f) ? (0, r.jsx)(l.Button, {
                variant: "primary",
                text: I.intl.string(I.t.fYfGgK),
                onClick: () => c(p?.skuId)
            }) : (0, r.jsx)(d.A, {
                subscriptionTier: y.pe.TIER_2,
                showGradient: !m,
                textOptions: {
                    textOverride: x.Ay.isPremium(t) ? I.intl.string(I.t.KXLX7l) : m ? I.intl.string(I.t.mr4K7D) : I.intl.string(I.t.pj0XBN)
                }
            }), !m && f ? (0, r.jsx)(o.A, {
                itemType: i?.type ?? n?.type,
                onClose: a
            }) : (0, r.jsx)(l.Button, {
                variant: "secondary",
                text: I.intl.string(I.t["ETE/oC"]),
                onClick: a
            })]
        })
    })
}

function T(e) {
    let {
        user: t,
        guild: n,
        categories: s,
        purchases: c,
        initialSelectedProfileEffect: o,
        currentSavedEffect: d,
        analyticsLocations: p,
        onClose: f
    } = e, {
        pendingProfileEffect: _
    } = (0, u.nZ)(n?.id), [j, y] = i.useMemo(() => {
        let e = (0, A.sz)(s, c);
        return [e.purchased, e.shopPreviews]
    }, [s, c]), [T, b] = i.useState(() => null != o ? o : void 0 !== _ ? _ : null == d ? null : d ?? null), N = i.useMemo(() => j.find(e => {
        let {
            skuId: t
        } = e;
        return t === T?.skuId
    }) ?? y.find(e => {
        let {
            skuId: t
        } = e;
        return t === T?.skuId
    }) ?? null, [T, j, y]), {
        product: S,
        purchase: k
    } = (0, h.A)(N?.skuId), O = i.useRef(null), R = x.Ay.canUseCollectibles(t), L = void 0 === _ ? T?.skuId === d?.skuId : T?.skuId === _?.skuId, U = i.useCallback(e => {
        b(e)
    }, [b]), M = i.useCallback(e => {
        f(), (0, g.Cz)({
            analyticsLocations: p,
            analyticsSource: a.A.EDIT_PROFILE_EFFECT_MODAL,
            initialProductSkuId: e
        })
    }, [p, f]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(l.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: P.Hc,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: I.intl.string(I.t["/6nv6N"])
            }), (0, r.jsx)(l.s_y, {
                "data-migration-pending": !0,
                className: P.iT,
                onClick: f
            })]
        }), (0, r.jsxs)(l.$mQ, {
            "data-migration-pending": !0,
            className: P.jE,
            children: [(0, r.jsx)(C.A, {
                user: t,
                guild: n,
                pendingProfileEffect: T,
                selectedProfileEffectRef: O,
                onSelect: U,
                onOpenShop: M
            }), (0, r.jsx)(E.A, {
                user: t,
                pendingProfileEffectRecord: N,
                product: S,
                purchase: k,
                guild: n
            })]
        }), (0, r.jsx)(v, {
            user: t,
            onApply: () => {
                (0, m.p)({
                    guildId: n?.id,
                    profileEffect: T ?? null
                }), f()
            },
            onClose: f,
            onOpenShop: M,
            product: S,
            purchase: k,
            canUsePremiumCollectibles: R,
            selectedProfileEffect: T,
            disableApplyButton: L
        })]
    })
}

function b(e) {
    let {
        transitionState: t,
        analyticsLocations: n,
        initialSelectedEffect: o,
        guild: d,
        onClose: m
    } = e, {
        isFetching: x,
        categories: g,
        purchases: A
    } = (0, _.Ay)(), h = (0, s.bG)([p.default], () => p.default.getCurrentUser()), {
        analyticsLocations: E
    } = (0, c.Ay)(n, a.A.EDIT_PROFILE_EFFECT_MODAL), C = (0, u.N2)({
        user: h,
        guildId: d?.id
    });
    return i.useEffect(() => {
        f.default.track(j.HAw.OPEN_MODAL, {
            type: j.JJy.PROFILE_EFFECT_CUSTOMIZATION,
            location_stack: E
        })
    }, [E]), (0, r.jsx)(c.f5, {
        value: E,
        children: (0, r.jsx)(l.EOs, {
            transitionState: t,
            className: P.yl,
            size: x ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
            parentComponent: "ProfileEffectModal",
            "data-migration-pending": !0,
            children: x ? (0, r.jsx)(l.y$y, {
                className: P.u1,
                type: l.y$y.Type.SPINNING_CIRCLE
            }) : (0, r.jsx)(T, {
                user: h,
                guild: d,
                categories: g,
                purchases: A,
                initialSelectedProfileEffect: o,
                currentSavedEffect: C,
                onClose: m,
                analyticsLocations: E
            })
        })
    })
}