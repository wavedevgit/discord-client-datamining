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
    d = i(430452),
    T = i(975571),
    A = i(544028),
    S = i(780964),
    c = i(652215),
    E = i(985018);
let g = i(993830),
    _ = i(413142),
    I = {
        page: c.liQ.USER_SETTINGS,
        section: c.JJy.SETTINGS_VOICE_AND_VIDEO
    };

function O() {
    let t = (0, r.bG)([A.A], () => (0, s.qB1)(A.A.theme));
    return (0, n.jsx)("img", {
        src: t ? g : _,
        width: 48,
        height: 32,
        alt: ""
    })
}
let N = (0, o.E2)(S.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [E.intl.string(E.t.t8Qhib), E.intl.string(E.t.hmfkCi)],
    usePredicate: function() {
        return (0, r.bG)([d.A], () => d.A.isInputProfileCustom() && d.A.isNoiseSuppressionSupported())
    },
    Component: function() {
        let t = l.useCallback(t => {
                a.A.setNoiseCancellation("KRISP" === t, I), a.A.setNoiseSuppression("STANDARD" === t, I)
            }, []),
            {
                noiseCancellation: e,
                noiseSuppression: i,
                isNoiseSuppressionSupported: o,
                isNoiseCancellationSupported: A
            } = (0, r.cf)([d.A], () => ({
                noiseCancellation: d.A.getNoiseCancellation(),
                noiseSuppression: d.A.getNoiseSuppression(),
                isNoiseSuppressionSupported: d.A.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: d.A.isNoiseCancellationSupported()
            })),
            S = l.useMemo(() => {
                let t = [];
                return A && t.push({
                    id: "krisp",
                    label: E.intl.string(E.t.rdoNzt),
                    value: "KRISP"
                }), o && t.push({
                    id: "standard",
                    label: E.intl.string(E.t.qXeYHw),
                    value: "STANDARD"
                }), t.push({
                    id: "disabled",
                    label: E.intl.string(E.t.wkYAlz),
                    value: "NONE"
                }), t
            }, [A, o]),
            g = A ? E.intl.format(E.t["1q5aTp"], {
                helpArticle: T.A.getArticleURL(c.MVz.NOISE_SUPPRESSION)
            }) : E.intl.string(E.t.OWKjw5);
        return (0, n.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, n.jsx)(u.l6P, {
                label: E.intl.string(E.t.t8Qhib),
                description: g,
                layout: "horizontal",
                value: e ? "KRISP" : i ? "STANDARD" : "NONE",
                onSelectionChange: t,
                options: S,
                selectionMode: "single",
                fullWidth: !0
            }), A && (0, n.jsx)(O, {})]
        })
    }
})