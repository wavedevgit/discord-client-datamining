/** Chunk was on web.js **/
/** chunk id: 270597, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => s
}), n(896048), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162), n(321073);
var r = n(64700),
    i = n(647307),
    a = n(844222),
    o = n(460890);

function s(e) {
    let {
        rive: t,
        artboard: n,
        artboardProperties: s,
        dataBinding: u,
        dynamicDataBinding: d,
        onDataBindingChange: f
    } = e, p = null != d ? d : u, _ = (0, i.useViewModel)(t);
    (0, i.useViewModelInstance)(_);
    let {
        theme: h,
        saturation: m
    } = (0, o.G9)(), {
        highContrastModeEnabled: g
    } = r.useContext(a.C), E = r.useRef(null), y = l(), b = r.useCallback((e, t) => {
        let n = null == e ? void 0 : e[t];
        return null == n ? null : "object" == typeof n && "value" in n ? n.value : n
    }, []);
    c({
        rive: t,
        artboard: n,
        artboardProperties: s,
        dynamicDataBinding: d,
        dataBinding: u,
        onDataBindingChange: f
    }), r.useEffect(() => {
        let e = new AbortController;
        return (async function() {
            if (null == t || null == t.viewModelInstance || null == p) return;
            let r = s[null != n ? n : ""];
            for (let n of Object.entries(p)) {
                var i, a, o, l, c, u, d, f, _, O, v, A, I;
                if (e.signal.aborted) return;
                let s = n[0],
                    p = n[1],
                    S = null != p && "object" == typeof p && "type" in p,
                    T = S ? p.type : r[s],
                    C = S ? p.value : p;
                switch (T) {
                    case "color":
                        if ("number" == typeof C) {
                            let e = null == (i = t.viewModelInstance) ? void 0 : i.color(s);
                            null != e && (e.value = C)
                        } else if ("object" == typeof C) {
                            let e = C;
                            if ("resolve" in e) {
                                let [n, r, i, l] = e.resolve({
                                    theme: h,
                                    saturation: m,
                                    highContrastModeEnabled: g
                                }).rgba();
                                null == (o = t.viewModelInstance) || null == (a = o.color(s)) || a.rgba(n, r, i, 255 * l)
                            } else null == (u = t.viewModelInstance) || null == (c = u.color(s)) || c.rgba(e.r, e.g, e.b, null != (l = e.a) ? l : 255)
                        }
                        break;
                    case "number":
                        let N = null == (d = t.viewModelInstance) ? void 0 : d.number(s);
                        null != N && (N.value = C);
                        break;
                    case "boolean":
                        let w = null == (f = t.viewModelInstance) ? void 0 : f.boolean(s);
                        null != w && (w.value = C);
                        break;
                    case "trigger":
                        let R = null != C && ("boolean" == typeof C ? C : 0 !== C),
                            P = b(E.current, s);
                        R && P !== C && (null == (O = t.viewModelInstance) || null == (_ = O.trigger(s)) || _.trigger());
                        break;
                    case "string":
                        let D = null == (v = t.viewModelInstance) ? void 0 : v.string(s);
                        null != D && (D.value = C);
                        break;
                    case "image":
                        if (null != C) {
                            let n = await y(C, e.signal);
                            if (e.signal.aborted) return;
                            let r = null == (A = t.viewModelInstance) ? void 0 : A.image(s);
                            null != r && (r.value = n)
                        }
                        break;
                    case "artboard":
                        let L = null == (I = t.viewModelInstance) ? void 0 : I.artboard(s),
                            x = t.getBindableArtboard(C);
                        null != L && null != x && (L.value = x);
                        break;
                    default:
                        console.warn("Unknown property type: ".concat(T))
                }
            }
        })().catch(e => {
            if ("AbortError" !== e.name) throw e
        }), () => {
            e.abort("New data binding applied - aborting previous image fetches."), E.current = p
        }
    }, [b, p, t, n, s, h, null == t ? void 0 : t.viewModelInstance, m, g, y])
}

function l() {
    let e = r.useRef({});
    return r.useCallback(async (t, n) => {
        if ("string" != typeof t) return Promise.resolve(t);
        {
            if (null != e.current[t]) return Promise.resolve(e.current[t]);
            let r = await fetch(t, {
                signal: n
            }).catch(e => {
                if (null == n ? void 0 : n.aborted) return Promise.resolve(null);
                throw e
            });
            if (null == r || (null == n ? void 0 : n.aborted)) return Promise.resolve(null);
            let a = await r.arrayBuffer(),
                o = await (0, i.decodeImage)(new Uint8Array(a));
            return e.current[t] = o, o
        }
    }, [])
}

function c(e) {
    let {
        rive: t,
        artboard: n,
        artboardProperties: i,
        dynamicDataBinding: a,
        onDataBindingChange: o
    } = e, s = null != a, l = r.useCallback(e => {
        var t;
        return s ? null == a || null == (t = a[e]) ? void 0 : t.type : i[null != n ? n : ""][e]
    }, [s, a, i, n]);
    r.useEffect(() => {
        if (null == t || null == o) return;
        let e = [];
        return Object.entries(o).forEach(n => {
            var r, i;
            let [a, o] = n, s = l(a);
            if (null == s || null == o) return;
            let c = null == (i = t.viewModelInstance) || null == (r = i[s]) ? void 0 : r.call(i, a);
            null != c && (c.on(o), e.push([o, c]))
        }), () => {
            e.forEach(e => {
                let [t, n] = e;
                null != n && n.off(t)
            })
        }
    }, [t, o, l])
}