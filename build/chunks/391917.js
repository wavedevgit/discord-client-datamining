/** chunk id: 391917 params = (module,exports,require) **/
n.d(t, {
    P: () => c
});
var i = n(574381),
    s = n(419954),
    l = n(837921),
    r = n(780964),
    a = n(358776),
    o = n(22539),
    d = n(985018);
let c = (0, s.zD)(r.X.OS_OPEN_ON_STARTUP, {
    useTitle: () => (0, a.bp)("OpenOnStartup") ? d.intl.string(d.t["3BeZti"]) : d.intl.string(d.t.WQm4p1),
    useSubtitle: () => (0, a.bp)("OpenOnStartup") ? void 0 : d.intl.string(d.t["s/cQrU"]),
    usePredicate: () => i.Av && !(0, i.cX)(),
    useValue: () => o.fk.useState(e => e.openOnStartup),
    setValue: o.Cp,
    initialize: () => {
        l.Ay.getOpenOnStart().then(e => o.fk.setState({
            openOnStartup: e
        }))
    }
})