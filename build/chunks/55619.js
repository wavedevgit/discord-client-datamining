/** chunk id: 55619 params = (module,exports,require) **/
n.d(e, {
    A: () => l
});
var i = n(73153);
let l = {
    setEnabled(t) {
        this.update({
            enabled: t
        })
    },
    update(t) {
        for (let e of Object.keys(t)) i.h.dispatch({
            type: "STREAMER_MODE_UPDATE",
            key: e,
            value: t[e]
        })
    }
}