/** chunk id: 931852, original params: t,e,i (module,exports,require) **/
i.d(e, {
    z: () => u
});
var n = i(735438),
    l = i(419954),
    s = i(253932),
    a = i(780964),
    r = i(985018);
let u = (0, l.Hn)(a.X.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => r.intl.string(r.t["8rHeOr"]),
    useSubtitle: () => r.intl.string(r.t["eJE6+J"]),
    useValue: s.cU.useSetting,
    setValue: s.cU.updateSetting,
    useOptions: () => n.range(1, 11).map(t => ({
        id: t.toString(),
        value: 60 * t,
        label: r.intl.formatToPlainString(r.t.iXLF9W, {
            minutes: t
        })
    }))
})