/** chunk id: 519948, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}
n.d(t, {
    A: () => r
})