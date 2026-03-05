/** chunk id: 552736 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var a = n(64700),
    i = n(607399),
    r = n(437852),
    c = n(657515);

function o() {
    let {
        enabled: e
    } = r.Ay.useConfig({
        location: "useGiftingPromotionConfig"
    });
    return a.useMemo(() => i.Fr || i.v1 ? null : e ? c.zH : null, [e])
}