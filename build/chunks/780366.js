/** chunk id: 780366 params = (module,exports,require) **/
n.d(t, {
    C: () => d
});
var i = n(311907),
    s = n(274372),
    l = n(399925),
    r = n(419954),
    a = n(780964),
    o = n(985018);
let d = (0, r.zD)(a.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
    useTitle: () => o.intl.string(o.t.nHsilt),
    useSubtitle: () => o.intl.string(o.t["s6wq+m"]),
    useValue: () => (0, i.bG)([s.A], () => s.A.getSettings().clipSignals.enablePhraseSignals),
    setValue: e => {
        let t = s.A.getSettings().clipSignals;
        l.PW({
            ...t,
            enablePhraseSignals: e
        })
    }
})