/** Chunk was on web.js **/
/** chunk id: 444806, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => a
});
var r = n(627968),
    i = n(750390);

function a(e) {
    let {
        graphic: t,
        layout: n
    } = e;
    if ("type" in t) switch (t.type) {
        case "role":
            let {
                color: a
            } = t;
            return (0, r.jsx)("div", {
                className: i.m4,
                style: {
                    backgroundColor: a
                }
            });
        case "avatar":
            let {
                src: o
            } = t;
            return (0, r.jsx)("img", {
                className: i.my,
                src: o,
                alt: ""
            });
        case "image":
            let {
                src: s
            } = t;
            return (0, r.jsx)("img", {
                className: i.Sl,
                src: s,
                alt: ""
            });
        default:
            return null
    }
    let l = "inline" === n ? "xs" : "sm",
        c = t;
    return (0, r.jsx)(c, {
        size: l
    })
}