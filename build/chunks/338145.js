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
    d = i(975571),
    A = i(544028),
    S = i(780964),
    E = i(130222),
    g = i(652215),
    _ = i(985018);
let c = i(993830),
    I = i(413142);

function O() {
    let t = (0, r.bG)([A.A], () => (0, s.qB1)(A.A.theme));
    return (0, n.jsx)("img", {
        src: t ? c : I,
        width: 48,
        height: 32,
        alt: ""
    })
}
let N = (0, o.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.t8Qhib), _.intl.string(_.t.hmfkCi)],
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
                isNoiseCancellationSupported: A
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
                return A && t.push({
                    id: "krisp",
                    label: _.intl.string(_.t.rdoNzt),
                    value: E.ls.KRISP
                }), o && t.push({
                    id: "standard",
                    label: _.intl.string(_.t.qXeYHw),
                    value: E.ls.STANDARD
                }), t.push({
                    id: "disabled",
                    label: _.intl.string(_.t.wkYAlz),
                    value: E.ls.NONE
                }), t
            }, [A, o]),
            N = A ? _.intl.format(_.t["1q5aTp"], {
                helpArticle: d.A.getArticleURL(g.MVz.NOISE_SUPPRESSION)
            }) : _.intl.string(_.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, n.jsx)(u.l6P, {
                label: _.intl.string(_.t.t8Qhib),
                description: N,
                layout: "horizontal",
                value: c,
                onSelectionChange: t,
                options: I,
                selectionMode: "single",
                fullWidth: !0
            }), A && (0, n.jsx)(O, {})]
        })
    }
})