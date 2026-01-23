/** Chunk was on web.js **/
/** chunk id: 631735, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(869639);
e.exports = function(e, t, n) {
    var i = r.undo(t);
    if ("spellcheck-change" === t.getLastChangeType()) {
        var a = i.getCurrentContent();
        n(r.set(i, {
            nativelyRenderedContent: a
        }));
        return
    }(e.preventDefault(), t.getNativelyRenderedContent()) ? (n(r.set(t, {
        nativelyRenderedContent: null
    })), setTimeout(function() {
        n(i)
    }, 0)) : n(i)
}