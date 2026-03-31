/** chunk id: 851341 params = (module,exports,require) **/
"use strict";
var i = n(73153),
    s = n(976860),
    a = n(652215);
__OVERLAY__ && i.h.subscribe("OVERLAY_OPEN_MESSAGE", function(e) {
    let {
        guildId: t,
        channelId: n,
        messageId: i
    } = e;
    (0, s.bG)({
        pathname: a.BVt.CHANNEL(t, n, i)
    })
})