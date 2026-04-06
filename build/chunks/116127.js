/** chunk id: 116127 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153),
    r = n(596720);
let l = {};
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        l = e ?? {}
    }
    filterStaffContent() {
        return !0 === l.filterStaffContent
    }
    getDoubleTapBehavior() {
        return l.doubleTapBehavior ?? r.Ai.DEFAULT
    }
    getState() {
        return l
    }
    getUserAgnosticState() {
        return l
    }
}
let o = new s(a.h, {
    SET_ICYMI_FILTERS: function(e) {
        l = e.filters
    }
})