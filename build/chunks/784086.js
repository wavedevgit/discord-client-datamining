/** chunk id: 784086, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => o
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    a = i(430452),
    r = i(780964),
    u = i(985018);
let o = (0, s.zD)(r.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => u.intl.string(u.t["4I0qzZ"]),
    useValue: function() {
        return (0, n.bG)([a.Ay], () => a.Ay.getExperimentalSoundshare())
    },
    setValue: l.A.setExperimentalSoundshare,
    usePredicate: function() {
        return (0, n.bG)([a.Ay], () => {
            let t = a.Ay.supportsExperimentalSoundshare(),
                e = a.Ay.supportsHookSoundshare();
            return t && e
        })
    }
})