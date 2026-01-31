/** chunk id: 971961, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => E
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    u = n(397927),
    o = n(486503),
    a = n(253932),
    c = n(957565),
    s = n(698441),
    d = n(691012),
    g = n(985018);

function E(t, e) {
    let n = a.Q_.useSetting(),
        {
            tidaWebformEnabled: E
        } = o.A.useExperiment({
            location: "useCopyEventImageLinkItem"
        }, {
            autoTrackExposure: !1
        }),
        f = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(t)),
        A = null != f ? (0, d.A)(f) : null,
        y = "event-image" === e.getAttribute("data-type"),
        p = r.useCallback(() => {
            null != A && (0, c.C)(A)
        }, [A]);
    return c.p5 && n && E && null != A && y ? (0, l.jsx)(u.Drp, {
        id: "copy-event-image-link",
        label: g.intl.string(g.t["8xHmxo"]),
        action: p,
        icon: u.qYV
    }) : null
}