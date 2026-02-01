/** chunk id: 246161, original params: t,e,i (module,exports,require) **/
i.d(e, {
    c: () => d
});
var n = i(574381),
    l = i(311907),
    s = i(55619),
    r = i(419954),
    u = i(351906),
    a = i(780964),
    o = i(985018);
let d = (0, r.zD)(a.X.STREAMING_AUTO_STREAMER_MODE, {
    useTitle: () => o.intl.string(o.t.IxjaoF),
    useValue: function() {
        return (0, l.bG)([u.A], () => {
            let {
                autoToggle: t
            } = u.A.getSettings();
            return t
        })
    },
    setValue: function(t) {
        s.A.update({
            autoToggle: t
        })
    },
    usePredicate: function() {
        return n.Av
    }
})