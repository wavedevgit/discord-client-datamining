/** chunk id: 982406 params = (module,exports,require) **/
a.d(t, {
    A: () => u
});
var n = a(627968),
    r = a(64700),
    o = a(503698),
    i = a.n(o),
    c = a(776231),
    l = a(664111),
    s = a(67281),
    _ = a(838541),
    d = a(525078);

function u(e) {
    let {
        attachment: t,
        posterUrl: a,
        guildId: o,
        className: u
    } = e, m = t.width ?? 0, p = t.height ?? 0, b = m >= p ? "landscape" : "portrait", C = (0, c.AE)({
        src: a,
        width: m,
        height: p
    }), f = r.useCallback(e => {
        let {
            playerState: a,
            isControlBarExpanded: r
        } = e;
        return (0, n.jsx)(s.A, {
            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
            participantIds: t.clip_participants?.map(e => {
                let {
                    id: t
                } = e;
                return t
            }) ?? [],
            applicationId: t.application?.id,
            title: t.title,
            guildId: o,
            playerState: a,
            isControlBarExpanded: r
        })
    }, [t, o]);
    return (0, n.jsx)("div", {
        className: i()(d.k, u),
        style: {
            aspectRatio: `${m} / ${p}`,
            maxHeight: _.Rk
        },
        children: (0, n.jsx)(l.A, {
            src: t.url,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: C,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: !1,
            orientation: b,
            renderPersistentOverlay: f,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0
        })
    })
}