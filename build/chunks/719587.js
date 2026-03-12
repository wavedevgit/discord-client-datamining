/** chunk id: 719587 params = (module,exports,require) **/
n.d(t, {
    L: () => m
});
var i = n(311907),
    s = n(290595),
    l = n(171316),
    r = n(419954),
    a = n(153488),
    o = n(975571),
    d = n(780964),
    c = n(997913),
    u = n(652215),
    _ = n(985018);
let m = (0, r.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => _.intl.string(_.t.XuADY2),
    useSubtitle: () => _.intl.format(_.t["igTSG/"], {
        helpdeskArticle: o.A.getArticleURL(u.MVz.DATA_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return (0, i.bG)([a.A], () => a.A.hasConsented(u.YAq.USAGE_STATISTICS))
    },
    setValue: function(e) {
        e ? (0, s.U)([u.YAq.USAGE_STATISTICS], []).catch(c.i) : (0, c.O)({
            header: _.intl.string(_.t.OdPCbN),
            body: _.intl.string(_.t.MGWabA),
            confirmText: _.intl.string(_.t["D3+rU4"]),
            cancelText: _.intl.string(_.t.kYpG0u),
            onConfirm: () => (0, s.U)([], [u.YAq.USAGE_STATISTICS]).catch(c.i)
        })
    },
    useSearchTerms: () => [_.intl.string(_.t.XuADY2)],
    useDisabled: l.uM
})