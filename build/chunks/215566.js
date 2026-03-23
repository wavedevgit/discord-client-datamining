/** chunk id: 215566 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => c
});
var n = r(627968),
    a = r(158954),
    i = r(397927),
    l = r(933297);

function s(e) {
    let {
        badge: t
    } = e;
    return t.useCustomBadge()
}

function o(e) {
    let {
        badge: t
    } = e, r = t.useCount();
    return r <= 0 ? null : (0, n.jsx)(i.hVq, {
        count: r
    })
}
let c = function(e) {
    let {
        badge: t
    } = e;
    switch (t.badgeType) {
        case l.Xi.BETA:
            return (0, n.jsx)(a.Exy, {
                type: "beta",
                variant: "brand"
            });
        case l.Xi.COUNT:
            return (0, n.jsx)(o, {
                badge: t
            });
        case l.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, n.jsx)(s, {
                badge: t
            })
    }
}