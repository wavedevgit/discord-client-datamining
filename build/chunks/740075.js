/** Chunk was on 64935 **/
/** chunk id: 740075, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
}), n(457529), n(733351);
var r = n(64700),
    i = n(842209);

function l(e, t) {
    let n = r.useRef(null),
        l = r.useCallback((e, t) => {
            var r, i, l;
            e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null != (r = null == (l = n.current) || null == (i = l.textContent) ? void 0 : i.trim()) ? r : "")
        }, []);
    return i.D3({
        channel: e,
        type: "channel"
    }, t), {
        onCopy: l,
        copyRef: n
    }
}