/** chunk id: 841873, original params: t,e,r (module,exports,require) **/
let n;

function o(t) {
    n = t
}
r.d(e, {
    $T: () => ex,
    BF: () => er,
    CF: () => ei,
    CI: () => ey,
    DS: () => tZ,
    Dn: () => tz,
    E1: () => tJ,
    EH: () => tB,
    FH: () => X,
    FP: () => tb,
    Fs: () => tv,
    GQ: () => el,
    GZ: () => D,
    Gu: () => eF,
    HB: () => t5,
    HS: () => ty,
    Hz: () => tm,
    Jp: () => Z,
    LC: () => em,
    LM: () => eg,
    M2: () => tP,
    Mo: () => th,
    N8: () => eD,
    ND: () => ta,
    NG: () => t0,
    NJ: () => t2,
    Ng: () => eb,
    Nh: () => t7,
    Oy: () => H,
    PJ: () => t9,
    PR: () => eI,
    Ph: () => A,
    Py: () => eM,
    QH: () => tf,
    QR: () => ek,
    Qg: () => ew,
    Qn: () => eU,
    RG: () => tC,
    RK: () => tg,
    RR: () => tI,
    RX: () => tl,
    Rj: () => eO,
    Ry: () => tE,
    SJ: () => tx,
    Tb: () => Q,
    Tp: () => ed,
    U8: () => eL,
    Ux: () => ti,
    Vo: () => eS,
    Vr: () => tD,
    Xb: () => ts,
    Xc: () => tr,
    Y6: () => e_,
    YN: () => tR,
    ZA: () => z,
    ZJ: () => B,
    _U: () => K,
    _h: () => ee,
    _i: () => $,
    _m: () => tQ,
    aI: () => tF,
    bL: () => eR,
    c$: () => eA,
    c6: () => tk,
    cV: () => q,
    ce: () => eh,
    cy: () => te,
    dS: () => tX,
    dz: () => td,
    eF: () => ev,
    eI: () => tO,
    eT: () => M,
    eW: () => tT,
    fb: () => ec,
    gG: () => tw,
    gM: () => J,
    gR: () => t_,
    hI: () => tN,
    he: () => tU,
    iA: () => t4,
    ii: () => ea,
    j1: () => tq,
    jn: () => tH,
    ju: () => t1,
    k2: () => t$,
    k4: () => tW,
    kK: () => ef,
    l0: () => en,
    lI: () => o,
    n8: () => Y,
    nx: () => P,
    o: () => tu,
    p8: () => t3,
    pD: () => tG,
    qN: () => eN,
    qv: () => ej,
    rf: () => v,
    rk: () => et,
    rl: () => eT,
    s5: () => tp,
    sQ: () => tc,
    sW: () => eC,
    ss: () => eo,
    t7: () => T,
    tZ: () => tY,
    uo: () => tS,
    uw: () => t6,
    v: () => tj,
    v2: () => W,
    vF: () => tA,
    vU: () => eP,
    vV: () => tL,
    vb: () => S,
    w2: () => t8,
    w6: () => eu,
    w9: () => to,
    wH: () => tn,
    wJ: () => tK,
    wd: () => tM,
    x0: () => es,
    x6: () => tt,
    xV: () => ep,
    xy: () => x,
    yc: () => eB,
    yq: () => tV,
    zE: () => eE
}), r(927092), r(212978), r(201528), r(393431), r(752391), r(532706), r(42231), r(232424), r(757074), r(949626), r(767709), r(65162), r(896048), r(228524), r(747238), r(457529), r(65821), r(734808), r(108757), r(321073), r(192585), t = r.hmd(t);
let i = 0,
    a = null;

function u() {
    return (null === a || 0 === a.byteLength) && (a = new Uint8Array(n.memory.buffer)), a
}
let c = new("u" < typeof TextEncoder ? (0, t.require)("util").TextEncoder : TextEncoder)("utf-8"),
    s = "function" == typeof c.encodeInto ? function(t, e) {
        return c.encodeInto(t, e)
    } : function(t, e) {
        let r = c.encode(t);
        return e.set(r), {
            read: t.length,
            written: r.length
        }
    };

