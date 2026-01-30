/** chunk id: 937966, original params: e,t,i (module,exports,require) **/
i.d(t, {
    _: () => A
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
let A = (0, r.zD)(o.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => c.intl.string(c.t.MNKzyg),
    useSubtitle: () => c.intl.format(c.t["eQL/Mr"], {
        helpdeskArticle: u.A.getArticleURL(T.MVz.DATA_USED_FOR_RECOMMENDED)
    }),
    useValue: function() {
        return (0, n.bG)([a.A], () => a.A.hasConsented(T.YAq.PERSONALIZATION))
    },
    setValue: function(e) {
        e ? (0, l.U)([T.YAq.PERSONALIZATION], []).catch(d.i) : (0, d.O)({
            header: c.intl.string(c.t["9SNpzv"]),
            confirmText: c.intl.string(c.t["9g5UGw"]),
            cancelText: c.intl.string(c.t["+ZLPw9"]),
            onConfirm: () => {
                (0, l.U)([], [T.YAq.PERSONALIZATION]).catch(d.i)
            },
            body: c.intl.string(c.t.gJvDDh)
        })
    },
    useDisabled: s.uM
})