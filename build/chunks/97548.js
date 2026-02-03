/** chunk id: 97548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048), n(638769);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(684013),
    o = n(964486),
    u = n(313961),
    c = n(652896),
    d = n(87001),
    h = n(616356),
    p = n(961350),
    f = n(734057),
    g = n(555528),
    m = n(309010),
    y = n(41984),
    A = n(412477),
    v = n(75280),
    b = n(433560),
    E = n(324093),
    O = n(897720),
    x = n(392164),
    _ = n(985018),
    S = n(780682);

function I(e) {
    var t, n, I, j;
    let T, C, N, {
            id: w,
            widget: P,
            size: D,
            locked: R,
            padding: k,
            borderWidth: M,
            opacity: L,
            horizontal: U,
            pinned: G,
            anchorTop: V,
            anchorLeft: z,
            showEmpty: F = !0
        } = e,
        H = U ? O.IV.HORIZONTAL : O.IV.VERTICAL,
        Y = H === O.IV.VERTICAL,
        W = (0, l.bG)([g.A], () => {
            var e;
            let t = g.A.getWidget(w);
            return !!(0, O.dO)(t) && !R && (null == (e = t.meta.showAllStreams) || e)
        }, [w, R]),
        K = (0, l.bG)([m.A], () => m.A.getVoiceChannelId()),
        B = (0, l.bG)([f.A], () => f.A.getChannel(K)),
        Z = (0, l.bG)([p.default], () => p.default.getId()),
        {
            streamParticipants: X,
            activeStreams: J,
            participantsVersion: Q
        } = (I = V && Y || z && U, j = !V && Y || !z && U, T = (0, l.yK)([h.A], () => null == K ? [] : h.A.getAllActiveStreamsForChannel(K)), C = r.useMemo(() => new Set(T.map(e => (0, c._z)(e))), [T]), N = (0, l.bG)([u.A], () => null == K ? -1 : u.A.getParticipantsVersion(K)), {
            streamParticipants: (0, l.yK)([u.A, h.A], () => {
                if (null == K) return [];

                function e(e) {
                    return C.has((0, c._z)(e.stream))
                }
                let t = u.A.getStreamParticipants(K).filter(t => {
                    if (t.user.id === Z) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && b.O.has(n.state)) && (!!W || e(t))
                });
                return t.sort((t, n) => {
                    if (I) {
                        if (e(t) && !e(n)) return -1;
                        if (!e(t) && e(n)) return 1
                    } else if (j) {
                        if (e(t) && !e(n)) return 1;
                        if (!e(t) && e(n)) return -1
                    }
                    return t.user.username.localeCompare(n.user.username)
                }), t
            }, [K, C, Z, W, I, j]),
            activeStreams: C,
            participantsVersion: N
        }),
        q = X.length,
        $ = (0, l.bG)([d.A], () => d.A.getWindowState(x.f), []),
        {
            tileWidth: ee,
            tileHeight: et,
            widgetWidth: en,
            widgetHeight: ei,
            containerRef: er,
            containerMinMaxSizes: el
        } = (0, E.K2)({
            tileCount: q,
            padding: k,
            borderWidth: M,
            isVertical: Y,
            widgetSize: D
        }),
        ea = {
            id: w,
            widget: P,
            layout: H,
            participants: X.length,
            padding: k,
            borderWidth: M,
            widgetMinMaxSizes: el,
            containerSize: {
                width: en,
                height: ei
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == $ ? void 0 : $.height) ? t : ei,
                right: null != (n = null == $ ? void 0 : $.width) ? n : en
            },
            locked: R
        };
    (0, E.k1)({
        id: w,
        streamParticipants: X,
        layout: H,
        widgetLayoutSpecs: ea
    });
    let es = null == B || 0 === J.size && R || 0 === q && !R;
    return (r.useEffect(() => {
        s.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, !es)
    }, [es]), (0, o.Ay)(() => () => {
        s.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1)
    }), (es || !G) && R) ? null : es && !R ? F ? R ? null : (0, i.jsx)(A.g, {
        emptyText: _.intl.string(_.t["T6+rXy"]),
        icon: a.Fzq,
        absolute: !0
    }) : null : (0, i.jsx)("div", {
        className: S.u,
        style: {
            opacity: L
        },
        ref: er,
        children: (0, i.jsx)(v.A, {
            widgetId: w,
            tileWidth: ee,
            tileHeight: et,
            locked: R,
            layout: H,
            activeStreams: J,
            streamParticipants: X,
            participantsVersion: Q,
            pinned: G,
            padding: k
        })
    })
}