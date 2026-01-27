/** Chunk was on web.js **/
/** chunk id: 697951, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r = n(439372),
    i = n(22007),
    a = n(14509),
    o = n(276041),
    s = n(652215);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class c extends r.A {
    async handleChannelCreate(e) {
        let {
            channel: t
        } = e;
        (0, a.TT)(t) && (await (0, a.ml)(o.$), (0, i.A)(s.BVt.CHANNEL(null, t.id)))
    }
    constructor(...e) {
        super(...e), l(this, "actions", {
            CHANNEL_CREATE: this.handleChannelCreate
        })
    }
}
let u = new c