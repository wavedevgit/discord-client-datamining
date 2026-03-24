/** chunk id: 231679 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => s
});
var n = i(627968);
let s = i(64700).memo(function(e) {
    let {
        layout: t,
        layoutSize: i,
        className: s,
        renderWidget: a
    } = e;
    return null != t ? (0, n.jsx)("div", {
        className: s,
        style: {
            width: i.width,
            height: i.height
        },
        children: t.widgets.map(e => a(e, i))
    }) : null
})