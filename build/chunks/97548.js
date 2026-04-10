/** chunk id: 97548 params = (module,exports,require) **/
n.d(t, {
    A: () => v
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
    g = n(961350),
    m = n(734057),
    f = n(555528),
    A = n(309010),
    I = n(41984),
    E = n(412477),
    p = n(75280),
    _ = n(433560),
    S = n(324093),
    x = n(897720),
    T = n(392164),
    N = n(985018),
    C = n(300883);

function v(e) {
    var t, n;
    let v, y, M, {
            id: R,
            widget: D,
            size: b,
            locked: O,
            padding: w,
            borderWidth: j,
            opacity: U,
            horizontal: L,
            pinned: k,
            anchorTop: G,
            anchorLeft: P,
            showEmpty: F = !0
        } = e,
        V = L ? x.IV.HORIZONTAL : x.IV.VERTICAL,
        z = V === x.IV.VERTICAL,
        H = (0, r.bG)([f.A], () => {
            let e = f.A.getWidget(R);
            return !!(0, x.dO)(e) && !O && (e.meta.showAllStreams ?? !0)
        }, [R, O]),
        Y = (0, r.bG)([A.A], () => A.A.getVoiceChannelId()),
        W = (0, r.bG)([m.A], () => m.A.getChannel(Y)),
        B = (0, r.bG)([g.default], () => g.default.getId()),
        {
            streamParticipants: X,
            activeStreams: Z,
            participantsVersion: K
        } = (t = G && z || P && L, n = !G && z || !P && L, v = (0, r.yK)([h.A], () => null == Y ? [] : h.A.getAllActiveStreamsForChannel(Y)), y = l.useMemo(() => new Set(v.map(e => (0, d._z)(e))), [v]), M = (0, r.bG)([u.A], () => null == Y ? -1 : u.A.getParticipantsVersion(Y)), {
            streamParticipants: (0, r.yK)([u.A, h.A], () => {
                if (null == Y) return [];

                function e(e) {
                    return y.has((0, d._z)(e.stream))
                }
                let i = u.A.getStreamParticipants(Y).filter(t => {
                    if (t.user.id === B) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && _.O.has(n.state)) && (!!H || e(t))
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
            }, [Y, y, B, H, t, n]),
            activeStreams: y,
            participantsVersion: M
        }),
        $ = X.length,
        q = (0, r.bG)([c.A], () => c.A.getWindowState(T.f), []),
        {
            tileWidth: Q,
            tileHeight: J,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei
        } = (0, S.K2)({
            tileCount: $,
            padding: w,
            borderWidth: j,
            isVertical: z,
            widgetSize: b
        }),
        el = {
            id: R,
            widget: D,
            layout: V,
            participants: X.length,
            padding: w,
            borderWidth: j,
            widgetMinMaxSizes: ei,
            containerSize: {
                width: ee,
                height: et
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: q?.height ?? et,
                right: q?.width ?? ee
            },
            locked: O
        };
    (0, S.k1)({
        id: R,
        streamParticipants: X,
        layout: V,
        widgetLayoutSpecs: el
    });
    let er = null == W || 0 === Z.size && O || 0 === $ && !O;
    return (l.useEffect(() => {
        a.A.setGpuBoostRequested(I.y7.OVERLAY_VIDEO_STREAM_RENDERING, !er)
    }, [er]), (0, o.Ay)(() => () => {
        a.A.setGpuBoostRequested(I.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1)
    }), (er || !k) && O) ? null : er && !O ? F ? O ? null : (0, i.jsx)(E.g, {
        emptyText: N.intl.string(N.t["T6+rXy"]),
        icon: s.Fzq,
        absolute: !0
    }) : null : (0, i.jsx)("div", {
        className: C.u,
        style: {
            opacity: U
        },
        ref: en,
        children: (0, i.jsx)(p.A, {
            widgetId: R,
            tileWidth: Q,
            tileHeight: J,
            locked: O,
            layout: V,
            activeStreams: Z,
            streamParticipants: X,
            participantsVersion: K,
            pinned: k,
            padding: w
        })
    })
}