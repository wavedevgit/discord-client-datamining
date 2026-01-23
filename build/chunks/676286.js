/** Chunk was on web.js **/
/** chunk id: 676286, original params: e (module,exports,require) **/
"use strict";
e.exports = function(e) {
    if (void 0 === (e = e || ("u" > typeof document ? document : void 0))) return null;
    try {
        return e.activeElement || e.body
    } catch (t) {
        return e.body
    }
}