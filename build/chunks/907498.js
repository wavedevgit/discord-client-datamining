/** chunk id: 907498, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(397927),
    i = n(976860),
    a = n(240233),
    o = n(573879),
    s = n(652215),
    l = n(985018);
let c = new a.A({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, i.pX)(s.BVt.ME), (0, r.showToast)((0, r.createToast)(l.intl.formatToPlainString(l.t.wx7O3L, {
                username: e.username
            }), r.ToastType.SUCCESS))
        }, 100)
    },
    onSwitchError() {
        (0, r.showToast)((0, r.createToast)(l.intl.string(l.t.pqvKWA), r.ToastType.FAILURE))
    },
    onTokenSet() {
        (0, r.OoC)(o.ov), (0, r.OoC)(o.Gl)
    }
})