/** chunk id: 713031 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(290595),
    r = n(171316),
    o = n(153488),
    d = n(975571),
    c = n(871930),
    u = n(578746),
    _ = n(997913),
    g = n(531525),
    A = n(652215),
    m = n(985018),
    h = n(842130);

function p() {
    let e = (0, l.cf)([o.A], () => o.A.hasConsented(A.YAq.PERSONALIZATION)),
        [t, n] = s.useState(e),
        p = (0, r.uM)();
    return (0, i.jsx)(c.h, {
        setting: g.H.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(u.Ay, {
            title: m.intl.string(m.t.MNKzyg),
            note: m.intl.format(m.t["eQL/Mr"], {
                helpdeskArticle: d.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED)
            }),
            value: t,
            onChange: e => {
                e ? (0, a.U)([A.YAq.PERSONALIZATION], []).catch(_.i).then(() => n(!0)) : (0, _.O)({
                    header: m.intl.string(m.t["9SNpzv"]),
                    confirmText: m.intl.string(m.t["9g5UGw"]),
                    cancelText: m.intl.string(m.t["+ZLPw9"]),
                    onConfirm: () => {
                        (0, a.U)([], [A.YAq.PERSONALIZATION]).catch(_.i).then(() => n(!1))
                    },
                    body: m.intl.string(m.t.gJvDDh)
                })
            },
            disabled: p,
            tooltipText: p ? m.intl.string(h.default["6Af/cw"]) : void 0
        })
    })
}