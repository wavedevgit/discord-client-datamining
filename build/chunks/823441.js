/** Chunk was on web.js **/
/** chunk id: 823441, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s,
    K: () => o
});
var r = n(573648),
    i = n(611010),
    a = n(985018);
let o = "twitch:";
class s extends i.Ay {
    getIconURL() {
        return r.A.get("twitch").icon.lightPNG
    }
    constructor(e) {
        super(e), this.id = "".concat(o).concat(e.url), this.name = a.intl.string(a.t.JIPtgq)
    }
}