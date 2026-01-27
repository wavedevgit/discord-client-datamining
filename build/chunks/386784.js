/** Chunk was on web.js **/
/** chunk id: 386784, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(64700),
    i = n(311907),
    a = n(545868),
    o = n(642133);
let s = {};

function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = (0, i.bG)([o.A], () => o.A.getRoleMemberCount(e));
    return r.useEffect(() => {
        if (null == e) return;
        let n = s[e];
        null != n && t > 0 && Date.now() - n < t || (s[e] = Date.now(), a.L(e))
    }, [e, t]), n
}