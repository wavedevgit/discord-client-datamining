/** chunk id: 901794, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => _
});
var i = n(627968),
    s = n(444802),
    l = n(524738),
    a = n(871930),
    r = n(975571),
    o = n(688912),
    d = n(443357),
    c = n(985018),
    u = n(770747);

function _() {
    let e = (0, s.WX)(),
        t = [{
            setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
            title: c.intl.string(c.t.GYpoAq),
            component: () => (0, i.jsx)(o.Z, {}),
            orientation: "vertical"
        }, {
            setting: "GORE_MEDIA_REDACTION",
            title: c.intl.string(c.t["16/3Bi"]),
            component: () => (0, i.jsx)(d.q, {}),
            orientation: "vertical"
        }];
    return (0, i.jsxs)(a.h, {
        children: [(0, i.jsx)(a._, {
            header: c.intl.string(c.t["Hj/But"]),
            description: c.intl.format(c.t["H/Icz+"], {
                learnMoreLink: r.A.getArticleURL(e)
            })
        }), (0, i.jsx)(l._, {
            tabs: t,
            orientation: "vertical",
            tabsClassName: u.v
        })]
    })
}