/** chunk id: 564752, original params: e,t,n (module,exports,require) **/
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
    } = (0, a.lH)(o.YAq.USAGE_STATISTICS);
    return (0, r.jsx)(i.h, {
        children: (0, r.jsx)(l.Ay, {
            title: d.intl.string(c.default.HjstRR),
            note: d.intl.format(c.default.Z5yJZy, {
                helpdeskArticle: s.A.getArticleURL(o.MVz.DATA_PRIVACY_CONTROLS)
            }),
            value: e,
            onChange: t
        })
    })
}