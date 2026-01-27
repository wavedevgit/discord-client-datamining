/** Chunk was on web.js **/
/** chunk id: 149505, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968),
    i = n(64700),
    a = n(860923),
    o = n(475741);
let s = [0, 68, 123, 61, 165, 224, 181],
    l = [684, 720, 774, 798, 720, 803, 815],
    c = () => {
        let e = (0, a.A)(),
            t = i.useMemo(() => null == e ? [] : Object.values(null == e ? void 0 : e.clouds), [e]);
        return (0, r.jsx)("div", {
            className: o.P,
            children: t.map((e, t) => {
                let n = t > s.length - 1 ? 0 : t;
                return (0, r.jsx)("img", {
                    className: o.g,
                    style: {
                        top: l[n],
                        animationDelay: "".concat(s[n], "s")
                    },
                    src: e,
                    alt: "Cloud"
                }, e)
            })
        })
    }