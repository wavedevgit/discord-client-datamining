/** chunk id: 992771, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => l
});
var r = n(607399),
    i = n(309010),
    a = n(967198),
    o = n(954571),
    s = n(652215);

function l(e, t) {
    o.default.track(s.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: r.Fr ? "mobile_web" : "desktop_web",
        guild_id: a.A.getGuildId(),
        channel_id: i.A.getChannelId(),
        section: t
    })
}