/** chunk id: 17591, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => s
});
var r = n(287809),
    i = n(508675),
    a = n(354430),
    o = n(451731);

function s(e) {
    if (null == e || null == r.default.getCurrentUser()) return;
    let t = i.Ay.getTopEmojisMetadata(e);
    if (null != t) {
        let {
            topEmojisTTL: e
        } = t;
        if (null == e || Date.now() < e) return
    }
    a.A.getIsFetching(e) || (0, o.l2)(e)
}