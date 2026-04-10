/** chunk id: 901794 params = (module,exports,require) **/
n.d(t, {
    f: () => m
});
var i = n(627968),
    s = n(444802),
    l = n(106148),
    r = n(397620),
    a = n(975571),
    o = n(688912),
    d = n(443357),
    c = n(985018),
    u = n(49175);

function m() {
    let e = (0, s.WX)(),
        t = [{
            id: "explicit-media-redaction",
            title: c.intl.string(c.t.GYpoAq),
            component: () => (0, i.jsx)(o.Z, {}),
            orientation: "vertical"
        }, {
            id: "gore-media-redaction",
            title: c.intl.string(c.t["16/3Bi"]),
            component: () => (0, i.jsx)(d.q, {}),
            orientation: "vertical"
        }];
    return (0, i.jsxs)(l.h, {
        children: [(0, i.jsx)(l._, {
            header: c.intl.string(c.t["Hj/But"]),
            description: c.intl.format(c.t["H/Icz+"], {
                learnMoreLink: a.A.getArticleURL(e)
            })
        }), (0, i.jsx)(r.A, {
            tabs: t,
            orientation: "vertical",
            tabsClassName: u.v
        })]
    })
}