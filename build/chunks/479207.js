/** chunk id: 479207, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P,
    r: () => z
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(397927),
    u = n(442433),
    d = n(391973),
    c = n(765671),
    h = n(313961),
    m = n(164617),
    g = n(401901),
    p = n(87001),
    A = n(175203),
    f = n(163432),
    x = n(734057),
    E = n(430452),
    S = n(309010),
    v = n(256415),
    C = n(996439),
    I = n(810412),
    T = n(799808),
    _ = n(129537),
    y = n(412477),
    j = n(916494),
    b = n(897720),
    w = n(392164),
    O = n(652215),
    N = n(731854),
    M = n(985018),
    R = n(384339);
let k = l.memo(function(e) {
        let {
            participant: t,
            channel: n,
            context: l
        } = e, r = t.user?.id;
        return (0, a.bG)([E.Ay], () => null != t.user && null != l && null != n && E.Ay.isLocalVideoDisabled(r, l), [r, t.user, l, n]) ? null : (0, i.jsx)(A.Ay, {
            ...e
        })
    }),
    L = l.memo(function(e) {
        let {
            context: t = N.x.DEFAULT,
            participants: r,
            locked: s,
            channel: a,
            width: o,
            height: d,
            shouldDisplay: c
        } = e, h = l.useCallback((e, l) => {
            let r = e.user;
            (0, I.YX)(O.uss.VIDEO, {
                type: I.Z5.CAMERA,
                value: I.IP.SETTINGS_OPENED,
                userId: r?.id
            }), (0, u.L3)(l, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(n.bind(n, 180812));
                return n => (0, i.jsx)(e, {
                    ...n,
                    user: r,
                    mediaEngineContext: t,
                    onWatchStream: () => {
                        (0, I.YX)(O.uss.VIDEO, {
                            type: I.Z5.GO_LIVE,
                            value: I.IP.ENABLED,
                            userId: r?.id
                        })
                    }
                })
            })
        }, [t]), p = (0, I.Dk)(() => new Set(r.map(e => e.user?.id)), [r]);
        l.useEffect(() => {
            c && (0, I.Y)(O.uss.VIDEO, {
                locked: v.default.isInstanceLocked(),
                shownUserIds: Array.from(p),
                liveUserIds: Array.from(p),
                contentInventoryIds: []
            })
        }, [p, c]);
        let A = l.useMemo(() => ({
            width: o,
            height: d
        }), [o, d]);
        return (0, i.jsx)(i.Fragment, {
            children: r.map(e => (0, i.jsx)(k, {
                participant: e,
                width: o,
                className: R.Vs,
                containerStyle: A,
                fit: g.$.COVER,
                channel: a,
                popoutType: m.N.OVERLAY,
                inCall: !0,
                noBorder: !0,
                onContextMenu: s ? void 0 : h,
                forceIdle: s,
                paused: !c,
                context: t
            }, e.id))
        })
    }),
    D = l.memo(function(e) {
        let {
            context: t = N.x.DEFAULT,
            participants: n,
            participantsVersion: r,
            locked: a,
            widget: u,
            channel: d,
            width: c,
            height: h,
            showEmpty: m = !0,
            containerRef: g
        } = e, p = "boolean" != typeof u.meta.horizontal || u.meta.horizontal, A = n.length > 0 && null != t && null != d && (!a || u.pinned);
        l.useEffect(() => {
            (0, T.j_)({
                locked: a,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            }, A)
        }, [a, u, A]);
        let f = l.useMemo(() => ({
                opacity: u.opacity
            }), [u.opacity]),
            x = l.useMemo(() => s()({
                [R.wb]: !0,
                [R.Vd]: !p,
                [R.R]: !A && a
            }), [p, A, a]);
        return 0 !== n.length || a ? null == d ? null : (0, i.jsx)("div", {
            ref: g,
            className: x,
            style: f,
            children: (0, i.jsx)(L, {
                context: t,
                participants: n,
                locked: a,
                channel: d,
                width: c,
                height: h,
                shouldDisplay: A,
                participantsVersion: r
            })
        }) : m ? (0, i.jsx)("div", {
            ref: g,
            children: (0, i.jsx)(y.g, {
                emptyText: M.intl.string(M.t.aTiM42),
                icon: o.npA,
                absolute: !0
            })
        }) : null
    }),
    z = e => {
        let {
            widget: t,
            computedSize: n,
            borderWidth: i,
            padding: l,
            containerSpecs: r
        } = e;
        if (!(0, b.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * l,
            o = s ? {
                width: Math.max(n.width, 192),
                height: Math.min(n.height, 240 + a)
            } : {
                height: Math.max(n.height, 192),
                width: Math.min(n.width, 240 + a)
            },
            u = {
                maxWidth: .75 * r.maxX,
                maxHeight: .75 * r.maxY
            };
        return (0, j.$G)(o, u)
    };

function P(e) {
    let t = (0, a.bG)([S.A, x.A], () => x.A.getChannel(S.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        r = t?.id,
        [s, o] = (0, a.bG)([h.A], () => null == r ? [
            [], 0
        ] : [h.A.getVideoParticipants(r), h.A.getParticipantsVersion(r)], [r], C.D),
        u = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        {
            width: m = e.width - n,
            height: g = e.height - n,
            ref: A
        } = (0, c.Ay)(e.locked, e.widget.pinned),
        {
            participantTileWidth: E,
            visibleParticipants: v
        } = (0, f.i4)(u ? m : g, s, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        I = (0, a.bG)([p.A], () => p.A.getWindowState(w.f)),
        T = {
            id: e.widget.id,
            containerSize: {
                containerHeight: g,
                containerWidth: m
            },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: I?.width ?? e.width - n,
                maxY: I?.height ?? e.height - n,
                minX: 0,
                minY: 0
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: I?.height ?? e.height,
                right: I?.width ?? e.width
            }
        };
    return ! function(e) {
        let {
            horizontal: t,
            widget: n,
            widgetLayoutSpecs: i
        } = e, r = {
            id: n.id,
            size: n.size,
            containerWidth: i.containerSize.containerWidth,
            containerHeight: i.containerSize.containerHeight,
            widget: n,
            widgetLayoutSpecs: i
        }, s = l.useRef(r);
        l.useLayoutEffect(() => void(s.current = r)), l.useLayoutEffect(() => {
            let {
                size: e,
                id: n,
                containerWidth: i,
                containerHeight: l,
                widget: r,
                widgetLayoutSpecs: a
            } = s.current;
            if (!(t && e.height > e.width || !t && e.width > e.height)) return;
            let {
                width: o,
                height: u
            } = z({
                ...a,
                widget: r,
                operation: _.P.RESIZE_NORTH,
                computedSize: {
                    width: l,
                    height: i
                },
                originSize: {
                    width: l,
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
        widgetLayoutSpecs: T
    }), (0, i.jsx)(D, {
        ...e,
        channel: t,
        participants: v,
        participantsVersion: o,
        width: u ? E : m ?? e.width,
        height: u ? g ?? e.height : E,
        containerRef: A
    })
}