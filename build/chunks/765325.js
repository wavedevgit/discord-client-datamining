/** Chunk was on web.js **/
/** chunk id: 765325, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => o
});
var r = n(99478),
    i = n(142922);
let a = -543;
class o extends i.FG {
    fromJulianDay(e) {
        let t = super.fromJulianDay(e),
            n = (0, i.LA)(t.era, t.year);
        return new(0, r.ng)(this, n - a, t.month, t.day)
    }
    toJulianDay(e) {
        return super.toJulianDay(s(e))
    }
    getEras() {
        return ["BE"]
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(s(e))
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), this.identifier = "buddhist"
    }
}

function s(e) {
    let [t, n] = (0, i.f5)(e.year + a);
    return new(0, r.ng)(t, n, e.month, e.day)
}