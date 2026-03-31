/** chunk id: 674085 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(627968),
    i = n(158954),
    l = n(933297);
let a = function(e) {
    let {
        badge: t
    } = e;
    switch (t.badgeType) {
        case l.Xi.NEW:
            return (0, r.jsx)(i.Exy, {
                type: "new",
                variant: "brand"
            });
        case l.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let {
                StronglyDiscouragedCustomComponent: n
            } = t;
            return (0, r.jsx)(n, {})
    }
}