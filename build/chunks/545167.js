/** chunk id: 545167 params = (module,exports,require) **/
n.d(t, {
    I: () => c
});
var i = n(419954),
    s = n(975571),
    l = n(253932),
    r = n(780964),
    a = n(907005),
    o = n(652215),
    d = n(985018);
let c = (0, i.zD)(r.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
    useTitle: () => d.intl.string(d.t.XpBObB),
    useSubtitle: () => d.intl.format(d.t.oZsHTD, {
        helpdeskArticle: s.A.getArticleURL(o.MVz.SLAYER_GAME_FRIENDS)
    }),
    useSearchTerms: () => [d.intl.string(d.t["Uv/eTx"])],
    useValue: () => l.Zk.useSetting(),
    setValue: e => l.Zk.updateSetting(e),
    usePredicate: a.K
})