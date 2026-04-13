/** chunk id: 513297 params = (module,exports,require) **/
s.d(t, {
    A: () => d
});
var i, n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(990078),
    u = s(397927),
    o = s(196536),
    c = ((i = c || {})[i.ACCEPT = 0] = "ACCEPT", i[i.DENY = 1] = "DENY", i[i.DEFAULT = 2] = "DEFAULT", i);

function h(e) {
    let {
        icon: t,
        tooltip: s,
        onClick: i,
        actionType: a = 2,
        shouldHighlight: c,
        loading: h = !1
    } = e;
    return (0, n.jsx)(l.m, {
        text: s,
        children: (0, n.jsx)(u.DUT, {
            tag: "div",
            "aria-label": s,
            onClick: h ? void 0 : i,
            className: r()(o.hP, {
                [o.Jj]: 0 === a,
                [o.Bs]: 1 === a,
                [o.Zt]: c,
                [o.r9]: h
            }),
            children: (0, n.jsx)(t, {
                className: o.Kk,
                color: "currentColor"
            })
        })
    })
}
h.ActionTypes = c;
let d = h