function f(t, e, r) {
    if (void 0 === r) {
        let r = c.encode(t),
            n = e(r.length, 1) >>> 0;
        return u().subarray(n, n + r.length).set(r), i = r.length, n
    }
    let n = t.length,
        o = e(n, 1) >>> 0,
        a = u(),
        f = 0;
    for (; f < n; f++) {
        let e = t.charCodeAt(f);
        if (e > 127) break;
        a[o + f] = e
    }
    if (f !== n) {
        0 !== f && (t = t.slice(f)), o = r(o, n, n = f + 3 * t.length, 1) >>> 0;
        let e = s(t, u().subarray(o + f, o + n));
        f += e.written, o = r(o, n, f, 1) >>> 0
    }
    return i = f, o
}
let _ = null;

function l() {
    return (null === _ || !0 === _.buffer.detached || void 0 === _.buffer.detached && _.buffer !== n.memory.buffer) && (_ = new DataView(n.memory.buffer)), _
}
let p = new("u" < typeof TextDecoder ? (0, t.require)("util").TextDecoder : TextDecoder)("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});

function d(t, e) {
    return t >>>= 0, p.decode(u().subarray(t, t + e))
}

function g(t) {
    let e = n.__externref_table_alloc();
    return n.__wbindgen_export_4.set(e, t), e
}

function b(t, e) {
    try {
        return t.apply(this, e)
    } catch (e) {
        let t = g(e);
        n.__wbindgen_exn_store(t)
    }
}

function y(t) {
    return null == t
}
p.decode();
let h = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => {
    n.__wbindgen_export_5.get(t.dtor)(t.a, t.b)
});

function w(t, e, r, o) {
    let i = {
            a: t,
            b: e,
            cnt: 1,
            dtor: r
        },
        a = function() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            i.cnt++;
            let a = i.a;
            i.a = 0;
            try {
                return o(a, i.b, ...e)
            } finally {
                0 == --i.cnt ? (n.__wbindgen_export_5.get(i.dtor)(a, i.b), h.unregister(i)) : i.a = a
            }
        };
    return a.original = i, h.register(a, i, i), a
}

function v(t, e, r, o, i) {
    n.installLogCallback(t, e, r, o, i)
}

function m(t) {
    let e = n.__wbindgen_export_4.get(t);
    return n.__externref_table_dealloc(t), e
}

function x(t) {
    let e, r;
    try {
        let o = n.generateLaunchSignature(t);
        return e = o[0], r = o[1], d(o[0], o[1])
    } finally {
        n.__wbindgen_free(e, r, 1)
    }
}

function A() {
    return n.initLibdiscore()
}

function S() {
    n.crash()
}

function T(t, e) {
    return n.rustMultiply(t, e)
}

function O(t, e) {
    n._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h075cb6f1f85a8e52(t, e)
}

function E(t, e) {
    n._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd39d17064ed9c408(t, e)
}

function R(t, e, r) {
    n.closure725_externref_shim(t, e, r)
}
let I = ["bytes"],
    k = ["omit", "same-origin", "include"],
    j = ["same-origin", "no-cors", "cors", "navigate"],
    F = "u" < typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
    } : new FinalizationRegistry(t => n.__wbg_blockeddomainsstore_free(t >>> 0, 1));
