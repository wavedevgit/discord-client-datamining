/** Chunk was on 2827 **/
/** chunk id: 420139, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(397927),
    u = n(391048),
    _ = n(158032),
    p = n(362111),
    m = n(821189),
    g = n(637141),
    A = n(688810),
    f = n(160946),
    b = n(351906),
    h = n(295405),
    E = n(97352),
    O = n(927578),
    C = n(83617),
    x = n(615396),
    S = n(543767),
    T = n(652215),
    I = n(985018),
    y = n(752375),
    N = n(20976);

function j(e) {
    let {
        subscription: t,
        onPaymentSourceAdded: n,
        highlightAddPaymentMethodButton: l,
        dropdownClassName: a,
        analyticsLocation: j,
        currentInvoicePreview: P,
        disabled: R = !1
    } = e, D = (0, c.bG)([b.A], () => b.A.hidePersonalInformation), [L, w] = (0, c.yK)([h.A], () => [h.A.paymentSources, h.A.hasFetchedPaymentSources]), M = (0, f.Y)((0, x.MP)(t)), {
        analyticsLocations: G
    } = (0, A.Ay)(), U = i.useMemo(() => Object.values(L).filter(e => !e.invalid), [L]), [k, B] = i.useState(!1), [H, V] = i.useState(t.currency), F = async (e, n, r) => {
        if (null == t) throw Error("missing subscription and paymentSource");
        null == e ? await _.r6(t, n, r, G, j) : await _.uK(t, e, n, r, G, j), B(!1), V(n)
    }, Y = async (e, n, r) => {
        B(!0);
        let i = await (0, S.OQ)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: G,
                analyticsLocation: j
            }),
            l = {
                amount: i.subtotal,
                currency: i.currency
            };
        P.currency !== i.currency || P.currency === i.currency && P.total !== i.total ? await v(i, () => {
            r(e, n, l)
        }, () => {
            B(!1)
        }) : r(e, n, l)
    }, W = e => {
        let n = E.A.get(t.planIdForCurrencies);
        o()(null != e, "paymentSource not specified for change"), o()(null != n, "Unable to fetch plan");
        let r = (0, C._w)(n.id, e.id, !1);
        return r.length > 0 ? r[0] : T.Yri.USD
    }, K = e => {
        (0, C.c_)(e.id, (0, x.MP)(t)).then(() => {
            Y(e, W(e), F)
        }), "function" == typeof n && n(e.id)
    }, z = () => {
        (0, d.mMO)(async () => e => {
            var t, n;
            return (0, r.jsx)(p.default, (t = function(e) {
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
            }({}, e), n = n = {
                onAddPaymentSource: K,
                analyticsLocation: j
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }, {
            onCloseCallback: () => {
                (0, u.ET)()
            },
            onCloseRequest: T.tEg
        })
    };
    if (t.isPurchasedExternally) {
        let e;
        return o()(null != t.paymentGateway, "Expected payment gateway when managed externally"), e = (0, O.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"), (0, r.jsx)(d.MzZ, {
            href: e,
            useDefaultUnderlineStyles: !1,
            className: y.uZ,
            children: (0, r.jsx)(d.Button, {
                variant: "secondary",
                text: I.intl.string(I.t.SgX7Ra),
                fullWidth: !0
            })
        })
    }
    if (!w || !M) return (0, r.jsx)(d.y$y, {});
    if (!(U.length > 0)) return (0, r.jsx)(d.Button, {
        fullWidth: !0,
        variant: l ? "primary" : "secondary",
        onClick: z,
        text: I.intl.string(I.t.CpOiEO)
    });
    {
        let e, n = E.A.get(t.planIdForCurrencies);
        o()(null != n, "Unable to fetch plan");
        let i = (0, C._w)(n, t.paymentSourceId, !1);
        return (0, r.jsxs)(r.Fragment, {
            children: [(e = t.paymentSourceId, (0, r.jsx)(g.A, {
                prependOption: null == e ? {
                    label: I.intl.string(I.t.iA5vA1),
                    value: null
                } : null,
                className: a,
                paymentSources: U,
                hidePersonalInformation: D,
                selectedPaymentSourceId: e,
                onChange: e => {
                    null != e && Y(e, W(e), F)
                },
                onPaymentSourceAdd: z,
                dropdownLoading: k,
                disabled: R,
                paymentGatewayRestrictions: t.eligiblePaymentGateways
            })), null != t.paymentSourceId ? (0, r.jsx)(m.f, {
                currencies: i,
                children: (0, r.jsx)("div", {
                    className: s()(y.Gl, N.Uu, N.Hu),
                    children: (0, r.jsx)(m.A, {
                        label: I.intl.string(I.t["0YjaXf"]),
                        selectedCurrency: H,
                        currencies: i,
                        onChange: e => {
                            Y(void 0, e, F)
                        }
                    })
                })
            }) : null]
        })
    }
}
let v = async (e, t, i) => {
    let l = await (0, d.mMO)(async () => {
        let {
            default: l
        } = await n.e("49297").then(n.bind(n, 760941));
        return n => (0, r.jsx)(l, {
            newInvoice: e,
            onConfirm: t,
            onCancel: i,
            modalProps: n
        })
    }, {
        onCloseRequest: () => {
            null != l && (0, d.OoC)(l), i()
        }
    })
}