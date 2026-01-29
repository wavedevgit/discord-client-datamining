/** Chunk was on 4670 **/
/** chunk id: 340889, original params: e,t,i (module,exports,require) **/
i.d(t, {
    U: () => o
});
var n = i(311907),
    l = i(55619),
    s = i(419954),
    r = i(351906),
    a = i(780964),
    u = i(985018);
let o = (0, s.zD)(a.X.STREAMING_STREAMER_MODE, {
    useTitle: () => u.intl.string(u.t.TGNg6T),
    useSubtitle: () => u.intl.string(u.t["4nXLnE"]),
    useValue: function() {
        return (0, n.bG)([r.A], () => {
            let {
                enabled: e
            } = r.A.getSettings();
            return e
        })
    },
    setValue: function(e) {
        l.A.update({
            enabled: e
        })
    }
})