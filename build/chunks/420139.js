/** Chunk was on web.js **/
/** chunk id: 420139, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(397927),
    d = n(391048),
    f = n(158032),
    p = n(362111),
    _ = n(821189),
    h = n(637141),
    m = n(688810),
    g = n(160946),
    E = n(351906),
    y = n(295405),
    b = n(97352),
    O = n(927578),
    v = n(83617),
    A = n(615396),
    I = n(543767),
    S = n(652215),
    T = n(985018),
    C = n(752375),
    N = n(20976);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            w(e, t, n[t])
        })
    }
    return e
}

function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function D(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function x(e) {
    let {
        subscription: t,
        onPaymentSourceAdded: n,
        highlightAddPaymentMethodButton: a,
        dropdownClassName: o,
        analyticsLocation: w,
        currentInvoicePreview: P,
        disabled: x = !1
    } = e, j = (0, c.bG)([E.A], () => E.A.hidePersonalInformation), [M, k] = (0, c.yK)([y.A], () => [y.A.paymentSources, y.A.hasFetchedPaymentSources]), U = (0, g.Y)((0, A.MP)(t)), {
        analyticsLocations: G
    } = (0, m.Ay)(), V = i.useMemo(() => Object.values(M).filter(e => !e.invalid), [M]), [F, B] = i.useState(!1), [H, Y] = i.useState(t.currency), W = async (e, n, r) => {
        if (null == t) throw Error("missing subscription and paymentSource");
        null == e ? await f.r6(t, n, r, G, w) : await f.uK(t, e, n, r, G, w), B(!1), Y(n)
    }, K = async (e, n, r) => {
        B(!0);
        let i = await (0, I.OQ)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: G,
                analyticsLocation: w
            }),
            a = {
                amount: i.subtotal,
                currency: i.currency
            };
        P.currency !== i.currency || P.currency === i.currency && P.total !== i.total ? await L(i, () => {
            r(e, n, a)
        }, () => {
            B(!1)
        }) : r(e, n, a)
    }, z = e => {
        let n = b.A.get(t.planIdForCurrencies);
        l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
        let r = (0, v._w)(n.id, e.id, !1);
        return r.length > 0 ? r[0] : S.Yri.USD
    }, q = e => {
        null != e && K(e, z(e), W)
    }, Z = e => {
        (0, v.c_)(e.id, (0, A.MP)(t)).then(() => {
            K(e, z(e), W)
        }), "function" == typeof n && n(e.id)
    }, X = () => {
        (0, u.mMO)(async () => e => (0, r.jsx)(p.default, D(R({}, e), {
            onAddPaymentSource: Z,
            analyticsLocation: w
        })), {
            onCloseCallback: () => {
                (0, d.ET)()
            },
            onCloseRequest: S.tEg
        })
    }, Q = () => {
        let e = t.paymentSourceId;
        return (0, r.jsx)(h.Ay, {
            prependOption: null == e ? {
                label: T.intl.string(T.t.iA5vA1),
                value: null
            } : null,
            className: o,
            paymentSources: V,
            hidePersonalInformation: j,
            selectedPaymentSourceId: e,
            onChange: q,
            onPaymentSourceAdd: X,
            dropdownLoading: F,
            disabled: x,
            paymentGatewayRestrictions: t.eligiblePaymentGateways
        })
    }, J = () => (0, r.jsx)(u.Button, {
        fullWidth: !0,
        variant: a ? "primary" : "secondary",
        onClick: X,
        text: T.intl.string(T.t.CpOiEO)
    }), $ = e => {
        l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
        let t = (0, O.tW)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
        return (0, r.jsx)(u.MzZ, {
            href: t,
            useDefaultUnderlineStyles: !1,
            className: C.uZ,
            children: (0, r.jsx)(u.Button, {
                variant: "secondary",
                text: T.intl.string(T.t.SgX7Ra),
                fullWidth: !0
            })
        })
    };
    if (t.isPurchasedExternally) return $(t);
    if (!k || !U) return (0, r.jsx)(u.y$y, {});
    if (!(V.length > 0)) return J();
    {
        let e = b.A.get(t.planIdForCurrencies);
        l()(null != e, "Unable to fetch plan");
        let n = (0, v._w)(e, t.paymentSourceId, !1);
        return (0, r.jsxs)(r.Fragment, {
            children: [Q(), null != t.paymentSourceId ? (0, r.jsx)(_.f, {
                currencies: n,
                children: (0, r.jsx)("div", {
                    className: s()(C.Gl, N.Uu, N.Hu),
                    children: (0, r.jsx)(_.A, {
                        label: T.intl.string(T.t["0YjaXf"]),
                        selectedCurrency: H,
                        currencies: n,
                        onChange: e => {
                            K(void 0, e, W)
                        }
                    })
                })
            }) : null]
        })
    }
}
let L = async (e, t, i) => {
    let a = await (0, u.mMO)(async () => {
        let {
            default: a
        } = await n.e("49297").then(n.bind(n, 760941));
        return n => (0, r.jsx)(a, {
            newInvoice: e,
            onConfirm: t,
            onCancel: i,
            modalProps: n
        })
    }, {
        onCloseRequest: () => {
            null != a && (0, u.OoC)(a), i()
        }
    })
}