class P {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, F.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_blockeddomainsstore_free(t, 0)
    }
    static isBlockedDomain(t) {
        let e, r = f(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
            o = i,
            a = n.blockeddomainsstore_isBlockedDomain(r, o);
        return 0 !== a[0] && (e = d(a[0], a[1]).slice(), n.__wbindgen_free(a[0], +a[1], 1)), e
    }
    static startFetchingBlockedDomains(t) {
        let e = f(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
            r = i;
        n.blockeddomainsstore_startFetchingBlockedDomains(e, r)
    }
}
let L = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => n.__wbg_experimentcacher_free(t >>> 0, 1));
class M {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, L.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_experimentcacher_free(t, 0)
    }
    static getConfig(t) {
        let e = f(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
            r = i,
            o = n.experimentcacher_getConfig(e, r);
        return 0 === o ? void 0 : q.__wrap(o)
    }
    static flushToCache(t) {
        let e = f(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
            r = i;
        n.experimentcacher_flushToCache(e, r)
    }
}
let C = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => n.__wbg_fluxapi_free(t >>> 0, 1));
class D {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, C.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_fluxapi_free(t, 0)
    }
    connectStore(t) {
        let e = n.fluxapi_connectStore(this.__wbg_ptr, t);
        if (e[2]) throw m(e[1]);
        return m(e[0])
    }
    dispatchAction(t, e) {
        let r = f(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
            o = i;
        return n.fluxapi_dispatchAction(this.__wbg_ptr, r, o, e)
    }
    flushReplicationStates() {
        return n.fluxapi_flushReplicationStates(this.__wbg_ptr)
    }
    getRegisteredActionTypes() {
        return n.fluxapi_getRegisteredActionTypes(this.__wbg_ptr)
    }
    findStoresThatCanHandleActionType(t) {
        let e = f(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
            r = i;
        return n.fluxapi_findStoresThatCanHandleActionType(this.__wbg_ptr, e, r)
    }
    constructor() {
        const t = n.fluxapi_new();
        return this.__wbg_ptr = t >>> 0, C.register(this, this.__wbg_ptr, this), this
    }
}
let N = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => n.__wbg_intounderlyingbytesource_free(t >>> 0, 1));
class B {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, N.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_intounderlyingbytesource_free(t, 0)
    }
    get autoAllocateChunkSize() {
        return n.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0
    }
    pull(t) {
        return n.intounderlyingbytesource_pull(this.__wbg_ptr, t)
    }
    start(t) {
        n.intounderlyingbytesource_start(this.__wbg_ptr, t)
    }
    get type() {
        return I[n.intounderlyingbytesource_type(this.__wbg_ptr)]
    }
    cancel() {
        let t = this.__destroy_into_raw();
        n.intounderlyingbytesource_cancel(t)
    }
}
let U = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => n.__wbg_intounderlyingsink_free(t >>> 0, 1));
class W {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, U.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_intounderlyingsink_free(t, 0)
    }
    abort(t) {
        let e = this.__destroy_into_raw();
        return n.intounderlyingsink_abort(e, t)
    }
    close() {
        let t = this.__destroy_into_raw();
        return n.intounderlyingsink_close(t)
    }
    write(t) {
        return n.intounderlyingsink_write(this.__wbg_ptr, t)
    }
}
let V = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => n.__wbg_intounderlyingsource_free(t >>> 0, 1));
class z {
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, V.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_intounderlyingsource_free(t, 0)
    }
    pull(t) {
        return n.intounderlyingsource_pull(this.__wbg_ptr, t)
    }
    cancel() {
        let t = this.__destroy_into_raw();
        n.intounderlyingsource_cancel(t)
    }
}
let G = "u" < typeof FinalizationRegistry ? {
    register: () => {},
    unregister: () => {}
} : new FinalizationRegistry(t => n.__wbg_wasmcacheableexperimentconfig_free(t >>> 0, 1));
class q {
    static __wrap(t) {
        t >>>= 0;
        let e = Object.create(q.prototype);
        return e.__wbg_ptr = t, G.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, G.unregister(this), t
    }
    free() {
        let t = this.__destroy_into_raw();
        n.__wbg_wasmcacheableexperimentconfig_free(t, 0)
    }
    get treatmentId() {
        return n.__wbg_get_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr)
    }
    set treatmentId(t) {
        n.__wbg_set_wasmcacheableexperimentconfig_treatmentId(this.__wbg_ptr, t)
    }
}

function H(t, e) {
    let r = f(String(e), n.__wbindgen_malloc, n.__wbindgen_realloc),
        o = i;
    l().setInt32(t + 4, o, !0), l().setInt32(t + 0, r, !0)
}

function Y(t, e) {
    t.abort(e)
}

function J(t) {
    t.abort()
}

function Q() {
    return b(function(t, e, r, n, o) {
        t.append(d(e, r), d(n, o))
    }, arguments)
}

function $() {
    return b(function(t) {
        return t.arrayBuffer()
    }, arguments)
}

function K(t) {
    return t.buffer
}

function X(t) {
    return t.buffer
}

function Z(t) {
    let e = t.byobRequest;
    return y(e) ? 0 : g(e)
}

function tt(t) {
    return t.byteLength
}

function te(t) {
    return t.byteOffset
}

function tr() {
    return b(function(t) {
        return t.caches
    }, arguments)
}

function tn() {
    return b(function(t, e) {
        return t.call(e)
    }, arguments)
}

function to() {
    return b(function(t, e, r) {
        return t.call(e, r)
    }, arguments)
}

function ti(t) {
    return clearTimeout(t)
}

function ta(t) {
    return clearTimeout(t)
}

function tu() {
    return b(function(t) {
        t.close()
    }, arguments)
}

function tc() {
    return b(function(t) {
        t.close()
    }, arguments)
}

function ts(t) {
    return t.done
}

function tf() {
    return b(function(t, e) {
        t.enqueue(e)
    }, arguments)
}

