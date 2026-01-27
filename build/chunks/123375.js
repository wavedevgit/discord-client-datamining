/** Chunk was on web.js **/
/** chunk id: 123375, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => s,
    r: () => o
});
var r = n(825913),
    i = n(357710),
    a = n(64700);
let o = (0, a.createContext)({
        isSelected: !1
    }),
    s = (0, a.forwardRef)(function(e, t) {
        [e, t] = (0, r.JT)(e, t, o);
        let {
            isSelected: n,
            ...s
        } = e;
        return a.createElement(i.e, {
            ...s,
            ref: t,
            className: e.className || "react-aria-SelectionIndicator",
            name: "SelectionIndicator",
            isVisible: n
        })
    })