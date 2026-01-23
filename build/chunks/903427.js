/** Chunk was on 28979 **/
/** chunk id: 903427, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => g,
    P: () => _
});
var n = i(64700),
    l = i(574381),
    s = i(311907),
    r = i(793574),
    u = i(419954),
    a = i(430452),
    o = i(780964),
    T = i(330688),
    A = i(825468),
    d = i(509381),
    S = i(731854),
    E = i(985018);

function _() {
    return (0, s.bG)([a.A], () => a.A.getMode() === S.TB.PUSH_TO_TALK)
}
let g = (0, u.zD)(o.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function() {
        return l.Av ? E.intl.string(E.t.tG4Np5) : E.intl.string(E.t.JMyQin)
    },
    useSubtitle: function() {
        let t = (0, s.bG)([a.A], () => a.A.getMode());
        return n.useMemo(() => {
            if (!l.Av && t === S.TB.PUSH_TO_TALK) return E.intl.format(E.t["VHI4+Y"], {
                onDownloadClick: () => (0, A._)("Help Text PTT")
            })
        }, [t])
    },
    usePredicate: function() {
        return (0, s.bG)([a.A], () => a.A.getActiveInputProfile() !== d.my.STUDIO)
    },
    useValue: function() {
        return (0, s.bG)([a.A], () => a.A.getMode() === S.TB.PUSH_TO_TALK)
    },
    setValue: function(t) {
        (0, T.TU)(t ? S.TB.PUSH_TO_TALK : S.TB.VOICE_ACTIVITY, [r.A.USER_SETTINGS_VOICE_AND_VIDEO])
    },
    useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)]
})