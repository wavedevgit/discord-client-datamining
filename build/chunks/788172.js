/** chunk id: 788172, original params: t,e,i (module,exports,require) **/
i.d(e, {
    m: () => d
});
var n = i(171316),
    l = i(419954),
    s = i(975571),
    a = i(253932),
    r = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, l.zD)(r.X.DATA_USAGE_QUESTS_3P_SETTING, {
    useTitle: () => o.intl.string(o.t.CyLYKZ),
    useSubtitle: () => o.intl.format(o.t["2QFDU/"], {
        helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return !a.vf.useSetting()
    },
    setValue: function(t) {
        a.vf.updateSetting(!t)
    },
    useDisabled: function() {
        let t = a.H1.useSetting(),
            e = (0, n.uM)();
        return t || e
    },
    useSearchTerms: () => [o.intl.string(o.t.CyLYKZ)]
})