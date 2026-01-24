/** Chunk was on 33648 **/
/** chunk id: 887092, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => r
});
var l = i(627968),
    o = i(311907),
    a = i(397927),
    e = i(928658),
    d = i(734057),
    p = i(985018);

function r(t, n, i) {
    let r = (0, o.bG)([d.A], () => d.A.getChannel(n)),
        u = null == r ? void 0 : r.getGuildId();
    return (0, l.jsx)(a.Drp, {
        id: "report-app",
        color: "danger",
        label: p.intl.string(p.t.NgA5vp),
        action: () => (0, e.r3)({
            application: t,
            entrypoint: "activity_ui_popout",
            contextualGuildId: null != u ? u : void 0,
            contextualChannelId: null == r ? void 0 : r.id,
            appContext: i
        }),
        icon: a.iFK
    })
}