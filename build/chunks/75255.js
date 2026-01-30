/** chunk id: 75255, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(562465),
    l = r(73153),
    i = r(198982),
    o = r(739508),
    s = r(652215);
let a = Object.freeze({}),
    c = {
        redeemGiftCode: async function(e) {
            let {
                code: t,
                options: r = a,
                onRedeemed: c,
                onError: u
            } = e, {
                channelId: d = null,
                paymentSource: E = null
            } = r;
            l.h.dispatch({
                type: "GIFT_CODE_REDEEM",
                code: t
            });
            try {
                let e = await n.Bo.post({
                    url: s.Rsh.GIFT_CODE_REDEEM(t),
                    body: {
                        channel_id: d,
                        payment_source_id: null == E ? void 0 : E.id,
                        gateway_checkout_context: await (0, o.ob)(E)
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
                return l.h.dispatch({
                    type: "GIFT_CODE_REDEEM_SUCCESS",
                    code: t,
                    entitlement: e.body
                }), null == c || c(), {
                    code: t,
                    entitlement: e
                }
            } catch (r) {
                let e = new i.Ey(r);
                throw l.h.dispatch({
                    type: "GIFT_CODE_REDEEM_FAILURE",
                    code: t,
                    error: e
                }), null == u || u(e), e
            }
        }
    }