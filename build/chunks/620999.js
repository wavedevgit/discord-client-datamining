/** Chunk was on 92917 **/
/** chunk id: 620999, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => c,
    t: () => o
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(610084);

function o() {
    let [e] = i.useState(() => Math.floor(1600 * Math.random()) / 1e3);
    return (0, r.jsx)("div", {
        className: a()(s.Vl, s.Yf),
        style: {
            animationDelay: "".concat(e, "s")
        }
    })
}

function c() {
    let [e] = i.useState(() => Math.floor(60 * Math.random()) + 20);
    return (0, r.jsx)("div", {
        className: s.RC,
        style: {
            width: "".concat(e, "%")
        }
    })
}