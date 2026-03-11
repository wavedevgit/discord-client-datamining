/** chunk id: 947094 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(311907),
    s = n(73153);
let l = new Set;
class a extends i.Ay.PersistedStore {
    static displayName = "ForumChannelAdminOnboardingGuideStore";
    static persistKey = "ForumChannelAdminOnboardingGuideStore";
    initialize(e) {
        null != e && (l = new Set(e))
    }
    hasHidden(e) {
        return l.has(e)
    }
    getState() {
        return l
    }
}
let r = new a(s.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function(e) {
        let {
            channelId: t,
            hide: n
        } = e;
        n ? l.add(t) : l.delete(t)
    }
})