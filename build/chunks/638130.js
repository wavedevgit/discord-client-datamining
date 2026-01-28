/** Chunk was on 5606 **/
/** chunk id: 638130, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => g
});
var r = n(627968);
n(64700);
var i = n(444802),
    l = n(975571),
    s = n(524738),
    a = n(421248),
    o = n(42765),
    c = n(871930),
    d = n(355097),
    u = n(531525),
    p = n(652215),
    _ = n(985018),
    m = n(456144);

function g() {
    let e = (0, i.WX)(),
        t = [{
            title: _.intl.string(_.t.GYpoAq),
            component: a.Z,
            orientation: "vertical",
            setting: u.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION
        }, {
            title: _.intl.string(_.t["16/3Bi"]),
            component: o.q,
            orientation: "vertical",
            setting: u.H.GORE_MEDIA_REDACTION
        }];
    return (0, r.jsxs)(c.h, {
        setting: u.H.SENSITIVE_CONTENT_FILTERS,
        scrollPosition: d.d1.EXPLICIT_MEDIA_REDACTION_V2,
        children: [(0, r.jsx)(c._, {
            header: _.intl.string(_.t["Hj/But"]),
            description: _.intl.format(_.t.dliU4j, {
                learnMoreLink: l.A.getArticleURL(e)
            })
        }), (0, r.jsx)(s.A, {
            parentSetting: u.H.CONTENT_SOCIAL,
            settingsSection: p.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            orientation: "vertical",
            tabsClassName: m.v
        })]
    })
}