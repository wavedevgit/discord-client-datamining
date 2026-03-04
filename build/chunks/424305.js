/** chunk id: 424305, original params: t,e,i (module,exports,require) **/
i.d(e, {
    R: () => d
});
var n = i(311907),
    l = i(274372),
    s = i(399925),
    a = i(419954),
    r = i(780964),
    u = i(696016),
    o = i(985018);
let d = (0, a.Hn)(r.X.CLIPS_LENGTH, {
    useTitle: () => o.intl.string(o.t.OgfUio),
    useSubtitle: () => o.intl.string(o.t.H7j4tY),
    useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipsLength),
    setValue: t => s.h$(t),
    useOptions: () => [{
        id: "30s",
        value: u.LX.SECONDS_30,
        label: o.intl.formatToPlainString(o.t["bTFv/3"], {
            count: 30
        })
    }, {
        id: "1m",
        value: u.LX.MINUTES_1,
        label: o.intl.formatToPlainString(o.t.ICo9Nk, {
            count: 1
        })
    }, {
        id: "2m",
        value: u.LX.MINUTES_2,
        label: o.intl.formatToPlainString(o.t.ICo9Nk, {
            count: 2
        })
    }]
})