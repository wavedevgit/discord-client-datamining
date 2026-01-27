/** Chunk was on web.js **/
/** chunk id: 817636, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(587895),
    i = n(337095),
    a = n(611010),
    o = n(734057),
    s = n(795816),
    l = n(692957);
async function c(e, t) {
    var n;
    let c = r.A.getApplication(e);
    if (u(c)) return c;
    let d = null == (n = o.A.getChannel(t)) ? void 0 : n.guild_id,
        {
            activityConfigs: f,
            applications: p
        } = await (0, s.LV)({
            guildId: d
        }),
        _ = (0, l.A)({
            applicationId: e,
            activityConfigs: f,
            applications: p
        });
    if (u(null == _ ? void 0 : _.application)) return null == _ ? void 0 : _.application;
    {
        let t = await (0, i.TA)(e);
        return a.Ay.createFromServer(t)
    }
}

function u(e) {
    return null != e && null != e.embeddedActivityConfig
}