/** chunk id: 903427 params = (module,exports,require) **/
n.d(t, {
    K: () => T,
    P: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(311907),
    r = n(192308),
    o = n(827343),
    d = n(793574),
    c = n(419954),
    u = n(430452),
    m = n(780964),
    _ = n(944993),
    g = n(509381),
    A = n(731854),
    x = n(985018);
let h = !l.Av;

function p() {
    return (0, a.bG)([u.Ay], () => u.Ay.getMode() === A.TB.PUSH_TO_TALK)
}
let T = (0, c.zD)(m.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function() {
        return l.Av ? x.intl.string(x.t.tG4Np5) : x.intl.string(x.t.JMyQin)
    },
    useSubtitle: function() {
        let e = (0, a.bG)([u.Ay], () => u.Ay.getMode());
        return s.useMemo(() => {
            if (!l.Av && e === A.TB.PUSH_TO_TALK) return x.intl.format(x.t["VHI4+Y"], {
                onDownloadClick: () => (0, _._)("Help Text PTT")
            })
        }, [e])
    },
    usePredicate: function() {
        return (0, a.bG)([u.Ay], () => u.Ay.getActiveInputProfile() !== g.m.STUDIO)
    },
    useValue: function() {
        return (0, a.bG)([u.Ay], () => u.Ay.getMode() === A.TB.PUSH_TO_TALK)
    },
    setValue: function(e) {
        var t, s;
        t = e ? A.TB.PUSH_TO_TALK : A.TB.VOICE_ACTIVITY, s = [d.A.USER_SETTINGS_VOICE_AND_VIDEO], t === A.TB.PUSH_TO_TALK && h && (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await n.e("10919").then(n.bind(n, 556506));
            return t => (0, i.jsx)(e, {
                title: x.intl.string(x.t.Kdt0Gb),
                confirmText: x.intl.string(x.t["1WjMbC"]),
                cancelText: x.intl.string(x.t.BddRzS),
                onConfirm: () => (0, _._)("PTT Limited Modal"),
                body: x.intl.string(x.t.NIozvt),
                ...t
            })
        }), o.A.setMode(t, void 0, void 0, {
            analyticsLocations: s
        })
    },
    useSearchTerms: () => [x.intl.string(x.t["pS+K2L"]), x.intl.string(x.t.nuFtHH)]
})