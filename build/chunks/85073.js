/** chunk id: 85073, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => s
});
var r = n(424918),
    i = n(651162),
    a = n(624711);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class s {
    static fromServer(e) {
        return new s(e)
    }
    constructor(e) {
        o(this, "subblocks", void 0), this.type = i.g.FEATURED, this.subblocks = e.subblocks.map(e => e.type === r.u.CATEGORY ? a.j.fromServer(e) : e)
    }
}