/** chunk id: 887092, original params: t,i,n (module,exports,require) **/
n.d(i, {
    A: () => p
});
var o = n(627968),
    e = n(311907),
    l = n(397927),
    a = n(928658),
    d = n(734057),
    r = n(985018);

function p(t, i, n) {
    let p = (0, e.bG)([d.A], () => d.A.getChannel(i)),
        c = null == p ? void 0 : p.getGuildId();
    return (0, o.jsx)(l.Drp, {
        id: "report-app",
        color: "danger",
        label: r.intl.string(r.t.NgA5vp),
        action: () => (0, a.r3)({
            application: t,
            entrypoint: "activity_ui_popout",
            contextualGuildId: null != c ? c : void 0,
            contextualChannelId: null == p ? void 0 : p.id,
            appContext: n
        }),
        icon: l.iFK,
        leadingAccessory: {
            type: "icon",
            icon: l.iFK
        }
    })
}