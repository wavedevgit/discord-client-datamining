/** Chunk was on 60667 **/
/** chunk id: 445343, original params: e,t,n (module,exports,require) **/
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
        n = i.yH.useControlledSetting(t),
        _ = i.kf.useControlledSetting(t);
    return null == t ? null : (0, r.jsx)(l.h, {
        children: (0, r.jsx)(s.Ay, {
            title: u.intl.string(u.t.CyLYKZ),
            note: u.intl.format(d.default["6mK5Pz"], {
                helpdeskArticle: a.A.getArticleURL(c.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !n,
            onChange: e => i.yH.updateControlledSetting(t, !e),
            disabled: _
        })
    })
}