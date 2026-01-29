/** Chunk was on 4670 **/
/** chunk id: 719587, original params: e,t,i (module,exports,require) **/
i.d(t, {
    L: () => A
});
var n = i(311907),
    l = i(290595),
    s = i(171316),
    r = i(419954),
    a = i(153488),
    u = i(975571),
    o = i(780964),
    d = i(997913),
    T = i(652215),
    c = i(985018);
let A = (0, r.zD)(o.X.DATA_USAGE_STATISTICS_SETTING, {
    useTitle: () => c.intl.string(c.t.XuADY2),
    useSubtitle: () => c.intl.format(c.t["igTSG/"], {
        helpdeskArticle: u.A.getArticleURL(T.MVz.DATA_PRIVACY_CONTROLS)
    }),
    useValue: function() {
        return (0, n.bG)([a.A], () => a.A.hasConsented(T.YAq.USAGE_STATISTICS))
    },
    setValue: function(e) {
        e ? (0, l.U)([T.YAq.USAGE_STATISTICS], []).catch(d.i) : (0, d.O)({
            header: c.intl.string(c.t.OdPCbN),
            body: c.intl.string(c.t.MGWabA),
            confirmText: c.intl.string(c.t["D3+rU4"]),
            cancelText: c.intl.string(c.t.kYpG0u),
            onConfirm: () => (0, l.U)([], [T.YAq.USAGE_STATISTICS]).catch(d.i)
        })
    },
    useSearchTerms: () => [c.intl.string(c.t.XuADY2)],
    useDisabled: s.uM
})