/** chunk id: 892873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => T
});
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(793574),
    o = n(688810),
    c = n(979286),
    d = n(993408),
    u = n(821701),
    m = n(841702),
    p = n(571827),
    g = n(465794),
    x = n(919395),
    f = n(287809),
    A = n(954571),
    h = n(927578),
    _ = n(725550),
    E = n(307560),
    y = n(652215),
    C = n(788868),
    j = n(985018),
    I = n(818183);

function P(e) {
    let {
        user: t,
        product: n,
        purchase: i,
        onApply: s,
        onClose: a,
        onOpenShop: o,
        disableApplyButton: c,
        canUsePremiumCollectibles: u,
        selectedProfileEffect: m
    } = e, x = null != i ? (0, d.gA)(i) : (0, d.G0)(n);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(l.jlY, {
            "data-migration-pending": !0,
            className: I.Hx,
            children: [null != i && (u || !x) || null === m ? (0, r.jsx)(l.Button, {
                variant: "primary",
                text: j.intl.string(j.t.Jh8fJz),
                onClick: s,
                disabled: c
            }) : null == i && (u || !x) ? (0, r.jsx)(l.Button, {
                variant: "primary",
                text: j.intl.string(j.t.fYfGgK),
                onClick: () => o(m?.skuId)
            }) : (0, r.jsx)(g.A, {
                subscriptionTier: C.pe.TIER_2,
                showGradient: !u,
                textOptions: {
                    textOverride: h.Ay.isPremium(t) ? j.intl.string(j.t.KXLX7l) : u ? j.intl.string(j.t.mr4K7D) : j.intl.string(j.t.pj0XBN)
                }
            }), !u && x ? (0, r.jsx)(p.A, {
                itemType: i?.type ?? n?.type,
                onClose: a
            }) : (0, r.jsx)(l.Button, {
                variant: "secondary",
                text: j.intl.string(j.t["ETE/oC"]),
                onClick: a
            })]
        })
    })
}

function v(e) {
    let {
        user: t,
        guild: n,
        categories: s,
        purchases: o,
        initialSelectedProfileEffect: m,
        currentSavedEffect: p,
        analyticsLocations: g,
        onClose: f
    } = e, {
        pendingProfileEffect: A
    } = (0, x.nZ)(n?.id), [y, C] = i.useMemo(() => {
        let e = (0, d.sz)(s, o);
        return [e.purchased, e.shopPreviews]
    }, [s, o]), [v, T] = i.useState(() => null != m ? m : void 0 !== A ? A : null == p ? null : p ?? null), b = i.useMemo(() => y.find(e => {
        let {
            skuId: t
        } = e;
        return t === v?.skuId
    }) ?? C.find(e => {
        let {
            skuId: t
        } = e;
        return t === v?.skuId
    }) ?? null, [v, y, C]), {
        product: S,
        purchase: N
    } = (0, u.A)(b?.skuId), k = i.useRef(null), O = h.Ay.canUseCollectibles(t), R = void 0 === A ? v?.skuId === p?.skuId : v?.skuId === A?.skuId, U = i.useCallback(e => {
        T(e)
    }, [T]), L = i.useCallback(e => {
        f(), (0, c.Cz)({
            analyticsLocations: g,
            analyticsSource: a.A.EDIT_PROFILE_EFFECT_MODAL,
            initialProductSkuId: e
        })
    }, [g, f]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(l.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: I.Hc,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: j.intl.string(j.t["/6nv6N"])
            }), (0, r.jsx)(l.s_y, {
                "data-migration-pending": !0,
                className: I.iT,
                onClick: f
            })]
        }), (0, r.jsxs)(l.$mQ, {
            "data-migration-pending": !0,
            className: I.jE,
            children: [(0, r.jsx)(E.A, {
                user: t,
                guild: n,
                pendingProfileEffect: v,
                selectedProfileEffectRef: k,
                onSelect: U,
                onOpenShop: L
            }), (0, r.jsx)(_.A, {
                user: t,
                pendingProfileEffectRecord: b,
                product: S,
                purchase: N,
                guild: n
            })]
        }), (0, r.jsx)(P, {
            user: t,
            onApply: () => {
                (0, x.mZ)(v, n?.id), f()
            },
            onClose: f,
            onOpenShop: L,
            product: S,
            purchase: N,
            canUsePremiumCollectibles: O,
            selectedProfileEffect: v,
            disableApplyButton: R
        })]
    })
}

function T(e) {
    let {
        transitionState: t,
        analyticsLocations: n,
        initialSelectedEffect: c,
        guild: d,
        onClose: u
    } = e, {
        isFetching: p,
        categories: g,
        purchases: h
    } = (0, m.Ay)(), _ = (0, s.bG)([f.default], () => f.default.getCurrentUser()), {
        analyticsLocations: E
    } = (0, o.Ay)(n, a.A.EDIT_PROFILE_EFFECT_MODAL), C = (0, x.N2)({
        user: _,
        guildId: d?.id
    });
    return i.useEffect(() => {
        A.default.track(y.HAw.OPEN_MODAL, {
            type: y.JJy.PROFILE_EFFECT_CUSTOMIZATION,
            location_stack: E
        })
    }, [E]), (0, r.jsx)(o.f5, {
        value: E,
        children: (0, r.jsx)(l.EOs, {
            transitionState: t,
            className: I.yl,
            size: p ? l.rIJ.DYNAMIC : l.rIJ.MEDIUM,
            parentComponent: "ProfileEffectModal",
            "data-migration-pending": !0,
            children: p ? (0, r.jsx)(l.y$y, {
                className: I.u1,
                type: l.y$y.Type.SPINNING_CIRCLE
            }) : (0, r.jsx)(v, {
                user: _,
                guild: d,
                categories: g,
                purchases: h,
                initialSelectedProfileEffect: c,
                currentSavedEffect: C,
                onClose: u,
                analyticsLocations: E
            })
        })
    })
}