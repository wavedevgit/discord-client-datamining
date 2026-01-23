/** Chunk was on web.js **/
/** chunk id: 948055, original params: e (module,exports,require) **/
"use strict";
e.exports = function(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
    })
}