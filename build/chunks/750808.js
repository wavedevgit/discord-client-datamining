/** Chunk was on web.js **/
/** chunk id: 750808, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(315069);

function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class a extends r.A {
    static fromPath(e) {
        return new a({
            id: e,
            path: e
        })
    }
    constructor(e) {
        super(), i(this, "id", void 0), i(this, "path", void 0), this.id = e.id, this.path = e.path
    }
}
let o = a