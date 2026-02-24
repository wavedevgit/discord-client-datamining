/** chunk id: 901794, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => _
});
var i = n(627968),
    s = n(444802),
    a = n(524738),
    l = n(871930),
    r = n(975571),
    o = n(688912),
    c = n(443357),
    d = n(985018),
    u = n(446170);

function _() {
    let e = (0, s.WX)(),
        t = [{
            setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
            title: d.intl.string(d.t.GYpoAq),
            component: () => (0, i.jsx)(o.Z, {}),
            orientation: "vertical"
        }, {
            setting: "GORE_MEDIA_REDACTION",
            title: d.intl.string(d.t["16/3Bi"]),
            component: () => (0, i.jsx)(c.q, {}),
            orientation: "vertical"
        }];
    return (0, i.jsxs)(l.h, {
        children: [(0, i.jsx)(l._, {
            header: d.intl.string(d.t["Hj/But"]),
            description: d.intl.format(d.t["H/Icz+"], {
                learnMoreLink: r.A.getArticleURL(e)
            })
        }), (0, i.jsx)(a._, {
            tabs: t,
            orientation: "vertical",
            tabsClassName: u.v
        })]
    })
}