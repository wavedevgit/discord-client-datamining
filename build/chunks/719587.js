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
    d = i(652215),
    A = i(985018);
let S = (0, r.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => A.intl.string(A.t.XuADY2),
    useSubtitle: () => A.intl.format(A.t["igTSG/"], {
        helpdeskArticle: a.A.getArticleURL(d.MVz.DATA_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return (0, n.bG)([u.A], () => u.A.hasConsented(d.YAq.USAGE_STATISTICS))
    },
    setValue: function(t) {
        t ? (0, l.U)([d.YAq.USAGE_STATISTICS], []).catch(T.i) : (0, T.O)({
            header: A.intl.string(A.t.OdPCbN),
            body: A.intl.string(A.t.MGWabA),
            confirmText: A.intl.string(A.t["D3+rU4"]),
            cancelText: A.intl.string(A.t.kYpG0u),
            onConfirm: () => (0, l.U)([], [d.YAq.USAGE_STATISTICS]).catch(T.i)
        })
    },
    useSearchTerms: () => [A.intl.string(A.t.XuADY2)],
    useDisabled: s.uM
})