/** Chunk was on 4670 **/
/** chunk id: 997442, original params: e,t,i (module,exports,require) **/
i.d(t, {
    l: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(246605),
    r = i(419954),
    a = i(274184),
    u = i(780964),
    o = i(31760);
let d = (0, r.E2)(u.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function() {
        let e = (0, l.bG)([a.Ay], () => a.Ay.getSurveyOverride());
        return (0, n.jsx)(o.q, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: null != e ? e : null,
            setOverride: e => s.xr(e),
            fetchOverride: e => {
                var t;
                return null != (t = s.BC(e, !0)) ? t : null
            }
        })
    }
})