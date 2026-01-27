/** Chunk was on web.js **/
/** chunk id: 953683, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(559374),
    i = {
        passive: !0
    };
let a = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: function(e) {
        var t = e.state,
            n = e.instance,
            a = e.options,
            o = a.scroll,
            s = void 0 === o || o,
            l = a.resize,
            c = void 0 === l || l,
            u = (0, r.A)(t.elements.popper),
            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return s && d.forEach(function(e) {
                e.addEventListener("scroll", n.update, i)
            }), c && u.addEventListener("resize", n.update, i),
            function() {
                s && d.forEach(function(e) {
                    e.removeEventListener("scroll", n.update, i)
                }), c && u.removeEventListener("resize", n.update, i)
            }
    },
    data: {}
}