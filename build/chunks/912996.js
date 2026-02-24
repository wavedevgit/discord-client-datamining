/** chunk id: 912996, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(311907),
    i = n(73153);
let r = {};
class l extends a.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(r, e)
    }
    getState() {
        return r
    }
    shouldShowEducation(e) {
        return !0 !== r[e]
    }
}
let s = new l(i.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
        return r[e.key] = e.value, !0
    }
})