/** chunk id: 791059, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
}), n(896048);
let r = {
    makeMemoizer: function(e) {
        let t = new Map;
        return n => {
            let r = t.get(n);
            return void 0 === r && (r = e(n), t.set(n, r)), r
        }
    }
}