/** chunk id: 523104 params = (module,exports,require) **/
n.d(t, {
    j: () => u
});
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(882997),
    r = n(975571),
    a = n(916335),
    o = n(652215),
    d = n(985018),
    c = n(729632);
let u = () => {
    let e = r.A.getArticleURL(o.MVz.PS_CONNECTION);
    return (0, i.jsx)(a.Z, {
        title: d.intl.string(d.t.v20wwm),
        body: d.intl.format(d.t.lTZBit, {
            help_article: e
        }),
        img: (0, i.jsx)("img", {
            src: c,
            width: "82",
            height: "auto",
            alt: ""
        }),
        newIndicatorDismissibleContent: s.M.PS_ONE_WAY_RECONNECT,
        onClick: () => (0, l.A)({
            platformType: o.fg2.PLAYSTATION,
            location: "PS two way upsell"
        })
    })
}