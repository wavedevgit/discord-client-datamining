/** chunk id: 887092 params = (module,exports,require) **/
n.d(i, {
    A: () => c
});
var e = n(627968),
    o = n(311907),
    a = n(397927),
    r = n(928658),
    l = n(734057),
    p = n(985018);

function c(t, i, n) {
    let c = (0, o.bG)([l.A], () => l.A.getChannel(i)),
        d = c?.getGuildId();
    return (0, e.jsx)(a.Drp, {
        id: "report-app",
        color: "danger",
        label: p.intl.string(p.t.NgA5vp),
        action: () => (0, r.r3)({
            application: t,
            entrypoint: "activity_ui_popout",
            contextualGuildId: d ?? void 0,
            contextualChannelId: c?.id,
            appContext: n
        }),
        icon: a.iFK,
        leadingAccessory: {
            type: "icon",
            icon: a.iFK
        }
    })
}