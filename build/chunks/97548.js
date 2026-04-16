/** chunk id: 97548 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
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
    C = n(985018),
    N = n(674243);

function v(e) {
    var t, n;
    let v, y, M, {
            id: b,
            widget: R,
            size: D,
            locked: O,
            padding: w,
            borderWidth: j,
            opacity: k,
            horizontal: U,
            pinned: L,
            anchorTop: G,
            anchorLeft: P,
            showEmpty: F = !0
        } = e,
        V = U ? x.IV.HORIZONTAL : x.IV.VERTICAL,
        z = V === x.IV.VERTICAL,
        H = (0, l.bG)([f.A], () => {
            let e = f.A.getWidget(b);
            return !!(0, x.dO)(e) && !O && (e.meta.showAllStreams ?? !0)
        }, [b, O]),
        Y = (0, l.bG)([A.A], () => A.A.getVoiceChannelId()),
        W = (0, l.bG)([m.A], () => m.A.getChannel(Y)),
        B = (0, l.bG)([g.default], () => g.default.getId()),
        {
            streamParticipants: Z,
            activeStreams: X,
            participantsVersion: K
        } = (t = G && z || P && U, n = !G && z || !P && U, v = (0, l.yK)([h.A], () => null == Y ? [] : h.A.getAllActiveStreamsForChannel(Y)), y = r.useMemo(() => new Set(v.map(e => (0, d._z)(e))), [v]), M = (0, l.bG)([u.A], () => null == Y ? -1 : u.A.getParticipantsVersion(Y)), {
            streamParticipants: (0, l.yK)([u.A, h.A], () => {
                if (null == Y) return [];

                function e(e) {
                    return y.has((0, d._z)(e.stream))
                }
                let i = u.A.getStreamParticipants(Y).filter(t => {
                    if (t.user.id === B) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && _.O.has(n.state)) && (!!H || e(t))
                });
                return i.sort((i, r) => {
                    if (t) {
                        if (e(i) && !e(r)) return -1;
                        if (!e(i) && e(r)) return 1
                    } else if (n) {
                        if (e(i) && !e(r)) return 1;
                        if (!e(i) && e(r)) return -1
                    }
                    return i.user.username.localeCompare(r.user.username)
                }), i
            }, [Y, y, B, H, t, n]),
            activeStreams: y,
            participantsVersion: M
        }),
        $ = Z.length,
        q = (0, l.bG)([c.A], () => c.A.getWindowState(T.f), []),
        {
            tileWidth: J,
            tileHeight: Q,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei
        } = (0, S.K2)({
            tileCount: $,
            padding: w,
            borderWidth: j,
            isVertical: z,
            widgetSize: D
        }),
        er = {
            id: b,
            widget: R,
            layout: V,
            participants: Z.length,
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
        id: b,
        streamParticipants: Z,
        layout: V,
        widgetLayoutSpecs: er
    });
    let el = null == W || 0 === X.size && O || 0 === $ && !O;
    return (r.useEffect(() => {
        a.A.setGpuBoostRequested(I.y7.OVERLAY_VIDEO_STREAM_RENDERING, !el)
    }, [el]), (0, o.Ay)(() => () => {
        a.A.setGpuBoostRequested(I.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1)
    }), (el || !L) && O) ? null : el && !O ? F ? O ? null : (0, i.jsx)(E.g, {
        emptyText: C.intl.string(C.t["T6+rXy"]),
        icon: s.Fzq,
        absolute: !0
    }) : null : (0, i.jsx)("div", {
        className: N.u,
        style: {
            opacity: k
        },
        ref: en,
        children: (0, i.jsx)(p.A, {
            widgetId: b,
            tileWidth: J,
            tileHeight: Q,
            locked: O,
            layout: V,
            activeStreams: X,
            streamParticipants: Z,
            participantsVersion: K,
            pinned: L,
            padding: w
        })
    })
}