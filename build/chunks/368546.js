/** chunk id: 368546 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var l = n(64700);
let a = "requestVideoFrameCallback" in HTMLVideoElement.prototype;

function i(e) {
    let {
        videoRef: t,
        canvasRef: n,
        enabled: i
    } = e;
    l.useEffect(() => {
        if (!i) return;
        let e = t.current,
            l = n.current;
        if (null == e || null == l) return;
        l.width = 10, l.height = 6;
        let r = l.getContext("2d");
        if (null == r) return;
        let s = !1;

        function o() {
            s || e.readyState < 2 || r.drawImage(e, 0, 0, 10, 6)
        }
        if (a) {
            let t;

            function c() {
                s || (o(), t = e.requestVideoFrameCallback(c))
            }

            function d() {
                t = e.requestVideoFrameCallback(c)
            }

            function u() {
                e.cancelVideoFrameCallback(t)
            }
            return e.addEventListener("play", d), e.addEventListener("pause", u), e.addEventListener("ended", u), e.addEventListener("seeked", o), e.addEventListener("loadeddata", o), e.paused ? e.readyState >= 2 && o() : t = e.requestVideoFrameCallback(c), () => {
                s = !0, e.cancelVideoFrameCallback(t), e.removeEventListener("play", d), e.removeEventListener("pause", u), e.removeEventListener("ended", u), e.removeEventListener("seeked", o), e.removeEventListener("loadeddata", o)
            }
        } {
            let t;

            function m() {
                s || (o(), t = requestAnimationFrame(m))
            }

            function f() {
                t = requestAnimationFrame(m)
            }

            function h() {
                cancelAnimationFrame(t)
            }
            return e.addEventListener("play", f), e.addEventListener("pause", h), e.addEventListener("ended", h), e.addEventListener("seeked", o), e.addEventListener("loadeddata", o), e.paused ? e.readyState >= 2 && o() : t = requestAnimationFrame(m), () => {
                s = !0, cancelAnimationFrame(t), e.removeEventListener("play", f), e.removeEventListener("pause", h), e.removeEventListener("ended", h), e.removeEventListener("seeked", o), e.removeEventListener("loadeddata", o)
            }
        }
    }, [t, n, i])
}