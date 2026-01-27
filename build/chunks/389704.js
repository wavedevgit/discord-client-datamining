/** Chunk was on web.js **/
/** chunk id: 389704, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(847267),
    i = n(543894),
    a = n(559374),
    o = n(324049);

function s(e, t) {
    void 0 === t && (t = []);
    var n, l = (0, r.A)(e),
        c = l === (null == (n = e.ownerDocument) ? void 0 : n.body),
        u = (0, a.A)(l),
        d = c ? [u].concat(u.visualViewport || [], (0, o.A)(l) ? l : []) : l,
        f = t.concat(d);
    return c ? f : f.concat(s((0, i.A)(d)))
}