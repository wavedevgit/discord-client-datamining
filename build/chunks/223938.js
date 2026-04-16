/** chunk id: 223938 params = (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(407045),
    d = n(835245),
    u = n(311907),
    h = n(827734),
    m = n(990078),
    A = n(397927),
    g = n(608299),
    _ = n(155718),
    p = n(565150),
    f = n(775602),
    E = n(793574),
    C = n(688810),
    x = n(861382),
    S = n(875163),
    I = n(224805),
    T = n(598071),
    v = n(101555),
    N = n(834755),
    y = n(703007),
    b = n(2553),
    j = n(946274),
    R = n(135621),
    M = n(406704),
    L = n(253932),
    O = n(31717),
    D = n(638128),
    P = n(522602),
    w = n(515718),
    U = n(723702),
    k = n(518960),
    G = n(486319),
    F = n(355622),
    H = n(415409),
    B = n(147025),
    V = n(133343),
    W = n(851023),
    K = n(171593),
    z = n(652215);
n(827669), n(294920);
var Y = n(478644),
    J = n(985018),
    q = n(150679),
    $ = n(266599);

function Z(e, t, n) {
    let i = e.startsWith("attachment://"),
        l = e;
    if (i) {
        let t = e.slice(13);
        l = n ? `attachment://SPOILER_${t}` : e
    }
    return {
        media: {
            url: l,
            proxyUrl: l,
            loadingState: _.TD.UNKNOWN,
            flags: 0
        },
        description: t ?? void 0,
        spoiler: n
    }
}
let X = l.memo(l.forwardRef(function(e, t) {
    let n, {
            textValue: a,
            richValue: r,
            className: d,
            id: h,
            required: m,
            disabled: p,
            accessibilityLabel: v,
            channel: y,
            type: b,
            focused: j,
            onChange: w,
            onResize: k,
            onBlur: W,
            onFocus: Y,
            onKeyDown: X,
            onSubmit: ei,
            promptToUpload: el,
            canMentionRoles: ea,
            canMentionChannels: es,
            maxCharacterCount: er,
            placeholder: eo,
            "aria-describedby": ec,
            "aria-labelledby": ed,
            setEditorRef: eu,
            autoCompletePosition: eh,
            disableThemedBackground: em = !1,
            emojiPickerCloseOnModalOuterClick: eA,
            parentModalKey: eg
        } = e,
        e_ = I.A.useField("channelDrafts")[y.id],
        ep = e_?.title ?? "",
        ef = e_?.heroFile,
        eE = e_?.publish ?? !0,
        eC = e_?.createThread ?? !0;
    o()(null != b, "chat input type must be set");
    let {
        analyticsLocations: ex
    } = (0, C.Ay)(E.A.CHANNEL_TEXT_AREA), eS = (0, V.L0)(t), eI = l.useRef(null), eT = l.useRef(null), ev = l.useRef(null), eN = l.useRef(null);
    eu?.(eT.current);
    let {
        activeCommand: ey
    } = (0, u.cf)([x.A], () => ({
        activeCommand: b.commands?.enabled ? x.A.getActiveCommand(y.id) : null,
        activeCommandSection: b.commands?.enabled ? x.A.getActiveCommandSection(y.id) : null
    })), {
        isLurking: eb,
        isPendingMember: ej,
        disabled: eR,
        canAttachFiles: eM,
        canEveryoneSendMessages: eL
    } = (0, V.Sk)(y, b, ey, p), eO = !L.D_.useSetting() && !(0, U.isAndroidWeb)() && null != window.ResizeObserver, eD = !eO || !b.commands?.enabled || !j || "/" !== a, eP = (0, R.A)(), {
        fontSize: ew
    } = (0, u.cf)([f.A], () => ({
        fontSize: f.A.fontSize,
        isSubmitButtonEnabled: f.A.isSubmitButtonEnabled
    })), eU = (0, u.bG)([D.A], () => D.A.isEnabled()), ek = (0, M.n)(y);
    (0, V.N_)(b, eR, y.id);
    let {
        eventEmitter: eG,
        handleEditorSelectionChanged: eF
    } = (0, V.ml)(eT, a, r), eH = l.useCallback(e => {
        let t = e => (e.shouldClear && ((0, I.x)(y.id, {
                title: "",
                heroFile: null
            }), eT.current?.blur()), e),
            n = [],
            i = (ep.length > 0 ? ep : e.value.length > 0 ? e.value : J.intl.string(J.t["7Xm5QI"])).slice(0, z.Ign);
        if (null == ef) return ei({
            ...e,
            announcementSendOptions: {
                createThread: ek && eC,
                threadName: i,
                publish: eE
            }
        }).then(t);
        n.push({
            type: _.I5.MEDIA_GALLERY,
            items: [Z(`attachment://${ef.name}`, null, !1)],
            id: "82733"
        }), e.value.length > 0 && n.push({
            type: _.I5.TEXT_DISPLAY,
            content: e.value,
            id: "82744"
        });
        let l = P.A.getUploads(y.id, O.C.ChannelMessage),
            a = l.filter(e => (e.isImage || e.isVideo) && e.filename !== ef?.name),
            s = l.filter(e => !e.isImage && !e.isVideo && e.filename !== ef?.name),
            r = a.map(e => Z(`attachment://${e.filename}`, e.description, e.spoiler));
        return r.length > 0 && n.push({
            type: _.I5.MEDIA_GALLERY,
            items: r,
            id: "82755"
        }), s.forEach((e, t) => {
            n.push({
                type: _.I5.FILE,
                file: Z(`attachment://${e.filename}`, e.description, e.spoiler).media,
                id: `${82766+t}`,
                spoiler: e.spoiler,
                name: null,
                size: null
            })
        }), ei({
            ...e,
            components: n,
            announcementSendOptions: {
                createThread: ek && eC,
                threadName: i,
                publish: eE
            }
        }).then(t)
    }, [ei, ep, ef, y.id, eC, eE, ek]), {
        submit: eB,
        handleSubmit: eV
    } = (0, V.Zx)(eH, b, eT, eN, y.id), {
        autocompleteRef: eW,
        handleMaybeShowAutocomplete: eK,
        handleHideAutocomplete: ez
    } = (0, V.v7)(), eY = l.useCallback(() => eN?.current?.hide(), []), {
        editorHeight: eJ,
        handleResize: eq
    } = (0, V.ck)(k), {
        handleTab: e$,
        handleEnter: eZ,
        handleMoveSelection: eX
    } = (n = l.useCallback(() => !!(!eD && eI.current?.onTabOrEnter(!1)) || eW.current?.onTabOrEnter(!1) || !1, [eD]), {
        handleTab: n,
        handleEnter: l.useCallback(() => !!(!eD && eI.current?.onTabOrEnter(!0)) || eW.current?.onTabOrEnter(!1) || !1, [eD]),
        handleMoveSelection: l.useCallback(e => !!(!eD && eI.current?.onMoveSelection(e)) || eW.current?.onMoveSelection(e) || !1, [eD])
    }), {
        expressionPickerView: eQ,
        shouldHideExpressionPicker: e0,
        handleOuterClick: e1
    } = (0, V.MD)(b, eT, y.id), {
        handleAutocompleteVisibilityChange: e2
    } = (0, V.uW)(b, y.id), e3 = (0, V.NO)(eT), e9 = (0, V.Vu)(eB, b, eT), e7 = (0, V.HG)(eT), e5 = (0, V.C)({
        editorRef: eT,
        disabled: eR,
        textValue: a,
        channelId: y.id,
        chatInputType: b,
        submit: eH
    });
    (0, G.R)(eG, y.guild_id, y.id);
    let [e6, e4] = l.useState(!1), e8 = l.useCallback(() => {
        e1(), e4(!0)
    }, [e1]), te = e6 || a.length > 0 || null != ef || ep.length > 0, {
        editorHeaderHeight: tt,
        paddingTop: tn
    } = (0, A.zhh)({
        editorHeaderHeight: 122 * !!te,
        paddingTop: 16 * !!te,
        config: {
            tension: 120,
            friction: 15,
            clamp: !0
        }
    }), ti = l.useRef(null), [tl, ta] = l.useState(!1), ts = l.useRef(!1), tr = l.useCallback(() => {
        ts.current = !0;
        let e = setTimeout(() => {
            ts.current && ta(!0)
        }, 100);
        return () => clearTimeout(e)
    }, []), to = l.useCallback(() => {
        ts.current = !1;
        let e = setTimeout(() => {
            ts.current || ta(!1)
        }, 100);
        return () => clearTimeout(e)
    }, []), tc = l.useCallback(() => {
        if (null == ef) return;
        let e = P.A.getUploads(y.id, b.drafts.type),
            t = e.find(e => e.filename === ef.name)?.id;
        null != t && g.A.remove(y.id, t, O.C.ChannelMessage), (0, I.x)(y.id, {
            heroFile: null
        })
    }, [y.id, ef, b.drafts.type]);
    return (0, i.jsx)(T.Sv, {
        value: eG,
        children: (0, i.jsxs)(C.f5, {
            value: ex,
            children: [(0, i.jsxs)("div", {
                ref: eS,
                className: s()(d, $.gM),
                onMouseDown: e8,
                children: [(0, i.jsx)("div", {
                    ref: ev,
                    onScroll: eY,
                    className: s()($.Ui, {
                        [$.k6]: !em
                    }),
                    children: (0, i.jsxs)("div", {
                        className: s()($.vW, q.vW),
                        children: [(0, i.jsxs)("div", {
                            className: q.rf,
                            children: [(0, i.jsxs)(c.animated.div, {
                                className: q.ov,
                                style: {
                                    height: tt,
                                    paddingTop: tn
                                },
                                children: [null != ef ? (0, i.jsx)(ee, {
                                    file: ef,
                                    onRemoveHeroImage: tc
                                }) : null, null != ef ? null : (0, i.jsx)(en, {
                                    channel: y,
                                    onImageUploaded: e => (0, I.x)(y.id, {
                                        heroFile: e
                                    }),
                                    onFocus: () => e4(!0)
                                }), (0, i.jsx)("input", {
                                    maxLength: 140,
                                    className: q.hz,
                                    placeholder: J.intl.string(J.t.Z8fYjO),
                                    value: ep,
                                    onChange: e => (0, I.x)(y.id, {
                                        title: e.target.value
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: q.I6,
                                children: (0, i.jsx)(A.vN3, {
                                    ringTarget: eS,
                                    ringClassName: $.Rg,
                                    children: (0, i.jsx)(H.A, {
                                        ref: eT,
                                        id: h,
                                        focused: j,
                                        useSlate: eO,
                                        textValue: a,
                                        richValue: r,
                                        disabled: eR,
                                        placeholder: eo,
                                        required: m,
                                        accessibilityLabel: v,
                                        isPreviewing: (eb || ej) && eL,
                                        channel: y,
                                        type: F.oU.CREATE_ANNOUNCEMENT_POST,
                                        canPasteFiles: eM,
                                        uploadPromptCharacterCount: z.CS1,
                                        maxCharacterCount: er ?? eP,
                                        allowNewLines: !0,
                                        "aria-describedby": ec,
                                        onChange: w,
                                        onResize: eq,
                                        onBlur: W,
                                        onFocus: Y,
                                        onKeyDown: X,
                                        onSubmit: eB,
                                        onTab: e$,
                                        onEnter: eZ,
                                        onMoveSelection: eX,
                                        onSelectionChanged: eF,
                                        onMaybeShowAutocomplete: eK,
                                        onHideAutocomplete: ez,
                                        promptToUpload: el,
                                        fontSize: ew,
                                        spellcheckEnabled: eU,
                                        canOnlyUseTextCommands: !1,
                                        "aria-labelledby": ed
                                    })
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: q.KK,
                            children: (0, i.jsx)(K.A, {
                                channelId: y.id,
                                type: b,
                                canAttachFiles: eM,
                                ignoreFile: ef?.name,
                                smallAttachments: !0
                            })
                        })]
                    })
                }), (0, i.jsx)("div", {
                    className: q.yF
                }), (0, i.jsxs)("div", {
                    className: q.qr,
                    children: [(0, i.jsxs)("div", {
                        className: q.j4,
                        children: [(0, i.jsx)(et, {
                            channel: y
                        }), (0, i.jsx)(B.A, {
                            type: F.oU.CREATE_ANNOUNCEMENT_POST,
                            disabled: eR,
                            channel: y,
                            handleSubmit: eV,
                            isEmpty: 0 === a.trim().length,
                            showAllButtons: !0
                        })]
                    }), (0, i.jsx)("div", {
                        className: q.j4,
                        children: (0, i.jsx)("div", {
                            ref: ti,
                            className: q.Qo,
                            onMouseEnter: tr,
                            onMouseLeave: to,
                            children: (0, i.jsx)(A.YNO, {
                                targetElementRef: ti,
                                renderPopout: () => (0, i.jsx)(Q, {
                                    channelId: y.id,
                                    canCreateThread: ek
                                }),
                                shouldShow: tl,
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "top",
                                align: "right",
                                children: e => (0, i.jsx)(A.Button, {
                                    ...e,
                                    onClick: () => {
                                        eB(`${ep.length>0?`# ${ep}
`:""}${a}`)
                                    },
                                    disabled: 0 === a.length && 0 === ep.length,
                                    size: "sm",
                                    "aria-label": J.intl.string(J.t.TXNS7S),
                                    innerClassName: q.jo,
                                    text: (0, i.jsxs)("div", {
                                        className: q.f9,
                                        children: [(0, i.jsx)(A.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: J.intl.string(J.t.TXNS7S)
                                        }), (0, i.jsxs)("div", {
                                            className: q.pj,
                                            children: [(0, i.jsx)(A.lX7, {
                                                size: "xs",
                                                color: "white"
                                            }), ek && eC ? (0, i.jsx)(A.ysw, {
                                                size: "xxs",
                                                color: "white",
                                                className: q.Q5
                                            }) : null]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)(S.A, {
                    targetRef: eS,
                    ref: eW,
                    channel: y,
                    canMentionRoles: ea,
                    canMentionChannels: es,
                    useNewSlashCommands: eO,
                    canOnlyUseTextCommands: !1,
                    canSendStickers: !0,
                    textValue: a,
                    focused: j,
                    expressionPickerView: eQ,
                    type: b,
                    editorRef: eT,
                    onSendMessage: eB,
                    onSendSticker: () => {},
                    onVisibilityChange: e2,
                    editorHeight: eJ,
                    setValue: (e, t) => w?.(null, e, t),
                    position: eh
                })]
            }), e0 ? null : (0, i.jsx)(N.A, {
                positionTargetRef: eS,
                type: b,
                onSelectGIF: e9,
                onSelectEmoji: e3,
                onSelectKaomoji: e7,
                onSelectSticker: e5,
                channel: y,
                closeOnModalOuterClick: eA,
                parentModalKey: eg,
                position: "top",
                align: "right",
                positionLayerClassName: $.BD
            })]
        })
    })
}));

function Q(e) {
    let {
        channelId: t,
        canCreateThread: n
    } = e, l = I.A.useField("channelDrafts")[t], a = l?.createThread ?? !0, s = l?.publish ?? !0;
    return (0, i.jsxs)(A.W1t, {
        "data-menu-migrated": !0,
        "aria-label": J.intl.string(J.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.tEg,
        onSelect: z.tEg,
        children: [(0, i.jsx)(A.sLh, {
            id: "create-thread",
            label: J.intl.string(J.t.rBIGBL),
            checked: n && a,
            disabled: !n,
            action: () => {
                (0, I.x)(t, {
                    createThread: !a
                })
            }
        }), (0, i.jsx)(A.sLh, {
            id: "send-and-publish",
            label: J.intl.string(J.t.MFGE51),
            checked: s,
            action: () => {
                (0, I.x)(t, {
                    publish: !s
                })
            }
        })]
    })
}

function ee(e) {
    let {
        file: t,
        onRemoveHeroImage: n
    } = e, [a, s] = l.useState();
    l.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return s(e), () => {
            s(void 0), URL.revokeObjectURL(e)
        }
    }, [t]);
    let [r, o] = l.useState(!1), c = l.useCallback(() => {
        o(!0)
    }, []), d = l.useCallback(() => {
        o(!1)
    }, []);
    return null == a ? null : (0, i.jsxs)("div", {
        onMouseEnter: c,
        onMouseLeave: d,
        className: q.Lb,
        "aria-hidden": !0,
        children: [(0, i.jsx)("img", {
            src: a,
            alt: J.intl.string(J.t["2ePvR8"]),
            className: q.c8
        }), r ? (0, i.jsx)(v.Ay, {
            className: q.jM,
            children: (0, i.jsx)(W.A, {
                tooltip: J.intl.string(J.t.VjC21x),
                onClick: n,
                dangerous: !0,
                children: (0, i.jsx)(A.ucK, {})
            })
        }) : null]
    })
}

function et(e) {
    let {
        channel: t
    } = e;
    return (0, i.jsx)(y.A, {
        "aria-label": J.intl.string(J.t["/IBYAq"]),
        className: q.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: e => {
            (0, k.R)(e.currentTarget.files, t, O.C.ChannelMessage, {
                requireConfirm: !0,
                origin: "file_picker"
            }), e.currentTarget.value = null
        },
        children: (0, i.jsx)(A.H8$, {
            size: "custom",
            width: 20,
            height: 20,
            color: h.A.colors.INTERACTIVE_TEXT_DEFAULT
        })
    })
}

function en(e) {
    let {
        channel: t,
        onImageUploaded: n,
        onFocus: a
    } = e, s = l.useRef(null), r = async (e, i) => {
        let l = await (0, w.bX)(e, i.name, i.type),
            a = {
                id: (0, d.A)(),
                file: l,
                platform: p.xz.WEB,
                isThumbnail: !1,
                origin: "file_picker"
            };
        g.A.addFile({
            file: a,
            channelId: t.id,
            draftType: O.C.ChannelMessage
        }), n(l)
    }, [o, c] = l.useState(!1), u = l.useCallback(() => {
        c(!0)
    }, []), _ = l.useCallback(() => {
        c(!1)
    }, []);
    return (0, i.jsx)("div", {
        className: q.qN,
        children: (0, i.jsx)(m.m, {
            asContainer: !0,
            text: J.intl.string(J.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(A.DUT, {
                className: q.qN,
                onMouseOver: u,
                onMouseOut: _,
                onFocus: a,
                children: [(0, i.jsx)(j.Ay, {
                    ref: s,
                    onChange: r,
                    "aria-hidden": !0,
                    tabIndex: -1,
                    maxFileSizeBytes: Y.j,
                    onFileSizeError: () => (0, b.A)(Y.j)
                }), (0, i.jsx)(A.XGR, {
                    size: "md",
                    color: o ? h.A.colors.INTERACTIVE_TEXT_ACTIVE : h.A.colors.INTERACTIVE_TEXT_DEFAULT
                })]
            })
        })
    })
}