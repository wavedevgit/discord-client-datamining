/** chunk id: 788605, original params: t,e,i (module,exports,require) **/
i.d(e, {
    p: () => d
});
var n = i(311907),
    l = i(684013),
    s = i(419954),
    a = i(256415),
    r = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.Hn)(r.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
    useTitle: () => o.intl.string(o.t.swsWWC),
    useValue: () => (0, n.bG)([a.default], () => a.default.getDisplayUserMode()),
    setValue: t => {
        l.A.setDisplayUserMode(t)
    },
    useOptions: () => [{
        id: "always",
        label: o.intl.string(o.t.nBmDrT),
        value: u.f5z.ALWAYS
    }, {
        id: "speaking",
        label: o.intl.string(o.t["2OvIZY"]),
        value: u.f5z.ONLY_WHILE_SPEAKING
    }]
})