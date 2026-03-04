/** chunk id: 333659, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Z: () => o
});
var n = i(955572),
    l = i(419954),
    s = i(253932),
    a = i(780964),
    r = i(614651),
    u = i(985018);
let o = (0, l.Qx)(a.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
    useTitle: () => u.intl.string(u.t.nKRoPv),
    useSubtitle: () => u.intl.string(u.t.QntEEG),
    useOptions: () => [{
        name: u.intl.string(u.t.Jqj4cZ),
        value: r.IE.COZY
    }, {
        name: u.intl.string(u.t["1JNcPS"]),
        value: r.IE.COMPACT
    }],
    useValue: () => s.hH.useSetting() ? r.IE.COMPACT : r.IE.COZY,
    setValue: t => {
        s.hH.updateSetting(t === r.IE.COMPACT), (0, n.AC)()
    }
})