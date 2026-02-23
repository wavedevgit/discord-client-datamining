/** chunk id: 713031, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(290595),
    l = n(171316),
    o = n(153488),
    c = n(975571),
    d = n(871930),
    u = n(578746),
    _ = n(997913),
    m = n(531525),
    A = n(652215),
    g = n(985018),
    h = n(842130);

function x() {
    let e = (0, a.cf)([o.A], () => o.A.hasConsented(A.YAq.PERSONALIZATION)),
        [t, n] = s.useState(e),
        x = (0, l.uM)();
    return (0, i.jsx)(d.h, {
        setting: m.H.PRIVACY_DATA_PERSONALIZE_V2,
        children: (0, i.jsx)(u.Ay, {
            title: g.intl.string(g.t.MNKzyg),
            note: g.intl.format(g.t["eQL/Mr"], {
                helpdeskArticle: c.A.getArticleURL(A.MVz.DATA_USED_FOR_RECOMMENDED)
            }),
            value: t,
            onChange: e => {
                e ? (0, r.U)([A.YAq.PERSONALIZATION], []).catch(_.i).then(() => n(!0)) : (0, _.O)({
                    header: g.intl.string(g.t["9SNpzv"]),
                    confirmText: g.intl.string(g.t["9g5UGw"]),
                    cancelText: g.intl.string(g.t["+ZLPw9"]),
                    onConfirm: () => {
                        (0, r.U)([], [A.YAq.PERSONALIZATION]).catch(_.i).then(() => n(!1))
                    },
                    body: g.intl.string(g.t.gJvDDh)
                })
            },
            disabled: x,
            tooltipText: x ? g.intl.string(h.default["6Af/cw"]) : void 0
        })
    })
}