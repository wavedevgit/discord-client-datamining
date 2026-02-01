/** chunk id: 912996, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i, r = n(311907),
    l = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = {};
class a extends(i = r.Ay.PersistedStore) {
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
o(a, "displayName", "ActivityInviteEducationStore"), o(a, "persistKey", "ActivityInviteEducationExperimentStore");
let c = new a(l.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function(e) {
        return s[e.key] = e.value, !0
    }
})