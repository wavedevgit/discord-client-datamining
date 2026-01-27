/** Chunk was on web.js **/
/** chunk id: 189344, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(439372),
    i = n(832286),
    a = n(128391),
    o = n(652215);

function s(e) {
    var t;
    if ((null == (t = e.message_reference) ? void 0 : t.type) !== o.SH7.FORWARD) return;
    let n = e.message_reference.guild_id;
    null != n && (0, i.y)(n)
}
class l extends r.A {
    constructor() {
        super(), (0, a.A)(this, s)
    }
}
let c = new l