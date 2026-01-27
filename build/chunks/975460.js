/** Chunk was on web.js **/
/** chunk id: 975460, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    g: () => l,
    t: () => s
}), n(896048);
var r = n(64700),
    i = n(587895),
    a = n(223273),
    o = n(705751);

function s(e) {
    var t;
    if (null == e) return null;
    if (e.type !== o.S7.GAME) return e;
    for (let n of null != (t = e.linkedGames) ? t : []) {
        let e = i.A.getApplication(n.id);
        if (null != e && n.type === a.Mh.OFFICIAL) return e
    }
    return null
}

function l(e) {
    return r.useMemo(() => s(e), [e])
}