/** chunk id: 244287, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    s = n(384684),
    a = n(2242);

function r() {
    return (0, i.bG)([s.A], () => (function() {
        let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.A], t = e.getGuildIdsWithPurchasableRoles(), n = !1;
        return (t.forEach(t => {
            e.getUserSubscriptionRoles(t).size > 0 && (n = !0)
        }), n) ? a.M_.SUBSCRIBED : 0 === t.size ? a.M_.NONE : a.M_.IN_SUBSCRIPTION_SERVER
    })([s.A]))
}