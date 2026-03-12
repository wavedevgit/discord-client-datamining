/** chunk id: 327479 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(628441);

function o(e) {
    let {
        text: t,
        className: n,
        loading: s,
        ...o
    } = e;
    return (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: l()(a._, n),
        children: (0, i.jsx)(r.Button, {
            ...o,
            variant: "overlay-primary",
            size: "sm",
            text: t,
            loading: s
        })
    })
}