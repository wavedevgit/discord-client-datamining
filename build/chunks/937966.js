/** chunk id: 937966, original params: t,e,i (module,exports,require) **/
i.d(e, {
    _: () => S
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
let S = (0, r.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => T.intl.string(T.t.MNKzyg),
    useSubtitle: () => T.intl.format(T.t["eQL/Mr"], {
        helpdeskArticle: u.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED)
    }),
    useValue: function() {
        return (0, n.bG)([a.A], () => a.A.hasConsented(A.YAq.PERSONALIZATION))
    },
    setValue: function(t) {
        t ? (0, l.U)([A.YAq.PERSONALIZATION], []).catch(d.i) : (0, d.O)({
            header: T.intl.string(T.t["9SNpzv"]),
            confirmText: T.intl.string(T.t["9g5UGw"]),
            cancelText: T.intl.string(T.t["+ZLPw9"]),
            onConfirm: () => {
                (0, l.U)([], [A.YAq.PERSONALIZATION]).catch(d.i)
            },
            body: T.intl.string(T.t.gJvDDh)
        })
    },
    useDisabled: s.uM
})