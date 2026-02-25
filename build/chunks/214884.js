/** chunk id: 214884, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(827734),
    d = n(397927),
    c = n(803306),
    u = n(793574),
    A = n(713654),
    h = n(707592),
    _ = n(698441),
    m = n(935159),
    p = n(695400),
    g = n(435328),
    E = n(539446),
    I = n(508654),
    f = n(9448),
    C = n(974930),
    T = n(976860),
    N = n(323443),
    S = n(63995),
    x = n(69407),
    v = n(446600),
    y = n(964175),
    b = n(342296),
    O = n(576705),
    L = n(287809),
    R = n(182028),
    P = n(652215),
    j = n(988794),
    D = n(985018),
    M = n(105466);

function w(e) {
    let {
        guild: t,
        isStudyRoomNotice: n = !1
    } = e, l = (0, E.V)(t.id), u = (0, I.BP)(t.id), b = (0, s.bG)([v.A], () => v.A.getStageInstanceByChannel(l?.id), [l]), {
        isStageNoticeHidden: w,
        isEventNoticeHidden: G
    } = (0, s.cf)([p.A], () => ({
        isStageNoticeHidden: p.A.isLiveChannelNoticeHidden({
            stageId: b?.id
        }),
        isEventNoticeHidden: p.A.isLiveChannelNoticeHidden({
            eventId: u?.id
        })
    }), [b, u]), k = l?.id, V = (0, s.yK)([S.A], () => [...new Set(S.A.getMutableParticipants(k, x.ip.SPEAKER).map(e => e.user))], [k]), B = (0, s.bG)([S.A], () => null != k ? S.A.getParticipantCount(k, x.ip.AUDIENCE) : 0, [k]), H = (0, s.bG)([O.A], () => O.A.can(P.xBc.CONNECT, l)), F = (0, y.A)(l?.id), Y = u?.creator_id, q = (0, s.bG)([L.default], () => L.default.getUser(Y), [Y]);
    r.useEffect(() => {
        null != Y && (0, c.wz)(Y)
    }, [Y]);
    let {
        noticeType: W,
        title: K,
        location: z,
        locationIcon: $,
        canListenIn: Q,
        buttonText: X,
        users: Z,
        overflowUsers: J,
        onClose: ee
    } = r.useMemo(() => (function(e) {
        let {
            guildEvent: t,
            stageInstance: n,
            activeChannel: r,
            canConnect: l,
            myRole: a,
            eventCreator: s,
            speakers: o,
            listenerCount: c,
            isEventNoticeHidden: u,
            isStageNoticeHidden: h,
            isStudyRoomNotice: p
        } = e, E = null != n && null != r && !h, I = null != t ? (0, C.G3)(t) : null;
        if (p && null != r) {
            let e = (0, A.gU)(r);
            return {
                noticeType: 3,
                title: `📚☕ ${r.name}`,
                location: D.intl.string(D.t.LZA6Na),
                locationIcon: null != e ? (0, i.jsx)(e, {
                    size: "xs",
                    color: "currentColor",
                    className: M.NR
                }) : null,
                canListenIn: l,
                buttonText: D.intl.string(D.t.wBoE6L),
                users: [],
                overflowUsers: null
            }
        }
        if (null == t || u) {
            if (E) {
                let e = D.intl.string(D.t.ZYO5OK);
                return a?.speaker ? e = D.intl.string(D.t["/cnSFc"]) : null != a && (e = D.intl.string(D.t.btSGOj)), {
                    noticeType: 0,
                    title: n.topic,
                    location: r.name,
                    locationIcon: (0, i.jsx)(d.qux, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                        height: 16,
                        className: M.NR
                    }),
                    canListenIn: l,
                    buttonText: e,
                    onClose: () => (0, m.iF)({
                        stageId: n?.id
                    }),
                    users: o.length > 5 ? o.slice(0, 5) : o,
                    overflowUsers: c < 1 ? null : (0, i.jsxs)("div", {
                        className: M.Io,
                        children: [(0, i.jsx)(d.LoC, {
                            size: "custom",
                            color: "currentColor",
                            width: 12,
                            height: 12,
                            className: M.nW
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: M.W8,
                            children: c
                        })]
                    })
                }
            }
        } else if (t.entity_type === j.Ps.STAGE_INSTANCE && E) {
            let e = D.intl.string(D.t.ZYO5OK);
            return a?.speaker ? e = D.intl.string(D.t["/cnSFc"]) : null != a && (e = D.intl.string(D.t.btSGOj)), {
                noticeType: 0,
                title: n.topic,
                location: r.name,
                locationIcon: (0, i.jsx)(d.qux, {
                    size: "custom",
                    color: "currentColor",
                    width: 16,
                    height: 16,
                    className: M.NR
                }),
                canListenIn: l,
                buttonText: e,
                onClose: () => (0, m.iF)({
                    stageId: n?.id
                }),
                users: o.length > 5 ? o.slice(0, 5) : o,
                overflowUsers: c < 1 ? null : (0, i.jsxs)("div", {
                    className: M.Io,
                    children: [(0, i.jsx)(d.LoC, {
                        size: "custom",
                        color: "currentColor",
                        width: 12,
                        height: 12,
                        className: M.nW
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: M.W8,
                        children: c
                    })]
                })
            }
        } else if (t.entity_type === j.Ps.EXTERNAL) {
            let e = (0, f.oF)(t);
            if (null == e) return {
                noticeType: null
            };
            let n = _.Ay.getUserCount(t.id, I);
            return {
                noticeType: 1,
                title: t.name,
                location: (0, g.l)(e, !0),
                locationIcon: (0, i.jsx)(d.BT6, {
                    size: "custom",
                    color: "currentColor",
                    width: 16,
                    height: 16,
                    className: M.NR
                }),
                canListenIn: !1,
                buttonText: D.intl.string(D.t.iW6Xuo),
                onClose: () => (0, m.iF)({
                    eventId: t?.id
                }),
                users: null == s ? [] : [s],
                overflowUsers: n < 1 ? null : (0, i.jsxs)("div", {
                    className: M.Io,
                    children: [(0, i.jsx)(d.Gg5, {
                        size: "custom",
                        color: "currentColor",
                        width: 12,
                        height: 12,
                        className: M.nW
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: M.W8,
                        children: n
                    })]
                })
            }
        } else if (t.entity_type === j.Ps.VOICE && null != r) {
            let e = (0, A.gU)(r),
                n = _.Ay.getUserCount(t.id, I);
            return {
                noticeType: 2,
                title: t.name,
                location: r.name,
                locationIcon: null != e ? (0, i.jsx)(e, {
                    size: "xs",
                    color: "currentColor",
                    className: M.NR
                }) : null,
                canListenIn: l,
                buttonText: D.intl.string(D.t.nxUtoQ),
                onClose: () => (0, m.iF)({
                    eventId: t?.id
                }),
                users: null == s ? [] : [s],
                overflowUsers: n < 1 ? null : (0, i.jsxs)("div", {
                    className: M.Io,
                    children: [(0, i.jsx)(d.Gg5, {
                        size: "custom",
                        color: "currentColor",
                        width: 12,
                        height: 12,
                        className: M.nW
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: M.W8,
                        children: n
                    })]
                })
            }
        }
        return {
            noticeType: null
        }
    })({
        guildEvent: u,
        stageInstance: b,
        activeChannel: l,
        canConnect: H,
        myRole: F,
        eventCreator: q,
        speakers: V,
        listenerCount: B,
        isEventNoticeHidden: G,
        isStageNoticeHidden: w,
        isStudyRoomNotice: n
    }), [u, b, l, H, F, q, V, B, G, w, n]);
    return null == W ? null : (0, i.jsxs)("div", {
        className: M.kL,
        children: [null != ee ? (0, i.jsx)(d.DUT, {
            onClick: ee,
            className: M.VN,
            "aria-label": D.intl.string(D.t.WAI6xu),
            children: (0, i.jsx)(d.PGe, {
                size: "md",
                color: "currentColor",
                className: M.ut
            })
        }) : null, (0, i.jsxs)("div", {
            className: M.wx,
            children: [(0, i.jsx)(R.A, {
                color: o.A.unsafe_rawColors.GREEN_230.css,
                width: 16,
                height: 16
            }), (0, i.jsx)(d.Text, {
                variant: "text-xs/semibold",
                color: "text-feedback-positive",
                children: D.intl.string(D.t.dI3q4h)
            })]
        }), (Z.length > 0 || null != J) && (0, i.jsxs)("div", {
            className: M.lF,
            children: [Z.map(e => (0, i.jsx)(U, {
                user: e,
                guildId: t.id
            }, e.id)), J]
        }), (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: a()(M.DD, M.VD),
            children: K
        }), (0, i.jsxs)("div", {
            className: M.j5,
            children: [$, (0, i.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: M.C5,
                children: z
            })]
        }), Q || 1 === W ? (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: M.x6,
            children: (0, i.jsx)(d.Button, {
                variant: "active",
                size: "sm",
                text: X,
                onClick: () => {
                    if (Q) null != l && null != l.getGuildId() && ((0, N.av)(l), (0, T.uh)(l.getGuildId(), l.id));
                    else {
                        if (null == u) return;
                        (0, h.uR)({
                            eventId: u.id
                        })
                    }
                },
                fullWidth: !0
            })
        }) : null]
    })
}

function U(e) {
    let {
        user: t,
        guildId: n
    } = e, l = r.useRef(null);
    return (0, i.jsx)(b.A, {
        targetElementRef: l,
        user: t,
        guildId: n,
        newAnalyticsLocations: [u.A.AVATAR],
        clickTrap: !0,
        children: e => (0, i.jsx)(d.euF, {
            ...e,
            ref: l,
            src: t.getAvatarURL(n, 24),
            "aria-label": t.username,
            size: d._3J.SIZE_24,
            className: M.my
        })
    })
}