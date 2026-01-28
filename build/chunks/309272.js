/** Chunk was on 5606 **/
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
    p = n(985018),
    _ = n(842130);

function m() {
    let e = a.H1.useSetting(),
        t = (0, l.uM)(),
        n = p.t.sJYh5t,
        m = p.t.cf9mvV,
        g = (0, i.g)();
    return (0, r.jsx)(o.h, {
        setting: d.H.PRIVACY_DATA_QUESTS_V2,
        children: (0, r.jsx)(c.Ay, {
            title: p.intl.string(n),
            note: p.intl.format(m, {
                helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !e,
            onChange: e => a.H1.updateSetting(!e),
            disabled: g || t,
            tooltipText: t ? p.intl.string(_.default["6Af/cw"]) : void 0
        })
    })
}