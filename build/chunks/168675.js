/** Chunk was on 78528 **/
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
    p = n(147192),
    h = n(738876),
    f = n(775602),
    g = n(793574),
    m = n(688810),
    b = n(355622),
    A = n(408018),
    y = n(133343),
    _ = n(171593),
    O = n(915089),
    j = n(314307),
    v = n(58736),
    x = n(636922),
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
    M = n(518960),
    L = n(710640),
    k = n(393309),
    U = n(474078),
    G = n(747926),
    B = n(965601),
    V = n(55294),
    F = n(652215),
    H = n(985018),
    K = n(770587),
    W = n(790687);

function z(e) {
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
let Y = b.oU.THREAD_CREATION;

function q(e) {
    let {
        parentChannelId: t,
        parentMessageId: n,
        location: l
    } = e, i = (0, a.bG)([I.A], () => I.A.getChannel(t)), {
        analyticsLocations: s
    } = (0, m.Ay)(g.A.CREATE_THREAD);
    return null == i ? null : (0, r.jsx)(m.f5, {
        value: s,
        children: (0, r.jsx)(R.Ah, {
            children: (0, r.jsxs)("section", {
                "aria-label": H.intl.string(H.t.rBIGBL),
                className: K.kL,
                children: [(0, r.jsx)(h.A, {
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
            title: H.intl.string(H.t["6kDZh1"]),
            body: H.intl.string(H.t.NgS9jX),
            confirmText: H.intl.string(H.t["7WGI4H"]),
            confirmVariant: "critical-primary",
            cancelText: H.intl.string(H.t["olcKd/"]),
            onConfirm: () => {
                (0, G.bA)(t)
            }
        }) : (0, G.bA)(t)
    }, [t]);
    return (0, r.jsxs)(v.Ay, {
        toolbar: (0, r.jsx)(v.Ay.Icon, {
            icon: o.PGe,
            tooltip: H.intl.string(H.t.cpT0Cq),
            onClick: n
        }),
        children: [(0, r.jsx)(v.Ay.Icon, {
            icon: o.ysw,
            disabled: !0,
            "aria-label": H.intl.string(H.t["7Xm5QI"])
        }), (0, r.jsx)(v.Ay.Title, {
            children: H.intl.string(H.t["4WNcpu"])
        })]
    })
}

function J(e) {
    let t, {
            parentChannel: n,
            parentMessageId: i,
            location: u
        } = e,
        d = (0, a.bG)([f.A], () => f.A.messageGroupSpacing),
        h = (t = l.useContext(R.EH), l.useCallback(() => {
            t.bumpDispatchPriority()
        }, [t])),
        {
            threadSettings: g,
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
                    i(e => z({}, e, n)), c.A.changeThreadSettings(e.id, (r = z({}, n), l = l = {
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
            setTextAreaState: _
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
        O = (0, k.EN)(n),
        {
            isGeneratingAI: v,
            enableAIFeatures: x,
            getThreadNameInputAccessory: S
        } = (0, B.C)({
            parentChannel: n,
            parentMessageId: i,
            updateThreadSettings: b,
            threadSettings: g,
            textAreaState: y
        }),
        {
            nameError: I,
            messageError: T,
            submit: P,
            submitting: M
        } = function(e) {
            let {
                parentChannel: t,
                parentMessageId: n,
                threadSettings: r,
                privateThreadMode: i,
                textAreaState: s,
                location: a,
                enableAIFeatures: o
            } = e, [c, u] = l.useState(null), [d, p] = l.useState(null), [h, f] = l.useState(!1), g = (0, V.A)({
                parentChannel: t,
                parentMessageId: n,
                threadSettings: r,
                privateThreadMode: i,
                location: a,
                onThreadCreated: G.JA,
                useDefaultThreadName: !0
            });
            return {
                nameError: c,
                messageError: d,
                submit: l.useCallback(async (e, l, i) => {
                    var a, c, d;
                    if (h) return {
                        shouldClear: !1,
                        shouldRefocus: !1
                    };
                    f(!0), null == e && (e = s.textValue), e = e.trim(), (null == l || 0 === l.length) && (l = null == (c = E.A.getStickerPreview(t.id, Y.drafts.type)) ? void 0 : c.map(e => e.id)), (null == i || 0 === i.length) && (i = w.A.getUploads(t.id, N.C.FirstThreadMessage));
                    let m = null != (a = r.name) ? a : "",
                        b = (o || null == n) && 0 === m.length,
                        A = "" === e && (null == l || 0 === l.length) && 0 === i.length;
                    if (u(b ? (0, L.uW)() : null), p(A ? (0, L.fo)() : null), b || A) return f(!1), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    };
                    let {
                        valid: y
                    } = await (0, D.i)({
                        content: e,
                        stickers: l,
                        uploads: i,
                        type: Y,
                        channel: null == n ? t : null
                    });
                    if (!y) return f(!1), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    };
                    try {
                        await g(e, l, i)
                    } catch (e) {
                        return (null == (d = e.body) ? void 0 : d.code) === F.t02.AUTOMOD_TITLE_BLOCKED && u((0, L.z0)(e.body, t)), f(!1), {
                            shouldClear: !1,
                            shouldRefocus: !0
                        }
                    }
                    return (0, C.x5)(t.id, Y.drafts.type), f(!1), {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                }, [g, s.textValue, r.name, n, t, h, o]),
                submitting: h
            }
        }({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: g,
            privateThreadMode: O,
            textAreaState: y,
            location: u,
            enableAIFeatures: x
        }),
        U = (0, k.Iy)(g, O) ? o.tn0 : o.ysw;
    return (0, r.jsx)("div", {
        className: K.TE,
        onMouseDown: h,
        onFocus: h,
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
                                className: s()(W.P0, K.P0),
                                children: (0, r.jsx)(U, {
                                    className: W.Kk
                                })
                            }), (0, r.jsxs)(o.nVY, {
                                children: [(0, r.jsx)(Z, {
                                    parentChannel: n,
                                    parentMessageId: i,
                                    threadSettings: g,
                                    updateThreadSettings: b,
                                    error: I,
                                    disabled: M,
                                    isGeneratingAI: v,
                                    enableAIFeatures: x,
                                    getThreadNameInputAccessory: S
                                }), n.type === F.rbe.GUILD_TEXT ? (0, r.jsx)(Q, {
                                    startedFromMessage: null != i,
                                    threadSettings: g,
                                    updateThreadSettings: b,
                                    privateThreadMode: O
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
                        setTextAreaState: _,
                        submit: P,
                        error: T
                    }), (0, r.jsx)(p.Ay, {
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
    } = e, s = (0, k.Iy)(n, i), a = (0, r.jsx)(o.Checkbox, {
        disabled: i === k.jk.PrivateOnly,
        checked: s,
        onChange: e => l({
            isPrivate: e
        }),
        label: H.intl.string(H.t.TRPp3g)
    });
    return t || i === k.jk.Disabled ? null : (0, r.jsx)(o.D0$, {
        label: H.intl.string(H.t.F1zyvU),
        helperText: s ? H.intl.string(H.t.EWXycz) : void 0,
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
        enableAIFeatures: p,
        getThreadNameInputAccessory: h
    } = e, f = null != (t = i.name) ? t : "", g = (0, L.vr)(a, {
        content: f
    }), m = (0, k.l1)(n, l), b = null != l && !p, A = (0, O.GV)(), y = p ? H.intl.string(H.t["Nb2/RE"]) : "" !== m ? m : H.intl.string(H.t["Nb2/RE"]);
    return (0, r.jsx)(o.ksK, {
        label: H.intl.string(b ? H.t.JPvIiL : H.t.j3XWjD),
        trailing: h(c),
        value: f,
        id: A,
        placeholder: y,
        maxLength: F.Ign,
        onChange: e => {
            s({
                name: (0, U.A)(e, !1)
            }), "" !== e ? u.A.startTyping(n.id) : u.A.stopTyping(n.id)
        },
        onBlur: () => {
            let e = (0, U.A)(f, !0);
            e !== f && s({
                name: e
            })
        },
        error: g,
        disabled: c || d
    })
}

function $(e) {
    let {
        parentChannel: t,
        textAreaState: n,
        setTextAreaState: i,
        submit: d,
        error: p
    } = e, [h, f] = l.useState(!0), g = l.useCallback(() => f(!0), []), m = l.useCallback(() => f(!1), []), b = l.useCallback((e, n, r) => {
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
        event: F.jej.TEXTAREA_FOCUS,
        handler: g
    }), (0, R.Vo)({
        event: F.jej.TEXTAREA_BLUR,
        handler: m
    });
    let O = (0, a.bG)([P.A], () => P.A.can(F.xBc.ATTACH_FILES, t)),
        j = (0, L.vr)(p, {
            content: n.textValue
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.A, {
            channelId: t.id,
            type: Y,
            canAttachFiles: O
        }), (0, r.jsx)("div", {
            className: K.xN,
            children: (0, r.jsx)(o.dzK, {
                error: j
            })
        }), (0, r.jsx)(y.Ay, {
            type: Y,
            channel: t,
            placeholder: H.intl.string(H.t.taZfIC),
            textValue: n.textValue,
            richValue: n.richValue,
            focused: h,
            className: s()(K.gM, K.Yy),
            innerClassName: s()(K.SL, {
                [K.cr]: null != j
            }),
            onFocus: g,
            onBlur: m,
            onChange: b,
            onSubmit: A,
            promptToUpload: M.R
        })]
    })
}

function ee(e) {
    let {
        parentChannel: t,
        parentMessageId: n
    } = e, l = (0, a.bG)([T.A], () => null == n ? null : T.A.getMessage(t.id, n)), i = S.hH.useSetting();
    return null != l ? (0, r.jsx)(x.A, {
        className: K.IL,
        message: l,
        channel: t,
        compact: i,
        renderThreadAccessory: !1,
        trackAnnouncementViews: !0
    }) : null
}