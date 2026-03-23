/** chunk id: 55619 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => r
});
var i = n(73153);
let r = {
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