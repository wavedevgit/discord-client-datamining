/** chunk id: 445343 params = (module,exports,require) **/
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
    c = n(221425),
    u = n(985018);

function m() {
    let e = (0, o.k)() ?? void 0,
        t = s.yH.useControlledSetting(e),
        n = s.kf.useControlledSetting(e);
    return null == e ? null : (0, i.jsx)(l.h, {
        children: (0, i.jsx)(r.Ay, {
            title: u.intl.string(u.t.CyLYKZ),
            note: u.intl.format(c.default["6mK5Pz"], {
                helpdeskArticle: a.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !t,
            onChange: t => s.yH.updateControlledSetting(e, !t),
            disabled: n
        })
    })
}