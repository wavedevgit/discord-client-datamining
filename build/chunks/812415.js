/** chunk id: 812415, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(410475);
t.exports = function(t) {
    var e = t.getSelection();
    return e.isCollapsed() ? null : n(t.getCurrentContent(), e)
}