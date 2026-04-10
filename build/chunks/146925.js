/** chunk id: 146925 params = (module,exports,require) **/
n.d(t, {
    q: () => d
});
var i = n(506774),
    s = n(419954),
    l = n(661191),
    r = n(253932),
    a = n(780964);
let o = new Date("2018-01-01"),
    d = (0, s.Tf)(a.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => r.pK.useSetting() === l.default.fromTimestamp(o.getTime()),
        onClick: () => (i.w.set("lastChangeLogDate", o), r.pK.updateSetting(l.default.fromTimestamp(o.getTime())))
    })