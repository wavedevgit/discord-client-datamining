/** chunk id: 178418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    c: () => i
});
var r = n(734057);

function i(e, t) {
    let n = r.A.getChannel(t);
    return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
}