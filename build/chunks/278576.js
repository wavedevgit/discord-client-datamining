/** chunk id: 278576 params = (module,exports,require) **/
"use strict";
s.d(t, {
    tR: () => o
}), s(323874), s(14289), s(35956);
var n = s(64700),
    r = s(873263),
    l = s(976860),
    i = s(840065),
    a = s(652215);

function o() {
    let {
        search: e
    } = (0, r.zy)(), t = (0, r.g)(), s = n.useMemo(() => new URLSearchParams(e), [e]).get("source"), o = null != s ? parseInt(s, 10) : null;
    return {
        onClose: n.useCallback(() => {
            if (0 === o) {
                (0, l.aX)(), (0, i.openUserSettings)();
                return
            }(0, l.EL)() ? (0, l.aX)() : (0, l.pX)(a.BVt.APP)
        }, [o]),
        source: o,
        ...t
    }
}