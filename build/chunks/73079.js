/** Chunk was on web.js **/
/** chunk id: 73079, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(732955),
    c = n(397927),
    u = n(384904),
    d = n(551262),
    f = n(550238),
    p = n(405139),
    _ = n(626584),
    h = n(812745),
    m = n(192087),
    g = n(615405),
    E = n(723702),
    y = n(652215),
    b = n(985018),
    O = n(577991),
    v = n(20976);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function T(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let C = new _.A("ChoosePaymentSourceType"),
    N = {
        [y.hes.CARD]: h.Ay.Types.UNKNOWN,
        [y.hes.PAYPAL]: h.Ay.Types.PAYPAL,
        [y.hes.SOFORT]: h.Ay.Types.SOFORT,
        [y.hes.GIROPAY]: h.Ay.Types.GIROPAY,
        [y.hes.PRZELEWY24]: h.Ay.Types.PRZELEWY24,
        [y.hes.PAYSAFE_CARD]: h.Ay.Types.PAYSAFECARD,
        [y.hes.GCASH]: h.Ay.Types.GCASH,
        [y.hes.GRABPAY_MY]: h.Ay.Types.GRABPAY,
        [y.hes.MOMO_WALLET]: h.Ay.Types.MOMO_WALLET,
        [y.hes.VENMO]: h.Ay.Types.VENMO,
        [y.hes.KAKAOPAY]: h.Ay.Types.KAKAOPAY,
        [y.hes.GOPAY_WALLET]: h.Ay.Types.GOPAY_WALLET,
        [y.hes.BANCONTACT]: h.Ay.Types.BANCONTACT,
        [y.hes.EPS]: h.Ay.Types.EPS,
        [y.hes.IDEAL]: h.Ay.Types.IDEAL,
        [y.hes.CASH_APP]: h.Ay.Types.CASH_APP
    },
    w = 1e3,
    R = "40c266_1";
class P extends i.PureComponent {
    componentDidMount() {
        var e;
        (0, u.xe)(), (null != (e = this.props.paymentRequestWallets) ? e : []).length > 0 && setTimeout(() => {
            this.considerPaymentRequestWalletsLoaded()
        }, w)
    }
    considerPaymentRequestWalletsLoaded() {
        var e;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length || !this.arePaymentRequestWalletsLoading()) return;
        C.warn("Payment request wallets failed to load in time: ".concat(t.join(", "), ". Max time allowed: ").concat(w, " ms"));
        let n = t.reduce((e, t) => T(I({}, e), {
            ["".concat(t, "Loaded")]: !0
        }), {});
        this.setState(n)
    }
    arePaymentRequestWalletsLoading() {
        var e;
        if ((0, E.isDesktop)()) return !1;
        let t = null != (e = this.props.paymentRequestWallets) ? e : [];
        if (0 === t.length) return !1;
        for (let e of t)
            if (!this.state["".concat(e, "Loaded")]) return !0;
        return !1
    }
    toggleAllPayments() {
        let {
            showAllPaymentMethods: e
        } = this.state;
        this.setState({
            showAllPaymentMethods: !e
        })
    }
    createPaymentButtons(e) {
        return e.map(e => {
            var t;
            let n = N[e],
                i = m.w[e](),
                a = null == this.props.paymentSourceTypeRestrictions || (null == (t = this.props.paymentSourceTypeRestrictions) ? void 0 : t.includes(e));
            return (0, r.jsx)(l.$nd, {
                onClick: () => this.props.onChooseType(e),
                disabled: !a,
                fullWidth: !0,
                text: i,
                icon: () => (0, r.jsx)(h.Ay, {
                    className: O.iA,
                    type: n
                })
            }, e)
        })
    }
    render() {
        var e;
        let {
            showAllPaymentMethods: t
        } = this.state, {
            onChooseType: n,
            className: i,
            onStripePaymentMethodReceived: a,
            ipCountryCode: o,
            ipCountryCodeHasError: l,
            paymentRequestPaymentContext: u,
            isEligibleForTrial: _ = !1
        } = this.props, h = null != (e = this.props.paymentRequestWallets) ? e : [], m = {
            iconClassName: O.iA,
            paymentLabel: b.intl.string(b.t.ZURqX0),
            onStripePaymentMethodReceived: a,
            onChooseType: n,
            paymentRequestPaymentContext: u
        }, g = h.map((e, t) => {
            let n = () => this.setState({
                    ["".concat(e, "Loaded")]: !0
                }),
                i = {
                    onValidPaymentRequest: n,
                    onPaymentRequestFailure: n
                },
                a = "".concat(e, "-").concat(t);
            return "applePay" === e ? (0, r.jsx)(p.Mv, I({}, m, i), a) : (0, r.jsx)(p.dP, I({}, m, i), a)
        }), E = [], y = [], A = void 0 === o || this.arePaymentRequestWalletsLoading();
        if (l) E.push(...this.createPaymentButtons((0, f.J)({
            ipCountryCode: "ALL",
            location: R
        }).countryPaymentMethods));
        else {
            let {
                countryPaymentMethods: e,
                remainingPaymentMethods: t
            } = (0, f.J)({
                ipCountryCode: o,
                location: R
            });
            E.push(...this.createPaymentButtons(e)), y.push(...this.createPaymentButtons(t))
        }
        let S = (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("div", {
                className: s()(v.LV, v.xM, O.kL),
                children: [E, g]
            }), (0, r.jsx)("div", {
                className: y.length > 0 ? v.Uu : O.R,
                children: (0, r.jsxs)(c.DUT, {
                    onClick: () => this.toggleAllPayments(),
                    className: s()(v.Uu, O.pn),
                    children: [b.intl.string(b.t["4uiQmz"]), (0, r.jsx)(d.A, {
                        open: t
                    })]
                })
            }), t && (0, r.jsx)("div", {
                className: s()(v.LV, v.xM, O.eH, O.kL, {
                    [v.Uu]: t
                }),
                children: y
            })]
        });
        return A && !l && (S = (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                className: O.R,
                children: g
            }), (0, r.jsx)(c.y$y, {
                type: c.y$y.Type.SPINNING_CIRCLE
            })]
        })), (0, r.jsxs)("div", {
            children: [_ && (0, r.jsx)("hr", {
                className: O.cL
            }), (0, r.jsx)("div", {
                className: i,
                children: (0, r.jsx)(c.D0$, {
                    label: _ ? b.intl.string(b.t.tywMsW) : b.intl.string(b.t["8lqkf8"]),
                    children: S
                })
            }), _ && (0, r.jsx)("hr", {
                className: O.nD
            })]
        })
    }
    constructor(e) {
        super(e), this.state = {
            showAllPaymentMethods: !1,
            applePayLoaded: !1,
            googlePayLoaded: !1
        }
    }
}
let D = o.Ay.connectStores([g.A], () => ({
    ipCountryCode: g.A.ipCountryCode,
    ipCountryCodeHasError: g.A.ipCountryCodeHasError
}))(P)