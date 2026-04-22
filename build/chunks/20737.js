/** chunk id: 20737 params = (module,exports,require) **/
n.d(t, {
    A: () => U
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(817363),
    d = n(475743),
    u = n(147087),
    h = n(734066),
    m = n(274372),
    A = n(572164),
    g = n(710315),
    p = n(157207),
    _ = n(794905),
    f = n(267102),
    E = n(969632),
    C = n(566908),
    x = n(406704),
    S = n(253932),
    I = n(761640),
    T = n(629016),
    v = n(186111),
    N = n(576705),
    y = n(461213),
    b = n(203982),
    j = n(723702),
    R = n(518960),
    M = n(545428),
    L = n(38198),
    D = n(447155),
    O = n(652215),
    P = n(696016),
    k = n(985018),
    w = n(644268);
let U = l.memo(function(e) {
    let {
        className: t,
        channel: s,
        draftType: U,
        editorTextContent: G,
        setValue: F,
        canOnlyUseTextCommands: B
    } = e, H = (0, f.Us)(), V = l.useRef(null), W = l.useRef(null), K = (0, r.bG)([y.A], () => y.A.getActivities()), z = (0, A.Et)(), Y = (0, r.bG)([m.A], () => m.A.getLastClipsSession()), J = (0, r.yK)([m.A], () => m.A.getNewClipIds()), q = (0, r.bG)([I.Ay], () => null == I.Ay.getCurrentSidebarChannelId(s.id)), $ = (0, r.yK)([T.A], () => s.type === O.rbe.DM ? K.filter(e => !T.A.getParty(e.party?.id)?.has(s.getRecipientId())) : K, [K, s]), {
        showClipsHeaderEntrypoint: Z
    } = h.L_.useConfig({
        location: "ChannelAttachButton"
    }), {
        topBarButton: X
    } = g.$.useConfig({
        location: "ChannelAttachButton"
    }), {
        onShareClick: Q
    } = (0, _.A)(s.id), ee = (0, r.bG)([m.A], () => m.A.getSettings().remindersEnabled), et = (0, o.red)(e => (0, o.fDT)(e, P.nm)), en = (0, r.bG)([v.A], () => v.A.hasLayers()), ei = (0, r.bG)([m.A], () => m.A.hasClips()), [el, es] = l.useState(null), ea = (0, h.sw)() && (z || ei), er = s.isPrivate(), eo = (0, r.bG)([N.A], () => er || N.A.can(O.xBc.ATTACH_FILES, s) && N.A.can(O.xBc.SEND_MESSAGES, s)), ec = (0, d.A)(Y);

    function ed() {
        (0, o.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("42784"), n.e("90333")]).then(n.bind(n, 543428));
            return t => (0, i.jsx)(e, {
                ...t,
                channelId: s.id,
                onClipClick: e => Q({
                    clips: [e]
                })
            })
        }, {
            modalKey: P.nm
        }), es(null)
    }
    ec?.newClipIds.length !== Y?.newClipIds.length && (Y?.newClipIds.length ?? 0) > 0 && null == el && ee && q && !et && !Z && !X && !en && es("recentClips"), l.useEffect(() => {
        let e = e => {
            let {
                channelId: t
            } = e;
            t === s.id && V.current?.activateUploadDialogue()
        };
        return b._.subscribe(O.jej.UPLOAD_FILE, e), () => {
            b._.unsubscribe(O.jej.UPLOAD_FILE, e)
        }
    });
    let eu = (0, x.n)(s),
        eh = (0, x.Tb)(s),
        em = !S.D_.useSetting() && !(0, j.isAndroidWeb)() && null != window.ResizeObserver,
        eA = (0, E.I7)(s ?? void 0),
        eg = (0, C.Sc)(),
        ep = (0, u.b)(),
        e_ = J?.length ?? 0,
        ef = (0, D.A)({
            canAttachFiles: eo,
            canStartThreads: eu || eh,
            useSlate: em,
            hasClips: ea,
            canUseApplicationCommands: !B,
            channel: s,
            activities: $,
            newClipsCount: e_,
            canPostPolls: eA,
            appContext: H,
            canSendScheduledMessages: eg,
            canSummarizeThreads: ep
        });
    if (0 === ef.length) return null;
    let eE = (0, i.jsx)(o.pa$, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: w.dW
        }),
        eC = (0, i.jsx)(o.YNO, {
            targetElementRef: W,
            shouldShow: null != el,
            animation: o.YNO.Animation.NONE,
            align: "recentClips" === el ? "center" : "left",
            position: "top",
            positionKey: el ?? "null",
            onRequestOpen: () => {
                es("attachMenu")
            },
            onRequestClose: () => {
                (0, o.ueM)() || es(null)
            },
            renderPopout: e => {
                switch (el) {
                    case "recentClips":
                        return (0, i.jsx)(p.A, {
                            ...e,
                            onOpenClips: ed,
                            lastClipsSession: Y
                        });
                    case "attachMenu":
                        return (0, i.jsx)(L.A, {
                            ...e,
                            onClose: () => es(null),
                            options: ef,
                            channel: s,
                            onFileUpload: () => V.current?.activateUploadDialogue(),
                            draftType: U,
                            editorTextContent: G,
                            setValue: F,
                            openClips: ed
                        });
                    default:
                        throw Error("Invalid popout type provided")
                }
            },
            children: e => (0, i.jsx)(M.A, {
                ref: W,
                className: a()(w.g$, t),
                childClassName: w.wh,
                isActive: !1,
                "aria-label": k.intl.string(k.t.d56gCa),
                onDoubleClick: eo ? () => V.current?.activateUploadDialogue() : void 0,
                "aria-haspopup": "menu",
                ...e,
                children: eE
            })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: w.EJ,
            children: (0, i.jsx)(c.A, {
                ref: V,
                onChange: e => {
                    var t, n;
                    t = e.currentTarget.files, null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code ? (0, R.V)(s, []) : (0, R.R)(t, s, U, {
                        requireConfirm: !0,
                        origin: "file_picker"
                    }), b._.dispatchToLastSubscribed(O.jej.TEXTAREA_FOCUS), e.currentTarget.value = ""
                },
                multiple: s.rateLimitPerUser <= 0,
                tabIndex: -1,
                "aria-hidden": !0
            })
        }), (0, i.jsx)("div", {
            className: w.Jd,
            children: eC
        })]
    })
})