/** Chunk was on 5606 **/
/** chunk id: 8271, original params: e,t,n (module,exports,require) **/
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
    let e = a.vf.useSetting(),
        t = a.H1.useSetting(),
        n = (0, l.uM)(),
        m = (0, i.g)();
    return (0, r.jsx)(o.h, {
        setting: d.H.PRIVACY_DATA_QUESTS_3P,
        children: (0, r.jsx)(c.Ay, {
            title: p.intl.string(p.t.CyLYKZ),
            note: p.intl.format(p.t["2QFDU/"], {
                helpdeskArticle: s.A.getArticleURL(u.MVz.QUESTS_PRIVACY_CONTROLS)
            }),
            value: !e,
            onChange: e => a.vf.updateSetting(!e),
            disabled: m || t || n,
            tooltipText: n ? p.intl.string(_.default["6Af/cw"]) : void 0
        })
    })
}