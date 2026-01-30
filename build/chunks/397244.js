/** chunk id: 397244, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(652215),
    i = n(818348);

function a(e) {
    var t;
    let {
        activities: n,
        status: a,
        applicationStream: o,
        voiceChannel: s
    } = e;
    if (a === i.cl.OFFLINE || a === i.cl.INVISIBLE) return !1;
    let l = null == n ? void 0 : n.filter(e => e.type !== r.$pd.HANG_STATUS || null != s);
    return null != o || null != s || (null != (t = null == l ? void 0 : l.length) ? t : 0) > 0
}