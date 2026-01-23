/** Chunk was on web.js **/
/** chunk id: 443795, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    HT: () => l,
    WY: () => a
});
var r = n(573648),
    i = n(611010);
let a = "spotify",
    s = r.A.get(a);
class o extends i.Ay {
    getIconURL(e) {
        return s.icon.lightPNG
    }
    getWhiteIconURL() {
        return s.icon.whitePNG
    }
    constructor() {
        super({}), this.id = a, this.name = s.name
    }
}
let l = new o