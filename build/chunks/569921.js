/** Chunk was on 41091 **/
/** chunk id: 569921, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => a
});
var l = n(253932),
    r = n(403918);
let i = [r.yt.MINUTES_30, r.yt.HOURS_1, r.yt.HOURS_4];

function a() {
    var t;
    let e = l.G2.getSetting();
    if (null == e || "" === e.expiresAtMs) return r.yt.TODAY;
    let n = Number(e.expiresAtMs);
    if (isNaN(n)) return r.yt.TODAY;
    if (0 === n) return r.yt.DONT_CLEAR;
    let a = new Date,
        o = new Date(n);
    if (a.getFullYear() !== o.getFullYear() || a.getMonth() !== o.getMonth() || a.getDate() !== o.getDate()) return r.yt.TODAY;
    let s = Number(n) - Date.now();
    return null != (t = i.find(t => s <= t)) ? t : r.yt.TODAY
}