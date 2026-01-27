/** Chunk was on web.js **/
/** chunk id: 522305, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => a
});
var r = n(308528),
    i = n(956549);
async function a(e) {
    let {
        appId: t,
        botId: n,
        analyticsLocations: a,
        customId: o,
        referrerId: s,
        commandOrigin: l
    } = e, c = await r.A.openPrivateChannel({
        recipientIds: n
    });
    return await (0, i.A)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: a,
        customId: o,
        referrerId: s,
        commandOrigin: l
    })
}