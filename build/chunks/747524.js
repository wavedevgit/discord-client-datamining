/** chunk id: 747524 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(672385),
    a = n(985018),
    r = n(589808);

function o(e) {
    let {
        handleOpenProfile: t,
        analyticsLocations: n,
        context: o
    } = e;
    return (0, i.jsx)("div", {
        className: r.q,
        children: (0, i.jsx)(s.DUT, {
            onClick: () => {
                t(), (0, l.Wn)({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: n,
                    ...o
                })
            },
            className: r.w,
            children: (0, i.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-sm/normal",
                children: a.intl.string(a.t["+Xp3hq"])
            })
        })
    })
}