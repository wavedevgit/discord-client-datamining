/** Chunk was on web.js **/
/** chunk id: 33659, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    H: () => o
});
var r = n(311907),
    i = n(861382),
    a = n(167074);

function o(e) {
    var t, n;
    let {
        channel: o,
        chatInputType: s
    } = e, l = null != (t = null == (n = s.commands) ? void 0 : n.enabled) && t, c = (0, a.f)(o), {
        activeCommand: u
    } = (0, r.cf)([i.A], () => ({
        activeCommand: l ? i.A.getActiveCommand(o.id) : null
    }));
    return l && c && null == u
}