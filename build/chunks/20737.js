/** Chunk was on 1113 **/
/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Y
}), n(896048), n(65821);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(554146),
    c = n(397927),
    u = n(817363),
    d = n(475743),
    h = n(811024),
    p = n(147087),
    g = n(734066),
    f = n(274372),
    m = n(572164),
    b = n(157207),
    A = n(794905),
    y = n(826673),
    O = n(450510),
    _ = n(267102),
    x = n(969632),
    j = n(566908),
    v = n(406704),
    E = n(253932),
    C = n(761640),
    S = n(186111),
    I = n(320501),
    N = n(576705),
    T = n(461213),
    P = n(203982),
    w = n(723702),
    R = n(518960),
    D = n(782093),
    L = n(545428),
    M = n(38198),
    k = n(447155),
    G = n(652215),
    U = n(696016),
    V = n(49999),
    B = n(985018),
    H = n(275825);

function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function K(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let Y = l.memo(function(e) {
    var t, i;
    let {
        className: Y,
        channel: W,
        draftType: z,
        editorTextContent: q,
        setValue: X,
        canOnlyUseTextCommands: J
    } = e, Q = (0, _.Us)(), Z = l.useRef(null), $ = l.useRef(null), ee = (0, a.bG)([T.A], () => T.A.getActivities()), et = (0, m.Et)(), en = (0, a.bG)([f.A], () => f.A.getLastClipsSession()), er = (0, a.yK)([f.A], () => f.A.getNewClipIds()), el = (0, a.bG)([C.Ay], () => null == C.Ay.getCurrentSidebarChannelId(W.id)), {
        showClipsHeaderEntrypoint: ei
    } = g.L_.useExperiment({
        location: "ChannelAttachButton"
    }, {
        autoTrackExposure: !1
    }), {
        onShareClick: es
    } = (0, A.A)(W.id), ea = (0, a.bG)([O.HP], () => O.HP.hasHotspot(O._2.CLIPS_CHANNEL_ATTACH_REMINDER)), eo = (0, c.red)(e => (0, c.fDT)(e, U.nm)), ec = (0, a.bG)([S.A], () => S.A.hasLayers()), eu = (0, a.bG)([f.A], () => f.A.hasClips()), [ed, eh] = l.useState(null), ep = (0, g.sw)() && (et || eu), eg = W.isPrivate(), ef = (0, a.bG)([N.A], () => eg || N.A.can(G.xBc.ATTACH_FILES, W) && N.A.can(G.xBc.SEND_MESSAGES, W)), em = (0, d.A)(en);
    (null == em ? void 0 : em.newClipIds.length) !== (null == en ? void 0 : en.newClipIds.length) && (null != (t = null == en ? void 0 : en.newClipIds.length) ? t : 0) > 0 && null == ed && ea && el && !eo && !ei && !ec && eh("recentClips");
    let eb = (0, a.bG)([I.A], () => I.A.hasCurrentUserSentMessageSinceAppStart());

    function eA() {
        (0, c.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
            return t => (0, r.jsx)(e, K(F({}, t), {
                channelId: W.id,
                onClipClick: e => es({
                    clips: [e]
                })
            }))
        }, {
            modalKey: U.nm
        }), eh(null)
    }
    l.useEffect(() => {
        let e = e => {
            let {
                channelId: t
            } = e;
            if (t === W.id) {
                var n;
                null == (n = Z.current) || n.activateUploadDialogue()
            }
        };
        return P._.subscribe(G.jej.UPLOAD_FILE, e), () => {
            P._.unsubscribe(G.jej.UPLOAD_FILE, e)
        }
    });
    let ey = (0, v.n)(W),
        eO = (0, v.Tb)(W),
        e_ = !E.D_.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
        ex = (0, x.I7)(null != W ? W : void 0),
        ej = (0, h.t8)(),
        ev = (0, j.Sc)({
            location: "ChannelAttachButton"
        }),
        eE = (0, p.b)(),
        eC = null != (i = null == er ? void 0 : er.length) ? i : 0,
        eS = (0, k.A)({
            canAttachFiles: ef,
            canStartThreads: ey || eO,
            useSlate: e_,
            hasClips: ep,
            canUseApplicationCommands: !J,
            channel: W,
            activities: ee,
            newClipsCount: eC,
            canPostPolls: ex,
            canLaunchActivities: ej,
            appContext: Q,
            canSendScheduledMessages: ev,
            canSummarizeThreads: eE
        });
    if (0 === eS.length) return null;
    let eI = (0, r.jsx)(c.pa$, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: H.dW
        }),
        eN = (0, r.jsx)(c.YNO, {
            targetElementRef: $,
            shouldShow: null != ed,
            animation: c.YNO.Animation.NONE,
            align: "recentClips" === ed ? "center" : "left",
            position: "top",
            positionKey: null != ed ? ed : "null",
            onRequestOpen: () => {
                eb && (0, y.Dr)(o.M.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
                    dismissAction: V.i.TAKE_ACTION
                }), eh("attachMenu")
            },
            onRequestClose: () => {
                (0, c.ueM)() || (eb && (0, y.Dr)(o.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
                    dismissAction: V.i.TAKE_ACTION
                }), eh(null))
            },
            renderPopout: e => {
                switch (ed) {
                    case "recentClips":
                        return (0, r.jsx)(b.A, K(F({}, e), {
                            onOpenClips: eA,
                            lastClipsSession: en
                        }));
                    case "attachMenu":
                        return (0, r.jsx)(M.A, K(F({}, e), {
                            onClose: () => eh(null),
                            options: eS,
                            channel: W,
                            onFileUpload: () => {
                                var e;
                                return null == (e = Z.current) ? void 0 : e.activateUploadDialogue()
                            },
                            draftType: z,
                            editorTextContent: q,
                            setValue: X,
                            openClips: eA
                        }));
                    default:
                        throw Error("Invalid popout type provided")
                }
            },
            children: e => (0, r.jsx)(L.A, K(F({
                ref: $,
                className: s()(H.g$, Y),
                childClassName: H.wh,
                isActive: !1,
                "aria-label": B.intl.string(B.t.d56gCa),
                onDoubleClick: ef ? () => {
                    var e;
                    return null == (e = Z.current) ? void 0 : e.activateUploadDialogue()
                } : void 0,
                "aria-haspopup": "menu"
            }, e), {
                children: eI
            }))
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: H.EJ,
            children: (0, r.jsx)(u.A, {
                ref: Z,
                onChange: e => {
                    var t, n;
                    t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, R.V)(W, []) : (0, R.R)(t, W, z, {
                        requireConfirm: !0,
                        origin: "file_picker"
                    }), P._.dispatchToLastSubscribed(G.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
                },
                multiple: W.rateLimitPerUser <= 0,
                tabIndex: -1,
                "aria-hidden": !0
            })
        }), (0, r.jsx)("div", {
            className: H.Jd,
            children: (0, r.jsx)(D.A, {
                channel: W,
                isOmniMenuOpen: "attachMenu" === ed,
                openOmniMenu: () => eh("attachMenu"),
                enabled: ej,
                animationContainerClassName: H.Vk,
                glowClassName: H.im,
                trinketsClassName: H.xK,
                children: eN
            })
        })]
    })
})