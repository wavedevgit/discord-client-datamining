/** chunk id: 534340, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => o
});
var a = n(627968);
n(64700);
var r = n(397927),
    l = n(900549),
    s = n(985018),
    i = n(117816);

function o(t) {
    let {
        url: e,
        onClose: n,
        transitionState: o
    } = t;
    return (0, a.jsx)(r.kpP, {
        transitionState: o,
        onClose: n,
        graphic: {
            src: i.A,
            type: "image"
        },
        gradientColor: "blue",
        title: s.intl.string(s.t["2B3wj8"]),
        subtitle: s.intl.format(s.t.jnHyYU, {}),
        actions: [{
            text: s.intl.string(s.t["/g10LC"]),
            onClick: n
        }],
        children: (0, a.jsx)(l.w, {
            url: e
        })
    })
}