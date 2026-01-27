/** Chunk was on 20941 **/
/** chunk id: 181380, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => i
});
var r = n(64700),
    l = n(311907),
    a = n(719718);

function i(e) {
    let t = (0, r.useRef)(new Audio(e)),
        n = (0, l.bG)([a.A], () => a.A.volume),
        i = (0, l.bG)([a.A], () => a.A.isMuted);
    return () => {
        t.current.currentTime = 0, t.current.volume = i ? 0 : n, t.current.play()
    }
}