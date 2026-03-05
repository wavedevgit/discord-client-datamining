/** chunk id: 857275 params = (module,exports,require) **/
a.d(t, {
    A: () => r
});
let l = new Set(["nvidia"]);

function r(e) {
    for (let t of Object.keys(e)) {
        let a = e[t];
        if (null != a && null == a.error && l.has(t)) return !0
    }
    return !1
}