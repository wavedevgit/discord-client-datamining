/** chunk id: 638130 params = (module,exports,require) **/
n.d(t, {
    f: () => A
});
var i = n(627968);
n(64700);
var s = n(444802),
    l = n(975571),
    r = n(524738),
    a = n(421248),
    o = n(42765),
    d = n(871930),
    c = n(355097),
    u = n(531525),
    _ = n(652215),
    m = n(985018),
    g = n(831306);

function A() {
    let e = (0, s.WX)(),
        t = [{
            title: m.intl.string(m.t.GYpoAq),
            component: a.Z,
            orientation: "vertical",
            setting: u.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION
        }, {
            title: m.intl.string(m.t["16/3Bi"]),
            component: o.q,
            orientation: "vertical",
            setting: u.H.GORE_MEDIA_REDACTION
        }];
    return (0, i.jsxs)(d.h, {
        setting: u.H.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: c.d1.EXPLICIT_MEDIA_REDACTION_V2,
        children: [(0, i.jsx)(d._, {
            header: m.intl.string(m.t["Hj/But"]),
            description: m.intl.format(m.t.dliU4j, {
                learnMoreLink: l.A.getArticleURL(e)
            })
        }), (0, i.jsx)(r.A, {
            parentSetting: u.H.CONTENT_SOCIAL,
            settingsSection: _.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            orientation: "vertical",
            tabsClassName: g.v
        })]
    })
}