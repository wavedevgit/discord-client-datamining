/** chunk id: 479207 params = (module,exports,require) **/
n.d(t, {
    A: () => G,
    r: () => L
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    u = n(442433),
    d = n(391973),
    c = n(765671),
    h = n(313961),
    g = n(164617),
    m = n(401901),
    f = n(87001),
    A = n(175203),
    I = n(163432),
    E = n(734057),
    p = n(430452),
    _ = n(309010),
    S = n(256415),
    x = n(996439),
    T = n(810412),
    C = n(799808),
    N = n(129537),
    v = n(412477),
    y = n(916494),
    M = n(897720),
    b = n(392164),
    R = n(652215),
    D = n(731854),
    O = n(985018),
    w = n(521380);
let j = r.memo(function(e) {
        let {
            participant: t,
            channel: n,
            context: r
        } = e, l = t.user?.id;
        return (0, a.bG)([p.Ay], () => null != t.user && null != r && null != n && p.Ay.isLocalVideoDisabled(l, r), [l, t.user, r, n]) ? null : (0, i.jsx)(A.Ay, {
            ...e
        })
    }),
    k = r.memo(function(e) {
        let {
            context: t = D.x.DEFAULT,
            participants: l,
            locked: s,
            channel: a,
            width: o,
            height: d,
            shouldDisplay: c
        } = e, h = r.useCallback((e, r) => {
            let l = e.user;
            (0, T.YX)(R.uss.VIDEO, {
                type: T.Z5.CAMERA,
                value: T.IP.SETTINGS_OPENED,
                userId: l?.id
            }), (0, u.L3)(r, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: l,
                    mediaEngineContext: t,
                    onWatchStream: () => {
                        (0, T.YX)(R.uss.VIDEO, {
                            type: T.Z5.GO_LIVE,
                            value: T.IP.ENABLED,
                            userId: l?.id
                        })
                    }
                })
            })
        }, [t]), f = (0, T.Dk)(() => new Set(l.map(e => e.user?.id)), [l]);
        r.useEffect(() => {
            c && (0, T.Y)(R.uss.VIDEO, {
                locked: S.default.isInstanceLocked(),
                shownUserIds: Array.from(f),
                liveUserIds: Array.from(f),
                contentInventoryIds: []
            })
        }, [f, c]);
        let A = r.useMemo(() => ({
            width: o,
            height: d
        }), [o, d]);
        return (0, i.jsx)(i.Fragment, {
            children: l.map(e => (0, i.jsx)(j, {
                participant: e,
                width: o,
                className: w.Vs,
                containerStyle: A,
                fit: m.$.COVER,
                channel: a,
                popoutType: g.N.OVERLAY,
                inCall: !0,
                noBorder: !0,
                onContextMenu: s ? void 0 : h,
                forceIdle: s,
                paused: !c,
                context: t
            }, e.id))
        })
    }),
    U = r.memo(function(e) {
        let {
            context: t = D.x.DEFAULT,
            participants: n,
            participantsVersion: l,
            locked: a,
            widget: u,
            channel: d,
            width: c,
            height: h,
            showEmpty: g = !0,
            containerRef: m
        } = e, f = "boolean" != typeof u.meta.horizontal || u.meta.horizontal, A = n.length > 0 && null != t && null != d && (!a || u.pinned);
        r.useEffect(() => {
            (0, C.j_)({
                locked: a,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            }, A)
        }, [a, u, A]);
        let I = r.useMemo(() => ({
                opacity: u.opacity
            }), [u.opacity]),
            E = r.useMemo(() => s()({
                [w.wb]: !0,
                [w.Vd]: !f,
                [w.R]: !A && a
            }), [f, A, a]);
        return 0 !== n.length || a ? null == d ? null : (0, i.jsx)("div", {
            ref: m,
            className: E,
            style: I,
            children: (0, i.jsx)(k, {
                context: t,
                participants: n,
                locked: a,
                channel: d,
                width: c,
                height: h,
                shouldDisplay: A,
                participantsVersion: l
            })
        }) : g ? (0, i.jsx)("div", {
            ref: m,
            children: (0, i.jsx)(v.g, {
                emptyText: O.intl.string(O.t.aTiM42),
                icon: o.npA,
                absolute: !0
            })
        }) : null
    }),
    L = e => {
        let {
            widget: t,
            computedSize: n,
            borderWidth: i,
            padding: r,
            containerSpecs: l
        } = e;
        if (!(0, M.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * r,
            o = s ? {
                width: Math.max(n.width, 192),
                height: Math.min(n.height, 240 + a)
            } : {
                height: Math.max(n.height, 192),
                width: Math.min(n.width, 240 + a)
            },
            u = {
                maxWidth: .75 * l.maxX,
                maxHeight: .75 * l.maxY
            };
        return (0, y.$G)(o, u)
    };

function G(e) {
    let t = (0, a.bG)([_.A, E.A], () => E.A.getChannel(_.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        l = t?.id,
        [s, o] = (0, a.bG)([h.A], () => null == l ? [
            [], 0
        ] : [h.A.getVideoParticipants(l), h.A.getParticipantsVersion(l)], [l], x.D),
        u = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        {
            width: g = e.width - n,
            height: m = e.height - n,
            ref: A
        } = (0, c.Ay)(e.locked, e.widget.pinned),
        {
            participantTileWidth: p,
            visibleParticipants: S
        } = (0, I.i4)(u ? g : m, s, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        T = (0, a.bG)([f.A], () => f.A.getWindowState(b.f)),
        C = {
            id: e.widget.id,
            containerSize: {
                containerHeight: m,
                containerWidth: g
            },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: T?.width ?? e.width - n,
                maxY: T?.height ?? e.height - n,
                minX: 0,
                minY: 0
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: T?.height ?? e.height,
                right: T?.width ?? e.width
            }
        };
    return ! function(e) {
        let {
            horizontal: t,
            widget: n,
            widgetLayoutSpecs: i
        } = e, l = {
            id: n.id,
            size: n.size,
            containerWidth: i.containerSize.containerWidth,
            containerHeight: i.containerSize.containerHeight,
            widget: n,
            widgetLayoutSpecs: i
        }, s = r.useRef(l);
        r.useLayoutEffect(() => void(s.current = l)), r.useLayoutEffect(() => {
            let {
                size: e,
                id: n,
                containerWidth: i,
                containerHeight: r,
                widget: l,
                widgetLayoutSpecs: a
            } = s.current;
            if (!(t && e.height > e.width || !t && e.width > e.height)) return;
            let {
                width: o,
                height: u
            } = L({
                ...a,
                widget: l,
                operation: N.P.RESIZE_NORTH,
                computedSize: {
                    width: r,
                    height: i
                },
                originSize: {
                    width: r,
                    height: i
                }
            });
            (0, d.Ju)({
                widgetId: n,
                size: {
                    fixed: !0,
                    width: o,
                    height: u
                }
            })
        }, [t])
    }({
        horizontal: u,
        widget: e.widget,
        widgetLayoutSpecs: C
    }), (0, i.jsx)(U, {
        ...e,
        channel: t,
        participants: S,
        participantsVersion: o,
        width: u ? p : g ?? e.width,
        height: u ? m ?? e.height : p,
        containerRef: A
    })
}