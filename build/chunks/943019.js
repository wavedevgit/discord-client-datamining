/** chunk id: 943019, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => h,
    m: () => _
});
var r = n(254033),
    i = n(996976),
    a = n(63514),
    o = n(353563),
    s = new WeakMap,
    l = /auto|scroll/,
    c = /^tb|vertical/,
    u = /msie|trident/i.test(o.S.navigator && o.S.navigator.userAgent),
    d = function(e) {
        return parseFloat(e || "0")
    },
    f = function(e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), Object.freeze({
            inlineSize: (n ? t : e) || 0,
            blockSize: (n ? e : t) || 0
        })
    },
    p = Object.freeze({
        devicePixelContentBoxSize: f(),
        borderBoxSize: f(),
        contentBoxSize: f(),
        contentRect: new i.p(0, 0, 0, 0)
    }),
    _ = function(e, t) {
        if (void 0 === t && (t = !1), s.has(e) && !t) return s.get(e);
        if ((0, a.dK)(e)) return s.set(e, p), p;
        var n = getComputedStyle(e),
            r = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            o = !u && "border-box" === n.boxSizing,
            _ = c.test(n.writingMode || ""),
            h = !r && l.test(n.overflowY || ""),
            m = !r && l.test(n.overflowX || ""),
            g = r ? 0 : d(n.paddingTop),
            E = r ? 0 : d(n.paddingRight),
            y = r ? 0 : d(n.paddingBottom),
            b = r ? 0 : d(n.paddingLeft),
            O = r ? 0 : d(n.borderTopWidth),
            v = r ? 0 : d(n.borderRightWidth),
            A = r ? 0 : d(n.borderBottomWidth),
            I = r ? 0 : d(n.borderLeftWidth),
            S = b + E,
            T = g + y,
            C = I + v,
            N = O + A,
            w = m ? e.offsetHeight - N - e.clientHeight : 0,
            R = h ? e.offsetWidth - C - e.clientWidth : 0,
            P = o ? S + C : 0,
            D = o ? T + N : 0,
            L = r ? r.width : d(n.width) - P - R,
            x = r ? r.height : d(n.height) - D - w,
            M = L + S + R + C,
            j = x + T + w + N,
            k = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(L * devicePixelRatio), Math.round(x * devicePixelRatio), _),
                borderBoxSize: f(M, j, _),
                contentBoxSize: f(L, x, _),
                contentRect: new i.p(b, g, L, x)
            });
        return s.set(e, k), k
    },
    h = function(e, t, n) {
        var i = _(e, n),
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