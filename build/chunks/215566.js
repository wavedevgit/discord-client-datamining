/** chunk id: 215566 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968),
    a = n(158954),
    i = n(397927),
    l = n(933297);

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
let c = function(e) {
    let {
        badge: t
    } = e;
    switch (t.badgeType) {
        case l.Xi.BETA:
            return (0, r.jsx)(a.Exy, {
                type: "beta",
                variant: "brand"
            });
        case l.Xi.COUNT:
            return (0, r.jsx)(o, {
                badge: t
            });
        case l.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(s, {
                badge: t
            })
    }
}