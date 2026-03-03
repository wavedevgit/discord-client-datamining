/** chunk id: 903427, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => C,
    P: () => I
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    a = i(192308),
    u = i(827343),
    o = i(793574),
    d = i(419954),
    A = i(430452),
    T = i(780964),
    S = i(825468),
    E = i(509381),
    g = i(731854),
    c = i(985018);
let _ = !s.Av;

function I() {
    return (0, r.bG)([A.Ay], () => A.Ay.getMode() === g.TB.PUSH_TO_TALK)
}
let C = (0, d.zD)(T.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function() {
        return s.Av ? c.intl.string(c.t.tG4Np5) : c.intl.string(c.t.JMyQin)
    },
    useSubtitle: function() {
        let t = (0, r.bG)([A.Ay], () => A.Ay.getMode());
        return l.useMemo(() => {
            if (!s.Av && t === g.TB.PUSH_TO_TALK) return c.intl.format(c.t["VHI4+Y"], {
                onDownloadClick: () => (0, S._)("Help Text PTT")
            })
        }, [t])
    },
    usePredicate: function() {
        return (0, r.bG)([A.Ay], () => A.Ay.getActiveInputProfile() !== E.m.STUDIO)
    },
    useValue: function() {
        return (0, r.bG)([A.Ay], () => A.Ay.getMode() === g.TB.PUSH_TO_TALK)
    },
    setValue: function(t) {
        var e, l;
        e = t ? g.TB.PUSH_TO_TALK : g.TB.VOICE_ACTIVITY, l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO], e === g.TB.PUSH_TO_TALK && _ && (0, a.openModalLazy)(async () => {
            let {
                default: t
            } = await i.e("10919").then(i.bind(i, 556506));
            return e => (0, n.jsx)(t, {
                title: c.intl.string(c.t.Kdt0Gb),
                confirmText: c.intl.string(c.t["1WjMbC"]),
                cancelText: c.intl.string(c.t.BddRzS),
                onConfirm: () => (0, S._)("PTT Limited Modal"),
                body: c.intl.string(c.t.NIozvt),
                ...e
            })
        }), u.A.setMode(e, void 0, void 0, {
            analyticsLocations: l
        })
    },
    useSearchTerms: () => [c.intl.string(c.t["pS+K2L"]), c.intl.string(c.t.nuFtHH)]
})