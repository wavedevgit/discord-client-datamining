/** Chunk was on web.js **/
/** chunk id: 359588, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(775602),
    u = n(998304),
    d = n(854987),
    f = n(40333),
    p = n(745174);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}
let m = 500,
    g = 32;

function E(e) {
    let {
        start: t = 0,
        end: n,
        alignment: a = "left"
    } = e, _ = (0, i.useRef)(Date.now()), E = (0, i.useRef)(0), y = (0, i.useContext)(d.P), b = (0, l.rdh)(y.primaryColor).hex(), O = (0, f.A)(b), v = (0, u.j5)(O), [A, I] = (0, i.useState)(t), S = (0, o.bG)([c.A], () => c.A.useReducedMotion);
    (0, i.useEffect)(() => {
        let e = s().throttle(() => {
            let r = Math.min((Date.now() - _.current) / m, 1);
            I(Math.round((n - t) * r + t)), r < 1 && (E.current = requestAnimationFrame(e))
        }, g);
        return E.current = requestAnimationFrame(e), () => {
            cancelAnimationFrame(E.current), e.cancel()
        }
    }, [t, n, I]);
    let T = {
        className: p.l,
        dataBinding: {
            DisplayValue: A,
            TextColor: {
                r: v.r,
                g: v.g,
                b: v.b,
                a: 255 * v.a
            },
            reducedMotion: S
        },
        fit: "layout",
        withReducedMotion: "play"
    };
    return "left" === a ? (0, r.jsx)(l.wWi, h({}, T)) : (0, r.jsx)(l.mfv, h({}, T))
}