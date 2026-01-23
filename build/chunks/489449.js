/** Chunk was on 52786 **/
/** chunk id: 489449, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => w
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(239947),
    i = n(158954),
    o = n(397927),
    c = n(579872),
    s = n(139286),
    u = n(973431),
    f = n(969632),
    d = n(998489),
    m = n(983081),
    b = n(57359),
    p = n(820453),
    g = n(412136),
    O = n(412728),
    j = n(985018),
    y = n(826701);

function h(e) {
    let {
        question: t,
        onChange: n,
        error: l,
        inputRef: a
    } = e;
    return (0, r.jsx)(o.fs1, {
        label: j.intl.string(j.t.WBiKnI),
        inputRef: a,
        placeholder: j.intl.string(j.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: g.jD,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0
    })
}

function v(e) {
    let {
        selectedDuration: t,
        onSelect: n
    } = e, l = (0, m.A)(), a = l[t];
    return (0, r.jsx)("div", {
        className: y.p0,
        children: (0, r.jsx)(o.l6P, {
            label: j.intl.string(j.t.bGHzxb),
            "aria-label": j.intl.formatToPlainString(j.t.nXNHNJ, {
                duration: a
            }),
            options: Object.entries(l).map(e => {
                let [t, n] = e;
                return {
                    id: t.toString(),
                    label: n,
                    value: parseInt(t)
                }
            }),
            value: t,
            onSelectionChange: n,
            selectionMode: "single",
            fullWidth: !0
        })
    })
}

function w(e) {
    let {
        channel: t,
        transitionState: n,
        onClose: m,
        initialQuestion: P,
        initialAnswers: A,
        initialDuration: C
    } = e;
    (0, s.A)({
        type: O.z.MODAL,
        name: a.I.POLL_EDITOR_VIEWED
    });
    let k = l.useRef(null),
        R = l.useRef([]),
        x = l.useRef(null),
        E = l.useCallback(e => {
            var t, n;
            let {
                indexToRemove: r,
                numberOfAnswers: l
            } = e;
            l === g.FW + 1 ? null == (t = x.current) || t.focus() : null == (n = R.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton()
        }, []),
        {
            answers: _,
            question: S,
            allowMultiSelect: D,
            setAllowMultiSelect: I,
            duration: N,
            setDuration: T,
            handleQuestionChange: U,
            handleAnswerTextChange: L,
            handleEmojiSelect: K,
            canAddMoreAnswers: Y,
            handleRemoveAnswerImage: B,
            canRemoveMoreAnswers: W,
            handleAddAnswer: q,
            handleRemoveAnswer: z,
            createPollError: F,
            handleSubmitPoll: G,
            fieldErrors: M,
            submitting: V,
            shouldFocusOnInvalidField: H,
            setShouldFocusOnInvalidField: Z
        } = (0, d.A)(t, m, E, {
            initialQuestion: P,
            initialAnswers: A,
            initialDuration: C
        }),
        {
            trackPollCreationCancelled: X
        } = (0, b.I)(_, D),
        Q = l.useRef(_.length),
        $ = l.useCallback(() => {
            X(), m()
        }, [m, X]),
        J = l.useCallback(() => {
            (0, f.Wn)(S, _) ? $(): c.A.show({
                title: j.intl.string(j.t.HMrgcp),
                body: j.intl.string(j.t["Wxa/j8"]),
                confirmText: j.intl.string(j.t.TzJA4g),
                confirmVariant: "critical-primary",
                cancelText: j.intl.string(j.t["2BR5R2"]),
                onConfirm: () => {
                    $()
                }
            })
        }, [$, _, S]);
    l.useEffect(() => {
        (0, o.zbz)(g.sm, e => {
            var n, l;
            return (0, r.jsx)(w, (n = function(e) {
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
            }({}, e), l = l = {
                channel: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
        }, J)
    }, [J, t]), l.useEffect(() => {
        if (_.length > Q.current) {
            var e;
            null == (e = R.current[_.length - 1]) || e.focusInput()
        }
        Q.current = _.length
    }, [_.length]), l.useEffect(() => {
        if (H) {
            var e, t;
            if ((null == M ? void 0 : M.question) != null) null == (e = k.current) || e.focus();
            else {
                let e = _.findIndex(e => M["answer-".concat(e.localCreationAnswerId)]); - 1 !== e && (null == (t = R.current[e]) || t.focusInput())
            }
            Z(!1)
        }
    }, [M, _, H, Z, R]);
    let ee = l.useCallback(() => {
            n === o.ip4.ENTERED && G()
        }, [G, n]),
        et = (0, u.A)({
            disabled: V,
            onSubmit: ee
        }),
        en = l.useMemo(() => [{
            variant: "primary",
            onClick: ee,
            submitting: V,
            text: j.intl.string(j.t.JOj8Zk)
        }], [ee, V]);
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        onClose: m,
        title: j.intl.string(j.t["GD/8X8"]),
        actions: en,
        actionBarInput: (0, r.jsx)(o.Checkbox, {
            checked: D,
            onChange: e => I(e),
            label: j.intl.string(j.t["Ux+iQU"])
        }),
        children: (0, r.jsxs)("div", {
            className: y.Qs,
            onKeyDown: et,
            children: [null != F && (0, r.jsx)(o.wx6, {
                type: "critical",
                children: F.getAnyErrorMessage()
            }), (0, r.jsx)(h, {
                question: S,
                onChange: U,
                error: null == M ? void 0 : M.question,
                inputRef: k
            }), (0, r.jsx)(o.hKd, {
                size: 26
            }), (0, r.jsxs)(o.D0$, {
                role: "group",
                label: j.intl.string(j.t.oMBfeS),
                children: [_.map((e, n) => (0, r.jsx)(p.A, {
                    answer: e,
                    channelId: t.id,
                    index: n,
                    isLastAnswer: n === _.length - 1,
                    onEmojiSelect: K,
                    onEmojiRemove: B,
                    onAnswerTextChange: L,
                    onRemoveAnswer: z,
                    addAnswer: q,
                    submitPoll: ee,
                    answerRowRefs: R,
                    error: null == M ? void 0 : M["answer-".concat(e.localCreationAnswerId)],
                    canRemoveAnswer: W,
                    ref: e => {
                        R.current[n] = e
                    }
                }, e.localCreationAnswerId)), Y && (0, r.jsx)("div", {
                    className: y.Ox,
                    children: (0, r.jsx)(o.Button, {
                        icon: o.j96,
                        variant: "secondary",
                        onClick: q,
                        "aria-label": j.intl.string(j.t.B2Uvme),
                        buttonRef: x,
                        text: j.intl.string(j.t.B2Uvme)
                    })
                })]
            }), (0, r.jsx)(o.hKd, {
                size: 18
            }), (0, r.jsx)(v, {
                selectedDuration: N,
                onSelect: T
            })]
        })
    })
}