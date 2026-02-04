/** chunk id: 306190, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048), n(667532), n(733351);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(416052),
    o = n(240248),
    c = n(829219),
    u = n(859703),
    d = n(890687),
    p = n(45498),
    h = n(767521),
    f = n(818348),
    g = n(985018),
    m = n(883088);
let A = function(e) {
    var t, n, A;
    let {
        questId: _,
        setQuestId: b,
        quest: E,
        refreshQuest: O
    } = e, [y, I] = i.useState(!1), [v, S] = i.useState(!1), C = i.useRef(null), N = (0, d.pT)(), T = (0, l.bG)([u.A], () => null != _ ? u.A.getFetchQuestPreviewError(_) : null, [_]), j = (0, l.bG)([u.A], () => null != _ && u.A.isFetchingQuestPreview(_), [_]), x = i.useMemo(() => {
        let e = N.map(e => {
            var t, n, r;
            return {
                id: e.id,
                label: "".concat(null != (t = null == (r = e.config) || null == (n = r.messages) ? void 0 : n.questName) ? t : e.id, " (").concat(e.id, ")"),
                value: e.id
            }
        });
        return null == _ || e.some(e => e.value === _) || e.unshift({
            id: _,
            label: _,
            value: _
        }), e
    }, [N, _]), P = i.useCallback(async () => {
        if (null != _) {
            I(!0);
            try {
                await (0, c.Yb)(_, 1)
            } finally {
                I(!1)
            }
        }
    }, [_, I]), w = i.useCallback(async () => {
        if (null != _) {
            I(!0);
            try {
                await (0, c.UZ)(_)
            } finally {
                I(!1)
            }
        }
    }, [_, I]), L = i.useCallback(async () => {
        if (null != _) {
            I(!0);
            try {
                let e = Math.random();
                await (0, c.Yb)(_, e)
            } finally {
                I(!1)
            }
        }
    }, [_, I]), R = i.useCallback(e => {
        (0, o.uJ)(e) || null == b || b(e)
    }, [b]);
    return (0, r.jsxs)("div", {
        className: m.Fr,
        children: [(0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
                className: m.Br,
                children: (0, r.jsxs)("div", {
                    className: m.bo,
                    children: [(0, r.jsx)(h.A, {}), (0, r.jsxs)("div", {
                        className: m.b8,
                        children: [(0, r.jsx)(a.ZiE, {
                            selectionMode: "single",
                            label: "Quest ID",
                            hideLabel: !0,
                            options: x,
                            value: _,
                            onSelectionChange: R,
                            placeholder: g.intl.string(g.t.Zw8jxn),
                            clearable: !0,
                            customMatchSorter: (e, t) => {
                                if ((0, o.uJ)(null == t ? void 0 : t.trim())) return e;
                                let n = e.filter(e => e.label.toLowerCase().includes(t.toLowerCase()) || e.value.toLowerCase().includes(t.toLowerCase()));
                                return 0 === n.length && "" !== t.trim() ? [{
                                    label: t.trim(),
                                    value: t.trim()
                                }] : n
                            }
                        }, "".concat(_, "-").concat(null != (t = null == E || null == (A = E.config) || null == (n = A.messages) ? void 0 : n.questName) ? t : "")), (0, r.jsx)(a.K0, {
                            onClick: O,
                            "aria-label": g.intl.string(g.t.wzzjk9),
                            icon: a.fNY,
                            loading: j
                        })]
                    })]
                })
            })
        }), null != _ && null != E && (0, r.jsx)("div", {
            className: m.in,
            children: (0, r.jsxs)(a.ButtonGroup, {
                className: m.xv,
                children: [(0, r.jsx)(a.Button, {
                    onClick: P,
                    disabled: y,
                    loading: y,
                    variant: "secondary",
                    text: g.intl.string(g.t.jQEfRT)
                }), (0, r.jsx)(a.Button, {
                    onClick: w,
                    disabled: y,
                    loading: y,
                    variant: "secondary",
                    text: g.intl.string(g.t.taqkwK)
                }), (0, r.jsx)(a.Button, {
                    onClick: L,
                    disabled: y,
                    loading: y,
                    variant: "secondary",
                    text: g.intl.string(g.t.cKSLr4)
                }), (0, r.jsx)(a.YNO, {
                    targetElementRef: C,
                    shouldShow: v,
                    onRequestClose: () => S(!1),
                    position: "bottom",
                    align: "center",
                    renderPopout: () => (0, r.jsx)("div", {
                        className: m.PP,
                        children: (0, r.jsx)("div", {
                            className: m.sH,
                            children: (0, r.jsx)(s.A, {
                                value: f.Sb.QUEST_PREVIEW_TOOL_2(_),
                                text: g.intl.string(g.t.WqhZss)
                            })
                        })
                    }),
                    children: () => (0, r.jsx)(a.K0, {
                        buttonRef: C,
                        onClick: () => S(!v),
                        "aria-label": g.intl.string(g.t.rNGQfD),
                        icon: a.TdU,
                        variant: "secondary"
                    })
                })]
            })
        }), null != T ? (0, r.jsx)(p.P, {
            error: T
        }) : null, j ? (0, r.jsx)(a.y$y, {}) : null]
    })
}