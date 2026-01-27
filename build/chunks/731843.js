/** Chunk was on web.js **/
/** chunk id: 731843, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(506774),
    i = n(652215);

function a(e, t) {
    if (0 === e.length) return "No logs";
    let n = r.w.get(i.Xlh),
        a = r.w.get(i.Ahp),
        o = null != n ? "Device Token: ".concat(n) : "",
        s = null != a ? "Device Voip Token: ".concat(a) : "",
        l = e.map(e => {
            let n = e.silent ? "Silent" : "Displayed",
                r = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
            return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(n, " - ").concat(r)
        }).join("\n");
    return "".concat(o, "\n").concat(s, "\n\n").concat(l)
}