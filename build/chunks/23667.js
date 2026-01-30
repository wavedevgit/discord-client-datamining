/** chunk id: 23667, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(177068),
    i = n(409037);
class a extends i.c {
    create(e) {
        let {
            id: t,
            searchType: n,
            searchQuery: i
        } = e;
        this.cancel(t);
        let a = new r.MS(t, n, i);
        return this.set(t, a), a
    }
}
let o = new a