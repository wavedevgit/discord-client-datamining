/** chunk id: 719587, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => S
});
var n = i(311907),
    l = i(290595),
    s = i(171316),
    r = i(419954),
    a = i(153488),
    u = i(975571),
    o = i(780964),
    d = i(997913),
    A = i(652215),
    T = i(985018);
let S = (0, r.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => T.intl.string(T.t.XuADY2),
    useSubtitle: () => T.intl.format(T.t["igTSG/"], {
        helpdeskArticle: u.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return (0, n.bG)([a.A], () => a.A.hasConsented(A.YAq.USAGE_STATISTICS))
    },
    setValue: function(t) {
        t ? (0, l.U)([A.YAq.USAGE_STATISTICS], []).catch(d.i) : (0, d.O)({
            header: T.intl.string(T.t.OdPCbN),
            body: T.intl.string(T.t.MGWabA),
            confirmText: T.intl.string(T.t["D3+rU4"]),
            cancelText: T.intl.string(T.t.kYpG0u),
            onConfirm: () => (0, l.U)([], [A.YAq.USAGE_STATISTICS]).catch(d.i)
        })
    },
    useSearchTerms: () => [T.intl.string(T.t.XuADY2)],
    useDisabled: s.uM
})