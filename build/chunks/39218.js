/** chunk id: 39218, original params: t,e,i (module,exports,require) **/
i.d(e, {
    x: () => T
});
var n = i(64700),
    l = i(419954),
    s = i(975571),
    a = i(809505),
    r = i(253932),
    u = i(780964),
    o = i(84373),
    d = i(652215),
    A = i(985018);
let T = (0, l.Qx)(u.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
    useTitle: () => A.intl.string(A.t.tiCXaH),
    useSubtitle: () => A.intl.format(A.t.RvjRRI, {
        appealLink: s.A.getArticleURL(d.MVz.SAFE_DIRECT_MESSAGING)
    }),
    useValue: o.o,
    setValue: t => r.he.updateSetting(t),
    useOptions: function() {
        return n.useMemo(() => (0, a.YS)(), [])
    },
    useSearchTerms: () => [A.intl.string(A.t.JzaP4h), A.intl.string(A.t.H9XOl3), A.intl.string(A.t.k4W40P)]
})