/** Chunk was on 46875 **/
/** chunk id: 559351, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ec
}), n(896048), n(733351), n(667532);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(942381),
    d = n(884362),
    u = n(837381),
    m = n(741918),
    h = n(621466),
    g = n(311907),
    x = n(189812),
    f = n(990078),
    p = n(397927),
    b = n(465532),
    j = n(608299),
    v = n(355622),
    _ = n(530134),
    y = n(133343),
    A = n(257108),
    C = n(960850),
    T = n(255370),
    O = n(969488),
    S = n(451909),
    N = n(538355),
    w = n(91624),
    E = n(715757),
    I = n(931664),
    P = n(631576),
    R = n(474078),
    k = n(747926),
    M = n(55294),
    D = n(383233),
    L = n(31717),
    U = n(576705),
    F = n(101392),
    G = n(522602),
    z = n(287809),
    H = n(234320),
    B = n(460350),
    V = n(518960),
    K = n(265463),
    W = n(919577),
    q = n(774812),
    J = n(435470),
    X = n(853742),
    Q = n(337337),
    Y = n(302487),
    Z = n(218152),
    $ = n(376310),
    ee = n(452778),
    et = n(337666);
n(253913);
var en = n(652215),
    el = n(746080),
    er = n(985018),
    ei = n(641243);

function ea(e) {
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

function es(e, t) {
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
let eo = v.oU.CREATE_FORUM_POST;

function ec(e) {
    var t, n;
    let i, s, {
            parentChannel: o,
            isSearchLoading: d,
            numResults: u,
            onChange: m,
            canCreatePost: x,
            inputRef: f
        } = e,
        p = !(0, E.V)(o) && x,
        {
            textAreaState: b,
            formOpen: j,
            previewing: v
        } = (0, Z.kU)(e => {
            let {
                textAreaState: t,
                formOpen: n,
                previewing: l
            } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: l
            }
        }, c.x),
        [_, y] = r.useState(null),
        A = r.useContext(H.EH),
        C = r.useCallback(() => {
            A.bumpDispatchPriority()
        }, [A]),
        N = (0, g.bG)([U.A], () => U.A.can(en.xBc.ATTACH_FILES, o)),
        w = (0, g.yK)([G.A], () => G.A.getUploads(o.id, L.C.FirstThreadMessage)),
        R = j && N && p,
        D = (null == o ? void 0 : o.isMediaChannel()) === !0,
        F = (t = o, n = f, i = (0, Z.ST)(), s = (0, J.Hv)(t), r.useCallback(() => {
            let {
                formOpen: e,
                setFormOpenFromUserAction: l,
                name: r,
                textAreaState: a,
                hasClickedForm: o
            } = i.getState();
            !e && (setTimeout(() => {
                if ((0, h.vq)(n.current, HTMLTextAreaElement)) {
                    var e;
                    null == (e = n.current) || e.focus()
                }
            }, 0), (o && r.length > 0 || a.textValue.trim().length > 0 && a.textValue.trim() !== s || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && l())
        }, [i, t.id, s, n])),
        z = function(e) {
            let {
                formOpen: t
            } = (0, Z.kU)(e => {
                let {
                    formOpen: t
                } = e;
                return {
                    formOpen: t
                }
            }, c.x), n = (0, Z.ST)(), l = (0, M.N)({
                parentChannel: e
            });
            r.useEffect(() => {
                let {
                    setNameError: e,
                    setMessageError: t
                } = n.getState();
                e(null), t(null)
            }, [t, n]);
            let i = r.useCallback((t, l, r) => {
                let {
                    name: i,
                    textAreaState: a
                } = n.getState();
                null == t && (t = a.textValue), t = t.trim();
                let {
                    content: s
                } = S.Ay.parse(e, t);
                if (t = s, null == l || 0 === l.length) {
                    var o;
                    l = null == (o = I.A.getStickerPreview(e.id, eo.drafts.type)) ? void 0 : o.map(e => e.id)
                }
                if ((null == r || 0 === r.length) && (r = G.A.getUploads(e.id, L.C.FirstThreadMessage)), null != r && r.length > 0 && e.isMediaChannel()) {
                    let e = r.findIndex(e => !0 === e.isThumbnail);
                    if (e > -1) {
                        let t = r[e];
                        r.splice(e, 1), r.unshift(t)
                    }
                }
                let c = 0 === i.length,
                    d = (null == t || 0 === t.length) && (null == l || 0 === l.length) && 0 === r.length;
                return {
                    content: t,
                    stickers: l,
                    uploads: r,
                    hasNameError: c,
                    hasMessageError: d
                }
            }, [e, n]);
            return r.useCallback(async (t, r, a) => {
                let {
                    setNameError: s,
                    setMessageError: o,
                    setSubmitting: c,
                    resetFormState: d,
                    formOpen: u,
                    setFormOpen: m,
                    setPreviewing: h,
                    setFormOpenFromUserAction: g,
                    setGuidelinesOpen: x
                } = n.getState(), f = q.A.hasSeen(e.id);
                if (!u) return (0, X.jr)({
                    guildId: e.guild_id,
                    channelId: e.id
                }), f || n.getState().setGuidelinesOpen(!0), g(), {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
                let {
                    content: p,
                    stickers: b,
                    uploads: j,
                    hasNameError: v,
                    hasMessageError: _
                } = i(t, r, a);
                if (s(v ? (0, K.uW)() : null), o(_ ? (0, K.fo)() : null), v || _) return {
                    shouldClear: !1,
                    shouldRefocus: !0
                };
                try {
                    c(!0);
                    let {
                        valid: t
                    } = await (0, B.i)({
                        content: p,
                        stickers: b,
                        uploads: j,
                        type: eo,
                        channel: e
                    });
                    if (!t) return {
                        shouldClear: !1,
                        shouldRefocus: !0
                    };
                    let n = await l(p, b, j);
                    return (0, k.JA)(n), W.A.resort(e.id), (0, P.x5)(e.id, eo.drafts.type), d(), m(!1), h(!1), q.A.markAsSeen(e.id), x(!1), {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                } catch (t) {
                    var y, A;
                    return (null == (y = t.body) ? void 0 : y.code) === en.t02.AUTOMOD_TITLE_BLOCKED ? s((0, K.z0)(t.body, e)) : (null == (A = t.body) ? void 0 : A.code) === en.t02.AUTOMOD_MESSAGE_BLOCKED && o((0, K.z0)(t.body, e)), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    }
                } finally {
                    c(!1)
                }
            }, [l, i, e, n])
        }(o);
    return r.useLayoutEffect(m, [j, b, w, m]), (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)("div", {
            "aria-label": p ? er.intl.string(er.t.dq7mAa) : er.intl.string(er.t["5h0QOP"]),
            className: a()(ei.kL, {
                [ei.yZ]: !j
            }),
            onClick: !j && p ? F : void 0,
            children: (0, l.jsxs)("form", {
                onMouseDown: C,
                onFocus: C,
                onSubmit: e => {
                    e.preventDefault(), p && z()
                },
                children: [(0, l.jsxs)("div", {
                    className: ei.KJ,
                    children: [(0, l.jsx)(ed, {
                        parentChannel: o,
                        isSearchLoading: d,
                        inputRef: f
                    }), (0, l.jsxs)("div", {
                        className: v ? ei.vJ : ei.Zd,
                        children: [(0, l.jsx)(eu, {
                            editorRef: _,
                            parentChannel: o,
                            isSearchLoading: d,
                            numResults: u,
                            inputRef: f,
                            canCreatePost: p
                        }), j && (0, l.jsx)(eg, {
                            editorRef: _,
                            setEditorRef: y,
                            parentChannel: o,
                            submit: z,
                            disabled: !p
                        }), v && (0, l.jsx)(ex, {})]
                    }), R && (D ? (0, l.jsx)(O.f, {
                        parentChannel: o
                    }) : (0, l.jsx)(Y.h, {
                        channelId: o.id
                    }))]
                }), (0, l.jsxs)("div", {
                    className: ei.Zd,
                    children: [R && D && (0, l.jsx)(T.A, {
                        parentChannel: o
                    }), j && (0, l.jsx)(ej, {
                        className: ei.CN,
                        parentChannel: o,
                        canCreatePost: p
                    })]
                })]
            })
        })
    })
}
let ed = r.memo(function(e) {
        let {
            parentChannel: t,
            isSearchLoading: n,
            inputRef: i
        } = e, {
            formOpen: a,
            name: s,
            textAreaState: o,
            hasClickedForm: d,
            submitting: u
        } = (0, Z.kU)(e => {
            let {
                formOpen: t,
                nameError: n,
                name: l,
                previewing: r,
                textAreaState: i,
                hasClickedForm: a,
                submitting: s
            } = e;
            return {
                formOpen: t,
                nameError: n,
                name: l,
                textAreaState: i,
                previewing: r,
                hasClickedForm: a,
                submitting: s
            }
        }, c.x), m = (0, Z.ST)(), h = (0, J.Hv)(t), g = r.useCallback(() => {
            var e;
            m.getState().resetFormState(), b.A.clearDraft(t.id, L.C.ThreadSettings), b.A.clearDraft(t.id, L.C.FirstThreadMessage), j.A.clearAll(t.id, L.C.FirstThreadMessage), m.getState().setFormOpen(!1), m.getState().setBodyFocused(!1), m.getState().setTitleFocused(!1), m.getState().setHasClickedForm(!1), m.getState().setPreviewing(!1), null == (e = i.current) || e.blur(), (0, X.py)({
                guildId: t.guild_id,
                channelId: t.id
            })
        }, [m, t.id, t.guild_id, i]), x = r.useMemo(() => !a && (s.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== h || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && d ? (0, l.jsx)(p.R2l, {
            size: "md",
            color: "currentColor",
            className: ei.rD
        }) : (0, l.jsx)(p.BT5, {
            onClear: g,
            hasContent: a,
            isLoading: n || u,
            size: "md"
        }), [n, a, d, s, o.textValue, g, t.id, h, u]);
        return (0, l.jsx)("div", {
            className: ei.VB,
            children: x
        })
    }),
    eu = r.memo(function(e) {
        let {
            parentChannel: t,
            inputRef: n,
            canCreatePost: i,
            editorRef: a,
            isSearchLoading: s,
            numResults: d
        } = e, {
            formOpen: u,
            nameError: m,
            name: h,
            textAreaState: f,
            previewing: b
        } = (0, Z.kU)(e => {
            let {
                formOpen: t,
                nameError: n,
                name: l,
                previewing: r,
                textAreaState: i,
                hasClickedForm: a,
                submitting: s
            } = e;
            return {
                formOpen: t,
                nameError: n,
                name: l,
                textAreaState: i,
                previewing: r,
                hasClickedForm: a,
                submitting: s
            }
        }, c.x), j = (0, Z.ST)(), v = null != t.topic && 0 !== t.topic.length, _ = q.A.hasSeen(t.id), y = (0, J.Hv)(t), A = (0, g.bG)([z.default], () => z.default.getCurrentUser());
        o()(null != A, "current user cannot be null"), (0, H.Vo)({
            event: en.jej.FOCUS_COMPOSER_TITLE,
            handler: () => {
                let e = n.current;
                null == e || e.focus(), j.getState().setTitleFocused(!0), j.getState().setFormOpen(!0), j.getState().setHasClickedForm(!0)
            }
        });
        let C = r.useCallback(async e => {
                let n = e.clipboardData.files[0];
                null != n && n.type.startsWith("image/") && (e.preventDefault(), await (0, V.R)([n], t, L.C.FirstThreadMessage, {
                    origin: "clipboard"
                }), j.getState().setFormOpenFromUserAction())
            }, [t, j]),
            T = (0, K.vr)(m, {
                content: h
            });
        return (0, l.jsxs)("div", {
            className: ei.gn,
            onPaste: C,
            children: [u && b ? (0, l.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: ei.DD,
                children: h
            }) : (0, l.jsxs)(p.BJc, {
                gap: 4,
                children: [(0, l.jsx)(x.d, {
                    value: h,
                    placeholder: i ? u || f.textValue.length > 0 && f.textValue.trim() !== y ? er.intl.string(er.t.lU4dDS) : er.intl.string(er.t.CjmivA) : er.intl.string(er.t["5h0QOP"]),
                    rows: 1,
                    maxLength: en.Ign,
                    onChange: e => {
                        let n = e.target.value,
                            l = (0, R.A)(n, !1);
                        j.getState().setName(l);
                        let r = 0 === l.trim().length,
                            i = 0 === f.textValue.trim().length,
                            a = f.textValue.trim() === y;
                        r && (i || a) && j.getState().setHasClickedForm(!1), u || W.A.updateForumSearchQuery(t.id, l)
                    },
                    onFocus: () => {
                        j.getState().setTitleFocused(!0), j.getState().setBodyFocused(!1)
                    },
                    onBlur: () => {
                        j.getState().setTitleFocused(!1);
                        let e = (0, R.A)(h, !0);
                        e !== h && (j.getState().setName(e), u || W.A.updateForumSearchQuery(t.id, e))
                    },
                    onKeyDown: e => {
                        "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), u && h.length > 0 ? null == a || a.focus() : i && e.shiftKey ? ((0, X.sB)({
                            guildId: t.guild_id,
                            channelId: t.id
                        }), v && !_ && j.getState().setGuidelinesOpen(!0), j.getState().setFormOpenFromUserAction(), h.trim().length > 0 && (j.getState().setBodyFocused(!0), null == a || a.focus())) : u || !(h.length > 0) || null != d || s || W.A.updateForumSearchQuery(t.id, h));
                        let l = n.current;
                        if ("Home" === e.key || "End" === e.key) {
                            if (null == l) return;
                            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) {
                                let t = e.shiftKey ? Math.max(l.selectionStart, l.selectionEnd) : 0;
                                l.setSelectionRange(0, t, "backward")
                            } else {
                                let t = e.shiftKey ? Math.min(l.selectionStart, l.selectionEnd) : h.length,
                                    n = h.length;
                                l.setSelectionRange(t, n, "forward")
                            }
                        }
                        if ("Escape" === e.key && !j.getState().submitting) {
                            var r;
                            null == (r = n.current) || r.blur(), j.getState().setFormOpen(!1), j.getState().setTitleFocused(!1), j.getState().setBodyFocused(!1), j.getState().setPreviewing(!1)
                        }
                    },
                    className: ei.DD,
                    ref: n
                }), null != T ? (0, l.jsx)(p.dzK, {
                    error: T
                }) : null]
            }), u ? null : (0, l.jsxs)(p.BJc, {
                direction: "horizontal",
                gap: 8,
                justify: "end",
                fullWidth: !1,
                children: [(0, l.jsx)(em, {
                    parentChannel: t
                }), (0, l.jsx)(ev, {
                    parentChannel: t,
                    canCreatePost: i
                })]
            })]
        })
    });

function em(e) {
    let {
        parentChannel: t
    } = e, {
        guidelinesOpen: n
    } = (0, Z.kU)(e => {
        let {
            guidelinesOpen: t
        } = e;
        return {
            guidelinesOpen: t
        }
    }, c.x), r = (0, Z.ST)();
    return null != t.topic && 0 !== t.topic.length ? (0, l.jsx)(f.m, {
        text: er.intl.string(er.t["4d4T4l"]),
        children: (0, l.jsx)(p.K0, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
                r.getState().setGuidelinesOpen(!n)
            },
            icon: p.B8Q,
            "aria-label": er.intl.string(er.t["4d4T4l"])
        })
    }) : null
}
let eh = r.memo(function(e) {
        let {
            parentChannel: t,
            textValue: n
        } = e, r = new D.Ay({
            channel_id: t.id,
            content: n
        }), {
            content: i
        } = (0, N.A)(r, {
            hideSimpleEmbedContent: !0,
            isInteracting: !1,
            formatInline: !1,
            allowList: !0,
            allowHeading: !0,
            previewLinkTarget: !0,
            allowLinks: !0
        }), s = (0, w.A)({
            message: r,
            channel: t,
            compact: !1
        }, i, !1);
        return (0, l.jsx)("div", {
            className: a()(ei.SL, ei.ly),
            children: s
        })
    }),
    eg = r.memo(function(e) {
        let {
            parentChannel: t,
            submit: n,
            disabled: i = !1,
            editorRef: s,
            setEditorRef: d
        } = e, u = (0, g.bG)([z.default], () => z.default.getCurrentUser());
        o()(null != u, "current user cannot be null");
        let {
            messageError: m,
            previewing: h,
            textAreaState: x,
            bodyFocused: f,
            formOpen: b
        } = (0, Z.kU)(e => {
            let {
                messageError: t,
                textAreaState: n,
                previewing: l,
                bodyFocused: r,
                formOpen: i
            } = e;
            return {
                messageError: t,
                textAreaState: n,
                previewing: l,
                bodyFocused: r,
                formOpen: i
            }
        }, c.x), j = (0, Z.ST)();
        r.useEffect(() => () => (0, X._4)({
            guildId: t.guild_id,
            channelId: t.id
        }), [t.guild_id, t.id]);
        let v = r.useCallback(() => {
                j.getState().setBodyFocused(!0)
            }, [j]),
            _ = r.useCallback(() => {
                j.getState().setBodyFocused(!1)
            }, [j]),
            A = r.useCallback((e, t, n) => {
                let {
                    setTextAreaState: l
                } = j.getState();
                l({
                    textValue: t,
                    richValue: n
                })
            }, [j]),
            C = r.useCallback(e => {
                let {
                    value: t,
                    uploads: l,
                    stickers: r
                } = e;
                return n(t, r, l)
            }, [n]);
        (0, H.Vo)({
            event: en.jej.TEXTAREA_FOCUS,
            handler: v
        }), (0, H.Vo)({
            event: en.jej.TEXTAREA_BLUR,
            handler: _
        });
        let T = (0, K.vr)(m, {
            content: x.textValue
        });
        return (0, l.jsx)("div", {
            className: ei.IP,
            children: (0, l.jsxs)("div", {
                className: ei.hQ,
                children: [h ? (0, l.jsx)(eh, {
                    parentChannel: t,
                    textValue: x.textValue
                }) : (0, l.jsx)("div", {
                    onClick: v,
                    children: (0, l.jsx)(y.Ay, {
                        type: eo,
                        setEditorRef: d,
                        channel: t,
                        placeholder: er.intl.string(er.t["8IPnv1"]),
                        textValue: x.textValue,
                        richValue: x.richValue,
                        focused: f,
                        className: ei.gM,
                        innerClassName: a()(ei.SL, {
                            [ei.cr]: null != T
                        }),
                        onChange: A,
                        onSubmit: C,
                        promptToUpload: V.R,
                        disabled: i,
                        onKeyDown: e => {
                            ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), b && "Escape" === e.key && !j.getState().submitting && (null == s || s.blur(), j.getState().setFormOpen(!1), j.getState().setTitleFocused(!1), j.getState().setBodyFocused(!1), j.getState().setPreviewing(!1))
                        },
                        autoCompletePosition: "bottom"
                    })
                }), (0, l.jsx)(p.dzK, {
                    error: T
                })]
            })
        })
    });

function ex() {
    return (0, l.jsx)("div", {
        className: ei.fv,
        children: (0, l.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: er.intl.string(er.t["WE/cYo"])
        })
    })
}

function ef(e) {
    let {
        textAreaState: t
    } = (0, Z.kU)(e => {
        let {
            textAreaState: t
        } = e;
        return {
            textAreaState: t
        }
    }, c.x), n = (0, g.yK)([G.A], () => G.A.getUploads(e.id, L.C.FirstThreadMessage));
    return r.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n])
}

function ep(e) {
    let t = ef(e),
        {
            appliedTags: n,
            name: l
        } = (0, Z.kU)(e => {
            let {
                appliedTags: t,
                name: n
            } = e;
            return {
                appliedTags: t,
                name: n
            }
        }, c.x);
    return r.useMemo(() => e.hasFlag(el.lx.REQUIRE_TAG) && 0 === n.size && l.length > 0 && t, [n, l, e, t])
}

function eb() {
    let {
        previewing: e
    } = (0, Z.kU)(e => {
        let {
            previewing: t
        } = e;
        return {
            previewing: t
        }
    }, c.x), t = (0, Z.ST)(), n = r.useCallback(() => {
        t.getState().setPreviewing(!e), (0, X.Q_)()
    }, [e, t]), i = e ? er.intl.string(er.t.ojM1xJ) : er.intl.string(er.t.SKNnqq);
    return (0, l.jsx)(f.m, {
        text: i,
        children: (0, l.jsx)(p.K0, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? p.G3N : p.bMW,
            "aria-label": i
        })
    })
}
let ej = r.memo(function(e) {
    let {
        parentChannel: t,
        canCreatePost: n,
        className: i
    } = e, {
        textAreaState: a,
        name: s
    } = (0, Z.kU)(e => {
        let {
            textAreaState: t,
            name: n
        } = e;
        return {
            textAreaState: t,
            name: n
        }
    }, c.x), {
        rateLimitPerUser: o
    } = t, d = o > 0, u = (0, g.bG)([F.A], () => F.A.getSlowmodeCooldownGuess(t.id, F.R.CreateThread)), m = (0, C._)(t, F.R.CreateThread), h = ep(t), x = (0, Z.ST)(), f = r.useCallback(() => {
        x.getState().setBodyFocused(!1)
    }, [x]), b = r.useMemo(() => "" !== s.trim() && "" !== a.textValue.trim(), [s, a.textValue]);
    return r.useEffect(() => {
        b || x.getState().setPreviewing(!1)
    }, [b, x]), (0, l.jsxs)("div", {
        className: i,
        children: [(0, l.jsx)(ey, {
            parentChannel: t
        }), (0, l.jsx)("div", {
            className: ei.XJ
        }), (0, l.jsxs)("div", {
            className: ei.gO,
            children: [(0, l.jsxs)("div", {
                className: ei.ne,
                children: [(0, l.jsxs)("div", {
                    className: ei.Kk,
                    children: [(0, l.jsx)(A.A, {
                        type: eo,
                        textValue: a.textValue,
                        className: ei.Dq
                    }), d && (0, l.jsx)(ee.A, {
                        rateLimitPerUser: o,
                        slowmodeCooldownGuess: u,
                        isBypassSlowmode: m,
                        leadingIcon: !0
                    })]
                }), (0, l.jsx)(em, {
                    parentChannel: t
                }), b && (0, l.jsx)(eb, {}), (0, l.jsx)(ev, {
                    parentChannel: t,
                    disableIfInvalid: !0,
                    canCreatePost: n,
                    disabled: d && !m && u > 0
                })]
            }), (0, l.jsx)(_.A, {
                type: eo,
                className: ei.n1,
                onClick: f,
                channel: t
            }, "expression")]
        }), h && (0, l.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "text-feedback-critical",
            className: ei.ku,
            children: er.intl.string(er.t.xPfNQi)
        })]
    })
});

function ev(e) {
    let {
        parentChannel: t,
        canCreatePost: n,
        disabled: r,
        disableIfInvalid: i = !1
    } = e, a = (0, E.V)(t), {
        submitting: s,
        name: o,
        formOpen: d
    } = (0, Z.kU)(e => {
        let {
            submitting: t,
            name: n,
            formOpen: l
        } = e;
        return {
            submitting: t,
            name: n,
            formOpen: l
        }
    }, c.x), u = ef(t), m = !ep(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a ? null : (0, l.jsx)(p.Button, {
        variant: "primary",
        type: "submit",
        size: "sm",
        loading: s,
        disabled: i && !m || r || !n,
        icon: p.oyn,
        text: d ? er.intl.string(er.t.pIuQI6) : er.intl.string(er.t.TyAuoT)
    })
}

function e_() {
    return Promise.resolve()
}

function ey(e) {
    let {
        parentChannel: t
    } = e, {
        appliedTags: n,
        toggleAppliedTag: i,
        setPopoutOpen: s
    } = (0, Z.kU)(e => {
        let {
            appliedTags: t,
            toggleAppliedTag: n,
            setPopoutOpen: l
        } = e;
        return {
            appliedTags: t,
            toggleAppliedTag: n,
            setPopoutOpen: l
        }
    }, c.x), o = n.size >= 5, h = (0, d.Ay)({
        id: "".concat(t.id, "-post-form-tags-navigator"),
        isEnabled: !0,
        wrap: !0,
        scrollToStart: e_,
        scrollToEnd: e_,
        orientation: m.Gl.HORIZONTAL
    }), {
        containerRef: g,
        containerWidth: x
    } = (0, et.A)(), f = r.useRef(null), b = r.useRef(null), [j, v] = r.useState(!0), _ = (0, J.OT)(t), [y, A] = r.useState(0);
    return (r.useLayoutEffect(() => {
        var e;
        let t = f.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            l = null == t || null == n || n.clientHeight > t.clientHeight;
        if (l !== j && v(l), l && null != g.current && null != n && null != n.children) {
            let {
                left: e,
                top: t
            } = g.current.getBoundingClientRect(), l = 0;
            for (let r of n.children) {
                let {
                    right: n,
                    top: i,
                    height: a
                } = r.getBoundingClientRect();
                if (i - t > a) break;
                n - e > l && (l = n - e)
            }
            A(l)
        }
    }, [_, j, g, x]), 0 === _.length) ? null : (0, l.jsxs)("div", {
        className: ei.Pc,
        ref: g,
        children: [(0, l.jsx)(p.gqV, {
            size: "xs",
            color: "currentColor",
            className: ei.HZ
        }), (0, l.jsx)("div", {
            className: ei.kU,
            ref: f,
            children: (0, l.jsx)(u.hD, {
                navigator: h,
                children: (0, l.jsx)(u.PR, {
                    children: e => {
                        let {
                            ref: t
                        } = e, r = function(e, t) {
                            if (null == e) return {};
                            var n, l, r, i = {};
                            if ("u" > typeof Reflect && Reflect.ownKeys) {
                                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                                return i
                            }
                            if (i = function(e, t) {
                                    if (null == e) return {};
                                    var n, l, r = {},
                                        i = Object.getOwnPropertyNames(e);
                                    for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                    return r
                                }(e, t), Object.getOwnPropertySymbols)
                                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                            return i
                        }(e, ["ref"]);
                        return (0, l.jsx)("div", es(ea({
                            className: ei.j5,
                            ref: t
                        }, r), {
                            children: _.map(e => (0, l.jsx)($.A, {
                                ariaLabel: er.intl.formatToPlainString(er.t.FSZVIR, {
                                    tagName: e.name
                                }),
                                tag: e,
                                onClick: o && !n.has(e.id) ? void 0 : () => i(e.id),
                                disabled: !n.has(e.id) && n.size >= 5,
                                selected: n.has(e.id),
                                size: $.A.Sizes.SMALL
                            }, e.id))
                        }))
                    }
                })
            })
        }), j && (0, l.jsx)(p.YNO, {
            targetElementRef: b,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: e => {
                let {
                    closePopout: r
                } = e;
                return (0, l.jsx)(Q.A, {
                    parentChannel: t,
                    appliedTags: n,
                    maxTagsApplied: o,
                    onSelectTag: i,
                    onClose: r
                })
            },
            position: "bottom",
            align: "center",
            children: e => (0, l.jsx)("div", {
                ref: b,
                className: ei.Wk,
                style: {
                    left: y
                },
                children: (0, l.jsx)(p.Button, es(ea({}, e), {
                    size: "sm",
                    variant: "secondary",
                    icon: p.abt,
                    iconPosition: "end",
                    text: er.intl.string(er.t.w6T0Yc)
                }))
            })
        }), (0, l.jsx)("div", {
            className: a()(ei.Wk, ei.Dz),
            children: (0, l.jsx)(p.Button, {
                size: "sm",
                variant: "secondary",
                icon: p.abt,
                iconPosition: "end",
                text: er.intl.string(er.t.w6T0Yc)
            })
        })]
    })
}