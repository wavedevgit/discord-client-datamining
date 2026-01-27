/** Chunk was on 41727 **/
/** chunk id: 882442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    c: () => o
});
var r = n(562465),
    l = n(73153),
    i = n(384904),
    s = n(295405),
    a = n(652215);
async function o() {
    try {
        l.h.dispatch({
            type: "CHECKOUT_RECOVERY_STATUS_FETCH"
        });
        let {
            body: e
        } = await r.Bo.get({
            url: a.Rsh.CHECKOUT_RECOVERY,
            rejectWithError: !0
        }), t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !s.A.hasFetchedPaymentSources && await (0, i.$o)(), l.h.dispatch({
            type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
            isTargeted: t
        })
    } catch (e) {
        l.h.dispatch({
            type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE"
        })
    }
}