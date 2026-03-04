/** chunk id: 136451, original params: t,e,i (module,exports,require) **/
i.d(e, {
    b: () => u,
    u: () => o
});
var n = i(873298),
    l = i(419954),
    s = i(253932),
    a = i(780964),
    r = i(985018);
let u = (0, l.Qx)(a.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => r.intl.string(r.t["C/5V0A"]),
        useSubtitle: () => r.intl.string(r.t.QLZhYk),
        useOptions: () => [{
            name: r.intl.string(r.t["7iegX4"]),
            value: n.NS.COMPACT
        }, {
            name: r.intl.string(r.t.bBvAEH),
            value: n.NS.DEFAULT
        }, {
            name: r.intl.string(r.t["4cuYHx"]),
            value: n.NS.COZY
        }],
        useValue: () => s.Xi.useSetting(),
        setValue: t => {
            t !== n.NS.UNSET_UI_DENSITY && s.Xi.updateSetting(t)
        }
    }),
    o = (0, l.zZ)(a.X.APPEARANCE_UI_DENSITY_CATEGORY, {
        useSubnavLabel: () => r.intl.string(r.t["C/5V0A"]),
        buildLayout: () => [u]
    })