/** chunk id: 590209, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    yq: () => c
});
var r = n(311907),
    i = n(626584),
    a = n(242286),
    o = n(256415),
    s = n(41984),
    l = n(833551);

function c() {
    return (0, r.bG)([l.default, a.default, o.default], () => {
        if (__OVERLAY__) return o.default.isInstanceLocked();
        let e = l.default.getOverlayRenderingTrackedGames();
        return 0 !== e.length && e.some(e => e.overlayMethod !== s.Ue.Disabled && a.default.isInputLocked(e.pid))
    })
}
new i.A("OverlayUtils")