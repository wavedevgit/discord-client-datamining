/** Chunk was on 28979 **/
/** chunk id: 929548, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => I
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(158954),
    u = i(311907),
    a = i(77729),
    o = i(839214),
    T = i(419954),
    d = i(430452),
    A = i(780964),
    S = i(991793),
    E = i(731854),
    g = i(985018);
let _ = (0, o.D)(() => ({
    isUploading: !1,
    isDisabled: !1
}));
async function c() {
    await (0, S.q5)({
        onUploadStart: () => _.setState({
            isUploading: !0
        }),
        onUploadFinish: () => _.setState({
            isUploading: !1,
            isDisabled: !0
        })
    })
}
let I = (0, T.E2)(A.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [g.intl.string(g.t["726JHL"]), g.intl.string(g.t.EbwFfR), g.intl.string(g.t.nuPtYi)],
    usePredicate: function() {
        let t = (0, u.bG)([d.A], () => d.A.supports(E.O5.DEBUG_LOGGING));
        return s.Av && t && null != a.A.fileManager.readLogFiles
    },
    Component: function() {
        let t = (0, u.bG)([d.A], () => d.A.getDebugLogging()),
            e = _.useField("isUploading"),
            i = _.useField("isDisabled"),
            s = l.useId();
        return (0, n.jsxs)("fieldset", {
            children: [(0, n.jsx)(r.AC4, {
                tag: "legend",
                id: s,
                children: g.intl.string(g.t["FjN+et"])
            }), (0, n.jsxs)(r.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, n.jsx)(r.dOG, {
                    label: g.intl.string(g.t["726JHL"]),
                    description: g.intl.string(g.t["/7ak9Q"]),
                    checked: t,
                    onChange: S.p9
                }), (0, n.jsx)("div", {
                    role: "group",
                    "aria-labelledby": s,
                    children: (0, n.jsxs)(r.e2v, {
                        children: [(0, n.jsx)(r.$nd, {
                            variant: "secondary",
                            text: g.intl.string(g.t.EbwFfR),
                            onClick: c,
                            loading: e,
                            disabled: i,
                            "aria-label": g.intl.string(g.t.aY1OH2)
                        }), (0, n.jsx)(r.$nd, {
                            variant: "secondary",
                            text: g.intl.string(g.t.nuPtYi),
                            onClick: S.G0,
                            "aria-label": g.intl.string(g.t["L/hFOe"])
                        })]
                    })
                })]
            })]
        })
    }
})