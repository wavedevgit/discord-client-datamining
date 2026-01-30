/** chunk id: 711950, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(73153),
    i = n(924283),
    a = n(976860),
    o = n(652215);

function s(e) {
    r.h.dispatch({
        type: "FRIENDS_SET_SECTION",
        section: e
    })
}
let l = {
    transitionToSection(e) {
        let {
            explicit: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (0, a.JK)().location.pathname !== o.BVt.FRIENDS && (0, a.pX)(o.BVt.FRIENDS), s(e), t && (0, i.A)({
            tab_opened: e
        })
    },
    setSection: s,
    setInitialSection(e) {
        r.h.dispatch({
            type: "FRIENDS_SET_INITIAL_SECTION",
            section: e
        })
    }
}