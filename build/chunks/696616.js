/** chunk id: 696616 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(93857),
    l = n(106148),
    r = n(650832),
    a = n(975571),
    o = n(500470),
    d = n(652215),
    c = n(602339),
    u = n(985018);

function m() {
    let e = (0, o.k)() ?? void 0,
        t = s.kf.useControlledSetting(e);
    return (0, i.jsx)(l.h, {
        children: (0, i.jsx)(r.Ay, {
            title: u.intl.string(c.default.ZhaNu8),
            note: u.intl.format(c.default.cnCK6b, {
                helpdeskArticle: a.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !t,
            onChange: t => s.kf.updateControlledSetting(e, !t)
        })
    })
}