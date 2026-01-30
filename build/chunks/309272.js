/** chunk id: 309272, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(632553),
    l = n(171316),
    s = n(975571),
    a = n(253932),
    o = n(871930),
    c = n(578746),
    d = n(531525),
    u = n(652215),
    _ = n(985018),
    p = n(842130);

function m() {
    let e = a.H1.useSetting(),
        t = (0, l.uM)(),
        n = _.t.sJYh5t,
        m = _.t.cf9mvV,
        g = (0, i.g)();
    return (0, r.jsx)(o.h, {
        setting: d.H.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(c.Ay, {
            title: _.intl.string(n),
            note: _.intl.format(m, {
                helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !e,
            onChange: e => a.H1.updateSetting(!e),
            disabled: g || t,
            tooltipText: t ? _.intl.string(p.default["6Af/cw"]) : void 0
        })
    })
}