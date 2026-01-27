/** Chunk was on 77870 **/
/** chunk id: 947094, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r, l = n(311907),
    i = n(73153);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let a = new Set;
class o extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        null != e && (a = new Set(e))
    }
    hasHidden(e) {
        return a.has(e)
    }
    getState() {
        return a
    }
}
s(o, "displayName", "ForumChannelAdminOnboardingGuideStore"), s(o, "persistKey", "ForumChannelAdminOnboardingGuideStore");
let c = new o(i.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
        let {
            channelId: t,
            hide: n
        } = e;
        n ? a.add(t) : a.delete(t)
    }
})