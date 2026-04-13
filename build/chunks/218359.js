/** chunk id: 218359 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(106148),
    l = n(650832),
    r = n(975571),
    a = n(171316),
    o = n(652215),
    d = n(221425),
    c = n(985018);

function u() {
    let {
        hasConsented: e,
        updateConsent: t
    } = (0, a.lH)(o.YAq.PERSONALIZATION);
    return (0, i.jsx)(s.h, {
        children: (0, i.jsx)(l.Ay, {
            title: c.intl.string(d.default.XMPqUx),
            note: c.intl.format(d.default.Imp6Ns, {
                helpdeskArticle: r.A.getArticleURL(o.MVz.DATA_USED_FOR_RECOMMENDED)
            }),
            value: e,
            onChange: t
        })
    })
}