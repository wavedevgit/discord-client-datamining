/** chunk id: 514190, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N: () => o
}), n(896048);
var r = n(651162),
    i = n(295811),
    a = n(758836);

function o() {
    for (let e of [a.G2.HOME, a.G2.ORBS, a.G2.CATALOG]) {
        let t = i.A.getShopBlocks(e).find(e => e.type === r.g.WIDE_BANNER);
        if ((null == t ? void 0 : t.dismissibleContentVersion) != null) return t.dismissibleContentVersion
    }
    return 0
}