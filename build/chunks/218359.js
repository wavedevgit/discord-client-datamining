/** chunk id: 218359, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(871930),
    l = n(578746),
    a = n(975571),
    r = n(171316),
    o = n(652215),
    d = n(842130),
    c = n(985018);

function u() {
    let {
        hasConsented: e,
        updateConsent: t
    } = (0, r.lH)(o.YAq.PERSONALIZATION);
    return (0, i.jsx)(s.h, {
        children: (0, i.jsx)(l.Ay, {
            title: c.intl.string(d.default.XMPqUx),
            note: c.intl.format(d.default.Imp6Ns, {
                helpdeskArticle: a.A.getArticleURL(o.MVz.DATA_USED_FOR_RECOMMENDED)
            }),
            value: e,
            onChange: t
        })
    })
}