/** chunk id: 994743 params = (module,exports,require) **/
n.d(t, {
    N: () => c
});
var i = n(574381),
    s = n(419954),
    l = n(837921),
    r = n(780964),
    a = n(358776),
    o = n(604095),
    d = n(985018);
let c = (0, s.zD)(r.X.OS_START_MINIMIZED, {
    useTitle: () => (0, a.bp)("StartMinimized") ? d.intl.string(d.t.GfBL83) : d.intl.string(d.t.n7Yjes),
    useSubtitle: () => (0, a.bp)("StartMinimized") ? d.intl.string(d.t.XGyhhc) : d.intl.string(d.t.o2FSjB),
    usePredicate: () => (0, i.uF)(),
    useValue: () => o.fk.useState(e => !!e.openOnStartup && e.startMinimized),
    setValue: o.AZ,
    useDisabled: () => !o.fk.useState(e => e.openOnStartup),
    initialize: () => {
        l.Ay.getSetting("START_MINIMIZED", !1).then(e => o.fk.setState({
            startMinimized: e
        }))
    }
})