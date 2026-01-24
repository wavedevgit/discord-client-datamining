/** Chunk was on 92818 **/
/** chunk id: 892873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => C
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    o = n(793574),
    c = n(688810),
    a = n(979286),
    u = n(993408),
    d = n(821701),
    p = n(841702),
    m = n(571827),
    f = n(465794),
    g = n(919395),
    x = n(287809),
    y = n(954571),
    b = n(927578),
    h = n(725550),
    j = n(307560),
    A = n(652215),
    O = n(788868),
    v = n(985018),
    _ = n(347677);

function P(e) {
    var t;
    let {
        user: n,
        product: l,
        purchase: i,
        onApply: o,
        onClose: c,
        onOpenShop: a,
        disableApplyButton: d,
        canUsePremiumCollectibles: p,
        selectedProfileEffect: g
    } = e, x = null != i ? (0, u.gA)(i) : (0, u.G0)(l);
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsxs)(s.jlY, {
            "data-migration-pending": !0,
            className: _.Hx,
            children: [null != i && (p || !x) || null === g ? (0, r.jsx)(s.Button, {
                variant: "primary",
                text: v.intl.string(v.t.Jh8fJz),
                onClick: o,
                disabled: d
            }) : null == i && (p || !x) ? (0, r.jsx)(s.Button, {
                variant: "primary",
                text: v.intl.string(v.t.fYfGgK),
                onClick: () => a(null == g ? void 0 : g.skuId)
            }) : (0, r.jsx)(f.A, {
                subscriptionTier: O.pe.TIER_2,
                showGradient: !p,
                textOptions: {
                    textOverride: b.Ay.isPremium(n) ? v.intl.string(v.t.KXLX7l) : p ? v.intl.string(v.t.mr4K7D) : v.intl.string(v.t.pj0XBN)
                }
            }), !p && x ? (0, r.jsx)(m.A, {
                itemType: null != (t = null == i ? void 0 : i.type) ? t : null == l ? void 0 : l.type,
                onClose: c
            }) : (0, r.jsx)(s.Button, {
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
        guild: n,
        categories: i,
        purchases: c,
        initialSelectedProfileEffect: p,
        currentSavedEffect: m,
        analyticsLocations: f,
        onClose: x
    } = e, {
        pendingProfileEffect: y
    } = (0, g.nZ)(null == n ? void 0 : n.id), [A, O] = l.useMemo(() => {
        let e = (0, u.sz)(i, c);
        return [e.purchased, e.shopPreviews]
    }, [i, c]), [E, C] = l.useState(() => null != p ? p : void 0 !== y ? y : null == m ? null : null != m ? m : null), I = l.useMemo(() => {
        var e;
        let t = A.find(e => {
            let {
                skuId: t
            } = e;
            return t === (null == E ? void 0 : E.skuId)
        });
        return null != (e = null != t ? t : O.find(e => {
            let {
                skuId: t
            } = e;
            return t === (null == E ? void 0 : E.skuId)
        })) ? e : null
    }, [E, A, O]), {
        product: w,
        purchase: S
    } = (0, d.A)(null == I ? void 0 : I.skuId), k = l.useRef(null), N = b.Ay.canUseCollectibles(t), T = void 0 === y ? (null == E ? void 0 : E.skuId) === (null == m ? void 0 : m.skuId) : (null == E ? void 0 : E.skuId) === (null == y ? void 0 : y.skuId), R = l.useCallback(e => {
        C(e)
    }, [C]), D = l.useCallback(e => {
        x(), (0, a.Cz)({
            analyticsLocations: f,
            analyticsSource: o.A.EDIT_PROFILE_EFFECT_MODAL,
            initialProductSkuId: e
        })
    }, [f, x]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: _.Hc,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: v.intl.string(v.t["/6nv6N"])
            }), (0, r.jsx)(s.s_y, {
                "data-migration-pending": !0,
                className: _.iT,
                onClick: x
            })]
        }), (0, r.jsxs)(s.$mQ, {
            "data-migration-pending": !0,
            className: _.jE,
            children: [(0, r.jsx)(j.A, {
                user: t,
                guild: n,
                pendingProfileEffect: E,
                selectedProfileEffectRef: k,
                onSelect: R,
                onOpenShop: D
            }), (0, r.jsx)(h.A, {
                user: t,
                pendingProfileEffectRecord: I,
                product: w,
                purchase: S,
                guild: n
            })]
        }), (0, r.jsx)(P, {
            user: t,
            onApply: () => {
                (0, g.mZ)(E, null == n ? void 0 : n.id), x()
            },
            onClose: x,
            onOpenShop: D,
            product: w,
            purchase: S,
            canUsePremiumCollectibles: N,
            selectedProfileEffect: E,
            disableApplyButton: T
        })]
    })
}

function C(e) {
    let {
        transitionState: t,
        analyticsLocations: n,
        initialSelectedEffect: a,
        guild: u,
        onClose: d
    } = e, {
        isFetching: m,
        categories: f,
        purchases: b
    } = (0, p.Ay)(), h = (0, i.bG)([x.default], () => x.default.getCurrentUser()), {
        analyticsLocations: j
    } = (0, c.Ay)(n, o.A.EDIT_PROFILE_EFFECT_MODAL), O = (0, g.N2)({
        user: h,
        guildId: null == u ? void 0 : u.id
    });
    return l.useEffect(() => {
        y.default.track(A.HAw.OPEN_MODAL, {
            type: A.JJy.PROFILE_EFFECT_CUSTOMIZATION,
            location_stack: j
        })
    }, [j]), (0, r.jsx)(c.f5, {
        value: j,
        children: (0, r.jsx)(s.EOs, {
            transitionState: t,
            className: _.yl,
            size: m ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
            parentComponent: "ProfileEffectModal",
            "data-migration-pending": !0,
            children: m ? (0, r.jsx)(s.y$y, {
                className: _.u1,
                type: s.y$y.Type.SPINNING_CIRCLE
            }) : (0, r.jsx)(E, {
                user: h,
                guild: u,
                categories: f,
                purchases: b,
                initialSelectedProfileEffect: a,
                currentSavedEffect: O,
                onClose: d,
                analyticsLocations: j
            })
        })
    })
}