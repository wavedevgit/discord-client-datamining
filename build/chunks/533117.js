/** chunk id: 533117, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073), n(896048);
var r, l = n(311907),
    i = n(73153),
    a = n(7584),
    o = n(287809),
    s = n(690521),
    c = n(134753),
    u = n(666717);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            d(e, t, n[t])
        })
    }
    return e
}
n(824217);
let p = {},
    g = {},
    m = {},
    _ = !0,
    h = null;

function y(e) {
    if (null == g[e]) {
        let t = o.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, 80),
            r = new Image;
        r.src = n, g[e] = r
    }
}
class A extends(r = l.Ay.Store) {
    initialize() {
        this.waitFor(o.default)
    }
    get visibleOverlayCanvas() {
        return _
    }
    getDrawables(e) {
        return null != p[e] ? p[e] : []
    }
    getAvatarImage(e) {
        return g[e]
    }
    getEmojiImage(e) {
        return m[e]
    }
    getDrawMode() {
        return h
    }
}
d(A, "displayName", "SharedCanvasStore");
let b = new A(i.h, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
        let {
            lineId: t,
            newPoints: n,
            userId: r,
            streamerId: l
        } = e, i = p[l];
        if (null == i) p[l] = [{
            type: c.Z.LINE,
            id: t,
            userId: r,
            points: n
        }];
        else {
            let e = i.find(e => e.id === t);
            null == e ? i.push({
                type: c.Z.LINE,
                id: t,
                userId: r,
                points: n
            }) : (0, u.PA)(e) && e.points.push(...n)
        }
        y(r)
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
        var t, n, r, l, i;
        let {
            emojiHose: o,
            streamerId: u,
            userId: d
        } = e, g = (l = f({}, o), i = i = {
            type: c.Z.EMOJI_HOSE
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l);
        if (null == p[u]) p[u] = [g];
        else {
            let e = p[u].findIndex(e => e.id === o.id);
            e >= 0 ? p[u][e] = f({}, p[u][e], g) : p[u].push(g)
        }
        let _ = null != (t = null != (n = o.emojiId) ? n : o.emojiName) ? t : "";
        if (null == m[_]) {
            let e = null != o.emojiName ? a.Ay.convertNameToSurrogate(o.emojiName) : null;
            m[_] = new Image, m[_].src = (0, s.Ez)({
                id: o.emojiId,
                name: null != (r = null != e ? e : o.emojiName) ? r : "",
                animated: !1
            }, 48)
        }
        y(d)
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
        let {
            drawables: t,
            streamerId: n
        } = e;
        if (null != p[n]) {
            let e = new Set;
            t.forEach(t => e.add(t.id)), p[n] = p[n].filter(t => !e.has(t.id))
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function(e) {
        let {
            drawMode: t
        } = e;
        h = t
    },
    TOGGLE_OVERLAY_CANVAS: function(e) {
        let {} = e;
        _ = !_
    }
})