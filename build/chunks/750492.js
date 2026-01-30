/** chunk id: 750492, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(735321),
    a = n(985018),
    o = n(997338);

function s(e) {
    let {
        widgetType: t,
        gameCount: n
    } = e, s = (0, i.cv)(t);
    return n <= s ? null : (0, r.jsx)("div", {
        role: "alert",
        className: o.l,
        children: (0, r.jsx)(l.wx6, {
            type: "warning",
            children: a.intl.formatToPlainString(a.t.Rv3wYq, {
                maxGames: s
            })
        })
    })
}