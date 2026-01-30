/** chunk id: 195880, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => o
});
var r = n(661191);
let i = 0,
    a = new r.SnowflakeSequence;

function o() {
    let e = Date.now();
    return i !== e && (a.reset(), i = e), r.default.fromTimestampWithSequence(e, a)
}