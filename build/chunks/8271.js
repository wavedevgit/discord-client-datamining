/** chunk id: 8271 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(632553),
    l = n(171316),
    a = n(975571),
    r = n(253932),
    o = n(871930),
    d = n(578746),
    c = n(531525),
    u = n(652215),
    _ = n(985018),
    g = n(870236);

function A() {
    let e = r.vf.useSetting(),
        t = r.H1.useSetting(),
        n = (0, l.uM)(),
        A = (0, s.g)();
    return (0, i.jsx)(o.h, {
        setting: c.H.PRIVACY_DATA_QUESTS_3P,
        children: (0, i.jsx)(d.Ay, {
            title: _.intl.string(_.t.CyLYKZ),
            note: _.intl.format(_.t["2QFDU/"], {
                helpdeskArticle: a.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !e,
            onChange: e => r.vf.updateSetting(!e),
            disabled: A || t || n,
            tooltipText: n ? _.intl.string(g.default["6Af/cw"]) : void 0
        })
    })
}