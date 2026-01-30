/** chunk id: 639723, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(621466),
    i = n(203982),
    a = n(654108),
    o = n(652215);
let s = {
    init() {
        document.addEventListener("paste", e => {
            (0, a.A)((0, r.BF)(e)) || i._.dispatchToLastSubscribed(o.jej.GLOBAL_CLIPBOARD_PASTE, {
                event: e
            })
        })
    }
}