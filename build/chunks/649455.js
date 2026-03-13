/** chunk id: 649455 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    s = n(953584),
    o = n(168820),
    d = n(77350);

function c(e, t) {
    let n = e?.url ?? "",
        c = (0, r.bG)([s.Ay], () => s.Ay.isVideoStatsEnabled(n)),
        u = l.useCallback(() => {
            "" !== n && (0, s.FM)(n)
        }, [n]);
    if (null == e || !(0, d.XB)(e.contentType) || t?.shouldHideMediaOptions === !0) return null;
    let {
        enableVideoStatsForNerds: g
    } = (0, o.G)({
        location: "useVideoStatsMenuItem"
    });
    return g ? (0, i.jsx)(a.sLh, {
        id: "video-stats-for-nerds",
        label: "Stats for Nerds",
        leadingAccessory: {
            type: "icon",
            icon: a.mir
        },
        checked: c,
        action: u
    }) : null
}