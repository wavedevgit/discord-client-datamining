/** Chunk was on 1113 **/
/** chunk id: 168675, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => q
}), n(733351), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(465532),
    u = n(414798),
    d = n(579872),
    h = n(147192),
    p = n(738876),
    g = n(775602),
    f = n(793574),
    m = n(688810),
    b = n(355622),
    A = n(408018),
    y = n(133343),
    O = n(171593),
    _ = n(915089),
    j = n(314307),
    x = n(58736),
    v = n(636922),
    E = n(931664),
    C = n(631576),
    S = n(253932),
    I = n(734057),
    N = n(31717),
    T = n(320501),
    P = n(576705),
    w = n(522602),
    R = n(234320),
    D = n(460350),
    L = n(518960),
    M = n(710640),
    G = n(393309),
    k = n(474078),
    U = n(747926),
    V = n(965601),
    B = n(55294),
    H = n(652215),
    F = n(985018),
    K = n(770587),
    Y = n(790687);

function W(e) {
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
let z = b.oU.THREAD_CREATION;

function q(e) {
    let {
        parentChannelId: t,
        parentMessageId: n,
        location: l
    } = e, i = (0, a.bG)([I.A], () => I.A.getChannel(t)), {
        analyticsLocations: s
    } = (0, m.Ay)(f.A.CREATE_THREAD);
    return null == i ? null : (0, r.jsx)(m.f5, {
        value: s,
        children: (0, r.jsx)(R.Ah, {
            children: (0, r.jsxs)("section", {
                "aria-label": F.intl.string(F.t.rBIGBL),
                className: K.kL,
                children: [(0, r.jsx)(p.A, {
                    channel: i,
                    draftType: N.C.FirstThreadMessage
                }), (0, r.jsx)(X, {
                    parentChannelId: t
                }), (0, r.jsx)(J, {
                    parentChannel: i,
                    parentMessageId: n,
                    location: l
                })]
            })
        })
    })
}

function X(e) {
    let {
        parentChannelId: t
    } = e, n = l.useCallback(() => {
        let e = N.A.getThreadSettings(t),
            n = N.A.getDraft(t, N.C.FirstThreadMessage).trim(),
            r = w.A.getUploads(t, N.C.FirstThreadMessage);
        (null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== "" || 0 !== n.length || 0 !== r.length ? d.A.show({
            title: F.intl.string(F.t["6kDZh1"]),
            body: F.intl.string(F.t.NgS9jX),
            confirmText: F.intl.string(F.t["7WGI4H"]),
            confirmVariant: "critical-primary",
            cancelText: F.intl.string(F.t["olcKd/"]),
            onConfirm: () => {
                (0, U.bA)(t)
            }
        }) : (0, U.bA)(t)
    }, [t]);
    return (0, r.jsxs)(x.Ay, {
        toolbar: (0, r.jsx)(x.Ay.Icon, {
            icon: o.PGe,
            tooltip: F.intl.string(F.t.cpT0Cq),
            onClick: n
        }),
        children: [(0, r.jsx)(x.Ay.Icon, {
            icon: o.ysw,
            disabled: !0,
            "aria-label": F.intl.string(F.t["7Xm5QI"])
        }), (0, r.jsx)(x.Ay.Title, {
            children: F.intl.string(F.t["4WNcpu"])
        })]
    })
}

function J(e) {
    let t, {
            parentChannel: n,
            parentMessageId: i,
            location: u
        } = e,
        d = (0, a.bG)([g.A], () => g.A.messageGroupSpacing),
        p = (t = l.useContext(R.EH), l.useCallback(() => {
            t.bumpDispatchPriority()
        }, [t])),
        {
            threadSettings: f,
            setThreadSettings: m,
            updateThreadSettings: b
        } = function(e, t) {
            let n = (0, a.bG)([N.A], () => {
                    var t;
                    return null != (t = N.A.getThreadSettings(e.id)) ? t : {}
                }, [e.id]),
                [r, i] = l.useState(n),
                s = l.useCallback(n => {
                    var r, l;
                    i(e => W({}, e, n)), c.A.changeThreadSettings(e.id, (r = W({}, n), l = l = {
                        parentMessageId: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
                    }), r))
                }, [e.id, t]);
            return {
                threadSettings: r,
                setThreadSettings: i,
                updateThreadSettings: s
            }
        }(n, i),
        {
            textAreaState: y,
            setTextAreaState: O
        } = function(e, t) {
            let [n, r] = l.useState((0, A.N3)());
            return l.useEffect(() => {
                function n(n) {
                    var l;
                    let i = N.A.getDraft(e.id, N.C.FirstThreadMessage);
                    (0 === i.length || !0 === n) && r((0, A.ur)(i)), t(null != (l = N.A.getThreadSettings(e.id)) ? l : {})
                }
                return n(!0), N.A.addChangeListener(n), () => {
                    N.A.removeChangeListener(n)
                }
            }, [e.id, t]), {
                textAreaState: n,
                setTextAreaState: r
            }
        }(n, m),
        _ = (0, G.EN)(n),
        {
            isGeneratingAI: x,
            enableAIFeatures: v,
            getThreadNameInputAccessory: S
        } = (0, V.C)({
            parentChannel: n,
            parentMessageId: i,
            updateThreadSettings: b,
            threadSettings: f,
            textAreaState: y
        }),
        {
            nameError: I,
            messageError: T,
            submit: P,
            submitting: L
        } = function(e) {
            let {
                parentChannel: t,
                parentMessageId: n,
                threadSettings: r,
                privateThreadMode: i,
                textAreaState: s,
                location: a,
                enableAIFeatures: o
            } = e, [c, u] = l.useState(null), [d, h] = l.useState(null), [p, g] = l.useState(!1), f = (0, B.A)({
                parentChannel: t,
                parentMessageId: n,
                threadSettings: r,
                privateThreadMode: i,
                location: a,
                onThreadCreated: U.JA,
                useDefaultThreadName: !0
            });
            return {
                nameError: c,
                messageError: d,
                submit: l.useCallback(async (e, l, i) => {
                    var a, c, d;
                    if (p) return {
                        shouldClear: !1,
                        shouldRefocus: !1
                    };
                    g(!0), null == e && (e = s.textValue), e = e.trim(), (null == l || 0 === l.length) && (l = null == (c = E.A.getStickerPreview(t.id, z.drafts.type)) ? void 0 : c.map(e => e.id)), (null == i || 0 === i.length) && (i = w.A.getUploads(t.id, N.C.FirstThreadMessage));
                    let m = null != (a = r.name) ? a : "",
                        b = (o || null == n) && 0 === m.length,
                        A = "" === e && (null == l || 0 === l.length) && 0 === i.length;
                    if (u(b ? (0, M.uW)() : null), h(A ? (0, M.fo)() : null), b || A) return g(!1), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    };
                    let {
                        valid: y
                    } = await (0, D.i)({
                        content: e,
                        stickers: l,
                        uploads: i,
                        type: z,
                        channel: null == n ? t : null
                    });
                    if (!y) return g(!1), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    };
                    try {
                        await f(e, l, i)
                    } catch (e) {
                        return (null == (d = e.body) ? void 0 : d.code) === H.t02.AUTOMOD_TITLE_BLOCKED && u((0, M.z0)(e.body, t)), g(!1), {
                            shouldClear: !1,
                            shouldRefocus: !0
                        }
                    }
                    return (0, C.x5)(t.id, z.drafts.type), g(!1), {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                }, [f, s.textValue, r.name, n, t, p, o]),
                submitting: p
            }
        }({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: f,
            privateThreadMode: _,
            textAreaState: y,
            location: u,
            enableAIFeatures: v
        }),
        k = (0, G.Iy)(f, _) ? o.tn0 : o.ysw;
    return (0, r.jsx)("div", {
        className: K.TE,
        onMouseDown: p,
        onFocus: p,
        children: (0, r.jsx)("div", {
            className: s()(K.Og, "group-spacing-".concat(d)),
            children: (0, r.jsxs)("form", {
                onSubmit: e => {
                    e.preventDefault(), P()
                },
                className: K.Zd,
                children: [(0, r.jsx)(o.HOs, {
                    className: K.XG,
                    fade: !0,
                    children: (0, r.jsxs)("div", {
                        className: K.bv,
                        children: [(0, r.jsxs)(j.Ay, {
                            channelId: "create-thread-null",
                            children: [(0, r.jsx)("div", {
                                className: s()(Y.P0, K.P0),
                                children: (0, r.jsx)(k, {
                                    className: Y.Kk
                                })
                            }), (0, r.jsxs)(o.nVY, {
                                children: [(0, r.jsx)(Z, {
                                    parentChannel: n,
                                    parentMessageId: i,
                                    threadSettings: f,
                                    updateThreadSettings: b,
                                    error: I,
                                    disabled: L,
                                    isGeneratingAI: x,
                                    enableAIFeatures: v,
                                    getThreadNameInputAccessory: S
                                }), n.type === H.rbe.GUILD_TEXT ? (0, r.jsx)(Q, {
                                    startedFromMessage: null != i,
                                    threadSettings: f,
                                    updateThreadSettings: b,
                                    privateThreadMode: _
                                }) : null]
                            })]
                        }), (0, r.jsx)(ee, {
                            parentChannel: n,
                            parentMessageId: i
                        })]
                    })
                }), (0, r.jsxs)("div", {
                    className: K.Eh,
                    children: [(0, r.jsx)($, {
                        parentChannel: n,
                        textAreaState: y,
                        setTextAreaState: O,
                        submit: P,
                        error: T
                    }), (0, r.jsx)(h.Ay, {
                        channel: n,
                        isThreadCreation: !0,
                        className: K.RL,
                        isInTextChannel: !0
                    })]
                })]
            })
        })
    })
}

function Q(e) {
    let {
        startedFromMessage: t,
        threadSettings: n,
        updateThreadSettings: l,
        privateThreadMode: i
    } = e, s = (0, G.Iy)(n, i), a = (0, r.jsx)(o.Checkbox, {
        disabled: i === G.jk.PrivateOnly,
        checked: s,
        onChange: e => l({
            isPrivate: e
        }),
        label: F.intl.string(F.t.TRPp3g)
    });
    return t || i === G.jk.Disabled ? null : (0, r.jsx)(o.D0$, {
        label: F.intl.string(F.t.F1zyvU),
        helperText: s ? F.intl.string(F.t.EWXycz) : void 0,
        children: a
    })
}

function Z(e) {
    var t;
    let {
        parentChannel: n,
        parentMessageId: l,
        threadSettings: i,
        updateThreadSettings: s,
        error: a,
        disabled: c,
        isGeneratingAI: d,
        enableAIFeatures: h,
        getThreadNameInputAccessory: p
    } = e, g = null != (t = i.name) ? t : "", f = (0, M.vr)(a, {
        content: g
    }), m = (0, G.l1)(n, l), b = null != l && !h, A = (0, _.GV)(), y = h ? F.intl.string(F.t["Nb2/RE"]) : "" !== m ? m : F.intl.string(F.t["Nb2/RE"]);
    return (0, r.jsx)(o.ksK, {
        label: F.intl.string(b ? F.t.JPvIiL : F.t.j3XWjD),
        trailing: p(c),
        value: g,
        id: A,
        placeholder: y,
        maxLength: H.Ign,
        onChange: e => {
            s({
                name: (0, k.A)(e, !1)
            }), "" !== e ? u.A.startTyping(n.id) : u.A.stopTyping(n.id)
        },
        onBlur: () => {
            let e = (0, k.A)(g, !0);
            e !== g && s({
                name: e
            })
        },
        error: f,
        disabled: c || d
    })
}

function $(e) {
    let {
        parentChannel: t,
        textAreaState: n,
        setTextAreaState: i,
        submit: d,
        error: h
    } = e, [p, g] = l.useState(!0), f = l.useCallback(() => g(!0), []), m = l.useCallback(() => g(!1), []), b = l.useCallback((e, n, r) => {
        c.A.saveDraft(t.id, n, N.C.FirstThreadMessage), i(e => ("" !== n && e.textValue !== n ? u.A.startTyping(t.id) : "" === n && u.A.stopTyping(t.id), {
            textValue: n,
            richValue: r
        }))
    }, [t.id, i]), A = l.useCallback(e => {
        let {
            value: t,
            uploads: n,
            stickers: r
        } = e;
        return d(t, r, n)
    }, [d]);
    (0, R.Vo)({
        event: H.jej.TEXTAREA_FOCUS,
        handler: f
    }), (0, R.Vo)({
        event: H.jej.TEXTAREA_BLUR,
        handler: m
    });
    let _ = (0, a.bG)([P.A], () => P.A.can(H.xBc.ATTACH_FILES, t)),
        j = (0, M.vr)(h, {
            content: n.textValue
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(O.A, {
            channelId: t.id,
            type: z,
            canAttachFiles: _
        }), (0, r.jsx)("div", {
            className: K.xN,
            children: (0, r.jsx)(o.dzK, {
                error: j
            })
        }), (0, r.jsx)(y.Ay, {
            type: z,
            channel: t,
            placeholder: F.intl.string(F.t.taZfIC),
            textValue: n.textValue,
            richValue: n.richValue,
            focused: p,
            className: s()(K.gM, K.Yy),
            innerClassName: s()(K.SL, {
                [K.cr]: null != j
            }),
            onFocus: f,
            onBlur: m,
            onChange: b,
            onSubmit: A,
            promptToUpload: L.R
        })]
    })
}

function ee(e) {
    let {
        parentChannel: t,
        parentMessageId: n
    } = e, l = (0, a.bG)([T.A], () => null == n ? null : T.A.getMessage(t.id, n)), i = S.hH.useSetting();
    return null != l ? (0, r.jsx)(v.A, {
        className: K.IL,
        message: l,
        channel: t,
        compact: i,
        renderThreadAccessory: !1,
        trackAnnouncementViews: !0
    }) : null
}