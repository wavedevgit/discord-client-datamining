/** chunk id: 750492 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(158954),
    s = i(735321),
    a = i(985018),
    r = i(373251);

function d(e) {
    let {
        widgetType: t,
        gameCount: i
    } = e, d = (0, s.cv)(t);
    return i <= d ? null : (0, n.jsx)("div", {
        role: "alert",
        className: r.l,
        children: (0, n.jsx)(l.wx6, {
            type: "warning",
            children: a.intl.formatToPlainString(a.t.Rv3wYq, {
                maxGames: d
            })
        })
    })
}