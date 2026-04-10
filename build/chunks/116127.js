/** chunk id: 116127 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    r = n(73153),
    l = n(596720);
let a = {};
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        a = e ?? {}
    }
    filterStaffContent() {
        return !0 === a.filterStaffContent
    }
    getDoubleTapBehavior() {
        return a.doubleTapBehavior ?? l.Ai.DEFAULT
    }
    getState() {
        return a
    }
    getUserAgnosticState() {
        return a
    }
}
let o = new s(r.h, {
    SET_ICYMI_FILTERS: function(e) {
        a = e.filters
    }
})