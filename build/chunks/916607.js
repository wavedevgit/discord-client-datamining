/** chunk id: 916607 params = (module,exports,require) **/
n.d(t, {
    K: () => T,
    P: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(574381),
    r = n(311907),
    a = n(192308),
    o = n(827343),
    d = n(793574),
    c = n(419954),
    u = n(430452),
    m = n(780964),
    g = n(944993),
    _ = n(509381),
    x = n(731854),
    h = n(985018);
let A = !l.Av;

function p() {
    return (0, r.bG)([u.Ay], () => u.Ay.getMode() === x.TB.PUSH_TO_TALK)
}
let T = (0, c.zD)(m.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function() {
        return l.Av ? h.intl.string(h.t.tG4Np5) : h.intl.string(h.t.JMyQin)
    },
    useSubtitle: function() {
        let e = (0, r.bG)([u.Ay], () => u.Ay.getMode());
        return s.useMemo(() => {
            if (!l.Av && e === x.TB.PUSH_TO_TALK) return h.intl.format(h.t["VHI4+Y"], {
                onDownloadClick: () => (0, g._)("Help Text PTT")
            })
        }, [e])
    },
    usePredicate: function() {
        return (0, r.bG)([u.Ay], () => u.Ay.getActiveInputProfile() !== _.m.STUDIO)
    },
    useValue: function() {
        return (0, r.bG)([u.Ay], () => u.Ay.getMode() === x.TB.PUSH_TO_TALK)
    },
    setValue: function(e) {
        var t, s;
        t = e ? x.TB.PUSH_TO_TALK : x.TB.VOICE_ACTIVITY, s = [d.A.USER_SETTINGS_VOICE_AND_VIDEO], t === x.TB.PUSH_TO_TALK && A && (0, a.openModalLazy)(async () => {
            let {
                default: e
            } = await n.e("10919").then(n.bind(n, 556506));
            return t => (0, i.jsx)(e, {
                title: h.intl.string(h.t.Kdt0Gb),
                confirmText: h.intl.string(h.t["1WjMbC"]),
                cancelText: h.intl.string(h.t.BddRzS),
                onConfirm: () => (0, g._)("PTT Limited Modal"),
                body: h.intl.string(h.t.NIozvt),
                ...t
            })
        }), o.A.setMode(t, void 0, void 0, {
            analyticsLocations: s
        })
    },
    useSearchTerms: () => [h.intl.string(h.t["pS+K2L"]), h.intl.string(h.t.nuFtHH)]
})