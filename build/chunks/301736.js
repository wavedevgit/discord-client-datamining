/** chunk id: 301736, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(688810),
    i = n(80422),
    a = n(682262),
    o = n(725177),
    s = n(857266);

function l() {
    let {
        shouldMergeGameSettings: e
    } = i.X.getCurrentConfig({
        location: "useOpenGameSettings"
    }), {
        analyticsLocations: t
    } = (0, r.Ay)();
    if ((0, a.Pi)()) return () => {
        (0, o.A)(e ? s.J.MY_GAMES : s.J.ACTIVITY_PRIVACY, {
            analyticsLocations: t
        })
    }
}