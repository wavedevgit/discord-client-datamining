/** Chunk was on web.js **/
/** chunk id: 68231, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    GC: () => h,
    kh: () => b
}), n(896048);
var r = n(64700),
    i = n(648335),
    a = n(166532),
    o = n(818348);
let s = [a.pn.PAYMENT_TYPE],
    l = [a.pn.PAYMENT_TYPE, a.pn.CREDIT_CARD_INFORMATION, a.pn.ADDRESS],
    c = [a.pn.PAYMENT_TYPE, a.pn.PAYPAL_INFORMATION, a.pn.ADDRESS],
    u = [a.pn.PAYMENT_TYPE, a.pn.VENMO_INFORMATION, a.pn.ADDRESS],
    d = [a.pn.PAYMENT_TYPE, a.pn.CASH_APP_INFORMATION, a.pn.ADDRESS],
    f = [a.pn.PAYMENT_TYPE, a.pn.PRZELEWY24_INFORMATION, a.pn.ADDRESS],
    p = [a.pn.PAYMENT_TYPE, a.pn.EPS_INFORMATION, a.pn.ADDRESS],
    _ = [a.pn.PAYMENT_TYPE, a.pn.IDEAL_INFORMATION, a.pn.ADDRESS],
    h = [a.pn.PAYMENT_TYPE, a.pn.ADDRESS],
    m = {
        SHARED_ADD_PAYMENT_STEPS: s,
        SHARED_CREDIT_CARD_STEPS: l,
        SHARED_PAYPAL_STEPS: c,
        SHARED_VENMO_STEPS: u,
        SHARED_PRZELEWY24_STEPS: f,
        SHARED_EPS_STEPS: p,
        SHARED_IDEAL_STEPS: _,
        SHARED_CASH_APP_STEPS: d,
        SHARED_TYPE_AND_ADDRESS_STEPS: h
    },
    g = {
        SHARED_ADD_PAYMENT_STEPS: [a.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.PAYPAL_INFORMATION, a.pn.ADDRESS],
        SHARED_VENMO_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.VENMO_INFORMATION, a.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.CASH_APP_INFORMATION, a.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.PRZELEWY24_INFORMATION, a.pn.ADDRESS],
        SHARED_EPS_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.EPS_INFORMATION, a.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [a.pn.PAYMENT_ELEMENT, a.pn.ADDRESS]
    },
    E = e => null == e || e === o.he.UNKNOWN || (0, i.PE)(e),
    y = (e, t) => {
        let {
            prependSteps: n,
            appendSteps: r,
            paymentElementsEnabled: i
        } = t;
        return e.map(e => {
            let {
                sharedStepsKey: t,
                methodType: a
            } = e;
            return {
                steps: [...n, ...i && E(a) ? g[t] : m[t], ...r],
                methodType: a
            }
        })
    },
    b = e => {
        let {
            prependSteps: t,
            appendSteps: n,
            paymentElementsEnabled: i
        } = e, [a, s, l, c, u, d, f, p, _, h] = (0, r.useMemo)(() => y([{
            sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS",
            methodType: o.he.UNKNOWN
        }, {
            sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS",
            methodType: o.he.PAYMENT_REQUEST
        }, {
            sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS"
        }, {
            sharedStepsKey: "SHARED_CREDIT_CARD_STEPS",
            methodType: o.he.CARD
        }, {
            sharedStepsKey: "SHARED_PAYPAL_STEPS",
            methodType: o.he.PAYPAL
        }, {
            sharedStepsKey: "SHARED_IDEAL_STEPS",
            methodType: o.he.IDEAL
        }, {
            sharedStepsKey: "SHARED_VENMO_STEPS",
            methodType: o.he.VENMO
        }, {
            sharedStepsKey: "SHARED_PRZELEWY24_STEPS",
            methodType: o.he.PRZELEWY24
        }, {
            sharedStepsKey: "SHARED_EPS_STEPS",
            methodType: o.he.EPS
        }, {
            sharedStepsKey: "SHARED_CASH_APP_STEPS",
            methodType: o.he.CASH_APP
        }], {
            prependSteps: t,
            appendSteps: n,
            paymentElementsEnabled: i
        }), [t, n, i]), m = (0, r.useMemo)(() => ({
            [o.he.CARD]: c,
            [o.he.PAYPAL]: u,
            [o.he.PAYMENT_REQUEST]: s,
            [o.he.VENMO]: f,
            [o.he.CASH_APP]: h,
            [o.he.IDEAL]: d,
            [o.he.PRZELEWY24]: p,
            [o.he.EPS]: _,
            [o.he.BANCONTACT]: a,
            [o.he.GOPAY_WALLET]: a,
            [o.he.KAKAOPAY]: a,
            [o.he.GCASH]: a,
            [o.he.PAYSAFE_CARD]: a,
            [o.he.GRABPAY_MY]: a,
            [o.he.MOMO_WALLET]: a
        }), [a, c, u, f, s, d, h, p, _]);
        return {
            DEFAULT_PAYMENT_ELEMENT_STEPS: a,
            CREDIT_CARD_STEPS: c,
            PAYPAL_STEPS: u,
            IDEAL_STEPS: d,
            PAYMENT_REQUEST_STEPS: s,
            VENMO_STEPS: f,
            ADD_PAYMENT_STEPS: l,
            PRZELEWY24_STEPS: p,
            EPS_STEPS: _,
            CASH_APP_STEPS: h,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m
        }
    }