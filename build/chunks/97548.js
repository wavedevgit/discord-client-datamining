/** chunk id: 97548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(684013),
    o = n(964486),
    d = n(313961),
    u = n(652896),
    c = n(87001),
    h = n(616356),
    g = n(961350),
    m = n(734057),
    p = n(555528),
    A = n(309010),
    x = n(41984),
    E = n(412477),
    f = n(75280),
    S = n(433560),
    I = n(324093),
    T = n(897720),
    v = n(392164),
    C = n(985018),
    j = n(780682);

function y(e) {
    var t, n;
    let y, w, O, {
            id: _,
            widget: N,
            size: b,
            locked: R,
            padding: M,
            borderWidth: L,
            opacity: z,
            horizontal: D,
            pinned: k,
            anchorTop: P,
            anchorLeft: G,
            showEmpty: V = !0
        } = e,
        U = D ? T.IV.HORIZONTAL : T.IV.VERTICAL,
        H = U === T.IV.VERTICAL,
        Y = (0, l.bG)([p.A], () => {
            let e = p.A.getWidget(_);
            return !!(0, T.dO)(e) && !R && (e.meta.showAllStreams ?? !0)
        }, [_, R]),
        Z = (0, l.bG)([A.A], () => A.A.getVoiceChannelId()),
        W = (0, l.bG)([m.A], () => m.A.getChannel(Z)),
        X = (0, l.bG)([g.default], () => g.default.getId()),
        {
            streamParticipants: F,
            activeStreams: K,
            participantsVersion: B
        } = (t = P && H || G && D, n = !P && H || !G && D, y = (0, l.yK)([h.A], () => null == Z ? [] : h.A.getAllActiveStreamsForChannel(Z)), w = s.useMemo(() => new Set(y.map(e => (0, u._z)(e))), [y]), O = (0, l.bG)([d.A], () => null == Z ? -1 : d.A.getParticipantsVersion(Z)), {
            streamParticipants: (0, l.yK)([d.A, h.A], () => {
                if (null == Z) return [];

                function e(e) {
                    return w.has((0, u._z)(e.stream))
                }
                let i = d.A.getStreamParticipants(Z).filter(t => {
                    if (t.user.id === X) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && S.O.has(n.state)) && (!!Y || e(t))
                });
                return i.sort((i, s) => {
                    if (t) {
                        if (e(i) && !e(s)) return -1;
                        if (!e(i) && e(s)) return 1
                    } else if (n) {
                        if (e(i) && !e(s)) return 1;
                        if (!e(i) && e(s)) return -1
                    }
                    return i.user.username.localeCompare(s.user.username)
                }), i
            }, [Z, w, X, Y, t, n]),
            activeStreams: w,
            participantsVersion: O
        }),
        q = F.length,
        Q = (0, l.bG)([c.A], () => c.A.getWindowState(v.f), []),
        {
            tileWidth: J,
            tileHeight: $,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei
        } = (0, I.K2)({
            tileCount: q,
            padding: M,
            borderWidth: L,
            isVertical: H,
            widgetSize: b
        }),
        es = {
            id: _,
            widget: N,
            layout: U,
            participants: F.length,
            padding: M,
            borderWidth: L,
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
            locked: R
        };
    (0, I.k1)({
        id: _,
        streamParticipants: F,
        layout: U,
        widgetLayoutSpecs: es
    });
    let el = null == W || 0 === K.size && R || 0 === q && !R;
    return (s.useEffect(() => {
        a.A.setGpuBoostRequested(x.y7.OVERLAY_VIDEO_STREAM_RENDERING, !el)
    }, [el]), (0, o.Ay)(() => () => {
        a.A.setGpuBoostRequested(x.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1)
    }), (el || !k) && R) ? null : el && !R ? V ? R ? null : (0, i.jsx)(E.g, {
        emptyText: C.intl.string(C.t["T6+rXy"]),
        icon: r.Fzq,
        absolute: !0
    }) : null : (0, i.jsx)("div", {
        className: j.u,
        style: {
            opacity: z
        },
        ref: en,
        children: (0, i.jsx)(f.A, {
            widgetId: _,
            tileWidth: J,
            tileHeight: $,
            locked: R,
            layout: U,
            activeStreams: K,
            streamParticipants: F,
            participantsVersion: B,
            pinned: k,
            padding: M
        })
    })
}