/** Chunk was on web.js **/
/** chunk id: 644235, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    FK: () => a,
    PC: () => s
});
var r = n(374994),
    i = n(185928);
n(818348);

function a(e) {
    let {
        angle: t,
        colors: n
    } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(n.map(e => {
        let {
            token: t,
            stop: n
        } = e;
        return "".concat((0, r.nt)(t, {
            saturation: 1
        }), " ").concat(n, "%")
    }).join(", "), ")")
}
let s = e => i.dP[e]