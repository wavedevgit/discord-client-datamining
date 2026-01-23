/** Chunk was on 28979 **/
/** chunk id: 338145, original params: t,e,i (module,exports,require) **/
i.d(e, {
    w: () => N
}), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(311907),
    u = i(397927),
    a = i(827343),
    o = i(419954),
    T = i(430452),
    A = i(975571),
    d = i(544028),
    S = i(780964),
    E = i(130222),
    _ = i(652215),
    g = i(985018);
let c = i(993830),
    I = i(413142);

function O() {
    let t = (0, r.bG)([d.A], () => (0, s.qB1)(d.A.theme));
    return (0, n.jsx)("img", {
        src: t ? c : I,
        width: 48,
        height: 32,
        alt: ""
    })
}
let N = (0, o.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function() {
        return (0, r.bG)([T.A], () => T.A.isInputProfileCustom() && T.A.isNoiseSuppressionSupported())
    },
    Component: function() {
        let t = l.useCallback(t => {
                a.A.setNoiseCancellation(t === E.ls.KRISP, E.Us), a.A.setNoiseSuppression(t === E.ls.STANDARD, E.Us)
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: d
            } = (0, r.cf)([T.A], () => ({
                noiseCancellation: T.A.getNoiseCancellation(),
                noiseSuppression: T.A.getNoiseSuppression(),
                isNoiseSuppressionSupported: T.A.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: T.A.isNoiseCancellationSupported()
            })),
            S = i ? E.ls.STANDARD : E.ls.NONE,
            c = e ? E.ls.KRISP : S,
            I = l.useMemo(() => {
                let t = [];
                return d && t.push({
                    id: "krisp",
                    label: g.intl.string(g.t.rdoNzt),
                    value: E.ls.KRISP
                }), o && t.push({
                    id: "standard",
                    label: g.intl.string(g.t.qXeYHw),
                    value: E.ls.STANDARD
                }), t.push({
                    id: "disabled",
                    label: g.intl.string(g.t.wkYAlz),
                    value: E.ls.NONE
                }), t
            }, [d, o]),
            N = d ? g.intl.format(g.t["1q5aTp"], {
                helpArticle: A.A.getArticleURL(_.MVz.NOISE_SUPPRESSION)
            }) : g.intl.string(g.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, n.jsx)(u.l6P, {
                label: g.intl.string(g.t.t8Qhib),
                description: N,
                layout: "horizontal",
                value: c,
                onSelectionChange: t,
                options: I,
                selectionMode: "single",
                fullWidth: !0
            }), d && (0, n.jsx)(O, {})]
        })
    }
})