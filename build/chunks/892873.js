/** Chunk was on 92818 **/
/** chunk id: 892873, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => C
}), r(896048);
var n = r(627968),
    l = r(64700),
    i = r(311907),
    s = r(397927),
    o = r(793574),
    c = r(688810),
    a = r(979286),
    u = r(993408),
    d = r(821701),
    p = r(841702),
    f = r(571827),
    m = r(465794),
    g = r(919395),
    y = r(287809),
    b = r(954571),
    O = r(927578),
    x = r(725550),
    h = r(307560),
    j = r(652215),
    A = r(788868),
    v = r(985018),
    P = r(347677);

function _(e) {
    var t;
    let {
        user: r,
        product: l,
        purchase: i,
        onApply: o,
        onClose: c,
        onOpenShop: a,
        disableApplyButton: d,
        canUsePremiumCollectibles: p,
        selectedProfileEffect: g
    } = e, y = null != i ? (0, u.gA)(i) : (0, u.G0)(l);
    return (0, n.jsx)(n.Fragment, {
        children: (0, n.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: P.Hx,
            children: [null != i && (p || !y) || null === g ? (0, n.jsx)(s.Button, {
                variant: "primary",
                text: v.intl.string(v.t.Jh8fJz),
                onClick: o,
                disabled: d
            }) : null == i && (p || !y) ? (0, n.jsx)(s.Button, {
                variant: "primary",
                text: v.intl.string(v.t.fYfGgK),
                onClick: () => a(null == g ? void 0 : g.skuId)
            }) : (0, n.jsx)(m.A, {
                subscriptionTier: A.pe.TIER_2,
                showGradient: !p,
                textOptions: {
                    textOverride: O.Ay.isPremium(r) ? v.intl.string(v.t.KXLX7l) : p ? v.intl.string(v.t.mr4K7D) : v.intl.string(v.t.pj0XBN)
                }
            }), !p && y ? (0, n.jsx)(f.A, {
                itemType: null != (t = null == i ? void 0 : i.type) ? t : null == l ? void 0 : l.type,
                onClose: c
            }) : (0, n.jsx)(s.Button, {
                variant: "secondary",
                text: v.intl.string(v.t["ETE/oC"]),
                onClick: c
            })]
        })
    })
}

function E(e) {
    let {
        user: t,
        guild: r,
        categories: i,
        purchases: c,
        initialSelectedProfileEffect: p,
        currentSavedEffect: f,
        analyticsLocations: m,
        onClose: y
    } = e, {
        pendingProfileEffect: b
    } = (0, g.nZ)(null == r ? void 0 : r.id), [j, A] = l.useMemo(() => {
        let e = (0, u.sz)(i, c);
        return [e.purchased, e.shopPreviews]
    }, [i, c]), [E, C] = l.useState(() => null != p ? p : void 0 !== b ? b : null == f ? null : null != f ? f : null), w = l.useMemo(() => {
        var e;
        let t = j.find(e => {
            let {
                skuId: t
            } = e;
            return t === (null == E ? void 0 : E.skuId)
        });
        return null != (e = null != t ? t : A.find(e => {
            let {
                skuId: t
            } = e;
            return t === (null == E ? void 0 : E.skuId)
        })) ? e : null
    }, [E, j, A]), {
        product: I,
        purchase: S
    } = (0, d.A)(null == w ? void 0 : w.skuId), T = l.useRef(null), k = O.Ay.canUseCollectibles(t), N = void 0 === b ? (null == E ? void 0 : E.skuId) === (null == f ? void 0 : f.skuId) : (null == E ? void 0 : E.skuId) === (null == b ? void 0 : b.skuId), R = l.useCallback(e => {
        C(e)
    }, [C]), U = l.useCallback(e => {
        y(), (0, a.Cz)({
            analyticsLocations: m,
            analyticsSource: o.A.EDIT_PROFILE_EFFECT_MODAL,
            initialProductSkuId: e
        })
    }, [m, y]);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: P.Hc,
            children: [(0, n.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: v.intl.string(v.t["/6nv6N"])
            }), (0, n.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: P.iT,
                onClick: y
            })]
        }), (0, n.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: P.jE,
            children: [(0, n.jsx)(h.A, {
                user: t,
                guild: r,
                pendingProfileEffect: E,
                selectedProfileEffectRef: T,
                onSelect: R,
                onOpenShop: U
            }), (0, n.jsx)(x.A, {
                user: t,
                pendingProfileEffectRecord: w,
                product: I,
                purchase: S,
                guild: r
            })]
        }), (0, n.jsx)(_, {
            user: t,
            onApply: () => {
                (0, g.mZ)(E, null == r ? void 0 : r.id), y()
            },
            onClose: y,
            onOpenShop: U,
            product: I,
            purchase: S,
            canUsePremiumCollectibles: k,
            selectedProfileEffect: E,
            disableApplyButton: N
        })]
    })
}

function C(e) {
    let {
        transitionState: t,
        analyticsLocations: r,
        initialSelectedEffect: a,
        guild: u,
        onClose: d
    } = e, {
        isFetching: f,
        categories: m,
        purchases: O
    } = (0, p.Ay)(), x = (0, i.bG)([y.default], () => y.default.getCurrentUser()), {
        analyticsLocations: h
    } = (0, c.Ay)(r, o.A.EDIT_PROFILE_EFFECT_MODAL), A = (0, g.N2)({
        user: x,
        guildId: null == u ? void 0 : u.id
    });
    return l.useEffect(() => {
        b.default.track(j.HAw.OPEN_MODAL, {
            type: j.JJy.PROFILE_EFFECT_CUSTOMIZATION,
            location_stack: h
        })
    }, [h]), (0, n.jsx)(c.f5, {
        value: h,
        children: (0, n.jsx)(s.EOs, {
            transitionState: t,
            className: P.yl,
            size: f ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
            parentComponent: "ProfileEffectModal",
            "data-migration-pending": !0,
            children: f ? (0, n.jsx)(s.y$y, {
                className: P.u1,
                type: s.y$y.Type.SPINNING_CIRCLE
            }) : (0, n.jsx)(E, {
                user: x,
                guild: u,
                categories: m,
                purchases: O,
                initialSelectedProfileEffect: a,
                currentSavedEffect: A,
                onClose: d,
                analyticsLocations: h
            })
        })
    })
}