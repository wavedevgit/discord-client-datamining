/** chunk id: 750492 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(158954),
    a = n(735321),
    s = n(985018),
    r = n(691928);

function o(e) {
    let {
        widgetType: t,
        gameCount: n
    } = e, o = (0, a.cv)(t);
    return n <= o ? null : (0, i.jsx)("div", {
        role: "alert",
        className: r.l,
        children: (0, i.jsx)(l.wx6, {
            type: "warning",
            children: s.intl.formatToPlainString(s.t.Rv3wYq, {
                maxGames: o
            })
        })
    })
}