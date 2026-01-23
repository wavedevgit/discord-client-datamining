/** Chunk was on 47841 **/
/** chunk id: 726862, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(599119),
    u = n(219504),
    g = n(961973),
    m = n(147925),
    p = n(403362),
    f = n(863694),
    b = n(107795),
    h = n(655943),
    x = n(828709),
    j = n(539916),
    _ = n(985018),
    O = n(977612);
let v = {
    optionErrors: []
};

function y(e) {
    var t;
    let {
        guild: n,
        prompt: l,
        disableAutofocus: u,
        promptIndex: x,
        dragIndex: y,
        includeCount: N,
        singleColumn: S,
        onPromptDragComplete: I,
        onPromptDragStart: T,
        onPromptDragReset: C
    } = e, P = (0, a.bG)([f.A], () => f.A.editedDefaultChannelIds), {
        drag: w,
        dragSourcePosition: R,
        drop: D,
        setIsDraggable: G
    } = (0, d.A)({
        type: "ONBOARDING_PROMPT_CARD",
        index: y,
        optionId: l.id,
        onDragStart: T,
        onDragComplete: I,
        onDragReset: C
    }), L = (0, a.cf)([h.A], () => {
        var e;
        return null != (e = h.A.errors[x]) ? e : v
    }), [k, M] = i.useState(!1), [U, B] = i.useState(!1), F = null != (t = L.options) ? t : L.optionErrors.filter(p.Vq)[0], H = L.config, V = l.options.length >= j.Bu, K = (0, g.G4)(n.id, Array.from(P), [l]).length - P.size, z = i.useRef(null), W = i.useRef(x);
    return (i.useEffect(() => {
        W.current = x
    }), i.useLayoutEffect(() => {
        setTimeout(() => {
            if (0 === W.current && !u) {
                var e;
                null == (e = z.current) || e.focus()
            }
        }, 0)
    }, [u]), k) ? (0, r.jsx)(c.vN3, {
        children: (0, r.jsxs)("div", {
            tabIndex: 0,
            onFocus: () => B(!0),
            onBlur: () => B(!1),
            onMouseLeave: () => B(!1),
            className: s()(O.kL, {
                [O.A]: null != R && x < R,
                [O.Ze]: null != R && x > R,
                [O.tW]: U
            }),
            ref: e => {
                w(D(e))
            },
            children: [(0, r.jsx)("div", {
                className: O.cK,
                onMouseEnter: () => G(!0),
                onMouseLeave: () => G(!1),
                children: (0, r.jsx)(c.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: O.co
                })
            }), (0, r.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: _.intl.format(_.t.yjS3zs, {
                    index: x + 1
                })
            }), (0, r.jsx)(c.Text, {
                variant: "text-lg/semibold",
                color: "text-default",
                children: l.title
            }), (0, r.jsx)(c.DUT, {
                className: O.cS,
                onClick: () => M(!1),
                children: (0, r.jsx)(m.A, {
                    direction: m.A.Directions.DOWN,
                    height: 16,
                    width: 16
                })
            }), (0, r.jsx)(o.m, {
                asContainer: !0,
                text: _.intl.string(_.t["Ku+86R"]),
                children: (0, r.jsx)("div", {
                    className: O.ut,
                    children: (0, r.jsx)(c.K0, {
                        size: "sm",
                        icon: c.ucK,
                        variant: "icon-only",
                        onClick: () => (0, b.ME)(n, l.id),
                        "aria-label": _.intl.string(_.t["Ku+86R"])
                    })
                })
            })]
        })
    }) : (0, r.jsx)(c.vN3, {
        children: (0, r.jsxs)("div", {
            tabIndex: 0,
            onFocus: () => B(!0),
            onBlur: () => B(!1),
            className: s()(O.kL, {
                [O.A]: null != R && x < R,
                [O.Ze]: null != R && x > R,
                [O.tW]: U
            }),
            ref: e => {
                w(D(e))
            },
            children: [(0, r.jsx)("div", {
                className: O.cK,
                onMouseEnter: () => G(!0),
                onMouseLeave: () => G(!1),
                children: (0, r.jsx)(c.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: O.co
                })
            }), (0, r.jsxs)(c.BJc, {
                gap: 16,
                children: [(0, r.jsx)(c.ksK, {
                    label: _.intl.formatToPlainString(_.t.yjS3zs, {
                        index: x + 1
                    }),
                    inputRef: z,
                    value: l.title,
                    onChange: e => (0, b.NF)(n, l.id, {
                        title: e
                    }),
                    placeholder: _.intl.string(_.t.QMCuCo),
                    maxLength: j.kq,
                    error: L.title
                }), (0, r.jsx)(A, {
                    prompt: l,
                    guild: n
                }), (0, r.jsx)(c.D0$, {
                    errorMessage: F,
                    label: V ? _.intl.formatToPlainString(_.t.AbvhZD, {
                        count: l.options.length,
                        total: j.fs
                    }) : _.intl.formatToPlainString(_.t.b7VxYX, {
                        count: l.options.length,
                        total: j.fs
                    }),
                    children: (0, r.jsx)(E, {
                        guild: n,
                        prompt: l,
                        promptIndex: x,
                        errors: L,
                        singleColumn: S
                    })
                })]
            }), (0, r.jsxs)("div", {
                className: O.Uo,
                children: [(0, r.jsxs)("div", {
                    className: O.iA,
                    children: [(0, r.jsx)(c.Checkbox, {
                        checked: !l.singleSelect,
                        onChange: e => (0, b.NF)(n, l.id, {
                            singleSelect: !e
                        }),
                        label: _.intl.string(_.t.uCebZa)
                    }), l.inOnboarding ? (0, r.jsx)(c.Checkbox, {
                        checked: !!(l.inOnboarding && l.required),
                        onChange: e => (0, b.NF)(n, l.id, {
                            required: e
                        }),
                        disabled: !l.inOnboarding,
                        label: N ? _.intl.formatToPlainString(_.t["0re8T6"], {
                            count: K
                        }) : _.intl.string(_.t.Ur8Vrt)
                    }) : null]
                }), (0, r.jsx)(c.DUT, {
                    className: O.cS,
                    onClick: () => M(!0),
                    children: (0, r.jsx)(m.A, {
                        direction: m.A.Directions.UP,
                        height: 16,
                        width: 16
                    })
                }), (0, r.jsx)(o.m, {
                    asContainer: !0,
                    text: _.intl.string(_.t["Ku+86R"]),
                    children: (0, r.jsx)("div", {
                        className: O.ut,
                        children: (0, r.jsx)(c.K0, {
                            size: "sm",
                            icon: c.ucK,
                            variant: "icon-only",
                            onClick: () => (0, b.ME)(n, l.id),
                            "aria-label": _.intl.string(_.t["Ku+86R"])
                        })
                    })
                })]
            }), null != H ? (0, r.jsx)(c.dzK, {
                error: H
            }) : null]
        })
    })
}

function A(e) {
    let {
        prompt: t,
        guild: n
    } = e, [l, s] = i.useState(!1);
    if (i.useEffect(() => {
            !l && t.title.length > 0 && s(!0)
        }, [l, t]), l) return null;

    function a(e) {
        return (0, r.jsx)(c.DUT, {
            className: O.Fw,
            onClick: () => (0, b.NF)(n, t.id, {
                title: e
            }),
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                children: e
            })
        })
    }
    return (0, r.jsxs)("div", {
        className: O.Pt,
        children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: _.intl.string(_.t.ECnSLl)
        }), (0, r.jsxs)("div", {
            className: O.K1,
            children: [a(_.intl.string(_.t["7GZMJa"])), a(_.intl.string(_.t.nItydm)), a(_.intl.string(_.t.evuYbq)), a(_.intl.string(_.t.XWRuOp))]
        })]
    })
}

function E(e) {
    let {
        guild: t,
        prompt: n,
        promptIndex: i,
        singleColumn: l,
        errors: s
    } = e, {
        handleDragStart: a,
        handleDragReset: o,
        handleDragComplete: c
    } = (0, u.A)(n.options, e => (0, b.NF)(t, n.id, {
        options: e
    }));
    return (0, r.jsxs)("div", {
        className: O.fF,
        children: [n.options.map((e, d) => (0, r.jsx)(x.A, {
            guild: t,
            prompt: n,
            promptIndex: i,
            singleColumn: l,
            option: e,
            onDragStart: a,
            onDragComplete: c,
            onDragReset: o,
            hasError: null != s.optionErrors[d]
        }, e.id)), n.options.length < j.fs ? (0, r.jsx)(x.B, {
            guild: t,
            prompt: n,
            promptIndex: i,
            singleColumn: l
        }) : null]
    })
}