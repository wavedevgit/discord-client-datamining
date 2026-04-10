/** chunk id: 884705 params = (module,exports,require) **/
var i = n(311907),
    r = n(73153);
let l = !1;

function a() {
    l = !1
}
class s extends i.Ay.Store {
    isTogglesDisabled() {
        return l
    }
}
new s(r.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function(e) {
        l = e.disabled ?? !1
    },
    CONNECTION_OPEN: a,
    LOGOUT: a
})