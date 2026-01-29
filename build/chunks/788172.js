/** Chunk was on 4670 **/
/** chunk id: 788172, original params: e,t,i (module,exports,require) **/
i.d(t, {
    m: () => d
});
var n = i(171316),
    l = i(419954),
    s = i(975571),
    r = i(253932),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, l.zD)(a.X.DATA_USAGE_QUESTS_3P_SETTING, {
    useTitle: () => o.intl.string(o.t.CyLYKZ),
    useSubtitle: () => o.intl.format(o.t["2QFDU/"], {
        helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return !r.vf.useSetting()
    },
    setValue: function(e) {
        r.vf.updateSetting(!e)
    },
    useDisabled: function() {
        let e = r.H1.useSetting(),
            t = (0, n.uM)();
        return e || t
    },
    useSearchTerms: () => [o.intl.string(o.t.CyLYKZ)]
})