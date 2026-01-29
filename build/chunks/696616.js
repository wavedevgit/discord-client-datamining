/** Chunk was on 2827 **/
/** chunk id: 696616, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(93857),
    l = n(871930),
    s = n(578746),
    a = n(975571),
    o = n(500470),
    c = n(652215),
    d = n(842130),
    u = n(985018);

function _() {
    var e;
    let t = null != (e = (0, o.k)()) ? e : void 0,
        n = i.kf.useControlledSetting(t);
    return (0, r.jsx)(l.h, {
        children: (0, r.jsx)(s.Ay, {
            title: u.intl.string(d.default.ZhaNu8),
            note: u.intl.format(d.default.cnCK6b, {
                helpdeskArticle: a.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !n,
            onChange: e => i.kf.updateControlledSetting(t, !e)
        })
    })
}