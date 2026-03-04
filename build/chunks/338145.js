/** chunk id: 338145, original params: t,e,i (module,exports,require) **/
i.d(e, {
    w: () => N
}), i(321073);
var n = i(627968),
    l = i(64700),
    s = i(158954),
    a = i(311907),
    r = i(397927),
    u = i(827343),
    o = i(419954),
    d = i(430452),
    A = i(975571),
    T = i(544028),
    S = i(780964),
    E = i(652215),
    g = i(985018);
let c = i(993830),
    _ = i(413142),
    I = {
        page: E.liQ.USER_SETTINGS,
        section: E.JJy.SETTINGS_VOICE_AND_VIDEO
    };

function C() {
    let t = (0, a.bG)([T.A], () => (0, s.qB1)(T.A.theme));
    return (0, n.jsx)("img", {
        src: t ? c : _,
        width: 48,
        height: 32,
        alt: ""
    })
}
let N = (0, o.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t.t8Qhib), g.intl.string(g.t.hmfkCi)],
    usePredicate: function() {
        return (0, a.bG)([d.Ay], () => d.Ay.isInputProfileCustom() && d.Ay.isNoiseSuppressionSupported())
    },
    Component: function() {
        let t = l.useCallback(t => {
                u.A.setNoiseCancellation("KRISP" === t, I), u.A.setNoiseSuppression("STANDARD" === t, I)
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: T
            } = (0, a.cf)([d.Ay], () => ({
                noiseCancellation: d.Ay.getNoiseCancellation(),
                noiseSuppression: d.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: d.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: d.Ay.isNoiseCancellationSupported()
            })),
            S = l.useMemo(() => {
                let t = [];
                return T && t.push({
                    id: "krisp",
                    label: g.intl.string(g.t.rdoNzt),
                    value: "KRISP"
                }), o && t.push({
                    id: "standard",
                    label: g.intl.string(g.t.qXeYHw),
                    value: "STANDARD"
                }), t.push({
                    id: "disabled",
                    label: g.intl.string(g.t.wkYAlz),
                    value: "NONE"
                }), t
            }, [T, o]),
            c = T ? g.intl.format(g.t["1q5aTp"], {
                helpArticle: A.A.getArticleURL(E.MVz.NOISE_SUPPRESSION)
            }) : g.intl.string(g.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, n.jsx)(r.l6P, {
                label: g.intl.string(g.t.t8Qhib),
                description: c,
                layout: "horizontal",
                value: e ? "KRISP" : i ? "STANDARD" : "NONE",
                onSelectionChange: t,
                options: S,
                selectionMode: "single",
                fullWidth: !0
            }), T && (0, n.jsx)(C, {})]
        })
    }
})