/** Chunk was on web.js **/
/** chunk id: 1659, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => i
});
var r = n(7864);

function i(e, t) {
    var n, i;
    let a = (null == (n = e.tags) ? void 0 : n.guild_connections) !== void 0,
        o = (null == (i = t.tags) ? void 0 : i.guild_connections) !== void 0;
    return a && !o ? 1 : !a && o ? -1 : (0, r.AT)(e, t)
}