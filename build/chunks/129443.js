/** chunk id: 129443 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(478437),
    l = n(873298),
    i = n(253932),
    r = n(17372),
    s = n(985018);
let d = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [r.TS.SUB_SPAM],
    eligibleChannelTypes: [a.r.DM, a.r.GROUP_DM],
    onApply: () => i.he.updateSetting(l.he.NON_FRIENDS),
    predicate: () => i.he.getSetting() === l.he.DISABLED
}