/** chunk id: 20737, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(896048), n(65821);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(817363),
    u = n(475743),
    d = n(147087),
    h = n(734066),
    p = n(274372),
    f = n(572164),
    m = n(157207),
    g = n(794905),
    A = n(450510),
    b = n(267102),
    _ = n(969632),
    y = n(566908),
    v = n(406704),
    E = n(253932),
    O = n(761640),
    C = n(186111),
    x = n(576705),
    S = n(461213),
    j = n(203982),
    I = n(723702),
    T = n(518960),
    N = n(545428),
    P = n(38198),
    w = n(447155),
    R = n(652215),
    D = n(696016),
    M = n(985018),
    L = n(275825);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function U(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let G = r.memo(function(e) {
    var t, i;
    let {
        className: G,
        channel: F,
        draftType: H,
        editorTextContent: B,
        setValue: V,
        canOnlyUseTextCommands: K
    } = e, W = (0, b.Us)(), z = r.useRef(null), q = r.useRef(null), Y = (0, s.bG)([S.A], () => S.A.getActivities()), J = (0, f.Et)(), Z = (0, s.bG)([p.A], () => p.A.getLastClipsSession()), X = (0, s.yK)([p.A], () => p.A.getNewClipIds()), Q = (0, s.bG)([O.Ay], () => null == O.Ay.getCurrentSidebarChannelId(F.id)), {
        showClipsHeaderEntrypoint: $
    } = h.L_.useExperiment({
        location: "ChannelAttachButton"
    }, {
        autoTrackExposure: !1
    }), {
        onShareClick: ee
    } = (0, g.A)(F.id), et = (0, s.bG)([A.HP], () => A.HP.hasHotspot(A._2.CLIPS_CHANNEL_ATTACH_REMINDER)), en = (0, o.red)(e => (0, o.fDT)(e, D.nm)), el = (0, s.bG)([C.A], () => C.A.hasLayers()), er = (0, s.bG)([p.A], () => p.A.hasClips()), [ei, ea] = r.useState(null), es = (0, h.sw)() && (J || er), eo = F.isPrivate(), ec = (0, s.bG)([x.A], () => eo || x.A.can(R.xBc.ATTACH_FILES, F) && x.A.can(R.xBc.SEND_MESSAGES, F)), eu = (0, u.A)(Z);

    function ed() {
        (0, o.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("4918"), n.e("98184")]).then(n.bind(n, 543428));
            return t => (0, l.jsx)(e, U(k({}, t), {
                channelId: F.id,
                onClipClick: e => ee({
                    clips: [e]
                })
            }))
        }, {
            modalKey: D.nm
        }), ea(null)
    }(null == eu ? void 0 : eu.newClipIds.length) !== (null == Z ? void 0 : Z.newClipIds.length) && (null != (t = null == Z ? void 0 : Z.newClipIds.length) ? t : 0) > 0 && null == ei && et && Q && !en && !$ && !el && ea("recentClips"), r.useEffect(() => {
        let e = e => {
            let {
                channelId: t
            } = e;
            if (t === F.id) {
                var n;
                null == (n = z.current) || n.activateUploadDialogue()
            }
        };
        return j._.subscribe(R.jej.UPLOAD_FILE, e), () => {
            j._.unsubscribe(R.jej.UPLOAD_FILE, e)
        }
    });
    let eh = (0, v.n)(F),
        ep = (0, v.Tb)(F),
        ef = !E.D_.useSetting() && !(0, I.isAndroidWeb)() && null != window.ResizeObserver,
        em = (0, _.I7)(null != F ? F : void 0),
        eg = (0, y.Sc)({
            location: "ChannelAttachButton"
        }),
        eA = (0, d.b)(),
        eb = null != (i = null == X ? void 0 : X.length) ? i : 0,
        e_ = (0, w.A)({
            canAttachFiles: ec,
            canStartThreads: eh || ep,
            useSlate: ef,
            hasClips: es,
            canUseApplicationCommands: !K,
            channel: F,
            activities: Y,
            newClipsCount: eb,
            canPostPolls: em,
            appContext: W,
            canSendScheduledMessages: eg,
            canSummarizeThreads: eA
        });
    if (0 === e_.length) return null;
    let ey = (0, l.jsx)(o.pa$, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: L.dW
        }),
        ev = (0, l.jsx)(o.YNO, {
            targetElementRef: q,
            shouldShow: null != ei,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === ei ? "center" : "left",
            position: "top",
            positionKey: null != ei ? ei : "null",
            onRequestOpen: () => {
                ea("attachMenu")
            },
            onRequestClose: () => {
                (0, o.ueM)() || ea(null)
            },
            renderPopout: e => {
                switch (ei) {
                    case "recentClips":
                        return (0, l.jsx)(m.A, U(k({}, e), {
                            onOpenClips: ed,
                            lastClipsSession: Z
                        }));
                    case "attachMenu":
                        return (0, l.jsx)(P.A, U(k({}, e), {
                            onClose: () => ea(null),
                            options: e_,
                            channel: F,
                            onFileUpload: () => {
                                var e;
                                return null == (e = z.current) ? void 0 : e.activateUploadDialogue()
                            },
                            draftType: H,
                            editorTextContent: B,
                            setValue: V,
                            openClips: ed
                        }));
                    default:
                        throw Error("Invalid popout type provided")
                }
            },
            children: e => (0, l.jsx)(N.A, U(k({
                ref: q,
                className: a()(L.g$, G),
                childClassName: L.wh,
                isActive: !1,
                "aria-label": M.intl.string(M.t.d56gCa),
                onDoubleClick: ec ? () => {
                    var e;
                    return null == (e = z.current) ? void 0 : e.activateUploadDialogue()
                } : void 0,
                "aria-haspopup": "menu"
            }, e), {
                children: ey
            }))
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
            className: L.EJ,
            children: (0, l.jsx)(c.A, {
                ref: z,
                onChange: e => {
                    var t, n;
                    t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, T.V)(F, []) : (0, T.R)(t, F, H, {
                        requireConfirm: !0,
                        origin: "file_picker"
                    }), j._.dispatchToLastSubscribed(R.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
                },
                multiple: F.rateLimitPerUser <= 0,
                tabIndex: -1,
                "aria-hidden": !0
            })
        }), (0, l.jsx)("div", {
            className: L.Jd,
            children: ev
        })]
    })
})