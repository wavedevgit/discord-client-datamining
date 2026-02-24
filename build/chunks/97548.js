/** chunk id: 97548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(684013),
    o = n(964486),
    u = n(313961),
    d = n(652896),
    c = n(87001),
    h = n(616356),
    m = n(961350),
    g = n(734057),
    p = n(555528),
    A = n(309010),
    f = n(41984),
    x = n(412477),
    E = n(75280),
    S = n(433560),
    v = n(324093),
    C = n(897720),
    I = n(392164),
    T = n(985018),
    _ = n(780682);

function y(e) {
    var t, n;
    let y, j, b, {
            id: w,
            widget: O,
            size: N,
            locked: M,
            padding: R,
            borderWidth: k,
            opacity: L,
            horizontal: D,
            pinned: z,
            anchorTop: P,
            anchorLeft: G,
            showEmpty: V = !0
        } = e,
        U = D ? C.IV.HORIZONTAL : C.IV.VERTICAL,
        H = U === C.IV.VERTICAL,
        Y = (0, r.bG)([p.A], () => {
            let e = p.A.getWidget(w);
            return !!(0, C.dO)(e) && !M && (e.meta.showAllStreams ?? !0)
        }, [w, M]),
        F = (0, r.bG)([A.A], () => A.A.getVoiceChannelId()),
        Z = (0, r.bG)([g.A], () => g.A.getChannel(F)),
        W = (0, r.bG)([m.default], () => m.default.getId()),
        {
            streamParticipants: X,
            activeStreams: K,
            participantsVersion: B
        } = (t = P && H || G && D, n = !P && H || !G && D, y = (0, r.yK)([h.A], () => null == F ? [] : h.A.getAllActiveStreamsForChannel(F)), j = l.useMemo(() => new Set(y.map(e => (0, d._z)(e))), [y]), b = (0, r.bG)([u.A], () => null == F ? -1 : u.A.getParticipantsVersion(F)), {
            streamParticipants: (0, r.yK)([u.A, h.A], () => {
                if (null == F) return [];

                function e(e) {
                    return j.has((0, d._z)(e.stream))
                }
                let i = u.A.getStreamParticipants(F).filter(t => {
                    if (t.user.id === W) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && S.O.has(n.state)) && (!!Y || e(t))
                });
                return i.sort((i, l) => {
                    if (t) {
                        if (e(i) && !e(l)) return -1;
                        if (!e(i) && e(l)) return 1
                    } else if (n) {
                        if (e(i) && !e(l)) return 1;
                        if (!e(i) && e(l)) return -1
                    }
                    return i.user.username.localeCompare(l.user.username)
                }), i
            }, [F, j, W, Y, t, n]),
            activeStreams: j,
            participantsVersion: b
        }),
        q = X.length,
        Q = (0, r.bG)([c.A], () => c.A.getWindowState(I.f), []),
        {
            tileWidth: J,
            tileHeight: $,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei
        } = (0, v.K2)({
            tileCount: q,
            padding: R,
            borderWidth: k,
            isVertical: H,
            widgetSize: N
        }),
        el = {
            id: w,
            widget: O,
            layout: U,
            participants: X.length,
            padding: R,
            borderWidth: k,
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
            locked: M
        };
    (0, v.k1)({
        id: w,
        streamParticipants: X,
        layout: U,
        widgetLayoutSpecs: el
    });
    let er = null == Z || 0 === K.size && M || 0 === q && !M;
    return (l.useEffect(() => {
        a.A.setGpuBoostRequested(f.y7.OVERLAY_VIDEO_STREAM_RENDERING, !er)
    }, [er]), (0, o.Ay)(() => () => {
        a.A.setGpuBoostRequested(f.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1)
    }), (er || !z) && M) ? null : er && !M ? V ? M ? null : (0, i.jsx)(x.g, {
        emptyText: T.intl.string(T.t["T6+rXy"]),
        icon: s.Fzq,
        absolute: !0
    }) : null : (0, i.jsx)("div", {
        className: _.u,
        style: {
            opacity: L
        },
        ref: en,
        children: (0, i.jsx)(E.A, {
            widgetId: w,
            tileWidth: J,
            tileHeight: $,
            locked: M,
            layout: U,
            activeStreams: K,
            streamParticipants: X,
            participantsVersion: B,
            pinned: z,
            padding: R
        })
    })
}