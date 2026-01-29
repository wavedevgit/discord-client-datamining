/** Chunk was on 2827 **/
/** chunk id: 901794, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => _
});
var r = n(627968),
    i = n(444802),
    l = n(524738),
    s = n(871930),
    a = n(975571),
    o = n(688912),
    c = n(443357),
    d = n(985018),
    u = n(993128);

function _() {
    let e = (0, i.WX)(),
        t = [{
            setting: "SEXUALLY_EXPLICIT_MEDIA_REDACTION",
            title: d.intl.string(d.t.GYpoAq),
            component: () => (0, r.jsx)(o.Z, {}),
            orientation: "vertical"
        }, {
            setting: "GORE_MEDIA_REDACTION",
            title: d.intl.string(d.t["16/3Bi"]),
            component: () => (0, r.jsx)(c.q, {}),
            orientation: "vertical"
        }];
    return (0, r.jsxs)(s.h, {
        children: [(0, r.jsx)(s._, {
            header: d.intl.string(d.t["Hj/But"]),
            description: d.intl.format(d.t["H/Icz+"], {
                learnMoreLink: a.A.getArticleURL(e)
            })
        }), (0, r.jsx)(l._, {
            tabs: t,
            orientation: "vertical",
            tabsClassName: u.v
        })]
    })
}