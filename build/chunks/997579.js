/** Chunk was on web.js **/
/** chunk id: 997579, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(827734),
    i = n(775602),
    a = n(353835),
    o = n(723702);

function s(e) {
    if (!__OVERLAY__ && o.isPlatformEmbedded) try {
        let t = r.A.colors.BACKGROUND_BASE_LOWEST.resolve({
            theme: e,
            saturation: i.A.saturation
        }).hex();
        a.A.setApplicationBackgroundColor(t)
    } catch (e) {}
}