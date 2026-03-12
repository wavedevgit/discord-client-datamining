/** chunk id: 931852 params = (module,exports,require) **/
n.d(t, {
    z: () => o
});
var i = n(735438),
    s = n(419954),
    l = n(253932),
    r = n(780964),
    a = n(985018);
let o = (0, s.Hn)(r.X.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => a.intl.string(a.t["8rHeOr"]),
    useSubtitle: () => a.intl.string(a.t["eJE6+J"]),
    useValue: l.cU.useSetting,
    setValue: l.cU.updateSetting,
    useOptions: () => i.range(1, 11).map(e => ({
        id: e.toString(),
        value: 60 * e,
        label: a.intl.formatToPlainString(a.t.iXLF9W, {
            minutes: e
        })
    }))
})