function t_(t, e) {
    return t.fetch(e)
}

function tl(t) {
    return fetch(t)
}

function tp() {
    return b(function(t, e) {
        var r;
        globalThis.crypto.getRandomValues((r = t >>> 0, u().subarray(r / 1, r / 1 + e)))
    }, arguments)
}

function td() {
    return b(function(t, e) {
        return Reflect.get(t, e)
    }, arguments)
}

function tg(t, e) {
    return t[e >>> 0]
}

function tb(t, e) {
    return t[e]
}

function ty() {
    return b(function(t, e) {
        return Reflect.has(t, e)
    }, arguments)
}

function th(t) {
    return t.headers
}

function tw(t) {
    let e;
    try {
        e = t instanceof ArrayBuffer
    } catch (t) {
        e = !1
    }
    return e
}

function tv(t) {
    let e;
    try {
        e = t instanceof Cache
    } catch (t) {
        e = !1
    }
    return e
}

function tm(t) {
    let e;
    try {
        e = t instanceof Response
    } catch (t) {
        e = !1
    }
    return e
}

function tx(t) {
    let e;
    try {
        e = t instanceof Uint8Array
    } catch (t) {
        e = !1
    }
    return e
}

function tA(t) {
    let e;
    try {
        e = t instanceof Window
    } catch (t) {
        e = !1
    }
    return e
}

function tS(t) {
    return Array.isArray(t)
}

function tT() {
    return Symbol.iterator
}

function tO(t) {
    return t.length
}

function tE(t) {
    return t.length
}

function tR(t, e) {
    return t.match(e)
}

function tI() {
    return b(function() {
        return new Headers
    }, arguments)
}

function tk(t, e) {
    try {
        var r = {
            a: t,
            b: e
        };
        return new Promise((t, e) => {
            let o = r.a;
            r.a = 0;
            try {
                var i;
                return i = r.b, void n.closure761_externref_shim(o, i, t, e)
            } finally {
                r.a = o
            }
        })
    } finally {
        r.a = r.b = 0
    }
}

function tj() {
    return {}
}

function tF() {
    return new Map
}

function tP() {
    return []
}

function tL(t) {
    return new Uint8Array(t)
}

function tM(t, e) {
    return Error(d(t, e))
}

function tC() {
    return b(function() {
        return new AbortController
    }, arguments)
}

function tD(t, e) {
    return Function(d(t, e))
}

function tN(t, e, r) {
    return new Uint8Array(t, e >>> 0, r >>> 0)
}

function tB() {
    return b(function(t, e) {
        return new Response(t, e)
    }, arguments)
}

function tU() {
    return b(function(t, e, r) {
        return new Request(d(t, e), r)
    }, arguments)
}

function tW() {
    return b(function(t) {
        return new Blob(t)
    }, arguments)
}

function tV(t) {
    return t.next
}

function tz() {
    return b(function(t) {
        return t.next()
    }, arguments)
}

function tG(t) {
    return t.now()
}

function tq(t, e, r) {
    return t.open(d(e, r))
}

function tH(t) {
    let e = t.performance;
    return y(e) ? 0 : g(e)
}

function tY(t, e) {
    return t.push(e)
}

function tJ(t, e, r) {
    return t.put(e, r)
}

function tQ(t) {
    queueMicrotask(t)
}

function t$(t) {
    return t.queueMicrotask
}

function tK(t) {
    return Promise.resolve(t)
}

function tX() {
    return b(function(t, e) {
        t.respond(e >>> 0)
    }, arguments)
}

function tZ(t, e) {
    return setTimeout(t, e)
}

function t0() {
    return b(function(t, e) {
        return setTimeout(t, e)
    }, arguments)
}

function t1() {
    return b(function(t, e, r, n, o) {
        t.set(d(e, r), d(n, o))
    }, arguments)
}

function t3(t, e, r) {
    t[e >>> 0] = r
}

function t2(t, e, r) {
    t[e] = r
}

function t5(t, e, r) {
    t.set(e, r >>> 0)
}

function t4(t, e, r) {
    return t.set(e, r)
}

function t8() {
    return b(function(t, e, r) {
        return Reflect.set(t, e, r)
    }, arguments)
}

function t7(t, e) {
    t.body = e
}

function t6(t, e) {
    t.credentials = k[e]
}

function t9(t, e) {
    t.headers = e
}

function et(t, e) {
    t.headers = e
}

function ee(t, e, r) {
    t.method = d(e, r)
}

