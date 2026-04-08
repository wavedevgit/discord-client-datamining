/** chunk id: 223938 params = (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(687498),
    d = n(835245),
    u = n(311907),
    h = n(827734),
    m = n(990078),
    A = n(397927),
    p = n(608299),
    g = n(155718),
    f = n(565150),
    _ = n(775602),
    E = n(793574),
    x = n(688810),
    C = n(861382),
    S = n(875163),
    T = n(224805),
    N = n(598071),
    I = n(101555),
    v = n(834755),
    y = n(703007),
    b = n(2553),
    j = n(946274),
    R = n(135621),
    M = n(406704),
    D = n(253932),
    O = n(31717),
    L = n(638128),
    P = n(522602),
    k = n(515718),
    w = n(723702),
    U = n(518960),
    G = n(486319),
    F = n(355622),
    B = n(415409),
    H = n(147025),
    V = n(133343),
    K = n(851023),
    W = n(171593),
    z = n(652215);
n(827669), n(294920);
var q = n(478644),
    Y = n(985018),
    J = n(207722),
    $ = n(526636);

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
            loadingState: g.TD.UNKNOWN,
            flags: 0
        },
        description: t ?? void 0,
        spoiler: n
    }
}
let X = l.memo(l.forwardRef(function(e, t) {
    let n, {
            textValue: s,
            richValue: r,
            className: d,
            id: h,
            required: m,
            disabled: f,
            accessibilityLabel: I,
            channel: y,
            type: b,
            focused: j,
            onChange: k,
            onResize: U,
            onBlur: K,
            onFocus: q,
            onKeyDown: X,
            onSubmit: ei,
            promptToUpload: el,
            canMentionRoles: es,
            canMentionChannels: ea,
            maxCharacterCount: er,
            placeholder: eo,
            "aria-describedby": ec,
            "aria-labelledby": ed,
            setEditorRef: eu,
            autoCompletePosition: eh,
            disableThemedBackground: em = !1,
            emojiPickerCloseOnModalOuterClick: eA,
            parentModalKey: ep
        } = e,
        eg = T.A.useField("channelDrafts")[y.id],
        ef = eg?.title ?? "",
        e_ = eg?.heroFile,
        eE = eg?.publish ?? !0,
        ex = eg?.createThread ?? !0;
    o()(null != b, "chat input type must be set");
    let {
        analyticsLocations: eC
    } = (0, x.Ay)(E.A.CHANNEL_TEXT_AREA), eS = (0, V.L0)(t), eT = l.useRef(null), eN = l.useRef(null), eI = l.useRef(null), ev = l.useRef(null);
    eu?.(eN.current);
    let {
        activeCommand: ey
    } = (0, u.cf)([C.A], () => ({
        activeCommand: b.commands?.enabled ? C.A.getActiveCommand(y.id) : null,
        activeCommandSection: b.commands?.enabled ? C.A.getActiveCommandSection(y.id) : null
    })), {
        isLurking: eb,
        isPendingMember: ej,
        disabled: eR,
        canAttachFiles: eM,
        canEveryoneSendMessages: eD
    } = (0, V.Sk)(y, b, ey, f), eO = !D.D_.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver, eL = !eO || !b.commands?.enabled || !j || "/" !== s, eP = (0, R.A)(), {
        fontSize: ek
    } = (0, u.cf)([_.A], () => ({
        fontSize: _.A.fontSize,
        isSubmitButtonEnabled: _.A.isSubmitButtonEnabled
    })), ew = (0, u.bG)([L.A], () => L.A.isEnabled()), eU = (0, M.n)(y);
    (0, V.N_)(b, eR, y.id);
    let {
        eventEmitter: eG,
        handleEditorSelectionChanged: eF
    } = (0, V.ml)(eN, s, r), eB = l.useCallback(e => {
        let t = e => (e.shouldClear && ((0, T.x)(y.id, {
                title: "",
                heroFile: null
            }), eN.current?.blur()), e),
            n = [],
            i = (ef.length > 0 ? ef : e.value.length > 0 ? e.value : Y.intl.string(Y.t["7Xm5QI"])).slice(0, z.Ign);
        if (null == e_) return ei({
            ...e,
            announcementSendOptions: {
                createThread: eU && ex,
                threadName: i,
                publish: eE
            }
        }).then(t);
        n.push({
            type: g.I5.MEDIA_GALLERY,
            items: [Z(`attachment://${e_.name}`, null, !1)],
            id: "82733"
        }), e.value.length > 0 && n.push({
            type: g.I5.TEXT_DISPLAY,
            content: e.value,
            id: "82744"
        });
        let l = P.A.getUploads(y.id, O.C.ChannelMessage),
            s = l.filter(e => (e.isImage || e.isVideo) && e.filename !== e_?.name),
            a = l.filter(e => !e.isImage && !e.isVideo && e.filename !== e_?.name),
            r = s.map(e => Z(`attachment://${e.filename}`, e.description, e.spoiler));
        return r.length > 0 && n.push({
            type: g.I5.MEDIA_GALLERY,
            items: r,
            id: "82755"
        }), a.forEach((e, t) => {
            n.push({
                type: g.I5.FILE,
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
                createThread: eU && ex,
                threadName: i,
                publish: eE
            }
        }).then(t)
    }, [ei, ef, e_, y.id, ex, eE, eU]), {
        submit: eH,
        handleSubmit: eV
    } = (0, V.Zx)(eB, b, eN, ev, y.id), {
        autocompleteRef: eK,
        handleMaybeShowAutocomplete: eW,
        handleHideAutocomplete: ez
    } = (0, V.v7)(), eq = l.useCallback(() => ev?.current?.hide(), []), {
        editorHeight: eY,
        handleResize: eJ
    } = (0, V.ck)(U), {
        handleTab: e$,
        handleEnter: eZ,
        handleMoveSelection: eX
    } = (n = l.useCallback(() => !!(!eL && eT.current?.onTabOrEnter(!1)) || eK.current?.onTabOrEnter(!1) || !1, [eL]), {
        handleTab: n,
        handleEnter: l.useCallback(() => !!(!eL && eT.current?.onTabOrEnter(!0)) || eK.current?.onTabOrEnter(!1) || !1, [eL]),
        handleMoveSelection: l.useCallback(e => !!(!eL && eT.current?.onMoveSelection(e)) || eK.current?.onMoveSelection(e) || !1, [eL])
    }), {
        expressionPickerView: eQ,
        shouldHideExpressionPicker: e0,
        handleOuterClick: e1
    } = (0, V.MD)(b, eN, y.id), {
        handleAutocompleteVisibilityChange: e2
    } = (0, V.uW)(b, y.id), e3 = (0, V.NO)(eN), e7 = (0, V.Vu)(eH, b, eN), e6 = (0, V.HG)(eN), e5 = (0, V.C)({
        editorRef: eN,
        disabled: eR,
        textValue: s,
        channelId: y.id,
        chatInputType: b,
        submit: eB
    });
    (0, G.R)(eG, y.guild_id, y.id);
    let [e9, e4] = l.useState(!1), e8 = l.useCallback(() => {
        e1(), e4(!0)
    }, [e1]), te = e9 || s.length > 0 || null != e_ || ef.length > 0, {
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
    }), ti = l.useRef(null), [tl, ts] = l.useState(!1), ta = l.useRef(!1), tr = l.useCallback(() => {
        ta.current = !0;
        let e = setTimeout(() => {
            ta.current && ts(!0)
        }, 100);
        return () => clearTimeout(e)
    }, []), to = l.useCallback(() => {
        ta.current = !1;
        let e = setTimeout(() => {
            ta.current || ts(!1)
        }, 100);
        return () => clearTimeout(e)
    }, []), tc = l.useCallback(() => {
        if (null == e_) return;
        let e = P.A.getUploads(y.id, b.drafts.type),
            t = e.find(e => e.filename === e_.name)?.id;
        null != t && p.A.remove(y.id, t, O.C.ChannelMessage), (0, T.x)(y.id, {
            heroFile: null
        })
    }, [y.id, e_, b.drafts.type]);
    return (0, i.jsx)(N.Sv, {
        value: eG,
        children: (0, i.jsxs)(x.f5, {
            value: eC,
            children: [(0, i.jsxs)("div", {
                ref: eS,
                className: a()(d, $.gM),
                onMouseDown: e8,
                children: [(0, i.jsx)("div", {
                    ref: eI,
                    onScroll: eq,
                    className: a()($.Ui, {
                        [$.k6]: !em
                    }),
                    children: (0, i.jsxs)("div", {
                        className: a()($.vW, J.vW),
                        children: [(0, i.jsxs)("div", {
                            className: J.rf,
                            children: [(0, i.jsxs)(c.animated.div, {
                                className: J.ov,
                                style: {
                                    height: tt,
                                    paddingTop: tn
                                },
                                children: [null != e_ ? (0, i.jsx)(ee, {
                                    file: e_,
                                    onRemoveHeroImage: tc
                                }) : null, null != e_ ? null : (0, i.jsx)(en, {
                                    channel: y,
                                    onImageUploaded: e => (0, T.x)(y.id, {
                                        heroFile: e
                                    }),
                                    onFocus: () => e4(!0)
                                }), (0, i.jsx)("input", {
                                    maxLength: 140,
                                    className: J.hz,
                                    placeholder: Y.intl.string(Y.t.Z8fYjO),
                                    value: ef,
                                    onChange: e => (0, T.x)(y.id, {
                                        title: e.target.value
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: J.I6,
                                children: (0, i.jsx)(A.vN3, {
                                    ringTarget: eS,
                                    ringClassName: $.Rg,
                                    children: (0, i.jsx)(B.A, {
                                        ref: eN,
                                        id: h,
                                        focused: j,
                                        useSlate: eO,
                                        textValue: s,
                                        richValue: r,
                                        disabled: eR,
                                        placeholder: eo,
                                        required: m,
                                        accessibilityLabel: I,
                                        isPreviewing: (eb || ej) && eD,
                                        channel: y,
                                        type: F.oU.CREATE_ANNOUNCEMENT_POST,
                                        canPasteFiles: eM,
                                        uploadPromptCharacterCount: z.CS1,
                                        maxCharacterCount: er ?? eP,
                                        allowNewLines: !0,
                                        "aria-describedby": ec,
                                        onChange: k,
                                        onResize: eJ,
                                        onBlur: K,
                                        onFocus: q,
                                        onKeyDown: X,
                                        onSubmit: eH,
                                        onTab: e$,
                                        onEnter: eZ,
                                        onMoveSelection: eX,
                                        onSelectionChanged: eF,
                                        onMaybeShowAutocomplete: eW,
                                        onHideAutocomplete: ez,
                                        promptToUpload: el,
                                        fontSize: ek,
                                        spellcheckEnabled: ew,
                                        canOnlyUseTextCommands: !1,
                                        "aria-labelledby": ed
                                    })
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: J.KK,
                            children: (0, i.jsx)(W.A, {
                                channelId: y.id,
                                type: b,
                                canAttachFiles: eM,
                                ignoreFile: e_?.name,
                                smallAttachments: !0
                            })
                        })]
                    })
                }), (0, i.jsx)("div", {
                    className: J.yF
                }), (0, i.jsxs)("div", {
                    className: J.qr,
                    children: [(0, i.jsxs)("div", {
                        className: J.j4,
                        children: [(0, i.jsx)(et, {
                            channel: y
                        }), (0, i.jsx)(H.A, {
                            type: F.oU.CREATE_ANNOUNCEMENT_POST,
                            disabled: eR,
                            channel: y,
                            handleSubmit: eV,
                            isEmpty: 0 === s.trim().length,
                            showAllButtons: !0
                        })]
                    }), (0, i.jsx)("div", {
                        className: J.j4,
                        children: (0, i.jsx)("div", {
                            ref: ti,
                            className: J.Qo,
                            onMouseEnter: tr,
                            onMouseLeave: to,
                            children: (0, i.jsx)(A.YNO, {
                                targetElementRef: ti,
                                renderPopout: () => (0, i.jsx)(Q, {
                                    channelId: y.id,
                                    canCreateThread: eU
                                }),
                                shouldShow: tl,
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "top",
                                align: "right",
                                children: e => (0, i.jsx)(A.Button, {
                                    ...e,
                                    onClick: () => {
                                        eH(`${ef.length>0?`# ${ef}
`:""}${s}`)
                                    },
                                    disabled: 0 === s.length && 0 === ef.length,
                                    size: "sm",
                                    "aria-label": Y.intl.string(Y.t.TXNS7S),
                                    innerClassName: J.jo,
                                    text: (0, i.jsxs)("div", {
                                        className: J.f9,
                                        children: [(0, i.jsx)(A.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: Y.intl.string(Y.t.TXNS7S)
                                        }), (0, i.jsxs)("div", {
                                            className: J.pj,
                                            children: [(0, i.jsx)(A.lX7, {
                                                size: "xs",
                                                color: "white"
                                            }), eU && ex ? (0, i.jsx)(A.ysw, {
                                                size: "xxs",
                                                color: "white",
                                                className: J.Q5
                                            }) : null]
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                }), (0, i.jsx)(S.A, {
                    targetRef: eS,
                    ref: eK,
                    channel: y,
                    canMentionRoles: es,
                    canMentionChannels: ea,
                    useNewSlashCommands: eO,
                    canOnlyUseTextCommands: !1,
                    canSendStickers: !0,
                    textValue: s,
                    focused: j,
                    expressionPickerView: eQ,
                    type: b,
                    editorRef: eN,
                    onSendMessage: eH,
                    onSendSticker: () => {},
                    onVisibilityChange: e2,
                    editorHeight: eY,
                    setValue: (e, t) => k?.(null, e, t),
                    position: eh
                })]
            }), e0 ? null : (0, i.jsx)(v.A, {
                positionTargetRef: eS,
                type: b,
                onSelectGIF: e7,
                onSelectEmoji: e3,
                onSelectKaomoji: e6,
                onSelectSticker: e5,
                channel: y,
                closeOnModalOuterClick: eA,
                parentModalKey: ep,
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
    } = e, l = T.A.useField("channelDrafts")[t], s = l?.createThread ?? !0, a = l?.publish ?? !0;
    return (0, i.jsxs)(A.W1t, {
        "data-menu-migrated": !0,
        "aria-label": Y.intl.string(Y.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.tEg,
        onSelect: z.tEg,
        children: [(0, i.jsx)(A.sLh, {
            id: "create-thread",
            label: Y.intl.string(Y.t.rBIGBL),
            checked: n && s,
            disabled: !n,
            action: () => {
                (0, T.x)(t, {
                    createThread: !s
                })
            }
        }), (0, i.jsx)(A.sLh, {
            id: "send-and-publish",
            label: Y.intl.string(Y.t.MFGE51),
            checked: a,
            action: () => {
                (0, T.x)(t, {
                    publish: !a
                })
            }
        })]
    })
}

function ee(e) {
    let {
        file: t,
        onRemoveHeroImage: n
    } = e, [s, a] = l.useState();
    l.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return a(e), () => {
            a(void 0), URL.revokeObjectURL(e)
        }
    }, [t]);
    let [r, o] = l.useState(!1), c = l.useCallback(() => {
        o(!0)
    }, []), d = l.useCallback(() => {
        o(!1)
    }, []);
    return null == s ? null : (0, i.jsxs)("div", {
        onMouseEnter: c,
        onMouseLeave: d,
        className: J.Lb,
        "aria-hidden": !0,
        children: [(0, i.jsx)("img", {
            src: s,
            alt: Y.intl.string(Y.t["2ePvR8"]),
            className: J.c8
        }), r ? (0, i.jsx)(I.Ay, {
            className: J.jM,
            children: (0, i.jsx)(K.A, {
                tooltip: Y.intl.string(Y.t.VjC21x),
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
        "aria-label": Y.intl.string(Y.t["/IBYAq"]),
        className: J.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: e => {
            (0, U.R)(e.currentTarget.files, t, O.C.ChannelMessage, {
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
        onFocus: s
    } = e, a = l.useRef(null), r = async (e, i) => {
        let l = await (0, k.bX)(e, i.name, i.type),
            s = {
                id: (0, d.A)(),
                file: l,
                platform: f.xz.WEB,
                isThumbnail: !1,
                origin: "file_picker"
            };
        p.A.addFile({
            file: s,
            channelId: t.id,
            draftType: O.C.ChannelMessage
        }), n(l)
    }, [o, c] = l.useState(!1), u = l.useCallback(() => {
        c(!0)
    }, []), g = l.useCallback(() => {
        c(!1)
    }, []);
    return (0, i.jsx)("div", {
        className: J.qN,
        children: (0, i.jsx)(m.m, {
            asContainer: !0,
            text: Y.intl.string(Y.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(A.DUT, {
                className: J.qN,
                onMouseOver: u,
                onMouseOut: g,
                onFocus: s,
                children: [(0, i.jsx)(j.Ay, {
                    ref: a,
                    onChange: r,
                    "aria-hidden": !0,
                    tabIndex: -1,
                    maxFileSizeBytes: q.j,
                    onFileSizeError: () => (0, b.A)(q.j)
                }), (0, i.jsx)(A.XGR, {
                    size: "md",
                    color: o ? h.A.colors.INTERACTIVE_TEXT_ACTIVE : h.A.colors.INTERACTIVE_TEXT_DEFAULT
                })]
            })
        })
    })
}