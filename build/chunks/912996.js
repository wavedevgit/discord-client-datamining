/** chunk id: 912996 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    l = n(73153);
let s = {};
class a extends i.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(s, e)
    }
    getState() {
        return s
    }
    shouldShowEducation(e) {
        return !0 !== s[e]
    }
}
let r = new a(l.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
        return s[e.key] = e.value, !0
    }
})