/** chunk id: 851341 params = (module,exports,require) **/
"use strict";
var n = i(73153),
    s = i(976860),
    a = i(652215);
__OVERLAY__ && n.h.subscribe("OVERLAY_OPEN_MESSAGE", function(e) {
    let {
        guildId: t,
        channelId: i,
        messageId: n
    } = e;
    (0, s.bG)({
        pathname: a.BVt.CHANNEL(t, i, n)
    })
})