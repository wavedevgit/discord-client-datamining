/** Chunk was on web.js **/
/** chunk id: 53132, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(13570);
e.exports = function(e) {
    if (i) {
        try {
            return r.process.getBuiltinModule(e)
        } catch (e) {}
        try {
            return Function('return require("' + e + '")')()
        } catch (e) {}
    }
}