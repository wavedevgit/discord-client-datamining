/** chunk id: 740075 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(64700),
    a = n(842209);

function l(e, t) {
    let n = i.useRef(null),
        l = i.useCallback((e, t) => {
            e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", n.current?.textContent?.trim() ?? "")
        }, []);
    return a.D3({
        channel: e,
        type: "channel"
    }, t), {
        onCopy: l,
        copyRef: n
    }
}