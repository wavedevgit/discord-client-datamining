/** chunk id: 963342, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => o
});
var r = n(311907),
    i = n(73825),
    l = n(97352),
    s = n(728458),
    a = n(652215);
let o = (0, r.UT)(l.A, {
    getQueryId: a.fic.SUBSCRIPTION_PLANS,
    get: e => {
        if (null == e) return null;
        let t = l.A.getForSKU(e);
        return 0 === t.length ? null : t
    },
    load: e => (null == e && s.A.addBreadcrumb({
        message: "Error loading subscription plans: skuId is null"
    }), null != e ? (0, i.ur)(e) : Promise.reject())
})