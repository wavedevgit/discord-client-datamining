/** chunk id: 580960, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(65821), n(896048);
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(73153),
    s = n(272355),
    a = n(793574),
    o = n(532794),
    c = n(219271),
    u = n(287809),
    d = n(816733),
    h = n(927578),
    p = n(882442),
    g = n(869968),
    f = n(694080),
    m = n(70730);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
class O extends s.A {
    _initialize() {
        __OVERLAY__ ? i.h.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (i.h.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), i.h.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), i.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), i.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), i.h.subscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities))
    }
    _terminate() {
        __OVERLAY__ ? i.h.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (i.h.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), i.h.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer), i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchCheckoutRecovery), i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchUserAffinities))
    }
    handleMessageLengthUpsell(e) {
        let {
            channel: t,
            content: i
        } = e;
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("76725").then(n.bind(n, 798612));
            return n => (0, r.jsx)(e, A({
                channel: t,
                content: i
            }, n))
        })
    }
    openPremiumPaymentModalInApp(e) {
        if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
        return new Promise((t, n) => {
            (0, o.A)(y(A({}, e), {
                onClose: e => {
                    e ? t() : n()
                }
            }))
        })
    }
    openPremiumPaymentModalInOverlay(e) {
        if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
        let {
            initialPlanId: t,
            subscriptionTier: n,
            followupSKUInfo: r,
            analyticsObject: l
        } = null != e ? e : {};
        return new Promise((e, s) => {
            this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = s, i.h.dispatch({
                type: "PREMIUM_PAYMENT_MODAL_OPEN",
                initialPlanId: t,
                subscriptionTier: n,
                followupSKUInfo: r,
                analyticsObject: l
            })
        })
    }
    constructor(...e) {
        super(...e), b(this, "_premiumPaymentModalCloseResolve", null), b(this, "_premiumPaymentModalCloseReject", null), b(this, "_maybeFetchPremiumOffer", async () => {
            let e = u.default.getCurrentUser();
            if (null != e && e.verified) {
                let t = (d.A.canFractionalPremiumUserUseOffer() || !(0, h.TW)(e)) && !d.A.isFetchingOffer();
                await (0, f._D)("PremiumManager", t)
            }
            i.h.dispatch({
                type: "PREMIUM_MARKETING_DATA_READY"
            })
        }), b(this, "_maybeFetchCheckoutRecovery", async () => {
            let e = u.default.getCurrentUser();
            null != e && e.verified && !(0, h.TW)(e) && g.A.shouldFetchCheckoutRecovery() && await (0, p.c)()
        }), b(this, "_maybeFetchUserAffinities", () => {
            let {
                enabled: e
            } = m.u.getConfig({
                location: "PremiumManager"
            });
            e && (0, c.u)()
        }), b(this, "_handlePremiumPaymentModalOpen", e => {
            (0, o.A)(y(A({}, e), {
                analyticsLocations: [a.A.OVERLAY],
                onClose: e => {
                    i.h.dispatch({
                        type: "PREMIUM_PAYMENT_MODAL_CLOSE",
                        didSucceed: e
                    })
                }
            }))
        }), b(this, "_handlePremiumPaymentModalClose", e => {
            let {
                didSucceed: t
            } = e;
            t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
        })
    }
}
let _ = new O