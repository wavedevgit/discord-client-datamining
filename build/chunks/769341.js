/** Chunk was on web.js **/
/** chunk id: 769341, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(963169),
    i = n(532624),
    a = n(723702),
    o = n(837921),
    s = n(652215),
    l = n(650583);

function c(e, t) {
    return !(e === s.TGd.BROWSER && i.Ay.hasKeybind(l.zY.MOUSE_BUTTON, t))
}
class u {
    initialize() {
        (0, a.isDesktop)() && (o.Ay.on("NAVIGATE_BACK", (e, t) => {
            c(t, l.RX.Back) && (0, r.OE)("native")
        }), o.Ay.on("NAVIGATE_FORWARD", (e, t) => {
            c(t, l.RX.Forward) && (0, r.Qb)("native")
        }))
    }
}
let d = new u