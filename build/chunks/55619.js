/** chunk id: 55619 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var a = n(73153);
let i = {
    setEnabled(e) {
        this.update({
            enabled: e
        })
    },
    update(e) {
        for (let t of Object.keys(e)) a.h.dispatch({
            type: "STREAMER_MODE_UPDATE",
            key: t,
            value: e[t]
        })
    }
}