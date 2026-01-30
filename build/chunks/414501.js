/** chunk id: 414501, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(116740).OrderedMap;
t.exports = {
    createFromArray: function(t) {
        return n(t.map(function(t) {
            return [t.getKey(), t]
        }))
    }
}