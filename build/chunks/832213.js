/** Chunk was on web.js **/
/** chunk id: 832213, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
n.d(t, {
    D: () => i
});
class i {
    getCPUCoreCount() {
        return this.cpuCoreCount
    }
    constructor() {
        r(this, "cpuCoreCount", void 0)
    }
}