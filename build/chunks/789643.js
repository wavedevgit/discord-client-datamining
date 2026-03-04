/** chunk id: 789643, original params: t,e,i (module,exports,require) **/
i.d(e, {
    X: () => d
});
var n = i(171316),
    l = i(419954),
    s = i(975571),
    a = i(253932),
    r = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, l.zD)(r.X.DATA_USAGE_QUESTS_SETTING, {
    useTitle: () => o.intl.string(o.t.sJYh5t),
    useSubtitle: () => o.intl.format(o.t.cf9mvV, {
        helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return !a.H1.useSetting()
    },
    setValue: function(t) {
        a.H1.updateSetting(!t)
    },
    useSearchTerms: () => [o.intl.string(o.t.VkS7Yd)],
    useDisabled: n.uM
})