/** chunk id: 338145 params = (module,exports,require) **/
n.d(t, {
    w: () => E
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(827343),
    d = n(419954),
    c = n(430452),
    u = n(975571),
    _ = n(544028),
    m = n(780964),
    g = n(652215),
    A = n(985018);
let x = n(993830),
    h = n(413142),
    p = {
        page: g.liQ.USER_SETTINGS,
        section: g.JJy.SETTINGS_VOICE_AND_VIDEO
    };

function T() {
    let e = (0, a.bG)([_.A], () => (0, l.qB1)(_.A.theme));
    return (0, i.jsx)("img", {
        src: e ? x : h,
        width: 48,
        height: 32,
        alt: ""
    })
}
let E = (0, d.E2)(m.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [A.intl.string(A.t.t8Qhib), A.intl.string(A.t.hmfkCi)],
    usePredicate: function() {
        return (0, a.bG)([c.Ay], () => c.Ay.isInputProfileCustom() && c.Ay.isNoiseSuppressionSupported())
    },
    Component: function() {
        let e = s.useCallback(e => {
                o.A.setNoiseCancellation("KRISP" === e, p), o.A.setNoiseSuppression("STANDARD" === e, p)
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: n,
                isNoiseSuppressionSupported: d,
                isNoiseCancellationSupported: _
            } = (0, a.cf)([c.Ay], () => ({
                noiseCancellation: c.Ay.getNoiseCancellation(),
                noiseSuppression: c.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: c.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: c.Ay.isNoiseCancellationSupported()
            })),
            m = s.useMemo(() => {
                let e = [];
                return _ && e.push({
                    id: "krisp",
                    label: A.intl.string(A.t.rdoNzt),
                    value: "KRISP"
                }), d && e.push({
                    id: "standard",
                    label: A.intl.string(A.t.qXeYHw),
                    value: "STANDARD"
                }), e.push({
                    id: "disabled",
                    label: A.intl.string(A.t.wkYAlz),
                    value: "NONE"
                }), e
            }, [_, d]),
            x = _ ? A.intl.format(A.t["1q5aTp"], {
                helpArticle: u.A.getArticleURL(g.MVz.NOISE_SUPPRESSION)
            }) : A.intl.string(A.t.OWKjw5);
        return (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, i.jsx)(r.l6P, {
                label: A.intl.string(A.t.t8Qhib),
                description: x,
                layout: "horizontal",
                value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                onSelectionChange: e,
                options: m,
                selectionMode: "single",
                fullWidth: !0
            }), _ && (0, i.jsx)(T, {})]
        })
    }
})