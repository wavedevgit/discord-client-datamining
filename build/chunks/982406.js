/** chunk id: 982406 params = (module,exports,require) **/
a.d(t, {
    A: () => p
});
var n = a(627968),
    o = a(64700),
    r = a(503698),
    i = a.n(r),
    c = a(776231),
    _ = a(664111),
    l = a(67281),
    s = a(838541),
    d = a(878159);

function p(e) {
    let {
        attachment: t,
        posterUrl: a,
        guildId: r,
        className: p
    } = e, m = t.width ?? 0, u = t.height ?? 0, b = m >= u ? "landscape" : "portrait", f = (0, c.AE)({
        src: a,
        width: m,
        height: u
    }), C = o.useCallback(e => {
        let {
            playerState: a,
            isControlBarExpanded: o
        } = e;
        return (0, n.jsx)(l.A, {
            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
            participantIds: t.clip_participants?.map(e => {
                let {
                    id: t
                } = e;
                return t
            }) ?? [],
            applicationId: t.application?.id,
            title: t.title,
            guildId: r,
            playerState: a,
            isControlBarExpanded: o
        })
    }, [t, r]);
    return (0, n.jsx)("div", {
        className: i()(d.k, p),
        style: {
            aspectRatio: `${m} / ${u}`,
            maxHeight: s.Rk
        },
        children: (0, n.jsx)(_.A, {
            src: t.url,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            poster: f,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: !1,
            orientation: b,
            renderPersistentOverlay: C,
            targetTimeSec: 1 / 0,
            parentTransitionState: null,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0
        })
    })
}