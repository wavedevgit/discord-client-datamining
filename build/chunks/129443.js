/** Chunk was on 12236 **/
/** chunk id: 129443, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(478437),
    r = n(873298),
    i = n(253932),
    a = n(17372),
    s = n(985018);
let o = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [a.TS.SUB_SPAM],
    eligibleChannelTypes: [l.r.DM, l.r.GROUP_DM],
    onApply: () => i.he.updateSetting(r.he.NON_FRIENDS),
    predicate: () => i.he.getSetting() === r.he.DISABLED
}