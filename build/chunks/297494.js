/** Chunk was on 7034 **/
/** chunk id: 297494, original params: e,t,n (module,exports,require) **/
n.d(t, {
    H4: () => o,
    vc: () => r
}), n(747238), n(812715);
var i = n(735438),
    l = n(998304);
let r = (e, t) => {
        let n = (0, l.Q7)([t.r, t.g, t.b], 2);
        return (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
    },
    o = (0, i.memoize)(e => {
        let t = 0;
        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
        return Math.abs(t)
    })