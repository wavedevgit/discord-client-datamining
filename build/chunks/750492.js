/** chunk id: 750492 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var a = n(158954),
    l = n(735321),
    s = n(985018),
    r = n(373251);

function o(e) {
    let {
        widgetType: t,
        gameCount: n
    } = e, o = (0, l.cv)(t);
    return n <= o ? null : (0, i.jsx)("div", {
        role: "alert",
        className: r.l,
        children: (0, i.jsx)(a.wx6, {
            type: "warning",
            children: s.intl.formatToPlainString(s.t.Rv3wYq, {
                maxGames: o
            })
        })
    })
}