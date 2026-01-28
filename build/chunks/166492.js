/** Chunk was on 91075 **/
/** chunk id: 166492, original params: e,t,i (module,exports,require) **/
i.d(t, {
    a: () => r
});
let n = (0, i(945810).mj)({
    name: "2025-12-dm-side-panel-show-recommendations-in-breadcrumbs",
    kind: "user",
    defaultConfig: {
        enabled: !1
    },
    variations: {
        0: {
            enabled: !1
        },
        1: {
            enabled: !0
        }
    }
});

function r(e) {
    let {
        location: t
    } = e;
    return n.useConfig({
        location: t
    }).enabled
}