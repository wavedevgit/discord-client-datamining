/** chunk id: 338145 params = (module,exports,require) **/
n.d(t, {
    w: () => T
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
    g = n(780964),
    A = n(652215),
    m = n(985018);
let h = n(993830),
    p = n(413142),
    x = {
        page: A.liQ.USER_SETTINGS,
        section: A.JJy.SETTINGS_VOICE_AND_VIDEO
    };

function E() {
    let e = (0, a.bG)([_.A], () => (0, l.qB1)(_.A.theme));
    return (0, i.jsx)("img", {
        src: e ? h : p,
        width: 48,
        height: 32,
        alt: ""
    })
}
let T = (0, d.E2)(g.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.t8Qhib), m.intl.string(m.t.hmfkCi)],
    usePredicate: function() {
        return (0, a.bG)([c.Ay], () => c.Ay.isInputProfileCustom() && c.Ay.isNoiseSuppressionSupported())
    },
    Component: function() {
        let e = s.useCallback(e => {
                o.A.setNoiseCancellation("KRISP" === e, x), o.A.setNoiseSuppression("STANDARD" === e, x)
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
            g = s.useMemo(() => {
                let e = [];
                return _ && e.push({
                    id: "krisp",
                    label: m.intl.string(m.t.rdoNzt),
                    value: "KRISP"
                }), d && e.push({
                    id: "standard",
                    label: m.intl.string(m.t.qXeYHw),
                    value: "STANDARD"
                }), e.push({
                    id: "disabled",
                    label: m.intl.string(m.t.wkYAlz),
                    value: "NONE"
                }), e
            }, [_, d]),
            h = _ ? m.intl.format(m.t["1q5aTp"], {
                helpArticle: u.A.getArticleURL(A.MVz.NOISE_SUPPRESSION)
            }) : m.intl.string(m.t.OWKjw5);
        return (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, i.jsx)(r.l6P, {
                label: m.intl.string(m.t.t8Qhib),
                description: h,
                layout: "horizontal",
                value: t ? "KRISP" : n ? "STANDARD" : "NONE",
                onSelectionChange: e,
                options: g,
                selectionMode: "single",
                fullWidth: !0
            }), _ && (0, i.jsx)(E, {})]
        })
    }
})