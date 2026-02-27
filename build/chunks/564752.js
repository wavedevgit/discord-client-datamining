/** chunk id: 564752, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(871930),
    a = n(578746),
    l = n(975571),
    r = n(171316),
    o = n(652215),
    c = n(842130),
    d = n(985018);

function u() {
    let {
        hasConsented: e,
        updateConsent: t
    } = (0, r.lH)(o.YAq.USAGE_STATISTICS);
    return (0, i.jsx)(s.h, {
        children: (0, i.jsx)(a.Ay, {
            title: d.intl.string(c.default.HjstRR),
            note: d.intl.format(c.default.Z5yJZy, {
                helpdeskArticle: l.A.getArticleURL(o.MVz.DATA_PRIVACY_CONTROLS)
            }),
            value: e,
            onChange: t
        })
    })
}