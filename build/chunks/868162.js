/** chunk id: 868162, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N,
    x: () => v
}), n(747238);
var r, i = n(735438),
    l = n.n(i),
    a = n(311907),
    s = n(73153),
    o = n(827343),
    c = n(617617),
    u = n(430452),
    d = n(723702),
    p = n(792205),
    h = n(731854);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let g = {
        ignoredDevices: {}
    },
    m = g,
    A = !1,
    _ = {},
    b = {},
    E = {},
    O = {
        id: null,
        justChanged: !1
    },
    y = {
        id: null,
        justChanged: !1
    },
    I = /\(([^)]+)\)/;

function v(e) {
    if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
        let t = e.name.match(I);
        if (null != t) return t[1]
    }
    return e.name
}

function S(e, t, n) {
    return null == e || e.displayName !== t ? {
        displayName: t,
        type: n
    } : e.type === p.E.INPUT && n === p.E.OUTPUT || e.type === p.E.OUTPUT && n === p.E.INPUT ? {
        displayName: t,
        type: p.E.INPUT_AND_OUTPUT
    } : e
}
class C extends(r = a.Ay.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.A, c.A), m = null != e ? e : g
    }
    getUserAgnosticState() {
        return m
    }
    get initialized() {
        return A
    }
    get lastDeviceConnected() {
        return E
    }
    get inputDevices() {
        return _
    }
    get lastInputSystemDevice() {
        return O
    }
    get outputDevices() {
        return b
    }
    get lastOutputSystemDevice() {
        return y
    }
}
f(C, "displayName", "ConnectedDeviceStore"), f(C, "persistKey", "ConnectedDeviceStore"), f(C, "migrations", [e => {
    if (null == e.ignoredDevices) {
        var t, n;
        return t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    f(e, t, n[t])
                })
            }
            return e
        }({}, e), n = n = {
            ignoredDevices: {}
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t
    }
    return e
}]);
let N = new C(s.h, {
    MEDIA_ENGINE_DEVICES: function(e) {
        let {
            inputDevices: t,
            outputDevices: n
        } = e, r = {};
        O.justChanged = !1, t.forEach(e => {
            if (r[v(e)] = e.id, e.id === h.dx) {
                var t;
                let n = null != (t = e.originalId) ? t : e.originalName;
                n !== O.id && (O.justChanged = !0), O.id = n
            }
        });
        let i = {};
        if (y.justChanged = !1, n.forEach(e => {
                if (i[v(e)] = e.id, e.id === h.dx) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    n !== y.id && (y.justChanged = !0), y.id = n
                }
            }), !A) {
            _ = r, b = i, A = !0;
            return
        }
        let a = Object.keys(_),
            s = Object.keys(r),
            o = Object.keys(b),
            c = Object.keys(i),
            u = l().difference(a, s),
            d = l().difference(o, c);
        return u.length > 0 || d.length > 0 ? E = {} : (l().difference(s, a).forEach(e => {
            E[e] = S(E[e], e, p.E.INPUT)
        }), l().difference(c, o).forEach(e => {
            E[e] = S(E[e], e, p.E.OUTPUT)
        })), !(l().isEqual(a, s) && l().isEqual(o, c)) && (_ = r, b = i, !0)
    },
    CONNECTED_DEVICE_SWITCH: function(e) {
        let {
            displayName: t,
            connectedDevicePreference: n,
            location: r
        } = e;
        if (n === p.f.INPUT || n === p.f.INPUT_AND_OUTPUT) {
            let e = _[t];
            null != e && s.h.wait(() => o.A.setInputDevice(e, {
                location: r
            }))
        }
        if (n === p.f.OUTPUT || n === p.f.INPUT_AND_OUTPUT) {
            let e = b[t];
            s.h.wait(() => o.A.setOutputDevice(e, {
                location: r
            }))
        }
        delete E[t]
    },
    CONNECTED_DEVICE_DONT_SWITCH: function(e) {
        let {
            displayName: t
        } = e;
        delete E[t]
    },
    CONNECTED_DEVICE_IGNORE: function(e) {
        let {
            displayName: t
        } = e;
        m.ignoredDevices[t] = !0, delete E[t]
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function() {
        E = {}, m.neverShowModal = !0
    }
})