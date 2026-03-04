/** chunk id: 340889, original params: t,e,i (module,exports,require) **/
i.d(e, {
    U: () => o
});
var n = i(311907),
    l = i(55619),
    s = i(419954),
    a = i(351906),
    r = i(780964),
    u = i(985018);
let o = (0, s.zD)(r.X.STREAMING_STREAMER_MODE, {
    useTitle: () => u.intl.string(u.t.TGNg6T),
    useSubtitle: () => u.intl.string(u.t["4nXLnE"]),
    useValue: function() {
        return (0, n.bG)([a.A], () => {
            let {
                enabled: t
            } = a.A.getSettings();
            return t
        })
    },
    setValue: function(t) {
        l.A.update({
            enabled: t
        })
    }
})