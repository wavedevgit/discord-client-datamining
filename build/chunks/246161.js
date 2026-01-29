/** Chunk was on 4670 **/
/** chunk id: 246161, original params: e,t,i (module,exports,require) **/
i.d(t, {
    c: () => d
});
var n = i(574381),
    l = i(311907),
    s = i(55619),
    r = i(419954),
    a = i(351906),
    u = i(780964),
    o = i(985018);
let d = (0, r.zD)(u.X.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => o.intl.string(o.t.IxjaoF),
    useValue: function() {
        return (0, l.bG)([a.A], () => {
            let {
                autoToggle: e
            } = a.A.getSettings();
            return e
        })
    },
    setValue: function(e) {
        s.A.update({
            autoToggle: e
        })
    },
    usePredicate: function() {
        return n.Av
    }
})