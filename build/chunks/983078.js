/** Chunk was on 36054 **/
/** chunk id: 983078, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => l
}), n(896048), n(321073);
var a = n(360619);

function l() {
    let e = (0, a.PH)(),
        t = new Map;
    return t.set("root", []), Object.entries(e).forEach(e => {
        var n;
        let [a, l] = e;
        if (null != l.predicate && !l.predicate()) return;
        let r = null != (n = l.parent) ? n : "root";
        t.set(a, []), t.has(r) || t.set(r, []), t.get(r).push(a)
    }), {
        legacySettingDirectory: t
    }
}