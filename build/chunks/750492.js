/** chunk id: 750492 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var s = i(158954),
    l = i(735321),
    a = i(985018),
    r = i(373251);

function o(e) {
    let {
        widgetType: t,
        gameCount: i
    } = e, o = (0, l.cv)(t);
    return i <= o ? null : (0, n.jsx)("div", {
        role: "alert",
        className: r.l,
        children: (0, n.jsx)(s.wx6, {
            type: "warning",
            children: a.intl.formatToPlainString(a.t.Rv3wYq, {
                maxGames: o
            })
        })
    })
}