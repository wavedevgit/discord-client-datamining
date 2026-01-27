/** Chunk was on 20941 **/
/** chunk id: 573138, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(397927),
    o = n(854987),
    c = n(398225),
    u = n(256024);

function d(e) {
    let {
        children: t,
        noPadding: n = !1,
        centered: a = !0,
        verticalFlow: d = !1,
        className: m
    } = e, f = l.useContext(o.P), p = (0, s.rdh)(f.primaryColor).hex(), h = (0, c.HL)();
    return (0, r.jsx)(c.gy.Provider, {
        value: h,
        children: (0, r.jsx)("div", {
            className: i()(u.kL, {
                [u.pK]: !n,
                [u.g7]: a,
                [u.W5]: d
            }, m),
            style: {
                color: p
            },
            children: t
        })
    })
}