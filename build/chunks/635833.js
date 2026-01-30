/** chunk id: 635833, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => g,
    m: () => m
});
var r = n(838259),
    i = n(162563),
    a = n(119090),
    o = n(916784),
    s = n(47361),
    l = n(717205),
    c = new WeakMap,
    u = /auto|scroll/,
    d = /^tb|vertical/,
    f = /msie|trident/i.test(l.S.navigator && l.S.navigator.userAgent),
    p = function(e) {
        return parseFloat(e || "0")
    },
    _ = function(e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new i.a((n ? t : e) || 0, (n ? e : t) || 0)
    },
    h = (0, s.C)({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new a.p(0, 0, 0, 0)
    }),
    m = function(e, t) {
        if (void 0 === t && (t = !1), c.has(e) && !t) return c.get(e);
        if ((0, o.dK)(e)) return c.set(e, h), h;
        var n = getComputedStyle(e),
            r = (0, o.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            i = !f && "border-box" === n.boxSizing,
            l = d.test(n.writingMode || ""),
            m = !r && u.test(n.overflowY || ""),
            g = !r && u.test(n.overflowX || ""),
            E = r ? 0 : p(n.paddingTop),
            y = r ? 0 : p(n.paddingRight),
            b = r ? 0 : p(n.paddingBottom),
            O = r ? 0 : p(n.paddingLeft),
            v = r ? 0 : p(n.borderTopWidth),
            A = r ? 0 : p(n.borderRightWidth),
            I = r ? 0 : p(n.borderBottomWidth),
            S = r ? 0 : p(n.borderLeftWidth),
            T = O + y,
            C = E + b,
            N = S + A,
            w = v + I,
            R = g ? e.offsetHeight - w - e.clientHeight : 0,
            P = m ? e.offsetWidth - N - e.clientWidth : 0,
            D = i ? T + N : 0,
            L = i ? C + w : 0,
            x = r ? r.width : p(n.width) - D - P,
            M = r ? r.height : p(n.height) - L - R,
            j = x + T + P + N,
            k = M + C + R + w,
            U = (0, s.C)({
                devicePixelContentBoxSize: _(Math.round(x * devicePixelRatio), Math.round(M * devicePixelRatio), l),
                borderBoxSize: _(j, k, l),
                contentBoxSize: _(x, M, l),
                contentRect: new a.p(O, E, x, M)
            });
        return c.set(e, U), U
    },
    g = function(e, t, n) {
        var i = m(e, n),
            a = i.borderBoxSize,
            o = i.contentBoxSize,
            s = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case r.U.BORDER_BOX:
                return a;
            default:
                return o
        }
    }