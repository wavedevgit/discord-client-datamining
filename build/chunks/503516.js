/** Chunk was on web.js **/
/** chunk id: 503516, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    eI: () => U,
    gA: () => j
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(964486),
    s = n(793574),
    l = n(688810),
    c = n(979286),
    u = n(993408),
    d = n(482246),
    f = n(734925),
    p = n(687033),
    _ = n(235986),
    h = n(547065),
    m = n(871181),
    g = n(318007),
    E = n(683433),
    y = n(285719),
    b = n(976860),
    O = n(287809),
    v = n(79387),
    A = n(954571),
    I = n(580630),
    S = n(937008),
    T = n(156312),
    C = n(166532),
    N = n(482132),
    w = n(652215),
    R = n(788868),
    P = n(985018),
    D = n(931854),
    L = n(120459);

function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            x(e, t, n[t])
        })
    }
    return e
}
let j = {
    key: C.pn.GIFT_CUSTOMIZATION,
    renderStep: e => (0, r.jsx)(G, M({}, e)),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => P.intl.string(P.t["W685+b"])
    }
};

function k(e) {
    let {
        onStepChange: t,
        onBackClick: n,
        showBackButton: i = !1,
        disabled: o = !1,
        loading: s = !1
    } = e, {
        hasPaymentSources: l
    } = (0, T.P5)(), c = l ? C.pn.REVIEW : C.pn.ADD_PAYMENT_STEPS;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Button, {
            onClick: () => t(c),
            disabled: o,
            loading: s,
            text: P.intl.string(P.t.XiOHRX)
        }), i ? (0, r.jsx)(E.A, {
            onClick: n
        }) : null]
    })
}
let U = e => {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        customGiftMessage: s = "",
        setCustomGiftMessage: l,
        giftRecipientError: _,
        setGiftRecipientError: E,
        validatingGiftRecipient: b,
        giftRecipient: C,
        recommendedGiftSkuIds: N,
        giftingOrigin: x,
        setValidatingGiftRecipient: M
    } = (0, S.Pv)(), {
        selectedSkuId: j,
        setSelectedSkuId: k,
        selectedSkuPricePreview: U,
        paymentSourceId: G,
        skuPricePreviewsById: B,
        skusById: H
    } = (0, T.P5)(), Y = (0, i.bG)([O.default], () => O.default.getCurrentUser()), {
        enabled: W,
        giftRecommendationAlgorithm: K
    } = h.P.useExperiment({
        location: "CollectiblesPaymentModalGiftCustomizationStep"
    }, {
        autoTrackExposure: !1
    }), z = (0, p.A)(), q = W && x === R.vQ.DM_CHANNEL, Z = K === h.J.POPULAR ? P.intl.string(P.t.Kwgrrr) : P.intl.string(P.t.r1huYR), Q = async (e, t) => {
        M(!0), null != _ && E(), await (0, c.JJ)(e.id, t) || E(P.intl.string(P.t["4kgVqQ"])), M(!1)
    };
    (0, o.Ay)(() => {
        null != j && null != C && (x !== R.vQ.DM_CHANNEL_WISHLIST && A.default.track(w.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
            sku_id: j
        }), Q(C, j))
    });
    let X = e => {
            x !== R.vQ.DM_CHANNEL_WISHLIST && A.default.track(w.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, {
                sku_id: e
            }), null != C && Q(C, e), k(e)
        },
        J = e => {
            let t = B[e],
                n = null;
            if (null != t) {
                var i;
                n = null != G && null != (i = t[G]) ? i : t[v.B]
            }
            if (null == n) return;
            let a = (0, I.$g)(n.amount, n.currency);
            return (0, r.jsx)(d.A, {
                skuId: e,
                pricePreview: n,
                isSelected: e === j,
                onSelect: e => X(e),
                className: D.Cb,
                fallbackPrice: a
            }, e)
        },
        $ = () => (0, r.jsx)(m.A, {
            onTextChange: e => null == l ? void 0 : l(e),
            pendingText: s,
            currentText: s,
            disableThemedBackground: !0,
            className: D.iX,
            innerClassName: D.pt
        });
    return {
        renderLeftColumn: () => q ? (0, r.jsxs)("div", {
            className: D.mT,
            children: [(0, r.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "text-default",
                className: D.B7,
                children: Z.toLocaleUpperCase()
            }), N.map(e => J(e)), (0, r.jsx)(F, {
                handleClose: n
            })]
        }) : (0, r.jsx)("div", {
            className: D.qL,
            children: (0, r.jsx)(g.t, {
                isShopGift: !0
            })
        }),
        renderRightColumn: () => {
            if (q) return (0, r.jsxs)("div", {
                className: D.Tc,
                children: [(0, r.jsx)(y.Z, {
                    giftRecipient: C
                }), (0, r.jsx)(g.t, {
                    isShopGift: !0,
                    className: L.mx,
                    optionsContainerClassName: L.OZ
                }), $()]
            });
            let e = (0, u.Ee)({
                    selectedSkuPricePreview: U,
                    paymentSourceId: G,
                    selectedSkuId: j,
                    skuPricePreviewsById: B,
                    skusById: H,
                    formatPrice: I.$g
                }),
                t = null != U || null != e;
            return x === R.vQ.USER_PROFILE_WISHLIST || x === R.vQ.DM_CHANNEL_WISHLIST ? (0, r.jsxs)("div", {
                className: D.Tc,
                children: [(0, r.jsx)(y.Z, {
                    giftRecipient: C
                }), $(), t && null != j && (0, r.jsx)(d.A, {
                    skuId: j,
                    pricePreview: U,
                    className: D.uW,
                    previewHeaderClassName: D.vX,
                    isSelected: !0,
                    shouldDisplayHeader: !0,
                    hideProfilePreview: !0,
                    fallbackPrice: e
                }), (0, r.jsx)("div", {
                    className: D.fi,
                    children: (0, r.jsx)(V, {
                        handleClose: n,
                        selectedSkuId: j
                    })
                })]
            }) : (0, r.jsxs)("div", {
                className: D.Tc,
                children: [(0, r.jsx)(f.A, {
                    selectedSkuId: j,
                    recipients: z,
                    className: D.uh,
                    validateSelectedGift: Q
                }), $(), t && (0, r.jsx)(d.A, {
                    skuId: j,
                    pricePreview: U,
                    className: D.Ng,
                    isSelected: !0,
                    shouldDisplayHeader: !0,
                    fallbackPrice: e
                })]
            })
        },
        onStepChange: t,
        onBackClick: n,
        ctaDisabled: null != _ || null == C || C.id === (null == Y ? void 0 : Y.id) || s.length > R.Jo,
        loading: b
    }
};

function G(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        renderLeftColumn: i,
        renderRightColumn: o,
        onStepChange: s,
        onBackClick: l,
        ctaDisabled: c,
        loading: u
    } = U({
        handleStepChange: t,
        handleClose: n
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N.dZ, {
            children: (0, r.jsxs)("div", {
                className: D.Du,
                children: [i(), o()]
            })
        }), (0, r.jsx)(N.UX, {
            children: (0, r.jsx)(a.jlY, {
                "data-migration-pending": !0,
                justify: _.A.Justify.BETWEEN,
                align: _.A.Align.CENTER,
                children: (0, r.jsx)(k, {
                    onStepChange: s,
                    onBackClick: l,
                    disabled: c,
                    loading: u
                })
            })
        })]
    })
}

function F(e) {
    let {
        handleClose: t
    } = e, {
        analyticsLocations: n
    } = (0, l.Ay)(s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

    function i() {
        t(), (0, a.s7G)(), (0, c.Cz)({
            analyticsLocations: n,
            analyticsSource: s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
        })
    }
    return (0, r.jsx)(a.DUT, {
        onClick: i,
        children: (0, r.jsxs)("div", {
            className: D.D8,
            children: [(0, r.jsxs)("div", {
                className: D.V1,
                children: [(0, r.jsx)("div", {
                    className: D.sV,
                    children: (0, r.jsx)(a.U1X, {
                        size: "custom",
                        width: 18,
                        height: 18,
                        color: "var(--text-strong)"
                    })
                }), (0, r.jsxs)("div", {
                    className: D.Lc,
                    children: [(0, r.jsx)(a.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: P.intl.string(P.t["1+Co8G"])
                    }), (0, r.jsx)(a.Heading, {
                        color: "text-default",
                        variant: "heading-sm/medium",
                        children: P.intl.string(P.t.nYn52B)
                    })]
                })]
            }), (0, r.jsx)("div", {
                children: (0, r.jsx)(a.KS6, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "var(--text-strong)"
                })
            })]
        })
    })
}

function V(e) {
    let {
        handleClose: t,
        selectedSkuId: n
    } = e, {
        analyticsLocations: i
    } = (0, l.Ay)(s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);

    function o() {
        t(), (0, a.s7G)(), null == n ? (0, c.Cz)({
            analyticsLocations: i,
            analyticsSource: s.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL
        }) : (0, b.pX)("".concat(w.BVt.COLLECTIBLES_SHOP, "#itemSkuId=").concat(n))
    }
    return (0, r.jsx)(a.QWc, {
        text: P.intl.string(P.t.J82mpK),
        onClick: o,
        textVariant: "text-sm/medium"
    })
}