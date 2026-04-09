/** chunk id: 129443 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(478437),
    a = n(873298),
    r = n(253932),
    i = n(17372),
    s = n(985018);
let d = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [i.TS.SUB_SPAM],
    eligibleChannelTypes: [l.r.DM, l.r.GROUP_DM],
    onApply: () => r.he.updateSetting(a.he.NON_FRIENDS),
    predicate: () => r.he.getSetting() === a.he.DISABLED
}