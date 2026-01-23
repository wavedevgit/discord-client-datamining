/** Chunk was on 2824 **/
/** chunk id: 641819, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => x
}), n(896048), n(114821), n(339614);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    u = n(447784),
    c = n(235986),
    d = n(552736),
    p = n(68545),
    m = n(327101),
    g = n(763327),
    f = n(446929),
    y = n(287809),
    j = n(954571),
    b = n(937008),
    h = n(156312),
    v = n(166532),
    O = n(482132),
    P = n(652215),
    E = n(907);

function x(e) {
    var t, n, i, x, S, T;
    let {
        handleStepChange: I,
        handleClose: A
    } = e, {
        selectedPlan: k,
        selectedSkuId: C,
        step: w
    } = (0, h.P5)(), {
        setSelectedGiftingPromotionReward: _,
        selectedGiftingPromotionReward: M,
        claimableRewards: N,
        claimableVariants: R
    } = (0, b.Pv)(), D = (0, d.A)(), L = (0, a.bG)([y.default], () => y.default.getCurrentUser()), G = (0, p.Ay)(N, R, M), [U, H] = l.useState(null == G || null == (t = G.defaultHighlightedReward) ? void 0 : t.skuId), [B, F] = l.useState(!1), W = (0, m.A)({
        claimableVariants: R,
        claimableRewards: N,
        defaultSelection: G,
        selectedGiftingPromotionReward: M,
        setSelectedGiftingPromotionReward: _,
        hasUserMadeSelection: B
    }), K = l.useMemo(() => {
        var e, t;
        if (null == R || 0 === R.length) return null != (t = null == D ? void 0 : D.rewards) ? t : [];
        let n = null != (e = null == W ? void 0 : W.selectedCategory) ? e : p.Sm.Trick;
        return R.flatMap(e => {
            var t, r;
            return e.variants.length < p.PN ? [] : (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, e.variants[n]), r = r = {
                name: e.name
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }), t)
        })
    }, [R, null == D ? void 0 : D.rewards, null == W ? void 0 : W.selectedCategory]);
    l.useEffect(() => {
        let e = null == G ? void 0 : G.defaultHighlightedReward;
        !B && null == M && null != e && null != e && K.some(t => t.skuId === e.skuId) && (_(e), H(e.skuId))
    }, [G, B, M, K, _]), s()(null != k, "Expected plan to selected"), s()(null != C, "Expected selectedSkuId"), s()(null != w, "Step should be set");
    let V = l.useMemo(() => null != U && (null != N ? N : []).some(e => e.skuId === U), [U, N]),
        z = l.useMemo(() => null != M && K.some(e => e.skuId === M.skuId), [K, M]),
        Y = l.useMemo(() => 0 === K.length || null == U || !z || !V, [K, U, V, z]);
    l.useEffect(() => {
        if (0 === K.length) {
            H(void 0), _(void 0);
            return
        }
        V && K.some(e => e.skuId === U) || null == U || (H(void 0), _(void 0))
    }, [K, V, U, _]);
    let Z = e => {
            _(K.find(t => t.skuId === e)), H(e), F(!0)
        },
        Q = K.map(e => {
            var t, n;
            return (0, r.jsx)(u.k, {
                skuId: e.skuId,
                assetId: e.assetId,
                productName: null == (t = e.name) ? void 0 : t.call(e),
                a11yLabel: null == (n = e.a11yLabel) ? void 0 : n.call(e),
                claimed: null != N && N.every(t => t.skuId !== e.skuId),
                user: L,
                onSelect: Z,
                selectedSkuId: U,
                category: null == W ? void 0 : W.selectedCategory,
                type: e.type,
                palette: e.palette
            }, e.skuId)
        }),
        q = (0, r.jsx)(O.UX, {
            children: (0, r.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: E.Hx,
                children: (0, r.jsx)(f.Z3, {
                    onStepChange: e => {
                        null != L && null != M && j.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                            user_id: L.id,
                            reward_sku_id: M.skuId
                        }), I(e)
                    },
                    onBackClick: () => I(v.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [k.id],
                    selectedPlanId: k.id,
                    isNextDisabled: Y
                })
            })
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(o.rQ0, {
            "data-migration-pending": !0,
            className: E.Hc,
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.START,
            separator: !1,
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: null == D || null == (n = D.rewardSelection) ? void 0 : n.heading()
            }), (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: E.GQ,
                children: null == D || null == (i = D.rewardSelection) ? void 0 : i.primarySubtitle()
            }), (null == D || null == (S = D.rewardSelection) || null == (x = S.secondarySubtitle) ? void 0 : x.call(S)) != null && (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: null == D || null == (T = D.rewardSelection) ? void 0 : T.secondarySubtitle()
            }), (0, r.jsx)(o.s_y, {
                "data-migration-pending": !0,
                className: E.b,
                onClick: A
            })]
        }), (0, r.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            children: (0, r.jsxs)(o.BJc, {
                direction: "vertical",
                justify: "center",
                align: "center",
                children: [(null == W ? void 0 : W.shouldRenderCategoryControl) && (0, r.jsx)(g.A, {
                    defaultCategory: W.selectedCategory,
                    onCategoryChange: W.setSelectedCategory
                }), (0, r.jsx)("div", {
                    className: E.Dq,
                    children: Q
                })]
            })
        }), q]
    })
}