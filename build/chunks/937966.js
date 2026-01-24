/** Chunk was on 28979 **/
/** chunk id: 937966, original params: t,e,i (module,exports,require) **/
i.d(e, {
    _: () => S
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
let S = (0, r.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => d.intl.string(d.t.MNKzyg),
    useSubtitle: () => d.intl.format(d.t["eQL/Mr"], {
        helpdeskArticle: a.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED)
    }),
    useValue: function() {
        return (0, n.bG)([u.A], () => u.A.hasConsented(A.YAq.PERSONALIZATION))
    },
    setValue: function(t) {
        t ? (0, l.U)([A.YAq.PERSONALIZATION], []).catch(T.i) : (0, T.O)({
            header: d.intl.string(d.t["9SNpzv"]),
            confirmText: d.intl.string(d.t["9g5UGw"]),
            cancelText: d.intl.string(d.t["+ZLPw9"]),
            onConfirm: () => {
                (0, l.U)([], [A.YAq.PERSONALIZATION]).catch(T.i)
            },
            body: d.intl.string(d.t.gJvDDh)
        })
    },
    useDisabled: s.uM
})