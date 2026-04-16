/** chunk id: 911269 params = (module,exports,require) **/
n.d(t, {
    ForwardModal: () => O
});
var l = n(627968),
    a = n(64700),
    s = n(735438),
    i = n(837381),
    r = n(158954),
    u = n(311907),
    o = n(397927),
    c = n(465532),
    A = n(928039),
    d = n(408018),
    h = n(547),
    _ = n(135621),
    I = n(378570),
    E = n(223863),
    m = n(151054),
    g = n(734057),
    C = n(31717),
    L = n(320501),
    f = n(403362),
    N = n(885918),
    x = n(513480),
    p = n(530912),
    P = n(938557),
    T = n(190338),
    b = n(294454),
    S = n(980490),
    F = n(61916);
n(577616);
var D = n(985018),
    G = n(745812);

function y() {
    return (0, l.jsx)("div", {
        className: G.wV,
        children: (0, l.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: D.intl.string(D.t.V6nAfF)
        })
    })
}

function O(e) {
    let {
        message: t,
        initialSelectedDestinations: O = [],
        forwardOptions: v,
        onClose: k,
        onRequestSent: j,
        customTitle: W,
        customSubtitle: w,
        customPreview: R,
        customSendHandler: M,
        customValidateDestination: U,
        additionalActions: V,
        source: B,
        ...Y
    } = e, K = t?.channel_id, J = t?.id, Z = a.useMemo(() => null != K ? (0, E._5)(K) : void 0, [K]), [z, q] = a.useState(!1), H = (0, u.bG)([L.A], () => "checkpoint" === B ? t : null != t ? L.A.getMessage(t.channel_id, t.id) ?? t : void 0, [t, B]), Q = (0, u.bG)([g.A], () => null != K ? g.A.getChannel(K) : void 0, [K]), X = (0, p.Jf)(), $ = (0, p.nL)(), ee = a.useRef(0), et = a.useRef(0), [en, el] = a.useState(O), ea = en.length, es = ea >= 5, ei = (0, x.QK)(en), er = (0, u.bG)([C.A], () => null != H ? C.A.getDraft(H.channel_id, C.C.ForwardContextMessage) : ""), [eu, eo] = a.useState(() => (0, d.ur)(er)), ec = (0, x.M6)(en), eA = (0, _.A)(), [ed, eh] = a.useState(""), {
        results: e_,
        updateSearchText: eI
    } = (0, m.R)({
        selectedDestinations: en,
        originDestination: Z,
        includeMissingDMs: !0
    }), eE = a.useCallback(e => {
        eh(e), eI(e)
    }, [eI]), em = a.useCallback(e => {
        eE(e), et.current += 1, "" !== e && null != K && null != J && $(K, J)
    }, [K, J, $, eE]), eg = a.useCallback(() => {
        eE("")
    }, [eE]), eC = a.useCallback(async () => {
        null != K && null != J && (0, p.hH)({
            channelId: K,
            messageId: J,
            numDestinationChanges: ee.current,
            numQueryChanges: et.current
        }), await k()
    }, [K, J, k]), eL = a.useRef(null);
    a.useEffect(() => {
        "" === ed && eL.current?.focus()
    }, [ed]);
    let ef = a.useMemo(() => (0, s.throttle)(() => {
            (0, o.showToast)((0, o.createToast)(D.intl.string(D.t.kwmYkt), o.ToastType.FORWARD))
        }, 3e3, {
            leading: !0,
            trailing: !1
        }), []),
        eN = a.useCallback(e => {
            null != K && null != J && X(K, J, "" !== ed), el(t => {
                let n = t.findIndex(t => {
                    let {
                        type: n,
                        id: l
                    } = t;
                    return n === e.type && l === e.id
                });
                if (-1 === n) return es ? t : (eE(""), ee.current += 1, [e, ...t]);
                let l = [...t];
                return l.splice(n, 1), ee.current += 1, l
            })
        }, [K, es, J, ed, eE, X]),
        ex = a.useCallback(async function(e) {
            let {
                withMessage: a,
                transitionToDestination: s,
                closeAfterSend: i
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null != M) return void await M(e, {
                withMessage: a,
                transitionToDestination: s,
                closeAfterSend: i
            }, q);
            if (null == K || null == J) return void(0, o.showToast)((0, o.createToast)(D.intl.string(D.t.R0RpRX), o.ToastType.FAILURE));
            let r = L.A.getMessage(K, J) ?? t;
            if (null == r) return void(0, o.showToast)((0, o.createToast)(D.intl.string(D.t.R0RpRX), o.ToastType.FAILURE));
            q(!0);
            let u = (await Promise.all(e.map(E.pk))).filter(f.Vq);
            if ((0, P.A)(r, u) && !await new Promise(e => {
                    (0, o.mMO)(async () => {
                        let {
                            default: t
                        } = await n.e("51954").then(n.bind(n, 156073));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            onConfirm: () => e(!0),
                            onBack: () => e(!1)
                        })
                    })
                })) return void q(!1);
            i && (0, b.Be)(), j?.(), s && (await h.A.fetchMessages({
                channelId: u[0]
            }), (0, I.iN)(u[0], {
                openTextInVoiceIfVoiceChannel: !0
            }));
            let c = await N.A.sendForwards(r, u, {
                    ...v,
                    withMessage: a
                }),
                A = u.some(e => {
                    let t = g.A.getChannel(e);
                    return null != t && t.rateLimitPerUser > 0
                });
            if (c.every(e => {
                    let {
                        status: t
                    } = e;
                    return "fulfilled" === t
                })) {
                (0, p.TA)({
                    channelId: K,
                    messageId: J,
                    hasError: !1,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: u.length,
                    numDestinationChanges: ee.current,
                    numQueryChanges: et.current,
                    anyDestinationHasSlowmode: A
                }), ef();
                return
            }(0, p.TA)({
                channelId: K,
                messageId: J,
                hasError: !0,
                hasContextMessage: null != a && "" !== a,
                numDestinations: u.length,
                numDestinationChanges: ee.current,
                numQueryChanges: et.current,
                anyDestinationHasSlowmode: A
            });
            let d = e.filter((e, t) => "rejected" === c[t].status);
            (0, b.vK)({
                message: r,
                failedDestinations: d,
                forwardOptions: v
            })
        }, [K, v, J, t, j, ef, M]),
        ep = a.useCallback(e => {
            ex(en, {
                withMessage: e,
                transitionToDestination: 1 === en.length,
                closeAfterSend: !0
            })
        }, [ex, en]),
        eP = a.useCallback(() => {
            null != H && c.A.clearDraft(H.channel_id, C.C.ForwardContextMessage), ep(eu.textValue)
        }, [H, eu.textValue, ep]),
        eT = (0, F.s)({
            rowData: e_,
            message: H,
            originChannel: Q,
            selectedDestinations: en,
            handleToggleDestination: eN,
            disableSelection: es,
            validateDestination: U
        }),
        eb = a.useRef(null),
        eS = (0, A.A)("forward-modal", eb),
        eF = a.useMemo(() => e_.length > 0 ? eT : {
            sections: [1],
            sectionHeight: 0,
            renderRow: () => (0, l.jsx)(y, {}),
            rowHeight: 72
        }, [e_, eT]),
        eD = ea <= 1 ? D.intl.string(D.t.TXNS7S) : D.intl.formatToPlainString(D.t.jWtYUm, {
            count: ea
        });
    return (0, l.jsx)(i.hD, {
        navigator: eS,
        children: (0, l.jsx)(i.PR, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, l.jsx)(r.Modal, {
                    ...Y,
                    onClose: eC,
                    title: W ?? D.intl.string(D.t["+SkRRj"]),
                    subtitle: w ?? (es ? D.intl.formatToPlainString(D.t["3Fbkir"], {
                        count: 5
                    }) : D.intl.string(D.t["VA+btJ"])),
                    input: (0, l.jsx)(o.IWV, {
                        ref: eL,
                        query: ed,
                        onChange: em,
                        onClear: eg,
                        placeholder: D.intl.string(D.t["5h0QOP"]),
                        "aria-label": D.intl.string(D.t["5h0QOP"]),
                        autoFocus: !0
                    }),
                    preview: R ?? (null != H && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(S.q, {
                            message: H,
                            forwardOptions: v,
                            channel: ei
                        }), ec.length > 0 && eu.textValue.length > 0 && (0, l.jsx)(o.Text, {
                            className: G.Lt,
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: D.intl.format(D.t.xJFpij, {
                                count: ec.length,
                                channelNames: ec.join(", ")
                            })
                        })]
                    })),
                    actionBarInput: (0, l.jsx)(T.m, {
                        message: H,
                        canSend: ea > 0,
                        selectedDestinations: en,
                        isSending: z,
                        onSend: ep,
                        inputValue: eu,
                        setInputValue: eo
                    }),
                    actions: [...V ?? [], {
                        variant: "primary",
                        text: eD,
                        onClick: eP,
                        disabled: ea <= 0 || eu.textValue.length > eA,
                        loading: z,
                        icon: o.lX7,
                        iconPosition: "end"
                    }],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eF,
                        ...n,
                        innerRole: void 0,
                        ref: e => {
                            eb.current = e, t.current = e?.getScrollerNode() ?? null
                        }
                    }
                })
            }
        })
    })
}