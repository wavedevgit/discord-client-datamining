/** Chunk was on web.js **/
/** chunk id: 749401, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => l
});
var r = n(64700),
    i = n(310784),
    a = n.n(i),
    o = n(417597),
    s = n(775602);

function l(e) {
    let t = (0, o.bG)([s.A], () => s.A.saturation);
    return r.useMemo(() => {
        if (null == e) return null;
        if ("currentColor" === e || e.startsWith("var(")) return e;
        let n = a()(e);
        return n.set("hsl.s", n.get("hsl.s") * t).hex()
    }, [e, t])
}