/** chunk id: 912996 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(311907),
    i = n(73153);
let r = {};
class s extends a.Ay.PersistedStore {
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
let l = new s(i.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
        return r[e.key] = e.value, !0
    }
})