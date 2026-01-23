/** Chunk was on 28979 **/
/** chunk id: 719587, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => S
});
var n = i(311907),
    l = i(290595),
    s = i(171316),
    r = i(419954),
    u = i(153488),
    a = i(975571),
    o = i(780964),
    T = i(997913),
    A = i(652215),
    d = i(985018);
let S = (0, r.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => d.intl.string(d.t.XuADY2),
    useSubtitle: () => d.intl.format(d.t["igTSG/"], {
        helpdeskArticle: a.A.getArticleURL(A.MVz.DATA_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return (0, n.bG)([u.A], () => u.A.hasConsented(A.YAq.USAGE_STATISTICS))
    },
    setValue: function(t) {
        t ? (0, l.U)([A.YAq.USAGE_STATISTICS], []).catch(T.i) : (0, T.O)({
            header: d.intl.string(d.t.OdPCbN),
            body: d.intl.string(d.t.MGWabA),
            confirmText: d.intl.string(d.t["D3+rU4"]),
            cancelText: d.intl.string(d.t.kYpG0u),
            onConfirm: () => (0, l.U)([], [A.YAq.USAGE_STATISTICS]).catch(T.i)
        })
    },
    useSearchTerms: () => [d.intl.string(d.t.XuADY2)],
    useDisabled: s.uM
})