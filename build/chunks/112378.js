/** chunk id: 112378, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => s
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(298063),
    o = n(658122);

function s(e) {
    let t = i.useRef(null),
        [n, s] = i.useState(null),
        l = (0, a.Y)("MenuLabel");
    return (i.useLayoutEffect(() => {
        if (l && null != t.current) {
            let {
                scrollWidth: e,
                clientWidth: n
            } = t.current;
            e > n ? s(e - n) : s(null)
        }
    }, [l, e.children]), l) ? (0, r.jsx)("div", {
        className: o.marqueeContainer,
        "data-overflow": null != n ? "" : void 0,
        children: (0, r.jsx)("span", {
            ref: t,
            className: o.marqueeText,
            style: null != n ? {
                "--custom-marquee-overflow": "".concat(n, "px")
            } : void 0,
            children: e.children
        })
    }) : e.children
}