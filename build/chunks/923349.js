/** chunk id: 923349 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(989349),
    l = n.n(i),
    a = n(311907),
    r = n(73153),
    s = n(272207),
    o = n(287809),
    c = n(927578);
let u = !1;
class d extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default)
    }
    static displayName = "SubscriptionRemindersStore";
    shouldShowReactivateNotice() {
        let e = o.default.getCurrentUser();
        return !(0, c.TW)(e) && u
    }
}
let _ = new d(r.h, {
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
        let {
            subscription: t
        } = e;
        if (null != t) {
            let e = s.A.createFromServer(t);
            if (null == (0, c.EL)(e) || e.metadata?.ended_at == null) return;
            let n = l()(e.metadata.ended_at);
            l()().isBetween(n.clone().add(4, "days"), n.clone().add(11, "days")) && (u = !0)
        }
    }
})