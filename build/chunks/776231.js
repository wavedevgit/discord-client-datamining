/** Chunk was on web.js **/
/** chunk id: 776231, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AE: () => w,
    LE: () => I,
    kr: () => T,
    mZ: () => f.A,
    yt: () => S
}), n(896048), n(747238);
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    o = n.n(a),
    s = n(488428),
    l = n(158390),
    c = n(515718),
    u = n(209489),
    d = n(998218),
    f = n(835517),
    p = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}
let m = 5,
    g = /\.webp($|\?|#)/i,
    E = /\.avif($|\?|#)/i,
    y = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    b = new(o())({
        max: 1e3
    });

function O(e, t) {
    null == e.backoff && (e.backoff = new l.A);
    let {
        backoff: n
    } = e;
    return async () => {
        await u.A.isOnline(), n.fails < m ? n.fail(() => {
            v(e)
        }) : A(!0, e, t)
    }
}

function v(e) {
    let t = new Image;
    t.onerror = O(e, t), t.onload = () => {
        let {
            backoff: n
        } = e;
        null != n && n.succeed(), A(!1, e, t)
    }, t.src = e.url
}

function A(e, t, n) {
    let {
        callbacks: r,
        url: i
    } = t;
    if (e) b.del(i);
    else {
        let {
            width: e,
            height: r
        } = n;
        t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }, b.set(i, t)
    }
    null != r && r.forEach(n => n(e, t))
}

function I(e) {
    let t = b.get(e);
    return null != t && t.loaded
}

function S(e, t) {
    let n = b.get(e);
    if (null != n && n.loaded) return null != t && u.A.awaitOnline().then(() => {
        null != n && null != n.callbacks && n.callbacks.forEach(t => {
            null != n ? t(!1, n) : t(!0, {
                url: e,
                loaded: !0
            })
        })
    }), p.tEg;
    {
        let r;
        return null == n && (n = {
            url: e,
            loaded: !1
        }, b.set(e, n), v(n)), null != t && (r = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(r)), () => {
            null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel())
        }
    }
}

function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = y.filter(t => t <= e).pop();
        if (null != t && e / t <= 1.25) return t
    }
    return null != (t = y.find(t => e <= t)) ? t : y[y.length - 1]
}

function C(e) {
    let [t, n] = e.split("?");
    return [t, s.parse(n)]
}

function N(e) {
    let {
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: a,
        targetHeight: o,
        format: l = null,
        quality: u = null,
        animated: f = !1,
        srcIsAnimated: _ = !1
    } = e;
    if (t.startsWith("data:image") || d.A.isDiscordCdnUrl(t)) return t;
    let [h, m] = C(t);
    null != l && (m.format = l), null != u && (m.quality = u), f && _ && (g.test(t) || E.test(t)) && (m.animated = !0), E.test(t) && (m.format = "webp");
    let y = (0, c.Uj)({
        width: a,
        height: o,
        maxWidth: p.uJv,
        maxHeight: p.uJv
    });
    return a = y.width, o = y.height, (a !== n || o !== r) && (m.width = 0 | a, m.height = 0 | o), i().isEmpty(m) || (h += "?" + s.stringify(m)), h
}

function w(e) {
    let {
        src: t,
        width: n,
        height: r,
        maxWidth: i,
        maxHeight: a,
        ratio: o = 1,
        format: s = null,
        quality: l = null,
        animated: c = !1,
        srcIsAnimated: u = !1
    } = e, d = n, p = r;
    o < 1 && (d = Math.round(n * o), p = Math.round(r * o)), null != i && (d = Math.min(d, i)), null != a && (p = Math.min(p, a));
    let _ = (0, f.A)();
    return N({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: d *= _,
        targetHeight: p *= _,
        format: s,
        quality: l,
        animated: c,
        srcIsAnimated: u
    })
}