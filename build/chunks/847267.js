/** Chunk was on web.js **/
/** chunk id: 847267, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(543894),
    i = n(324049),
    a = n(619881),
    o = n(444746);

function s(e) {
    return ["html", "body", "#document"].indexOf((0, a.A)(e)) >= 0 ? e.ownerDocument.body : (0, o.sb)(e) && (0, i.A)(e) ? e : s((0, r.A)(e))
}