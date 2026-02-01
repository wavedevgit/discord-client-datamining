/** chunk id: 903427, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => O,
    P: () => I
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(311907),
    u = i(192308),
    a = i(827343),
    o = i(793574),
    d = i(419954),
    T = i(430452),
    A = i(780964),
    S = i(825468),
    c = i(509381),
    E = i(731854),
    g = i(985018);
let _ = !s.Av;

function I() {
    return (0, r.bG)([T.A], () => T.A.getMode() === E.TB.PUSH_TO_TALK)
}
let O = (0, d.zD)(A.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function() {
        return s.Av ? g.intl.string(g.t.tG4Np5) : g.intl.string(g.t.JMyQin)
    },
    useSubtitle: function() {
        let t = (0, r.bG)([T.A], () => T.A.getMode());
        return l.useMemo(() => {
            if (!s.Av && t === E.TB.PUSH_TO_TALK) return g.intl.format(g.t["VHI4+Y"], {
                onDownloadClick: () => (0, S._)("Help Text PTT")
            })
        }, [t])
    },
    usePredicate: function() {
        return (0, r.bG)([T.A], () => T.A.getActiveInputProfile() !== c.my.STUDIO)
    },
    useValue: function() {
        return (0, r.bG)([T.A], () => T.A.getMode() === E.TB.PUSH_TO_TALK)
    },
    setValue: function(t) {
        var e, l;
        e = t ? E.TB.PUSH_TO_TALK : E.TB.VOICE_ACTIVITY, l = [o.A.USER_SETTINGS_VOICE_AND_VIDEO], e === E.TB.PUSH_TO_TALK && _ && (0, u.openModalLazy)(async () => {
            let {
                default: t
            } = await i.e("10919").then(i.bind(i, 556506));
            return e => (0, n.jsx)(t, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable
                    }))), n.forEach(function(e) {
                        var n;
                        n = i[e], e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    })
                }
                return t
            }({
                title: g.intl.string(g.t.Kdt0Gb),
                confirmText: g.intl.string(g.t["1WjMbC"]),
                cancelText: g.intl.string(g.t.BddRzS),
                onConfirm: () => (0, S._)("PTT Limited Modal"),
                body: g.intl.string(g.t.NIozvt)
            }, e))
        }), a.A.setMode(e, void 0, void 0, {
            analyticsLocations: l
        })
    },
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)]
})