/** chunk id: 116127 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153),
    a = n(596720);
let r = {};
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        r = e ?? {}
    }
    filterStaffContent() {
        return !0 === r.filterStaffContent
    }
    getDoubleTapBehavior() {
        return r.doubleTapBehavior ?? a.Ai.DEFAULT
    }
    getState() {
        return r
    }
    getUserAgnosticState() {
        return r
    }
}
let o = new s(l.h, {
    SET_ICYMI_FILTERS: function(e) {
        r = e.filters
    }
})