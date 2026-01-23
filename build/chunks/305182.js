/** Chunk was on 46875 **/
/** chunk id: 305182, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => i
}), n(896048);
var l = n(64700),
    r = n(397927);

function i() {
    let [e, t] = l.useState(!0);
    return {
        transitions: (0, r.pnh)(e, {
            keys: e => e ? "shown" : "hidden",
            config: a,
            from: {
                opacity: 0
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            unique: !0
        }),
        setVisible: t
    }
}
let a = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
}