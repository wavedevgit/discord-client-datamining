/** Chunk was on web.js **/
/** chunk id: 943019, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => h,
    m: () => _
});
var r = n(254033),
    i = n(996976),
    a = n(63514),
    s = n(353563),
    o = new WeakMap,
    l = /auto|scroll/,
    c = /^tb|vertical/,
    u = /msie|trident/i.test(s.S.navigator && s.S.navigator.userAgent),
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
        if (void 0 === t && (t = !1), o.has(e) && !t) return o.get(e);
        if ((0, a.dK)(e)) return o.set(e, p), p;
        var n = getComputedStyle(e),
            r = (0, a.XJ)(e) && e.ownerSVGElement && e.getBBox(),
            s = !u && "border-box" === n.boxSizing,
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
            P = s ? S + C : 0,
            D = s ? T + N : 0,
            x = r ? r.width : d(n.width) - P - R,
            L = r ? r.height : d(n.height) - D - w,
            j = x + S + R + C,
            M = L + T + w + N,
            k = Object.freeze({
                devicePixelContentBoxSize: f(Math.round(x * devicePixelRatio), Math.round(L * devicePixelRatio), _),
                borderBoxSize: f(j, M, _),
                contentBoxSize: f(x, L, _),
                contentRect: new i.p(b, g, x, L)
            });
        return o.set(e, k), k
    },
    h = function(e, t, n) {
        var i = _(e, n),
            a = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.U.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.U.BORDER_BOX:
                return a;
            default:
                return s
        }
    }