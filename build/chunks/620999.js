/** chunk id: 620999 params = (module,exports,require) **/
n.d(t, {
    r: () => u,
    t: () => o
});
var a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(120690);

function o() {
    let [e] = r.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, a.jsx)("div", {
        className: s()(i.Vl, i.Yf),
        style: {
            animationDelay: `${e}s`
        }
    })
}

function u() {
    let [e] = r.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, a.jsx)("div", {
        className: i.RC,
        style: {
            width: `${e}%`
        }
    })
}