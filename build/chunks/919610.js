/** chunk id: 919610, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => l
}), n(896048);
var r = n(64700);
let l = e => {
    let [t, n] = r.useState(1);
    return {
        currentPage: t,
        handlePageChange: r.useCallback(t => {
            var r;
            n(t), null == (r = e.current) || r.scrollTo({
                to: 0
            })
        }, [e, n])
    }
}