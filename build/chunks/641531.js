/** chunk id: 641531 params = (module,exports,require) **/
n.d(t, {
    V: () => A
});
var i = n(349941),
    s = n(311907),
    l = n(955572),
    r = n(775602),
    a = n(47671),
    o = n(419954),
    d = n(97469),
    c = n(544028),
    u = n(253932),
    _ = n(780964),
    m = n(818348),
    g = n(985018);
let A = (0, o.zD)(_.X.DISPLAY_DARK_SIDEBAR, {
    useTitle: () => g.intl.string(g.t.EpSHAQ),
    useSearchTerms: () => [g.intl.string(g.t.Ksh3ik)],
    useValue: function() {
        let e = (0, d.qo)();
        return (0, s.bG)([c.A, r.A], () => {
            let t = c.A.theme,
                n = r.A.useForcedColors;
            return e && (0, i.qB)(t) && !n
        })
    },
    usePredicate: function() {
        let e = null != u.eh.useSetting().customUserThemeSettings;
        return (0, s.bG)([c.A, a.A], () => {
            let t = c.A.theme,
                n = a.A.gradientPreset;
            return (0, i.qB)(t) && null == n && !e
        })
    },
    useDisabled: function() {
        return (0, s.bG)([c.A, r.A], () => {
            let e = c.A.theme,
                t = r.A.useForcedColors;
            return e !== m.NJ.LIGHT || t
        })
    },
    setValue: l.LO
})