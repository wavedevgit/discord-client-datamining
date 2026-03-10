/** chunk id: 620999 params = (module,exports,require) **/
n.d(e, {
    r: () => c,
    t: () => u
});
var r = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    l = n(610084);

function u() {
    let [t] = a.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", {
        className: i()(l.Vl, l.Yf),
        style: {
            animationDelay: `${t}s`
        }
    })
}

function c() {
    let [t] = a.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", {
        className: l.RC,
        style: {
            width: `${t}%`
        }
    })
}