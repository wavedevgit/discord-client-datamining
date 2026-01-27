/** Chunk was on web.js **/
/** chunk id: 439619, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i = n(624462),
    a = n(866307),
    o = n(216233),
    s = n(333654),
    l = n(896758),
    c = n(870064),
    u = n(741623),
    d = n(913789),
    f = n(603763),
    p = n(949893),
    _ = n(783277),
    h = n(658471),
    m = n(327709),
    g = n(682587),
    E = n(138478),
    y = Function,
    b = function(e) {
        try {
            return y('"use strict"; return (' + e + ").constructor;")()
        } catch (e) {}
    },
    O = n(267768),
    v = n(969001),
    A = function() {
        throw new u
    },
    I = O ? function() {
        try {
            return arguments.callee, A
        } catch (e) {
            try {
                return O(arguments, "callee").get
            } catch (e) {
                return A
            }
        }
    }() : A,
    S = n(912877)(),
    T = n(428495),
    C = n(755311),
    N = n(521033),
    w = n(343920),
    R = n(357522),
    P = {},
    D = "u" > typeof Uint8Array && T ? T(Uint8Array) : r,
    L = {
        __proto__: null,
        "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": S && T ? T([][Symbol.iterator]()) : r,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": P,
        "%AsyncGenerator%": P,
        "%AsyncGeneratorFunction%": P,
        "%AsyncIteratorPrototype%": P,
        "%Atomics%": "u" < typeof Atomics ? r : Atomics,
        "%BigInt%": "u" < typeof BigInt ? r : BigInt,
        "%BigInt64Array%": "u" < typeof BigInt64Array ? r : BigInt64Array,
        "%BigUint64Array%": "u" < typeof BigUint64Array ? r : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": "u" < typeof DataView ? r : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": a,
        "%eval%": eval,
        "%EvalError%": o,
        "%Float16Array%": "u" < typeof Float16Array ? r : Float16Array,
        "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
        "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
        "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
        "%Function%": y,
        "%GeneratorFunction%": P,
        "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
        "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
        "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": S && T ? T(T([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%Map%": "u" < typeof Map ? r : Map,
        "%MapIteratorPrototype%": "u" > typeof Map && S && T ? T(new Map()[Symbol.iterator]()) : r,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": i,
        "%Object.getOwnPropertyDescriptor%": O,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "u" < typeof Promise ? r : Promise,
        "%Proxy%": "u" < typeof Proxy ? r : Proxy,
        "%RangeError%": s,
        "%ReferenceError%": l,
        "%Reflect%": "u" < typeof Reflect ? r : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "u" < typeof Set ? r : Set,
        "%SetIteratorPrototype%": "u" > typeof Set && S && T ? T(new Set()[Symbol.iterator]()) : r,
        "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": S && T ? T("" [Symbol.iterator]()) : r,
        "%Symbol%": S ? Symbol : r,
        "%SyntaxError%": c,
        "%ThrowTypeError%": I,
        "%TypedArray%": D,
        "%TypeError%": u,
        "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
        "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
        "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
        "%URIError%": d,
        "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
        "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
        "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
        "%Function.prototype.call%": R,
        "%Function.prototype.apply%": w,
        "%Object.defineProperty%": v,
        "%Object.getPrototypeOf%": C,
        "%Math.abs%": f,
        "%Math.floor%": p,
        "%Math.max%": _,
        "%Math.min%": h,
        "%Math.pow%": m,
        "%Math.round%": g,
        "%Math.sign%": E,
        "%Reflect.getPrototypeOf%": N
    };
if (T) try {
    null.error
} catch (e) {
    var x = T(T(e));
    L["%Error.prototype%"] = x
}
var M = function e(t) {
        var n;
        if ("%AsyncFunction%" === t) n = b("async function () {}");
        else if ("%GeneratorFunction%" === t) n = b("function* () {}");
        else if ("%AsyncGeneratorFunction%" === t) n = b("async function* () {}");
        else if ("%AsyncGenerator%" === t) {
            var r = e("%AsyncGeneratorFunction%");
            r && (n = r.prototype)
        } else if ("%AsyncIteratorPrototype%" === t) {
            var i = e("%AsyncGenerator%");
            i && T && (n = T(i.prototype))
        }
        return L[t] = n, n
    },
    j = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    k = n(94867),
    U = n(353841),
    G = k.call(R, Array.prototype.concat),
    F = k.call(w, Array.prototype.splice),
    V = k.call(R, String.prototype.replace),
    B = k.call(R, String.prototype.slice),
    H = k.call(R, RegExp.prototype.exec),
    Y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    W = /\\(\\)?/g,
    K = function(e) {
        var t = B(e, 0, 1),
            n = B(e, -1);
        if ("%" === t && "%" !== n) throw new c("invalid intrinsic syntax, expected closing `%`");
        if ("%" === n && "%" !== t) throw new c("invalid intrinsic syntax, expected opening `%`");
        var r = [];
        return V(e, Y, function(e, t, n, i) {
            r[r.length] = n ? V(i, W, "$1") : t || e
        }), r
    },
    z = function(e, t) {
        var n, r = e;
        if (U(j, r) && (r = "%" + (n = j[r])[0] + "%"), U(L, r)) {
            var i = L[r];
            if (i === P && (i = M(r)), void 0 === i && !t) throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: n,
                name: r,
                value: i
            }
        }
        throw new c("intrinsic " + e + " does not exist!")
    };
e.exports = function(e, t) {
    if ("string" != typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t) throw new u('"allowMissing" argument must be a boolean');
    if (null === H(/^%?[^%]*%?$/, e)) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = K(e),
        r = n.length > 0 ? n[0] : "",
        i = z("%" + r + "%", t),
        a = i.name,
        o = i.value,
        s = !1,
        l = i.alias;
    l && (r = l[0], F(n, G([0, 1], l)));
    for (var d = 1, f = !0; d < n.length; d += 1) {
        var p = n[d],
            _ = B(p, 0, 1),
            h = B(p, -1);
        if (('"' === _ || "'" === _ || "`" === _ || '"' === h || "'" === h || "`" === h) && _ !== h) throw new c("property names with quotes must have matching quotes");
        if ("constructor" !== p && f || (s = !0), r += "." + p, U(L, a = "%" + r + "%")) o = L[a];
        else if (null != o) {
            if (!(p in o)) {
                if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
                return
            }
            if (O && d + 1 >= n.length) {
                var m = O(o, p);
                o = (f = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : o[p]
            } else f = U(o, p), o = o[p];
            f && !s && (L[a] = o)
        }
    }
    return o
}