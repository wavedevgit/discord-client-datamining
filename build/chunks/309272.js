/** chunk id: 309272 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(632553),
    l = n(171316),
    r = n(975571),
    a = n(253932),
    o = n(871930),
    d = n(578746),
    c = n(531525),
    u = n(652215),
    _ = n(985018),
    m = n(870236);

function g() {
    let e = a.H1.useSetting(),
        t = (0, l.uM)(),
        n = _.t.sJYh5t,
        g = _.t.cf9mvV,
        A = (0, s.g)();
    return (0, i.jsx)(o.h, {
        setting: c.H.PRIVACY_DATA_QUESTS_V2,
        children: (0, i.jsx)(d.Ay, {
            title: _.intl.string(n),
            note: _.intl.format(g, {
                helpdeskArticle: r.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !e,
            onChange: e => a.H1.updateSetting(!e),
            disabled: A || t,
            tooltipText: t ? _.intl.string(m.default["6Af/cw"]) : void 0
        })
    })
}