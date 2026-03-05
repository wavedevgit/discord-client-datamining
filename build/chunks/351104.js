/** chunk id: 351104, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => A
});
var i = n(627968);
n(64700);
var s = n(935649),
    l = n(847599),
    a = n(152076),
    r = n(93857),
    o = n(871930),
    d = n(578746),
    c = n(975571),
    u = n(171316),
    _ = n(500470),
    g = n(652215),
    m = n(985018);

function A() {
    let e = (0, _.k)() ?? void 0,
        t = (0, u.KK)(),
        n = r.ES.useControlledSetting(e);
    return (0, i.jsx)(o.h, {
        children: (0, i.jsx)(d.Ay, {
            title: m.intl.string(m.t["3o2ojh"]),
            value: !t && !n,
            onChange: t => {
                !t && (0, a.w)() ? s.A.showAgeVerificationGetStartedModal({
                    entryPoint: l.q1.MESSAGE_REQUESTS_SETTINGS
                }) : r.ES.updateControlledSetting(e, !t)
            },
            disabled: t,
            note: m.intl.format(m.t.IoztJ0, {
                helpdeskArticle: c.A.getArticleURL(g.MVz.MESSAGE_REQUESTS)
            })
        })
    })
}