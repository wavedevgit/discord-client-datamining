/** chunk id: 390486, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => a,
    R: () => o
}), n(896048);
var r = n(506774);
let i = "recentBuildOverrides";

function a() {
    var e;
    return (null != (e = r.w.get(i)) ? e : []).filter(e => null == e.exp || e.exp > Date.now())
}

function o(e, t) {
    if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
    let n = {
            id: e.targetBuildOverride.discord_web.id,
            payload: t,
            exp: Date.parse(e.expiresAt)
        },
        o = [n, ...a().filter(e => n.id !== e.id)].slice(0, 5);
    r.w.set(i, o)
}