/** chunk id: 621653, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    g: () => i
}), n(896048), n(321073);
var r = n(64700),
    l = n(417597),
    s = n(73153),
    a = n(248352);

function i() {
    let e = r.useRef(new Map),
        t = (0, l.bG)([a.A], () => a.A.getUserDiscounts());
    r.useEffect(() => {
        let n = e.current,
            r = Date.now(),
            l = [];
        return t.forEach(e => {
            if (null == e.expiresAt) return;
            let t = e.expiresAt.getTime() - r;
            if (t <= 0) l.push(e.discountId);
            else {
                let r = setTimeout(() => {
                    s.h.dispatch({
                        type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                        discountIds: [e.discountId]
                    }), n.delete(e.discountId)
                }, Math.min(0x7fffffff, t));
                n.set(e.discountId, r)
            }
        }), l.length > 0 && s.h.dispatch({
            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
            discountIds: l
        }), () => {
            n.forEach(e => clearTimeout(e)), n.clear()
        }
    }, [t])
}