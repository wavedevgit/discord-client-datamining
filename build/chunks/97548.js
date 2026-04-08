/** chunk id: 97548 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(397927),
    s = n(684013),
    o = n(964486),
    d = n(313961),
    c = n(652896),
    u = n(87001),
    _ = n(616356),
    h = n(961350),
    m = n(734057),
    f = n(555528),
    p = n(309010),
    g = n(41984),
    A = n(412477),
    x = n(75280),
    I = n(433560),
    E = n(324093),
    b = n(897720),
    v = n(392164),
    S = n(985018),
    C = n(300883);

function y(e) {
    var t, n;
    let y, T, N, {
            id: w,
            widget: L,
            size: j,
            locked: O,
            padding: P,
            borderWidth: R,
            opacity: D,
            horizontal: k,
            pinned: M,
            anchorTop: G,
            anchorLeft: z,
            showEmpty: U = !0
        } = e,
        V = k ? b.IV.HORIZONTAL : b.IV.VERTICAL,
        F = V === b.IV.VERTICAL,
        W = (0, r.bG)([f.A], () => {
            let e = f.A.getWidget(w);
            return !!(0, b.dO)(e) && !O && (e.meta.showAllStreams ?? !0)
        }, [w, O]),
        H = (0, r.bG)([p.A], () => p.A.getVoiceChannelId()),
        B = (0, r.bG)([m.A], () => m.A.getChannel(H)),
        Y = (0, r.bG)([h.default], () => h.default.getId()),
        {
            streamParticipants: X,
            activeStreams: Z,
            participantsVersion: K
        } = (t = G && F || z && k, n = !G && F || !z && k, y = (0, r.yK)([_.A], () => null == H ? [] : _.A.getAllActiveStreamsForChannel(H)), T = a.useMemo(() => new Set(y.map(e => (0, c._z)(e))), [y]), N = (0, r.bG)([d.A], () => null == H ? -1 : d.A.getParticipantsVersion(H)), {
            streamParticipants: (0, r.yK)([d.A, _.A], () => {
                if (null == H) return [];

                function e(e) {
                    return T.has((0, c._z)(e.stream))
                }
                let i = d.A.getStreamParticipants(H).filter(t => {
                    if (t.user.id === Y) return !1;
                    let n = _.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && I.O.has(n.state)) && (!!W || e(t))
                });
                return i.sort((i, a) => {
                    if (t) {
                        if (e(i) && !e(a)) return -1;
                        if (!e(i) && e(a)) return 1
                    } else if (n) {
                        if (e(i) && !e(a)) return 1;
                        if (!e(i) && e(a)) return -1
                    }
                    return i.user.username.localeCompare(a.user.username)
                }), i
            }, [H, T, Y, W, t, n]),
            activeStreams: T,
            participantsVersion: N
        }),
        J = X.length,
        Q = (0, r.bG)([u.A], () => u.A.getWindowState(v.f), []),
        {
            tileWidth: q,
            tileHeight: $,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei
        } = (0, E.K2)({
            tileCount: J,
            padding: P,
            borderWidth: R,
            isVertical: F,
            widgetSize: j
        }),
        ea = {
            id: w,
            widget: L,
            layout: V,
            participants: X.length,
            padding: P,
            borderWidth: R,
            widgetMinMaxSizes: ei,
            containerSize: {
                width: ee,
                height: et
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: Q?.height ?? et,
                right: Q?.width ?? ee
            },
            locked: O
        };
    (0, E.k1)({
        id: w,
        streamParticipants: X,
        layout: V,
        widgetLayoutSpecs: ea
    });
    let er = null == B || 0 === Z.size && O || 0 === J && !O;
    return (a.useEffect(() => {
        s.A.setGpuBoostRequested(g.y7.OVERLAY_VIDEO_STREAM_RENDERING, !er)
    }, [er]), (0, o.Ay)(() => () => {
        s.A.setGpuBoostRequested(g.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1)
    }), (er || !M) && O) ? null : er && !O ? U ? O ? null : (0, i.jsx)(A.g, {
        emptyText: S.intl.string(S.t["T6+rXy"]),
        icon: l.Fzq,
        absolute: !0
    }) : null : (0, i.jsx)("div", {
        className: C.u,
        style: {
            opacity: D
        },
        ref: en,
        children: (0, i.jsx)(x.A, {
            widgetId: w,
            tileWidth: q,
            tileHeight: $,
            locked: O,
            layout: V,
            activeStreams: Z,
            streamParticipants: X,
            participantsVersion: K,
            pinned: M,
            padding: P
        })
    })
}