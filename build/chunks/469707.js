/** chunk id: 469707, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(311907),
    s = n(401843),
    l = n(616356),
    a = n(961350);

function r(e, t) {
    let n = (0, i.bG)([a.default], () => a.default.getId()),
        r = (0, i.bG)([l.A], () => {
            let t = l.A.getCurrentUserActiveStream();
            return null != t && t.channelId === e
        }, [e]);
    return [(null == t || t === n) && r, (0, i.bG)([l.A], () => l.A.isSelfStreamHidden(e), [e]), t => {
        (0, s.Ho)(e, t)
    }]
}