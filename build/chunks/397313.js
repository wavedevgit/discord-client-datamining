/** Chunk was on 53274 **/
/** chunk id: 397313, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => L
});
var n = r(627968),
    o = r(64700),
    i = r(503698),
    s = r.n(i),
    c = r(311907),
    l = r(421380),
    a = r(397927),
    p = r(73153),
    u = r(384904),
    d = r(73825),
    f = r(160946),
    m = r(156312),
    y = r(166532),
    _ = r(422936),
    b = r(234419),
    j = r(465794),
    O = r(811611),
    g = r(632638),
    x = r(901017),
    P = r(773669),
    h = r(295405),
    v = r(252424),
    k = r(927578),
    E = r(580630),
    C = r(652215),
    S = r(788868),
    I = r(985018),
    w = r(158057);
let N = e => {
        let {
            locale: t
        } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(x.A, {
                icon: a.tEP,
                iconClassName: w.xy,
                description: I.intl.string(I.t.uAfKTe)
            }), (0, n.jsx)(x.A, {
                icon: a.vRF,
                iconClassName: w.Jx,
                description: I.intl.formatToPlainString(I.t.sWnv5M, {
                    numGuildSubscriptions: S.M4,
                    discountPercent: (0, v.l9)(t, S.oX / 100)
                })
            }), (0, n.jsx)(x.A, {
                icon: a.nm2,
                iconClassName: w.Zr,
                description: I.intl.string(I.t.pqHIf7)
            })]
        })
    },
    R = e => {
        let {
            trialOffer: t,
            discountOffer: o,
            isLoading: i,
            price: l,
            onClose: p
        } = e, u = (0, c.bG)([P.default], () => P.default.locale), d = null != t || null != o;
        return (0, n.jsxs)("div", {
            className: w.iE,
            children: [(0, n.jsx)(a.s_y, {
                "data-migration-pending": !0,
                onClick: p,
                className: w.b
            }), d && (0, n.jsx)(O.Vq, {
                className: w.Fg
            }), (0, n.jsx)("img", {
                className: s()(w.c8, {
                    [w.mk]: d
                }),
                src: r(377191),
                alt: ""
            }), i ? (0, n.jsx)(a.y$y, {}) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: w.R_,
                    children: null == l ? (0, n.jsx)(a.y$y, {
                        type: a.y$y.Type.PULSING_ELLIPSIS
                    }) : I.intl.format(I.t.TBsJfQ, {
                        monthlyPrice: (0, E.$g)(l.amount, l.currency)
                    })
                }), (0, n.jsx)("div", {
                    className: w.md,
                    children: (0, n.jsx)(N, {
                        locale: u
                    })
                })]
            })]
        })
    },
    M = e => {
        let {
            trialOffer: t,
            discountOffer: r,
            onClose: o
        } = e, i = {
            section: C.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
        };
        return (0, n.jsxs)(a.jlY, {
            "data-migration-pending": !0,
            className: w.qr,
            children: [(0, n.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: I.intl.string(I.t.cpT0Cq),
                onClick: o
            }), (0, n.jsx)(j.A, {
                textOptions: {
                    textOverride: null != t || null != r ? I.intl.string(I.t["Gd/XHF"]) : void 0
                },
                premiumModalAnalyticsLocation: i,
                subscriptionTier: S.pe.TIER_2,
                size: l.$n.Sizes.SMALL,
                color: l.$n.Colors.GREEN,
                onClick: () => {
                    o()
                }
            })]
        })
    };

function L(e) {
    var t, r;
    let {
        onClose: i
    } = e, s = function(e, t) {
        if (null == e) return {};
        var r, n, o, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    i = Object.getOwnPropertyNames(e);
                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
    }(e, ["onClose"]), l = (0, f.Y)(), j = (0, c.bG)([h.A], () => h.A.hasFetchedPaymentSources), O = l && j, x = (0, b.V)(), P = (0, _.O)();
    o.useEffect(() => {
        p.h.wait(() => {
            (0, u.$o)(), (0, d.zS)(null, null, C.tF5.DISCOVERY)
        })
    }, []);
    let v = O ? k.Ay.getDefaultPrice(S.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, n.jsx)(m.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(a.EOs, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({
            "data-migration-pending": !0
        }, s), r = r = {
            "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
            parentComponent: "StickerPackPremiumUpsellModal",
            children: (0, n.jsx)(g.A, {
                hideBreadcrumbs: !0,
                body: (0, n.jsx)(R, {
                    trialOffer: x,
                    discountOffer: P,
                    isLoading: !O,
                    price: v,
                    onClose: i
                }),
                footer: (0, n.jsx)(M, {
                    trialOffer: x,
                    discountOffer: P,
                    onClose: i
                }),
                steps: [y.pn.PREMIUM_UPSELL],
                currentStep: y.pn.PREMIUM_UPSELL
            })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
    })
}