/** chunk id: 443795, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    HT: () => l,
    WY: () => a
});
var r = n(573648),
    i = n(611010);
let a = "spotify",
    o = r.A.get(a);
class s extends i.Ay {
    getIconURL(e) {
        return o.icon.lightPNG
    }
    getWhiteIconURL() {
        return o.icon.whitePNG
    }
    constructor() {
        super({}), this.id = a, this.name = o.name
    }
}
let l = new s