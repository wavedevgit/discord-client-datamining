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
    d = i(652215),
    A = i(985018);
let S = (0, r.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => A.intl.string(A.t.MNKzyg),
    useSubtitle: () => A.intl.format(A.t["eQL/Mr"], {
        helpdeskArticle: a.A.getArticleURL(d.MVz.DATA_USED_FOR_RECOMMENDED)
    }),
    useValue: function() {
        return (0, n.bG)([u.A], () => u.A.hasConsented(d.YAq.PERSONALIZATION))
    },
    setValue: function(t) {
        t ? (0, l.U)([d.YAq.PERSONALIZATION], []).catch(T.i) : (0, T.O)({
            header: A.intl.string(A.t["9SNpzv"]),
            confirmText: A.intl.string(A.t["9g5UGw"]),
            cancelText: A.intl.string(A.t["+ZLPw9"]),
            onConfirm: () => {
                (0, l.U)([], [d.YAq.PERSONALIZATION]).catch(T.i)
            },
            body: A.intl.string(A.t.gJvDDh)
        })
    },
    useDisabled: s.uM
})