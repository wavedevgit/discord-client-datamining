/** Chunk was on 5606 **/
/** chunk id: 218359, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(871930),
    l = n(578746),
    s = n(975571),
    a = n(171316),
    o = n(652215),
    c = n(842130),
    d = n(985018);

function u() {
    let {
        hasConsented: e,
        updateConsent: t
    } = (0, a.lH)(o.YAq.PERSONALIZATION);
    return (0, r.jsx)(i.h, {
        children: (0, r.jsx)(l.Ay, {
            title: d.intl.string(c.default.XMPqUx),
            note: d.intl.format(c.default.Imp6Ns, {
                helpdeskArticle: s.A.getArticleURL(o.MVz.DATA_USED_FOR_RECOMMENDED)
            }),
            value: e,
            onChange: t
        })
    })
}