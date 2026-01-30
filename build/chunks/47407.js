/** chunk id: 47407, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o,
    W: () => a
});
var r = n(573648),
    i = n(611010);
let a = "xbox:";
class o extends i.Ay {
    getIconURL() {
        return r.A.get("xbox").icon.lightPNG
    }
    constructor(e) {
        super(e), this.id = "".concat(a).concat(e.name), this.name = e.name
    }
}