/** chunk id: 231577, original params: t,e,r (module,exports,require) **/
"use strict";
r.d(e, {
    eJ: () => i
});
var s = r(978862);

function i() {
    let t = s.O,
        e = t.crypto || t.msCrypto,
        r = () => 16 * Math.random();
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        e && e.getRandomValues && (r = () => {
            let t = new Uint8Array(1);
            return e.getRandomValues(t), t[0]
        })
    } catch (t) {}
    return "10000000100040008000100000000000".replace(/[018]/g, t => (t ^ (15 & r()) >> t / 4).toString(16))
}