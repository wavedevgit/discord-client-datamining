/** Chunk was on 73734 **/
/** chunk id: 55619, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var r = n(73153);
let i = {
    setEnabled(e) {
        this.update({
            enabled: e
        })
    },
    update(e) {
        for (let t of Object.keys(e)) r.h.dispatch({
            type: "STREAMER_MODE_UPDATE",
            key: t,
            value: e[t]
        })
    }
}