function er(t, e) {
    t.mode = j[e]
}

function en(t, e) {
    t.signal = e
}

function eo(t, e) {
    t.status = e
}

function ei(t) {
    return t.signal
}

function ea() {
    let t = void 0 === r.g ? null : r.g;
    return y(t) ? 0 : g(t)
}

function eu() {
    let t = "u" < typeof globalThis ? null : globalThis;
    return y(t) ? 0 : g(t)
}

function ec() {
    let t = "u" < typeof self ? null : self;
    return y(t) ? 0 : g(t)
}

function es() {
    let t = "u" < typeof window ? null : window;
    return y(t) ? 0 : g(t)
}

function ef(t) {
    return t.status
}

function e_() {
    return b(function(t) {
        return JSON.stringify(t)
    }, arguments)
}

function el(t, e) {
    return t.then(e)
}

function ep(t, e, r) {
    return t.then(e, r)
}

function ed(t, e) {
    let r = f(e.url, n.__wbindgen_malloc, n.__wbindgen_realloc),
        o = i;
    l().setInt32(t + 4, o, !0), l().setInt32(t + 0, r, !0)
}

function eg(t) {
    return t.value
}

function eb(t) {
    let e = t.view;
    return y(e) ? 0 : g(e)
}

function ey(t, e) {
    console.warn(d(t, e))
}

function eh(t) {
    return t
}

function ew(t) {
    return BigInt.asUintN(64, t)
}

function ev(t) {
    return "boolean" == typeof t ? +!!t : 2
}

function em(t) {
    let e = t.original;
    return 1 == e.cnt-- && (e.a = 0, !0)
}

function ex(t, e, r) {
    return w(t, e, 539, O)
}

function eA(t, e, r) {
    return w(t, e, 579, E)
}

function eS(t, e, r) {
    return w(t, e, 726, R)
}

function eT(t, e) {
    let r = f(function t(e) {
            let r, n = typeof e;
            if ("number" == n || "boolean" == n || null == e) return "".concat(e);
            if ("string" == n) return '"'.concat(e, '"');
            if ("symbol" == n) {
                let t = e.description;
                return null == t ? "Symbol" : "Symbol(".concat(t, ")")
            }
            if ("function" == n) {
                let t = e.name;
                return "string" == typeof t && t.length > 0 ? "Function(".concat(t, ")") : "Function"
            }
            if (Array.isArray(e)) {
                let r = e.length,
                    n = "[";
                r > 0 && (n += t(e[0]));
                for (let o = 1; o < r; o++) n += ", " + t(e[o]);
                return n + "]"
            }
            let o = /\[object ([^\]]+)\]/.exec(toString.call(e));
            if (!o || !(o.length > 1)) return toString.call(e);
            if ("Object" == (r = o[1])) try {
                return "Object(" + JSON.stringify(e) + ")"
            } catch (t) {
                return "Object"
            }
            return e instanceof Error ? "".concat(e.name, ": ").concat(e.message, "\n").concat(e.stack) : r
        }(e), n.__wbindgen_malloc, n.__wbindgen_realloc),
        o = i;
    l().setInt32(t + 4, o, !0), l().setInt32(t + 0, r, !0)
}

function eO(t, e) {
    return Error(d(t, e))
}

function eE(t, e) {
    return t in e
}

function eR() {
    let t = n.__wbindgen_export_4,
        e = t.grow(4);
    t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, !0), t.set(e + 3, !1)
}

function eI(t) {
    return "function" == typeof t
}

function ek(t) {
    return null === t
}

function ej(t) {
    return "object" == typeof t && null !== t
}

function eF(t) {
    return "string" == typeof t
}

function eP(t) {
    return void 0 === t
}

function eL(t, e) {
    return t == e
}

function eM() {
    return n.memory
}

function eC(t, e) {
    let r = "number" == typeof e ? e : void 0;
    l().setFloat64(t + 8, y(r) ? 0 : r, !0), l().setInt32(t + 0, !y(r), !0)
}

function eD(t) {
    return t
}

function eN(t, e) {
    let r = "string" == typeof e ? e : void 0;
    var o = y(r) ? 0 : f(r, n.__wbindgen_malloc, n.__wbindgen_realloc),
        a = i;
    l().setInt32(t + 4, a, !0), l().setInt32(t + 0, o, !0)
}

function eB(t, e) {
    return d(t, e)
}

function eU(t, e) {
    throw Error(d(t, e))
}