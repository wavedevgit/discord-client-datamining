/** chunk id: 205238, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(559374),
    i = n(688899),
    a = n(421336),
    o = n(190792);

function s(e, t) {
    var n = (0, r.A)(e),
        s = (0, i.A)(e),
        l = n.visualViewport,
        c = s.clientWidth,
        u = s.clientHeight,
        d = 0,
        f = 0;
    if (l) {
        c = l.width, u = l.height;
        var p = (0, o.A)();
        (p || !p && "fixed" === t) && (d = l.offsetLeft, f = l.offsetTop)
    }
    return {
        width: c,
        height: u,
        x: d + (0, a.A)(e),
        y: f
    }
}