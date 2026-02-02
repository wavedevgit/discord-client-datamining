/** chunk id: 513297, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => p
});
var s, n = i(627968);
i(64700);
var r = i(503698),
    o = i.n(r),
    a = i(990078),
    l = i(397927),
    u = i(573729),
    c = ((s = c || {})[s.ACCEPT = 0] = "ACCEPT", s[s.DENY = 1] = "DENY", s[s.DEFAULT = 2] = "DEFAULT", s);

function h(e) {
    let {
        icon: t,
        tooltip: i,
        onClick: s,
        actionType: r = 2,
        shouldHighlight: c
    } = e;
    return (0, n.jsx)(a.m, {
        text: i,
        children: (0, n.jsx)(l.DUT, {
            tag: "div",
            "aria-label": i,
            onClick: s,
            className: o()(u.hP, {
                [u.Jj]: 0 === r,
                [u.Bs]: 1 === r,
                [u.Zt]: c
            }),
            children: (0, n.jsx)(t, {
                className: u.Kk,
                color: "currentColor"
            })
        })
    })
}
h.ActionTypes = c;
let p = h