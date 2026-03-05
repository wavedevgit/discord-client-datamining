/** chunk id: 884705, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    s = n(73153);
let l = !1;

function a() {
    l = !1
}
class r extends i.Ay.Store {
    isTogglesDisabled() {
        return l
    }
}
let o = new r(s.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function(e) {
        l = e.disabled ?? !1
    },
    CONNECTION_OPEN: a,
    LOGOUT: a
})