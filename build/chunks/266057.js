/** chunk id: 266057, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => c
});
var i = n(652961),
    s = n(419954),
    l = n(253932),
    a = n(780964),
    r = n(358776),
    o = n(823894),
    d = n(985018);
let c = (0, s.Qx)(a.X.ANIMATE_STICKERS, {
    useTitle: () => (0, r.bp)("AnimateStickers") ? d.intl.string(d.t.sBHIh0) : d.intl.string(d.t["6NtAuJ"]),
    useSubtitle: () => {
        let e = (0, i.F)("animateStickers"),
            t = (0, r.bp)("AnimateStickers");
        return e ?? (t ? void 0 : d.intl.string(d.t.GRa6U7))
    },
    useOptions: () => [{
        name: d.intl.string(d.t["Xp+X2U"]),
        value: o.BJ.ALWAYS_ANIMATE
    }, {
        name: d.intl.string(d.t.IlLT7e),
        desc: d.intl.string(d.t.bIW9Tl),
        value: o.BJ.ANIMATE_ON_INTERACTION
    }, {
        name: d.intl.string(d.t.IGu8x3),
        value: o.BJ.NEVER_ANIMATE
    }],
    useValue: () => l.S0.useSetting(),
    setValue: e => l.S0.updateSetting(e)
})