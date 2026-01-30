/** chunk id: 363400, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => s
});
var r = n(838259),
    i = n(635833),
    a = n(916784),
    o = function(e) {
        return !(0, a.XJ)(e) && !(0, a.td)(e) && "inline" === getComputedStyle(e).display
    },
    s = function() {
        function e(e, t) {
            this.target = e, this.observedBox = t || r.U.CONTENT_BOX, this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }
        return e.prototype.isActive = function() {
            var e = (0, i.P)(this.target, this.observedBox, !0);
            return o(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
        }, e
    }()