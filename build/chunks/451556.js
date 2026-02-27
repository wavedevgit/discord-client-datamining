/** chunk id: 451556, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(928658),
    r = n(734057),
    o = n(985018);

function c(e, t) {
    let n = (0, s.bG)([r.A], () => r.A.getChannel(t)),
        c = n?.getGuildId();
    return null == e ? null : (0, i.jsx)(l.rXV, {
        children: (0, i.jsx)(l.Drp, {
            id: "report-app",
            color: "danger",
            label: o.intl.string(o.t.NgA5vp),
            action: () => (0, a.r3)({
                application: e,
                entrypoint: "activity_ui_channel_call",
                contextualGuildId: c ?? void 0,
                contextualChannelId: n?.id
            }),
            icon: l.iFK,
            leadingAccessory: {
                type: "icon",
                icon: l.iFK
            }
        })
    })
}