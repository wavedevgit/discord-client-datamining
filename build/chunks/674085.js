/** chunk id: 674085 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => l
});
var n = r(627968),
    a = r(158954),
    i = r(933297);
let l = function(e) {
    let {
        badge: t
    } = e;
    switch (t.badgeType) {
        case i.Xi.NEW:
            return (0, n.jsx)(a.Exy, {
                type: "new",
                variant: "brand"
            });
        case i.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let {
                StronglyDiscouragedCustomComponent: r
            } = t;
            return (0, n.jsx)(r, {})
    }
}