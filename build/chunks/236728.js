/** chunk id: 236728, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => i
});
var r = "ResizeObserver loop completed with undelivered notifications.",
    i = function() {
        var e;
        "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
            message: r
        }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = r), window.dispatchEvent(e)
    }