/** chunk id: 351104 params = (module,exports,require) **/
n.d(t, {
    Z: () => A
});
var i = n(627968);
n(64700);
var s = n(935649),
    l = n(847599),
    r = n(152076),
    a = n(93857),
    o = n(871930),
    d = n(578746),
    c = n(975571),
    u = n(171316),
    _ = n(500470),
    m = n(652215),
    g = n(985018);

function A() {
    let e = (0, _.k)() ?? void 0,
        t = (0, u.KK)(),
        n = a.ES.useControlledSetting(e);
    return (0, i.jsx)(o.h, {
        children: (0, i.jsx)(d.Ay, {
            title: g.intl.string(g.t["3o2ojh"]),
            value: !t && !n,
            onChange: t => {
                !t && (0, r.w)() ? s.A.showAgeVerificationGetStartedModal({
                    entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
                }) : a.ES.updateControlledSetting(e, !t)
            },
            disabled: t,
            note: g.intl.format(g.t.IoztJ0, {
                helpdeskArticle: c.A.getArticleURL(m.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}