/** Chunk was on web.js **/
/** chunk id: 597351, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(990078),
    s = n(397927),
    l = n(746775);

function c(e) {
    let {
        onClick: t,
        icon: n,
        tooltip: i,
        className: c
    } = e, u = n({
        color: "currentColor",
        size: "custom",
        width: 20,
        height: 20
    });
    return (0, r.jsx)(o.m, {
        text: i,
        position: "bottom",
        children: (0, r.jsx)(s.sqX, {
            onClick: e => {
                t(e)
            },
            "aria-label": i,
            className: a()(l.x, c),
            children: (0, r.jsx)("div", {
                className: l.h,
                children: u
            })
        })
    })
}