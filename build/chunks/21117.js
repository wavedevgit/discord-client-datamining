/** chunk id: 21117, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => u
});
var i = n(64700),
    s = n(311907),
    l = n(955572),
    a = n(406360),
    r = n(419954),
    o = n(964404),
    d = n(780964),
    c = n(985018);
let u = (0, r.Qx)(d.X.HIGH_DYNAMIC_RANGE, {
    useTitle: () => c.intl.string(c.t.nemtgW),
    useSubtitle: () => c.intl.string(c.t["O/Gjvn"]),
    useBadge: () => "beta",
    useOptions: function() {
        return i.useMemo(() => [{
            name: c.intl.string(c.t.D5Fma9),
            desc: c.intl.string(c.t.Qj75ck),
            value: "no-limit"
        }, {
            name: c.intl.string(c.t.ldcGIH),
            desc: c.intl.string(c.t["+V/bDk"]),
            value: "standard"
        }], [])
    },
    usePredicate: function() {
        return (0, a.i)("HDRDynamicRangeSetting")
    },
    setValue: function(e) {
        (0, l.FU)(e)
    },
    useValue: function() {
        return (0, s.bG)([o.Ay], () => o.Ay.hdrDynamicRange)
    },
    useSearchTerms: () => ["HDR", c.intl.string(c.t["O/Gjvn"])]
})