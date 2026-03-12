/** chunk id: 713031 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(290595),
    a = n(171316),
    o = n(153488),
    d = n(975571),
    c = n(871930),
    u = n(578746),
    _ = n(997913),
    m = n(531525),
    g = n(652215),
    A = n(985018),
    h = n(870236);

function x() {
    let e = (0, l.cf)([o.A], () => o.A.hasConsented(g.YAq.PERSONALIZATION)),
        [t, n] = s.useState(e),
        x = (0, a.uM)();
    return (0, i.jsx)(c.h, {
        setting: m.H.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(u.Ay, {
            title: A.intl.string(A.t.MNKzyg),
            note: A.intl.format(A.t["eQL/Mr"], {
                helpdeskArticle: d.A.getArticleURL(g.MVz.DATA_USED_FOR_RECOMMENDED)
            }),
            value: t,
            onChange: e => {
                e ? (0, r.U)([g.YAq.PERSONALIZATION], []).catch(_.i).then(() => n(!0)) : (0, _.O)({
                    header: A.intl.string(A.t["9SNpzv"]),
                    confirmText: A.intl.string(A.t["9g5UGw"]),
                    cancelText: A.intl.string(A.t["+ZLPw9"]),
                    onConfirm: () => {
                        (0, r.U)([], [g.YAq.PERSONALIZATION]).catch(_.i).then(() => n(!1))
                    },
                    body: A.intl.string(A.t.gJvDDh)
                })
            },
            disabled: x,
            tooltipText: x ? A.intl.string(h.default["6Af/cw"]) : void 0
        })
    })
}