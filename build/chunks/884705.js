/** chunk id: 884705 params = (module,exports,require) **/
var i = n(311907),
    a = n(73153);
let r = !1;

function l() {
    r = !1
}
class s extends i.Ay.Store {
    isTogglesDisabled() {
        return r
    }
}
new s(a.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function(e) {
        r = e.disabled ?? !1
    },
    CONNECTION_OPEN: l,
    LOGOUT: l
})