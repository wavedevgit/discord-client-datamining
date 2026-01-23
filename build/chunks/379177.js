/** Chunk was on 59275 **/
/** chunk id: 379177, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    eJ: () => s,
    rR: () => l
});
let r = (0, n(945810).mj)({
        name: "2025-10-orb-rental",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            rentalDuration: void 0
        },
        variations: {
            0: {
                enabled: !1,
                rentalDuration: void 0
            },
            1: {
                enabled: !0,
                rentalDuration: 3
            },
            2: {
                enabled: !0,
                rentalDuration: 7
            },
            3: {
                enabled: !0,
                rentalDuration: -1
            }
        }
    }),
    l = e => r.useConfig({
        location: e
    }).enabled,
    s = e => r.useConfig({
        location: e
    }).rentalDuration