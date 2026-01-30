/** chunk id: 851341, original params: e,t,n (module,exports,require) **/
"use strict";
var i = n(73153),
    r = n(976860),
    s = n(652215);
__OVERLAY__ && i.h.subscribe("OVERLAY_OPEN_MESSAGE", function(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: i
    } = e;
    (0, r.bG)({
        pathname: s.BVt.CHANNEL(t, n, i)
    })
})