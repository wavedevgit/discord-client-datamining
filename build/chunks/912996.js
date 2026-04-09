/** chunk id: 912996 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(311907),
    i = n(73153);
let l = {};
class s extends a.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
    initialize(e) {
        Object.assign(l, e)
    }
    getState() {
        return l
    }
    shouldShowEducation(e) {
        return !0 !== l[e]
    }
}
let r = new s(i.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
        return l[e.key] = e.value, !0
    }
})