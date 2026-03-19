/** chunk id: 710801 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(387755),
    a = n(709562),
    r = n(985018);

function o(e) {
    let {
        channel: t,
        ...n
    } = e;
    return (0, i.jsx)(a.l, {
        ...n,
        iconComponent: s.PGe,
        label: r.intl.string(r.t.WAI6xu),
        onClick: () => l.A.stopRinging(t.id)
    })
}