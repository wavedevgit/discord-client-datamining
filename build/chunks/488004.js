/** Chunk was on web.js **/
/** chunk id: 488004, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    O: () => a
});
var r = n(58149),
    i = n(652215);

function a(e) {
    var t, n;
    let a = null != e.fileItems ? o(e.fileItems) : [],
        s = null != (t = e.errorMessage) ? t : void 0,
        l = null != (n = e.failureCode) ? n : void 0;
    (0, r.zV)(i.HAw.SEND_MESSAGE_FAILURE, {
        failure_code: l,
        error_message: s,
        attachment_mimetypes: a
    })
}

function o(e) {
    return e.map(e => {
        var t;
        return null != (t = e.mimeType) ? t : "unknown"
    })
}