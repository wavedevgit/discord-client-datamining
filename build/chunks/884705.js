/** chunk id: 884705 params = (module,exports,require) **/
var i = n(311907),
    l = n(73153);
let a = !1;

function r() {
    a = !1
}
class s extends i.Ay.Store {
    isTogglesDisabled() {
        return a
    }
}
new s(l.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function(e) {
        a = e.disabled ?? !1
    },
    CONNECTION_OPEN: r,
    LOGOUT: r
})