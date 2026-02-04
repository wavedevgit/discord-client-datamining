/** chunk id: 31436, original params: t,e,r (module,exports,require) **/
r.d(e, {
    Bf: () => a
}), r(65821);
var n = r(841117);

function o(t) {
    console.warn("[libdiscore] ".concat(t))
}
async function i() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        i = null,
        a = t;
    for (;;) try {
        await Promise.resolve().then(r.bind(r, 5426));
        return
    } catch (t) {
        if (t instanceof ReferenceError || t instanceof WebAssembly.CompileError) {
            var u;
            throw u = !0, window._libdiscoreUnsupportedBrowser = u, o("Unsupported browser, skipping libdiscore, error: [".concat(t.name, "] ").concat(t.message)), t
        }
        if (i = t, delete r.c[5426], 0 == --a) throw i;
        o("Failed to import libdiscore-wasm, retrying... (".concat(a, " attempts left), ").concat(i.name, ": ").concat(i.message)), await (0, n.eU)(e)
    }
}

function a() {
    var t, e;
    let o = null != (t = window._libdiscoreInitPromise) ? t : null;
    if (null != o) return o;
    {
        let t = (async () => {
            var t;
            await i(), t = await (0, n.sq)({
                createPromise: () => r.e("14575").then(r.bind(r, 811059)),
                webpackId: 811059
            }), window._libdiscoreWasm = t
        })();
        return e = t, window._libdiscoreInitPromise = e, t
    }
}