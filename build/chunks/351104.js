/** chunk id: 351104 params = (module,exports,require) **/
n.d(t, {
    Z: () => x
});
var i = n(627968);
n(64700);
var s = n(935649),
    l = n(847599),
    a = n(152076),
    r = n(93857),
    o = n(106148),
    d = n(650832),
    c = n(975571),
    u = n(171316),
    m = n(500470),
    g = n(652215),
    _ = n(985018);

function x() {
    let e = (0, m.k)() ?? void 0,
        t = (0, u.KK)(),
        n = r.ES.useControlledSetting(e);
    return (0, i.jsx)(o.h, {
        children: (0, i.jsx)(d.Ay, {
            title: _.intl.string(_.t["3o2ojh"]),
            value: !t && !n,
            onChange: t => {
                !t && (0, a.w)() ? s.A.showAgeVerificationGetStartedModal({
                    entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
                }) : r.ES.updateControlledSetting(e, !t)
            },
            disabled: t,
            note: _.intl.format(_.t.IoztJ0, {
                helpdeskArticle: c.A.getArticleURL(g.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}