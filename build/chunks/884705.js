/** chunk id: 884705 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    s = n(73153);
let l = !1;

function r() {
    l = !1
}
class a extends i.Ay.Store {
    isTogglesDisabled() {
        return l
    }
}
let o = new a(s.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function(e) {
        l = e.disabled ?? !1
    },
    CONNECTION_OPEN: r,
    LOGOUT: r
})