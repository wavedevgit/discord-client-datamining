/** chunk id: 409826, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => l,
    z: () => s
});
var r = n(947320),
    i = n(205693),
    a = n(824744),
    o = n(355097);

function s(e, t) {
    let n = t === i.x.STREAM ? r.i.STREAM : r.i.USER;
    return 1 > Math.abs((0, a.M)(n) - (0, a.M)(e)) ? n : e
}

function l(e) {
    switch (e) {
        case i.x.DEFAULT:
            return o.W.USER;
        case i.x.STREAM:
            return o.W.STREAM;
        default:
            return
    }
}