/** chunk id: 674085 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968),
    a = n(158954),
    i = n(933297);
let l = function(e) {
    let {
        badge: t
    } = e;
    switch (t.badgeType) {
        case i.Xi.NEW:
            return (0, r.jsx)(a.Exy, {
                type: "new",
                variant: "brand"
            });
        case i.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let {
                StronglyDiscouragedCustomComponent: n
            } = t;
            return (0, r.jsx)(n, {})
    }
}