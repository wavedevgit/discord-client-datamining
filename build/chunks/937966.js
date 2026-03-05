/** chunk id: 937966 params = (module,exports,require) **/
n.d(t, {
    _: () => g
});
var i = n(311907),
    s = n(290595),
    l = n(171316),
    a = n(419954),
    r = n(153488),
    o = n(975571),
    d = n(780964),
    c = n(997913),
    u = n(652215),
    _ = n(985018);
let g = (0, a.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
    useTitle: () => _.intl.string(_.t.MNKzyg),
    useSubtitle: () => _.intl.format(_.t["eQL/Mr"], {
        helpdeskArticle: o.A.getArticleURL(u.MVz.DATA_USED_FOR_RECOMMENDED)
    }),
    useValue: function() {
        return (0, i.bG)([r.A], () => r.A.hasConsented(u.YAq.PERSONALIZATION))
    },
    setValue: function(e) {
        e ? (0, s.U)([u.YAq.PERSONALIZATION], []).catch(c.i) : (0, c.O)({
            header: _.intl.string(_.t["9SNpzv"]),
            confirmText: _.intl.string(_.t["9g5UGw"]),
            cancelText: _.intl.string(_.t["+ZLPw9"]),
            onConfirm: () => {
                (0, s.U)([], [u.YAq.PERSONALIZATION]).catch(c.i)
            },
            body: _.intl.string(_.t.gJvDDh)
        })
    },
    useDisabled: l.uM
})