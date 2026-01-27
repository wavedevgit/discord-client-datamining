/** Chunk was on web.js **/
/** chunk id: 57019, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Fn: () => p,
    Gt: () => _,
    Ru: () => b
}), n(896048);
var r = n(64700),
    i = n(397927),
    a = n(626584),
    o = n(87001),
    s = n(287809),
    l = n(531685),
    c = n(365971),
    u = n(392164);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let f = new a.A("NotificationLayoutManager");
class p {
    updateState(e, t) {
        this.items = e;
        let n = this.locked !== t;
        this.locked = t, this.computeLayout(n)
    }
    initialize(e) {
        if (null == this.resizeObserver) {
            for (let [, {
                    element: t
                }] of(this.resizeObserver = new e.ResizeObserver(this.handleResize), this.listeners)) this.resizeObserver.observe(t);
            this.queueCompute()
        }
    }
    cleanUp() {
        var e;
        null == (e = this.resizeObserver) || e.disconnect(), this.resizeObserver = void 0, this.listeners.clear()
    }
    queueCompute() {
        this.queuedCompute || (this.queuedCompute = !0, Promise.resolve().then(() => this.computeLayout()))
    }
    computeLayout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.queuedCompute = !1;
        let t = 0,
            n = 0;
        for (let r of this.items) {
            let i = this.listeners.get(r.notification.id);
            if (null == i) continue;
            let {
                offsetHeight: a
            } = i.element;
            (i.top !== t || i.height !== a || i.index !== n) && (e = !0), i.top = t, i.height = a, i.index = n, 0 === t && (this.matchHeight !== a && (e = !0), this.matchHeight = a), t += a + 8, n++
        }
        e && this.broadcastLayoutUpdates()
    }
    broadcastLayoutUpdates() {
        for (let e of this.items) {
            let t = this.listeners.get(e.notification.id);
            null != t && t.callback({
                locked: this.locked,
                matchHeight: this.matchHeight,
                height: t.height,
                top: t.top,
                index: t.index
            })
        }
    }
    subscribe(e, t, n) {
        var r;
        this.listeners.set(e, {
            notificationId: e,
            callback: n,
            element: t,
            height: 0,
            top: 0,
            index: 0
        }), null == (r = this.resizeObserver) || r.observe(t), this.queueCompute()
    }
    unsubscribe(e) {
        var t;
        let n = this.listeners.get(e);
        null != n && (null == (t = this.resizeObserver) || t.unobserve(n.element), this.listeners.delete(e), this.queueCompute())
    }
    getLayoutSpecs(e) {
        return this.listeners.get(e)
    }
    constructor(e) {
        d(this, "resizeObserver", void 0), d(this, "listeners", new Map), d(this, "queuedCompute", !1), d(this, "items", []), d(this, "matchHeight", 0), d(this, "locked", !0), d(this, "handleResize", e => {
            this.computeLayout()
        }), this.locked = e
    }
}
let _ = r.createContext(new p(!0));

function h(e, t) {
    return t && e > 4 ? 0 : t ? Math.min(1 - e / 4, 1) : 1
}

function m(e, t) {
    return t ? Math.min(1 - e / 4, 1) : 1
}

function g(e, t, n) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n
}

function E(e, t) {
    return t && e > 0 ? 0 : 1
}
let y = {
    mass: .8,
    friction: 25,
    tension: 320
};

function b(e, t, n) {
    let [a, d] = (0, i.zhh)(() => ({
        from: {
            opacity: 0,
            scale: 1,
            transform: 0,
            height: 0,
            contentOpacity: 1
        }
    }), void 0, []), p = r.useRef(d), b = r.useContext(_), O = r.useMemo(() => {
        let t = !1;
        return n => {
            null == n ? b.unsubscribe(e) : b.subscribe(e, n, n => {
                var r;
                let {
                    locked: i,
                    matchHeight: a,
                    height: d,
                    top: _,
                    index: b
                } = n;
                if (null == (r = s.default.getCurrentUser()) ? void 0 : r.isStaff()) {
                    let t = o.A.getWindow(u.f),
                        n = null != t ? l.A.windowSize((0, c.Q2)(t)) : void 0;
                    f.info("Notification layout update", {
                        id: e,
                        locked: i,
                        matchHeight: a,
                        height: d,
                        top: _,
                        index: b
                    }, n)
                }
                let {
                    current: O
                } = p, v = {
                    opacity: h(b, i),
                    scale: m(b, i),
                    transform: g(b, i, _),
                    contentOpacity: E(b, i),
                    height: i ? a : d
                };
                O({
                    from: t ? void 0 : {
                        opacity: 0,
                        scale: 1.1,
                        transform: -((i ? a : d) * 1),
                        contentOpacity: 1,
                        height: i ? a : d
                    },
                    to: v,
                    config: y
                }), t = !0
            })
        }
    }, [e, b]);
    return r.useLayoutEffect(() => {
        if (t === i.wLy.YEETED) {
            let t = b.getLayoutSpecs(e);
            if (null == t) return void n();
            p.current({
                to: {
                    scale: .8,
                    opacity: 0,
                    transform: g(t.index, b.locked, t.top) + (b.locked ? 0 : t.height / 2)
                },
                config: y
            }), setTimeout(n, 300)
        }
    }, [t, n, e, b]), {
        ref: O,
        springs: a
    }
}