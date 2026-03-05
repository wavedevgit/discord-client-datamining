/** chunk id: 696616, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(93857),
    l = n(871930),
    a = n(578746),
    r = n(975571),
    o = n(500470),
    d = n(652215),
    c = n(842130),
    u = n(985018);

function _() {
    let e = (0, o.k)() ?? void 0,
        t = s.kf.useControlledSetting(e);
    return (0, i.jsx)(l.h, {
        children: (0, i.jsx)(a.Ay, {
            title: u.intl.string(c.default.ZhaNu8),
            note: u.intl.format(c.default.cnCK6b, {
                helpdeskArticle: r.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !t,
            onChange: t => s.kf.updateControlledSetting(e, !t)
        })
    })
}