/** Chunk was on web.js **/
/** chunk id: 531685, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(896048);
var r, i = n(284009),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(365971);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let p = null,
    _ = new Map;

function h(e) {
    let t = _.get(e);
    return null == t ? (console.warn("Window state not initialized", e), {
        isElementFullscreen: !1,
        focused: !1,
        windowSize: {
            width: 0,
            height: 0
        },
        visible: !1
    }) : t
}

function m(e) {
    a()(!_.has(e.windowId), "Window initialized multiple times");
    let {
        width: t,
        height: n,
        isElementFullscreen: r,
        focused: i,
        visible: o
    } = e;
    return _.set(e.windowId, {
        windowSize: {
            width: t,
            height: n
        },
        isElementFullscreen: r,
        focused: i,
        visible: o
    }), i && (p = e.windowId), !0
}

function g(e) {
    let t = h(e.windowId);
    return t.isElementFullscreen !== e.isElementFullscreen && (_.set(e.windowId, f(u({}, t), {
        isElementFullscreen: e.isElementFullscreen
    })), !0)
}

function E(e) {
    let t = h(e.windowId);
    return t.focused !== e.focused && (e.focused && (p = e.windowId), _.set(e.windowId, f(u({}, t), {
        focused: e.focused
    })), !0)
}

function y(e) {
    let t = h(e.windowId);
    return t.visible !== e.visible && (_.set(e.windowId, f(u({}, t), {
        visible: e.visible
    })), !0)
}

function b(e) {
    let t = h(e.windowId);
    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (_.set(e.windowId, f(u({}, t), {
        windowSize: {
            width: e.width,
            height: e.height
        }
    })), !0)
}

function O(e) {
    return _.delete(e.windowId), p === e.windowId && (p = null), !0
}
class v extends(r = o.Ay.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.Xg)();
        return h(e).focused
    }
    isAppFocused() {
        return null != this.getFocusedWindowId()
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.Xg)();
        return h(e).visible
    }
    getFocusedWindowId() {
        let e = null;
        return _.forEach((t, n) => {
            t.focused && (e = n)
        }), e
    }
    getLastFocusedWindowId() {
        return p
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.Xg)();
        return h(e).isElementFullscreen
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.Xg)();
        return h(e).windowSize
    }
}
c(v, "displayName", "WindowStore");
let A = new v(s.h, {
    WINDOW_INIT: m,
    WINDOW_FULLSCREEN_CHANGE: g,
    WINDOW_FOCUS: E,
    WINDOW_RESIZED: b,
    WINDOW_UNLOAD: O,
    WINDOW_VISIBILITY_CHANGE: y
});
Promise.resolve().then(n.bind(n, 954571)).then(e => {
    let {
        addExtraAnalyticsDecorator: t
    } = e;
    t(e => {
        {
            e.client_app_state = A.isAppFocused() ? "focused" : "unfocused";
            let t = A.windowSize();
            e.client_viewport_width = t.width, e.client_viewport_height = t.height
        }
    })
});
let I = A