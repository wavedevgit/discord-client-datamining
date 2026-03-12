/** chunk id: 784086 params = (module,exports,require) **/
n.d(t, {
    L: () => d
});
var i = n(311907),
    s = n(827343),
    l = n(419954),
    r = n(430452),
    a = n(780964),
    o = n(985018);
let d = (0, l.zD)(a.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
    useTitle: () => o.intl.string(o.t["4I0qzZ"]),
    useValue: function() {
        return (0, i.bG)([r.Ay], () => r.Ay.getExperimentalSoundshare())
    },
    setValue: s.A.setExperimentalSoundshare,
    usePredicate: function() {
        return (0, i.bG)([r.Ay], () => {
            let e = r.Ay.supportsExperimentalSoundshare(),
                t = r.Ay.supportsHookSoundshare();
            return e && t
        })
    }
})