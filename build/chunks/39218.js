/** chunk id: 39218 params = (module,exports,require) **/
n.d(t, {
    x: () => _
});
var i = n(64700),
    s = n(419954),
    l = n(975571),
    r = n(809505),
    a = n(253932),
    o = n(780964),
    d = n(84373),
    c = n(652215),
    u = n(985018);
let _ = (0, s.Qx)(o.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
    useTitle: () => u.intl.string(u.t.tiCXaH),
    useSubtitle: () => u.intl.format(u.t.RvjRRI, {
        appealLink: l.A.getArticleURL(c.MVz.SAFE_DIRECT_MESSAGING)
    }),
    useValue: d.o,
    setValue: e => a.he.updateSetting(e),
    useOptions: function() {
        return i.useMemo(() => (0, r.YS)(), [])
    },
    useSearchTerms: () => [u.intl.string(u.t.JzaP4h), u.intl.string(u.t.H9XOl3), u.intl.string(u.t.k4W40P)]
})