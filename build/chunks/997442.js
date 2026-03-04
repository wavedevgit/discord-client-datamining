/** chunk id: 997442, original params: t,e,i (module,exports,require) **/
i.d(e, {
    l: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(246605),
    a = i(419954),
    r = i(274184),
    u = i(780964),
    o = i(31760);
let d = (0, a.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function() {
        let t = (0, l.bG)([r.Ay], () => r.Ay.getSurveyOverride());
        return (0, n.jsx)(o.q, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: t ?? null,
            setOverride: t => s.xr(t),
            fetchOverride: t => s.BC(t, !0) ?? null
        })
    }
})