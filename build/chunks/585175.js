/** chunk id: 585175, original params: t,e,i (module,exports,require) **/
i.d(e, {
    O: () => D
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    u = i(205693),
    o = i(451988),
    d = i(827734),
    A = i(397927),
    T = i(827343),
    S = i(915089),
    E = i(419954),
    g = i(430452),
    c = i(780964),
    _ = i(731854),
    I = i(985018),
    C = i(15267),
    N = i(785294);
let O = (0, S.Ld)();

function b(t) {
    let {
        isSpeaking: e,
        className: i,
        id: l,
        ariaDescribedBy: s,
        ariaLabelledBy: r,
        disabled: u
    } = t;
    return (0, n.jsx)("div", {
        className: a()(C.$I, i),
        id: l,
        "aria-describedby": s,
        "aria-labelledby": r,
        children: (0, n.jsx)("div", {
            className: a()(C.Jx, C.NU, {
                [C.zY]: e && !u,
                [C.r9]: u
            })
        })
    })
}

function p(t) {
    let {
        volume: e,
        id: i,
        ariaDescribedBy: l,
        ariaLabelledBy: s,
        disabled: u
    } = t, {
        threshold: o,
        autoThreshold: S
    } = (0, r.cf)([g.Ay], () => ({
        threshold: g.Ay.getModeOptions().threshold,
        autoThreshold: g.Ay.getModeOptions().autoThreshold
    })), E = (0, r.bG)([g.Ay], () => g.Ay.getMode());
    return (0, n.jsx)("section", {
        className: a()(C.Mo, C.jW),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        children: (0, n.jsx)(A.Apm, {
            initialValue: o + 100,
            onValueRender: t => `${(-((100-t)*1)).toFixed(0)}dB`,
            onValueChange: t => {
                var e;
                return e = -((100 - t) * 1), void T.A.setMode(E, {
                    threshold: e,
                    autoThreshold: S
                })
            },
            barStyles: {
                background: d.A.unsafe_rawColors.GREEN_360.css
            },
            fillStyles: {
                background: d.A.unsafe_rawColors.YELLOW_300.css
            },
            "aria-labelledby": O,
            disabled: u,
            children: (0, n.jsxs)("div", {
                className: a()(C.NU, C.TL, C.Jx, N.bar),
                children: [(0, n.jsx)("div", {
                    className: a()(C.GS, C.SH),
                    style: {
                        width: u ? 0 : e + 100 + "%"
                    }
                }), (0, n.jsx)("div", {
                    className: "grow"
                })]
            })
        })
    })
}
let D = (0, E.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [I.intl.string(I.t["sqUm+k"]), I.intl.string(I.t.I1Zuq0), I.intl.string(I.t.nuFtHH)],
    usePredicate: () => (0, r.bG)([g.Ay], () => g.Ay.isInputProfileCustom()),
    Component: function() {
        let {
            autoThreshold: t,
            disabled: e
        } = (0, r.cf)([g.Ay], () => ({
            autoThreshold: g.Ay.getModeOptions().autoThreshold,
            disabled: g.Ay.getMode() !== _.TB.VOICE_ACTIVITY
        })), i = l.useCallback(t => {
            let e = g.Ay.getMode(),
                {
                    threshold: i
                } = g.Ay.getModeOptions();
            T.A.setMode(e, {
                autoThreshold: t,
                threshold: i
            })
        }, []), s = (0, r.bG)([g.Ay], () => g.Ay.supports(_.O5.AUTOMATIC_VAD)), {
            volume: a,
            isSpeaking: d
        } = function() {
            let [t, e] = l.useState(-100), [i, n] = l.useState(!1);

            function s(t, i) {
                e(t), n((i & _.ME.VOICE) === _.ME.VOICE)
            }
            return l.useEffect(() => {
                let t = new o.Ep;
                return t.start(1e3, () => {
                    g.Ay.getMediaEngine().on(u.bg.VoiceActivity, s), t.stop()
                }), () => {
                    g.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, s), t.stop()
                }
            }, []), {
                volume: t,
                isSpeaking: i
            }
        }(), S = (0, r.bG)([g.Ay], () => g.Ay.isEnabled()), E = l.useMemo(() => !S && (0, n.jsx)("div", {
            className: C.B4,
            children: (0, n.jsx)(A.wx6, {
                type: "warning",
                children: I.intl.format(I.t["O13I+O"], {
                    onEnableClick: () => T.A.enable(!0)
                })
            })
        }), [S]), c = l.useMemo(() => t ? I.intl.string(I.t.JsbzjA) : I.intl.string(I.t.MLmyMY), [t]), N = l.useId(), O = l.useId();
        return s ? (0, n.jsxs)("fieldset", {
            "aria-describedby": O,
            children: [(0, n.jsx)(A.AC4, {
                tag: "legend",
                id: N,
                children: I.intl.string(I.t.GByLar)
            }), (0, n.jsx)(A.AC4, {
                id: O,
                children: c
            }), (0, n.jsxs)(A.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(A.dOG, {
                    disabled: e,
                    label: I.intl.string(I.t.lY6j47),
                    description: c,
                    checked: t,
                    onChange: i
                }), t ? (0, n.jsx)(b, {
                    isSpeaking: d,
                    className: C.UJ,
                    ariaDescribedBy: O,
                    ariaLabelledBy: N,
                    disabled: e
                }) : (0, n.jsx)(p, {
                    volume: a,
                    ariaDescribedBy: O,
                    ariaLabelledBy: N,
                    disabled: e
                }), E]
            })]
        }) : (0, n.jsxs)(A.BJc, {
            direction: "vertical",
            gap: 8,
            children: [(0, n.jsx)(A.D0$, {
                label: I.intl.string(I.t["sqUm+k"]),
                description: c,
                layout: "vertical",
                children: i => t ? (0, n.jsx)(b, {
                    isSpeaking: d,
                    className: C.UJ,
                    id: i.controlId,
                    ariaDescribedBy: i.describedById,
                    ariaLabelledBy: i.labelId,
                    disabled: e
                }) : (0, n.jsx)(p, {
                    volume: a,
                    id: i.controlId,
                    ariaDescribedBy: i.describedById,
                    ariaLabelledBy: i.labelId,
                    disabled: e
                })
            }), E]
        })
    }
})