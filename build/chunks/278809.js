/** Chunk was on web.js **/
/** chunk id: 278809, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(405269),
    i = n(927813),
    a = n(178253),
    o = n(985018);
class s extends a.A {
    _getMessageFromRateLimit(e) {
        let t = e.body.retry_after,
            n = (0, r.Tf)(0, t * i.A.Millis.SECOND);
        return (0, r.uN)(n, {
            days: o.t["iXc/Ib"],
            hours: o.t.WW9P57,
            minutes: o.t.I7rYev
        })
    }
    constructor(e, t) {
        super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
    }
}
let l = s