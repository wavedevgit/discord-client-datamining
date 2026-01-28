/** Chunk was on 28979 **/
/** chunk id: 39218, original params: t,e,i (module,exports,require) **/
i.d(e, {
    x: () => A
});
var n = i(64700),
    l = i(419954),
    s = i(975571),
    r = i(809505),
    u = i(253932),
    a = i(780964),
    o = i(84373),
    T = i(652215),
    d = i(985018);
let A = (0, l.Qx)(a.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
    useTitle: () => d.intl.string(d.t.tiCXaH),
    useSubtitle: () => d.intl.format(d.t.RvjRRI, {
        appealLink: s.A.getArticleURL(T.MVz.SAFE_DIRECT_MESSAGING)
    }),
    useValue: o.o,
    setValue: t => u.he.updateSetting(t),
    useOptions: function() {
        return n.useMemo(() => (0, r.YS)(), [])
    },
    useSearchTerms: () => [d.intl.string(d.t.JzaP4h), d.intl.string(d.t.H9XOl3), d.intl.string(d.t.k4W40P)]
})