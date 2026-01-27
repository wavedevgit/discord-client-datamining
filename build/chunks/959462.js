/** Chunk was on web.js **/
/** chunk id: 959462, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => s
});
var r, i = n(3388),
    a = n(64700);
let o = null != (r = a.useInsertionEffect) ? r : i.N;

function s(e) {
    let t = (0, a.useRef)(null);
    return o(() => {
        t.current = e
    }, [e]), (0, a.useCallback)((...e) => {
        let n = t.current;
        return null == n ? void 0 : n(...e)
    }, [])
}