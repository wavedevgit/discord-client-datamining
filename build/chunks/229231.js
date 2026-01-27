/** Chunk was on web.js **/
/** chunk id: 229231, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ok: () => s,
    Zc: () => o,
    _u: () => l,
    gk: () => c
});
var r = n(540185),
    i = n(587895),
    a = n(985018);
let o = [r.x.APPLICATION, r.x.FAVORITE_GAMES, r.x.PLAYED_GAMES, r.x.CURRENT_GAMES, r.x.WANT_TO_PLAY_GAMES],
    s = {
        [r.x.FAVORITE_GAMES]: () => a.intl.string(a.t.sUQar8),
        [r.x.CURRENT_GAMES]: () => a.intl.string(a.t.SqNnus),
        [r.x.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.bWSQwW),
        [r.x.PLAYED_GAMES]: () => a.intl.string(a.t.scOKET),
        [r.x.APPLICATION]: e => {
            var t, n;
            return null != (t = null == (n = i.A.getApplication(e.applicationId)) ? void 0 : n.name) ? t : ""
        }
    },
    l = [r.x.FAVORITE_GAMES],
    c = [r.x.CURRENT_GAMES, r.x.FAVORITE_GAMES]