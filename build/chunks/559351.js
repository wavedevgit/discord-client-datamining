/** Chunk was on 46875 **/
/** chunk id: 559351, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ec
}), n(896048), n(733351), n(667532);
var r = n(627968),
    l = n(64700),
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
    f = n(189812),
    x = n(990078),
    p = n(397927),
    b = n(465532),
    j = n(608299),
    v = n(355622),
    _ = n(530134),
    y = n(133343),
    A = n(257108),
    C = n(960850),
    O = n(255370),
    T = n(969488),
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
    F = n(576705),
    U = n(101392),
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
    er = n(746080),
    el = n(985018),
    ei = n(641243);

function ea(e) {
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

function es(e, t) {
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
let eo = v.oU.CREATE_FORUM_POST;

function ec(e) {
    var t, n;
    let i, s, {
            parentChannel: o,
            isSearchLoading: d,
            numResults: u,
            onChange: m,
            canCreatePost: f,
            inputRef: x
        } = e,
        p = !(0, E.V)(o) && f,
        {
            textAreaState: b,
            formOpen: j,
            previewing: v
        } = (0, Z.kU)(e => {
            let {
                textAreaState: t,
                formOpen: n,
                previewing: r
            } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r
            }
        }, c.x),
        [_, y] = l.useState(null),
        A = l.useContext(H.EH),
        C = l.useCallback(() => {
            A.bumpDispatchPriority()
        }, [A]),
        N = (0, g.bG)([F.A], () => F.A.can(en.xBc.ATTACH_FILES, o)),
        w = (0, g.yK)([G.A], () => G.A.getUploads(o.id, L.C.FirstThreadMessage)),
        R = j && N && p,
        D = (null == o ? void 0 : o.isMediaChannel()) === !0,
        U = (t = o, n = x, i = (0, Z.ST)(), s = (0, J.Hv)(t), l.useCallback(() => {
            let {
                formOpen: e,
                setFormOpenFromUserAction: r,
                name: l,
                textAreaState: a,
                hasClickedForm: o
            } = i.getState();
            !e && (setTimeout(() => {
                if ((0, h.vq)(n.current, HTMLTextAreaElement)) {
                    var e;
                    null == (e = n.current) || e.focus()
                }
            }, 0), (o && l.length > 0 || a.textValue.trim().length > 0 && a.textValue.trim() !== s || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && r())
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
            }, c.x), n = (0, Z.ST)(), r = (0, M.N)({
                parentChannel: e
            });
            l.useEffect(() => {
                let {
                    setNameError: e,
                    setMessageError: t
                } = n.getState();
                e(null), t(null)
            }, [t, n]);
            let i = l.useCallback((t, r, l) => {
                let {
                    name: i,
                    textAreaState: a
                } = n.getState();
                null == t && (t = a.textValue), t = t.trim();
                let {
                    content: s
                } = S.Ay.parse(e, t);
                if (t = s, null == r || 0 === r.length) {
                    var o;
                    r = null == (o = I.A.getStickerPreview(e.id, eo.drafts.type)) ? void 0 : o.map(e => e.id)
                }
                if ((null == l || 0 === l.length) && (l = G.A.getUploads(e.id, L.C.FirstThreadMessage)), null != l && l.length > 0 && e.isMediaChannel()) {
                    let e = l.findIndex(e => !0 === e.isThumbnail);
                    if (e > -1) {
                        let t = l[e];
                        l.splice(e, 1), l.unshift(t)
                    }
                }
                let c = 0 === i.length,
                    d = (null == t || 0 === t.length) && (null == r || 0 === r.length) && 0 === l.length;
                return {
                    content: t,
                    stickers: r,
                    uploads: l,
                    hasNameError: c,
                    hasMessageError: d
                }
            }, [e, n]);
            return l.useCallback(async (t, l, a) => {
                let {
                    setNameError: s,
                    setMessageError: o,
                    setSubmitting: c,
                    resetFormState: d,
                    formOpen: u,
                    setFormOpen: m,
                    setPreviewing: h,
                    setFormOpenFromUserAction: g,
                    setGuidelinesOpen: f
                } = n.getState(), x = q.A.hasSeen(e.id);
                if (!u) return (0, X.jr)({
                    guildId: e.guild_id,
                    channelId: e.id
                }), x || n.getState().setGuidelinesOpen(!0), g(), {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
                let {
                    content: p,
                    stickers: b,
                    uploads: j,
                    hasNameError: v,
                    hasMessageError: _
                } = i(t, l, a);
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
                    let n = await r(p, b, j);
                    return (0, k.JA)(n), W.A.resort(e.id), (0, P.x5)(e.id, eo.drafts.type), d(), m(!1), h(!1), q.A.markAsSeen(e.id), f(!1), {
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
            }, [r, i, e, n])
        }(o);
    return l.useLayoutEffect(m, [j, b, w, m]), (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)("div", {
            "aria-label": p ? el.intl.string(el.t.dq7mAa) : el.intl.string(el.t["5h0QOP"]),
            className: a()(ei.kL, {
                [ei.yZ]: !j
            }),
            onClick: !j && p ? U : void 0,
            children: (0, r.jsxs)("form", {
                onMouseDown: C,
                onFocus: C,
                onSubmit: e => {
                    e.preventDefault(), p && z()
                },
                children: [(0, r.jsxs)("div", {
                    className: ei.KJ,
                    children: [(0, r.jsx)(ed, {
                        parentChannel: o,
                        isSearchLoading: d,
                        inputRef: x
                    }), (0, r.jsxs)("div", {
                        className: v ? ei.vJ : ei.Zd,
                        children: [(0, r.jsx)(eu, {
                            editorRef: _,
                            parentChannel: o,
                            isSearchLoading: d,
                            numResults: u,
                            inputRef: x,
                            canCreatePost: p
                        }), j && (0, r.jsx)(eg, {
                            editorRef: _,
                            setEditorRef: y,
                            parentChannel: o,
                            submit: z,
                            disabled: !p
                        }), v && (0, r.jsx)(ef, {})]
                    }), R && (D ? (0, r.jsx)(T.f, {
                        parentChannel: o
                    }) : (0, r.jsx)(Y.h, {
                        channelId: o.id
                    }))]
                }), (0, r.jsxs)("div", {
                    className: ei.Zd,
                    children: [R && D && (0, r.jsx)(O.A, {
                        parentChannel: o
                    }), j && (0, r.jsx)(ej, {
                        className: ei.CN,
                        parentChannel: o,
                        canCreatePost: p
                    })]
                })]
            })
        })
    })
}
let ed = l.memo(function(e) {
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
                name: r,
                previewing: l,
                textAreaState: i,
                hasClickedForm: a,
                submitting: s
            } = e;
            return {
                formOpen: t,
                nameError: n,
                name: r,
                textAreaState: i,
                previewing: l,
                hasClickedForm: a,
                submitting: s
            }
        }, c.x), m = (0, Z.ST)(), h = (0, J.Hv)(t), g = l.useCallback(() => {
            var e;
            m.getState().resetFormState(), b.A.clearDraft(t.id, L.C.ThreadSettings), b.A.clearDraft(t.id, L.C.FirstThreadMessage), j.A.clearAll(t.id, L.C.FirstThreadMessage), m.getState().setFormOpen(!1), m.getState().setBodyFocused(!1), m.getState().setTitleFocused(!1), m.getState().setHasClickedForm(!1), m.getState().setPreviewing(!1), null == (e = i.current) || e.blur(), (0, X.py)({
                guildId: t.guild_id,
                channelId: t.id
            })
        }, [m, t.id, t.guild_id, i]), f = l.useMemo(() => !a && (s.trim().length > 0 || o.textValue.trim().length > 0 && o.textValue.trim() !== h || G.A.getUploads(t.id, L.C.FirstThreadMessage).length > 0) && d ? (0, r.jsx)(p.R2l, {
            size: "md",
            color: "currentColor",
            className: ei.rD
        }) : (0, r.jsx)(p.BT5, {
            onClear: g,
            hasContent: a,
            isLoading: n || u,
            size: "md"
        }), [n, a, d, s, o.textValue, g, t.id, h, u]);
        return (0, r.jsx)("div", {
            className: ei.VB,
            children: f
        })
    }),
    eu = l.memo(function(e) {
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
            textAreaState: x,
            previewing: b
        } = (0, Z.kU)(e => {
            let {
                formOpen: t,
                nameError: n,
                name: r,
                previewing: l,
                textAreaState: i,
                hasClickedForm: a,
                submitting: s
            } = e;
            return {
                formOpen: t,
                nameError: n,
                name: r,
                textAreaState: i,
                previewing: l,
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
        let C = l.useCallback(async e => {
                let n = e.clipboardData.files[0];
                null != n && n.type.startsWith("image/") && (e.preventDefault(), await (0, V.R)([n], t, L.C.FirstThreadMessage, {
                    origin: "clipboard"
                }), j.getState().setFormOpenFromUserAction())
            }, [t, j]),
            O = (0, K.vr)(m, {
                content: h
            });
        return (0, r.jsxs)("div", {
            className: ei.gn,
            onPaste: C,
            children: [u && b ? (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: ei.DD,
                children: h
            }) : (0, r.jsxs)(p.BJc, {
                gap: 4,
                children: [(0, r.jsx)(f.d, {
                    value: h,
                    placeholder: i ? u || x.textValue.length > 0 && x.textValue.trim() !== y ? el.intl.string(el.t.lU4dDS) : el.intl.string(el.t.CjmivA) : el.intl.string(el.t["5h0QOP"]),
                    rows: 1,
                    maxLength: en.Ign,
                    onChange: e => {
                        let n = e.target.value,
                            r = (0, R.A)(n, !1);
                        j.getState().setName(r);
                        let l = 0 === r.trim().length,
                            i = 0 === x.textValue.trim().length,
                            a = x.textValue.trim() === y;
                        l && (i || a) && j.getState().setHasClickedForm(!1), u || W.A.updateForumSearchQuery(t.id, r)
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
                        let r = n.current;
                        if ("Home" === e.key || "End" === e.key) {
                            if (null == r) return;
                            if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) {
                                let t = e.shiftKey ? Math.max(r.selectionStart, r.selectionEnd) : 0;
                                r.setSelectionRange(0, t, "backward")
                            } else {
                                let t = e.shiftKey ? Math.min(r.selectionStart, r.selectionEnd) : h.length,
                                    n = h.length;
                                r.setSelectionRange(t, n, "forward")
                            }
                        }
                        if ("Escape" === e.key && !j.getState().submitting) {
                            var l;
                            null == (l = n.current) || l.blur(), j.getState().setFormOpen(!1), j.getState().setTitleFocused(!1), j.getState().setBodyFocused(!1), j.getState().setPreviewing(!1)
                        }
                    },
                    className: ei.DD,
                    ref: n
                }), null != O ? (0, r.jsx)(p.dzK, {
                    error: O
                }) : null]
            }), u ? null : (0, r.jsxs)(p.BJc, {
                direction: "horizontal",
                gap: 8,
                justify: "end",
                fullWidth: !1,
                children: [(0, r.jsx)(em, {
                    parentChannel: t
                }), (0, r.jsx)(ev, {
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
    }, c.x), l = (0, Z.ST)();
    return null != t.topic && 0 !== t.topic.length ? (0, r.jsx)(x.m, {
        text: el.intl.string(el.t["4d4T4l"]),
        children: (0, r.jsx)(p.K0, {
            size: "sm",
            variant: "secondary",
            onClick: () => {
                l.getState().setGuidelinesOpen(!n)
            },
            icon: p.B8Q,
            "aria-label": el.intl.string(el.t["4d4T4l"])
        })
    }) : null
}
let eh = l.memo(function(e) {
        let {
            parentChannel: t,
            textValue: n
        } = e, l = new D.Ay({
            channel_id: t.id,
            content: n
        }), {
            content: i
        } = (0, N.A)(l, {
            hideSimpleEmbedContent: !0,
            isInteracting: !1,
            formatInline: !1,
            allowList: !0,
            allowHeading: !0,
            previewLinkTarget: !0,
            allowLinks: !0
        }), s = (0, w.A)({
            message: l,
            channel: t,
            compact: !1
        }, i, !1);
        return (0, r.jsx)("div", {
            className: a()(ei.SL, ei.ly),
            children: s
        })
    }),
    eg = l.memo(function(e) {
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
            textAreaState: f,
            bodyFocused: x,
            formOpen: b
        } = (0, Z.kU)(e => {
            let {
                messageError: t,
                textAreaState: n,
                previewing: r,
                bodyFocused: l,
                formOpen: i
            } = e;
            return {
                messageError: t,
                textAreaState: n,
                previewing: r,
                bodyFocused: l,
                formOpen: i
            }
        }, c.x), j = (0, Z.ST)();
        l.useEffect(() => () => (0, X._4)({
            guildId: t.guild_id,
            channelId: t.id
        }), [t.guild_id, t.id]);
        let v = l.useCallback(() => {
                j.getState().setBodyFocused(!0)
            }, [j]),
            _ = l.useCallback(() => {
                j.getState().setBodyFocused(!1)
            }, [j]),
            A = l.useCallback((e, t, n) => {
                let {
                    setTextAreaState: r
                } = j.getState();
                r({
                    textValue: t,
                    richValue: n
                })
            }, [j]),
            C = l.useCallback(e => {
                let {
                    value: t,
                    uploads: r,
                    stickers: l
                } = e;
                return n(t, l, r)
            }, [n]);
        (0, H.Vo)({
            event: en.jej.TEXTAREA_FOCUS,
            handler: v
        }), (0, H.Vo)({
            event: en.jej.TEXTAREA_BLUR,
            handler: _
        });
        let O = (0, K.vr)(m, {
            content: f.textValue
        });
        return (0, r.jsx)("div", {
            className: ei.IP,
            children: (0, r.jsxs)("div", {
                className: ei.hQ,
                children: [h ? (0, r.jsx)(eh, {
                    parentChannel: t,
                    textValue: f.textValue
                }) : (0, r.jsx)("div", {
                    onClick: v,
                    children: (0, r.jsx)(y.Ay, {
                        type: eo,
                        setEditorRef: d,
                        channel: t,
                        placeholder: el.intl.string(el.t["8IPnv1"]),
                        textValue: f.textValue,
                        richValue: f.richValue,
                        focused: x,
                        className: ei.gM,
                        innerClassName: a()(ei.SL, {
                            [ei.cr]: null != O
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
                }), (0, r.jsx)(p.dzK, {
                    error: O
                })]
            })
        })
    });

function ef() {
    return (0, r.jsx)("div", {
        className: ei.fv,
        children: (0, r.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            children: el.intl.string(el.t["WE/cYo"])
        })
    })
}

function ex(e) {
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
    return l.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n])
}

function ep(e) {
    let t = ex(e),
        {
            appliedTags: n,
            name: r
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
    return l.useMemo(() => e.hasFlag(er.lx.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t])
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
    }, c.x), t = (0, Z.ST)(), n = l.useCallback(() => {
        t.getState().setPreviewing(!e), (0, X.Q_)()
    }, [e, t]), i = e ? el.intl.string(el.t.ojM1xJ) : el.intl.string(el.t.SKNnqq);
    return (0, r.jsx)(x.m, {
        text: i,
        children: (0, r.jsx)(p.K0, {
            variant: "secondary",
            size: "sm",
            onClick: n,
            icon: e ? p.G3N : p.bMW,
            "aria-label": i
        })
    })
}
let ej = l.memo(function(e) {
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
    } = t, d = o > 0, u = (0, g.bG)([U.A], () => U.A.getSlowmodeCooldownGuess(t.id, U.R.CreateThread)), m = (0, C._)(t, U.R.CreateThread), h = ep(t), f = (0, Z.ST)(), x = l.useCallback(() => {
        f.getState().setBodyFocused(!1)
    }, [f]), b = l.useMemo(() => "" !== s.trim() && "" !== a.textValue.trim(), [s, a.textValue]);
    return l.useEffect(() => {
        b || f.getState().setPreviewing(!1)
    }, [b, f]), (0, r.jsxs)("div", {
        className: i,
        children: [(0, r.jsx)(ey, {
            parentChannel: t
        }), (0, r.jsx)("div", {
            className: ei.XJ
        }), (0, r.jsxs)("div", {
            className: ei.gO,
            children: [(0, r.jsxs)("div", {
                className: ei.ne,
                children: [(0, r.jsxs)("div", {
                    className: ei.Kk,
                    children: [(0, r.jsx)(A.A, {
                        type: eo,
                        textValue: a.textValue,
                        className: ei.Dq
                    }), d && (0, r.jsx)(ee.A, {
                        rateLimitPerUser: o,
                        slowmodeCooldownGuess: u,
                        isBypassSlowmode: m,
                        leadingIcon: !0
                    })]
                }), (0, r.jsx)(em, {
                    parentChannel: t
                }), b && (0, r.jsx)(eb, {}), (0, r.jsx)(ev, {
                    parentChannel: t,
                    disableIfInvalid: !0,
                    canCreatePost: n,
                    disabled: d && !m && u > 0
                })]
            }), (0, r.jsx)(_.A, {
                type: eo,
                className: ei.n1,
                onClick: x,
                channel: t
            }, "expression")]
        }), h && (0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            color: "text-feedback-critical",
            className: ei.ku,
            children: el.intl.string(el.t.xPfNQi)
        })]
    })
});

function ev(e) {
    let {
        parentChannel: t,
        canCreatePost: n,
        disabled: l,
        disableIfInvalid: i = !1
    } = e, a = (0, E.V)(t), {
        submitting: s,
        name: o,
        formOpen: d
    } = (0, Z.kU)(e => {
        let {
            submitting: t,
            name: n,
            formOpen: r
        } = e;
        return {
            submitting: t,
            name: n,
            formOpen: r
        }
    }, c.x), u = ex(t), m = !ep(t) && u && o.trim().length > 0;
    return __OVERLAY__ || a ? null : (0, r.jsx)(p.Button, {
        variant: "primary",
        type: "submit",
        size: "sm",
        loading: s,
        disabled: i && !m || l || !n,
        icon: p.oyn,
        text: d ? el.intl.string(el.t.pIuQI6) : el.intl.string(el.t.TyAuoT)
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
            setPopoutOpen: r
        } = e;
        return {
            appliedTags: t,
            toggleAppliedTag: n,
            setPopoutOpen: r
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
        containerWidth: f
    } = (0, et.A)(), x = l.useRef(null), b = l.useRef(null), [j, v] = l.useState(!0), _ = (0, J.OT)(t), [y, A] = l.useState(0);
    return (l.useLayoutEffect(() => {
        var e;
        let t = x.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            r = null == t || null == n || n.clientHeight > t.clientHeight;
        if (r !== j && v(r), r && null != g.current && null != n && null != n.children) {
            let {
                left: e,
                top: t
            } = g.current.getBoundingClientRect(), r = 0;
            for (let l of n.children) {
                let {
                    right: n,
                    top: i,
                    height: a
                } = l.getBoundingClientRect();
                if (i - t > a) break;
                n - e > r && (r = n - e)
            }
            A(r)
        }
    }, [_, j, g, f]), 0 === _.length) ? null : (0, r.jsxs)("div", {
        className: ei.Pc,
        ref: g,
        children: [(0, r.jsx)(p.gqV, {
            size: "xs",
            color: "currentColor",
            className: ei.HZ
        }), (0, r.jsx)("div", {
            className: ei.kU,
            ref: x,
            children: (0, r.jsx)(u.hD, {
                navigator: h,
                children: (0, r.jsx)(u.PR, {
                    children: e => {
                        let {
                            ref: t
                        } = e, l = function(e, t) {
                            if (null == e) return {};
                            var n, r, l, i = {};
                            if ("u" > typeof Reflect && Reflect.ownKeys) {
                                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                                return i
                            }
                            if (i = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, l = {},
                                        i = Object.getOwnPropertyNames(e);
                                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                                    return l
                                }(e, t), Object.getOwnPropertySymbols)
                                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                            return i
                        }(e, ["ref"]);
                        return (0, r.jsx)("div", es(ea({
                            className: ei.j5,
                            ref: t
                        }, l), {
                            children: _.map(e => (0, r.jsx)($.A, {
                                ariaLabel: el.intl.formatToPlainString(el.t.FSZVIR, {
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
        }), j && (0, r.jsx)(p.YNO, {
            targetElementRef: b,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: e => {
                let {
                    closePopout: l
                } = e;
                return (0, r.jsx)(Q.A, {
                    parentChannel: t,
                    appliedTags: n,
                    maxTagsApplied: o,
                    onSelectTag: i,
                    onClose: l
                })
            },
            position: "bottom",
            align: "center",
            children: e => (0, r.jsx)("div", {
                ref: b,
                className: ei.Wk,
                style: {
                    left: y
                },
                children: (0, r.jsx)(p.Button, es(ea({}, e), {
                    size: "sm",
                    variant: "secondary",
                    icon: p.abt,
                    iconPosition: "end",
                    text: el.intl.string(el.t.w6T0Yc)
                }))
            })
        }), (0, r.jsx)("div", {
            className: a()(ei.Wk, ei.Dz),
            children: (0, r.jsx)(p.Button, {
                size: "sm",
                variant: "secondary",
                icon: p.abt,
                iconPosition: "end",
                text: el.intl.string(el.t.w6T0Yc)
            })
        })]
    })
}