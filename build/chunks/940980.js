/** chunk id: 940980 params = (module,exports,require) **/
"use strict";
r.d(t, {
    W: () => i
});
let n = (0, r(945810).mj)({
        name: "2026-03-shop-fiat-prioritization",
        kind: "user",
        defaultConfig: {
            prioritizeFiat: !1
        },
        variations: {
            0: {
                prioritizeFiat: !1
            },
            1: {
                prioritizeFiat: !0
            }
        }
    }),
    i = e => n.useConfig({
        location: e
    }).prioritizeFiat