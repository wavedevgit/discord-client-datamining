/** Chunk was on 7869 **/
/** chunk id: 971961, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    o = n(397927),
    u = n(486503),
    a = n(253932),
    c = n(957565),
    s = n(698441),
    d = n(691012),
    g = n(985018);

function E(e, t) {
    let n = a.Q_.useSetting(),
        {
            tidaWebformEnabled: E
        } = u.A.useExperiment({
            location: "useCopyEventImageLinkItem"
        }, {
            autoTrackExposure: !1
        }),
        f = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(e)),
        A = null != f ? (0, d.A)(f) : null,
        y = "event-image" === t.getAttribute("data-type"),
        p = r.useCallback(() => {
            null != A && (0, c.C)(A)
        }, [A]);
    return c.p5 && n && E && null != A && y ? (0, l.jsx)(o.Drp, {
        id: "copy-event-image-link",
        label: g.intl.string(g.t["8xHmxo"]),
        action: p,
        icon: o.qYV
    }) : null
}