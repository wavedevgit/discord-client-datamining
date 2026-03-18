/** chunk id: 116127 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    a = n(73153),
    l = n(335934),
    r = n(596720);
let s = {};
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        s = e ?? {}
    }
    filterStaffContent() {
        return !0 === s.filterStaffContent
    }
    onlyShowRecentGeneratedCandidates() {
        return !!(0, l.o$)("processRawItems", !1).contentGenerationEnabled && !0 === s.onlyShowRecentGeneratedCandidates
    }
    getDoubleTapBehavior() {
        return s.doubleTapBehavior ?? r.Ai.DEFAULT
    }
    getState() {
        return s
    }
    getUserAgnosticState() {
        return s
    }
}
let d = new o(a.h, {
    SET_ICYMI_FILTERS: function(e) {
        s = e.filters
    }
})