/** Chunk was on 4670 **/
/** chunk id: 819188, original params: e,t,i (module,exports,require) **/
i.d(t, {
    B: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(256311),
    r = i(883600),
    a = i(419954),
    u = i(780964),
    o = i(31760);
let d = (0, a.E2)(u.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function() {
        let e = (0, l.bG)([r.A], () => r.A.overrideId()),
            t = async e => {
                var t;
                let i = r.A.getChangelog(e, "en-US");
                return null != i ? i : null != (t = await s.A.fetchChangelog(e, "en-US", !1, !0)) ? t : null
            };
        return (0, n.jsx)(o.q, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: null != e ? e : null,
            setOverride: e => s.A.setChangelogOverride(e),
            fetchOverride: t
        })
    }
})