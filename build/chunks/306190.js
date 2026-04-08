/** chunk id: 306190 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(416052),
    o = n(240248),
    d = n(829219),
    c = n(859703),
    u = n(890687),
    A = n(45498),
    h = n(767521),
    _ = n(818348),
    m = n(985018),
    p = n(754782);
let g = function(e) {
    let {
        questId: t,
        setQuestId: n,
        quest: g,
        refreshQuest: E
    } = e, [I, f] = r.useState(!1), [C, T] = r.useState(!1), N = r.useRef(null), S = (0, u.pT)(), v = (0, a.bG)([c.A], () => null != t ? c.A.getFetchQuestPreviewError(t) : null, [t]), x = (0, a.bG)([c.A], () => null != t && c.A.isFetchingQuestPreview(t), [t]), y = r.useMemo(() => {
        let e = S.map(e => ({
            id: e.id,
            label: `${e.config?.messages?.questName??e.id} (${e.id})`,
            value: e.id
        }));
        return null == t || e.some(e => e.value === t) || e.unshift({
            id: t,
            label: t,
            value: t
        }), e
    }, [S, t]), b = r.useCallback(async () => {
        if (null != t) {
            f(!0);
            try {
                await (0, d.Yb)(t, 1)
            } finally {
                f(!1)
            }
        }
    }, [t, f]), O = r.useCallback(async () => {
        if (null != t) {
            f(!0);
            try {
                await (0, d.UZ)(t)
            } finally {
                f(!1)
            }
        }
    }, [t, f]), L = r.useCallback(async () => {
        if (null != t) {
            f(!0);
            try {
                let e = Math.random();
                await (0, d.Yb)(t, e)
            } finally {
                f(!1)
            }
        }
    }, [t, f]), R = r.useCallback(e => {
        (0, o.uJ)(e) || null == n || n(e)
    }, [n]);
    return (0, i.jsxs)("div", {
        className: p.Fr,
        children: [(0, i.jsx)("div", {
            children: (0, i.jsx)("div", {
                className: p.Br,
                children: (0, i.jsxs)("div", {
                    className: p.bo,
                    children: [(0, i.jsx)(h.A, {}), (0, i.jsxs)("div", {
                        className: p.b8,
                        children: [(0, i.jsx)(l.ZiE, {
                            selectionMode: "single",
                            label: "Quest ID",
                            hideLabel: !0,
                            options: y,
                            value: t,
                            onSelectionChange: R,
                            placeholder: m.intl.string(m.t.Zw8jxn),
                            clearable: !0,
                            customMatchSorter: (e, t) => {
                                if ((0, o.uJ)(t?.trim())) return e;
                                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                                return 0 === n.length && "" !== t.trim() ? [{
                                    label: t.trim(),
                                    value: t.trim()
                                }] : n
                            }
                        }, `${t}-${g?.config?.messages?.questName??""}`), (0, i.jsx)(l.K0, {
                            onClick: E,
                            "aria-label": m.intl.string(m.t.wzzjk9),
                            icon: l.fNY,
                            loading: x
                        })]
                    })]
                })
            })
        }), null != t && null != g && (0, i.jsx)("div", {
            className: p.in,
            children: (0, i.jsxs)(l.ButtonGroup, {
                className: p.xv,
                children: [(0, i.jsx)(l.Button, {
                    onClick: b,
                    disabled: I,
                    loading: I,
                    variant: "secondary",
                    text: m.intl.string(m.t.jQEfRT)
                }), (0, i.jsx)(l.Button, {
                    onClick: O,
                    disabled: I,
                    loading: I,
                    variant: "secondary",
                    text: m.intl.string(m.t.taqkwK)
                }), (0, i.jsx)(l.Button, {
                    onClick: L,
                    disabled: I,
                    loading: I,
                    variant: "secondary",
                    text: m.intl.string(m.t.cKSLr4)
                }), (0, i.jsx)(l.YNO, {
                    targetElementRef: N,
                    shouldShow: C,
                    onRequestClose: () => T(!1),
                    position: "bottom",
                    align: "center",
                    renderPopout: () => (0, i.jsx)("div", {
                        className: p.PP,
                        children: (0, i.jsx)("div", {
                            className: p.sH,
                            children: (0, i.jsx)(s.A, {
                                value: _.Sb.QUEST_PREVIEW_TOOL_2(t),
                                text: m.intl.string(m.t.WqhZss)
                            })
                        })
                    }),
                    children: () => (0, i.jsx)(l.K0, {
                        buttonRef: N,
                        onClick: () => T(!C),
                        "aria-label": m.intl.string(m.t.rNGQfD),
                        icon: l.TdU,
                        variant: "secondary"
                    })
                })]
            })
        }), null != v ? (0, i.jsx)(A.P, {
            error: v
        }) : null, x ? (0, i.jsx)(l.y$y, {}) : null]
    })
}