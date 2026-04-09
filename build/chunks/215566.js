/** chunk id: 215566 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(158954),
    i = n(397927),
    a = n(933297);

function s(e) {
    let {
        badge: t
    } = e;
    return t.useCustomBadge()
}

function o(e) {
    let {
        badge: t
    } = e, n = t.useCount();
    return n <= 0 ? null : (0, r.jsx)(i.hVq, {
        count: n
    })
}
let u = function(e) {
    let {
        badge: t
    } = e;
    switch (t.badgeType) {
        case a.Xi.BETA:
            return (0, r.jsx)(l.Exy, {
                type: "beta",
                variant: "brand"
            });
        case a.Xi.COUNT:
            return (0, r.jsx)(o, {
                badge: t
            });
        case a.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(s, {
                badge: t
            })
    }
}