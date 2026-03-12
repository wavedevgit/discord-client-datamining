/** chunk id: 564752 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(871930),
    l = n(578746),
    r = n(975571),
    a = n(171316),
    o = n(652215),
    d = n(870236),
    c = n(985018);

function u() {
    let {
        hasConsented: e,
        updateConsent: t
    } = (0, a.lH)(o.YAq.USAGE_STATISTICS);
    return (0, i.jsx)(s.h, {
        children: (0, i.jsx)(l.Ay, {
            title: c.intl.string(d.default.HjstRR),
            note: c.intl.format(d.default.Z5yJZy, {
                helpdeskArticle: r.A.getArticleURL(o.MVz.DATA_PRIVACY_CONTROLS)
            }),
            value: e,
            onChange: t
        })
    })
}