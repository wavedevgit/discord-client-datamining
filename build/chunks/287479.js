/** Chunk was on 39048 **/
/** chunk id: 287479, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048);
var r, i, l = n(311907),
    s = n(73153),
    a = n(591552),
    o = n(374084),
    c = n(555337),
    d = n(982832),
    u = n(660496),
    g = n(863694),
    m = n(352821),
    p = n(132514),
    f = n(655943),
    h = n(400812),
    b = n(72533),
    x = n(652215);
let j = new Set,
    _ = h.Hy.LANDING,
    O = null;

function v(e) {
    let {
        subsection: t
    } = e;
    if (c.A.getGuildId() === O) return !1;
    _ = t === x.nd0.SERVER_GUIDE ? h.Hy.HOME_SETTINGS : h.Hy.LANDING, O = c.A.getGuildId()
}
class y extends(r = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A, g.A, f.A, p.A, m.A, d.A, c.A), this.syncWith([a.A, g.A, f.A, p.A, m.A, d.A], () => !0)
    }
    isEducationUpsellDismissed(e) {
        return j.has(e)
    }
    getCurrentPage() {
        return _
    }
    hasChanges() {
        if (null == O) return !1;
        let e = a.A.isAdvancedMode(O);
        if (_ === h.Hy.DEFAULT_CHANNELS)
            if (e) return g.A.hasChanges() || f.A.hasChanges();
            else return g.A.hasChanges();
        return _ === h.Hy.CUSTOMIZATION_QUESTIONS ? f.A.hasChanges() || m.A.hasChanges() : _ === h.Hy.HOME_SETTINGS ? p.A.hasChanges() : _ === h.Hy.CONNECTIONS && m.A.hasChanges()
    }
    hasConfiguredAnythingForCurrentStep() {
        if (null == O) return !1;
        if (_ === h.Hy.SAFETY_CHECK) return !0;
        if (_ === h.Hy.DEFAULT_CHANNELS) return g.A.editedDefaultChannelIds.size > 0;
        if (_ === h.Hy.CUSTOMIZATION_QUESTIONS) return f.A.editedOnboardingPrompts.length > 0 || m.A.getEditedConnections().length > 0;
        if (_ === h.Hy.HOME_SETTINGS) return !(0, o.jJ)(p.A.getSettings());
        if (_ === h.Hy.CONNECTIONS) return m.A.getEditedConnections().length > 0;
        return !1
    }
    hasErrors() {
        return _ === h.Hy.CUSTOMIZATION_QUESTIONS && null != f.A.errors.find(e => null != e)
    }
    showNotice() {
        if (null == O) return !1;
        if ((0, b.o)(O)) return this.hasChanges();
        let e = d.A.getCurrentPage();
        return (_ !== h.Hy.SAFETY_CHECK || e === u.C.OVERVIEW) && null != _ && _ !== h.Hy.LANDING
    }
    canCloseEarly() {
        return null == O || !this.hasErrors() && (!(0, b.o)(O) || !this.hasChanges())
    }
}(i = "displayName") in y ? Object.defineProperty(y, i, {
    value: "GuildSettingsOnboardingStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : y[i] = "GuildSettingsOnboardingStore";
let A = new y(s.h, {
    GUILD_SETTINGS_INIT: v,
    GUILD_SETTINGS_SET_SECTION: v,
    GUILD_SETTINGS_ONBOARDING_STEP: function(e) {
        let {
            step: t
        } = e;
        _ = t
    },
    GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED: function(e) {
        let {
            upsellType: t
        } = e;
        j.add(t)
    }
})