/** chunk id: 585175 params = (module,exports,require) **/
n.d(t, {
    O: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(205693),
    d = n(451988),
    c = n(827734),
    u = n(397927),
    m = n(827343),
    _ = n(915089),
    g = n(419954),
    A = n(430452),
    x = n(780964),
    p = n(731854),
    h = n(985018),
    T = n(15267),
    E = n(785294);
let f = (0, _.Ld)();

function S(e) {
    let {
        isSpeaking: t,
        className: n,
        id: s,
        ariaDescribedBy: l,
        ariaLabelledBy: r,
        disabled: o
    } = e;
    return (0, i.jsx)("div", {
        className: a()(T.$I, n),
        id: s,
        "aria-describedby": l,
        "aria-labelledby": r,
        children: (0, i.jsx)("div", {
            className: a()(T.Jx, T.NU, {
                [T.zY]: t && !o,
                [T.r9]: o
            })
        })
    })
}

function C(e) {
    let {
        volume: t,
        id: n,
        ariaDescribedBy: s,
        ariaLabelledBy: l,
        disabled: o
    } = e, {
        threshold: d,
        autoThreshold: _
    } = (0, r.cf)([A.Ay], () => ({
        threshold: A.Ay.getModeOptions().threshold,
        autoThreshold: A.Ay.getModeOptions().autoThreshold
    })), g = (0, r.bG)([A.Ay], () => A.Ay.getMode());
    return (0, i.jsx)("section", {
        className: a()(T.Mo, T.jW),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        children: (0, i.jsx)(u.Apm, {
            initialValue: d + 100,
            onValueRender: e => `${(-((100-e)*1)).toFixed(0)}dB`,
            onValueChange: e => {
                var t;
                return t = -((100 - e) * 1), void m.A.setMode(g, {
                    threshold: t,
                    autoThreshold: _
                })
            },
            barStyles: {
                background: c.A.unsafe_rawColors.GREEN_360.css
            },
            fillStyles: {
                background: c.A.unsafe_rawColors.YELLOW_300.css
            },
            "aria-labelledby": f,
            disabled: o,
            children: (0, i.jsxs)("div", {
                className: a()(T.NU, T.TL, T.Jx, E.bar),
                children: [(0, i.jsx)("div", {
                    className: a()(T.GS, T.SH),
                    style: {
                        width: o ? 0 : t + 100 + "%"
                    }
                }), (0, i.jsx)("div", {
                    className: "grow"
                })]
            })
        })
    })
}
let b = (0, g.E2)(x.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [h.intl.string(h.t["sqUm+k"]), h.intl.string(h.t.I1Zuq0), h.intl.string(h.t.nuFtHH)],
    usePredicate: () => (0, r.bG)([A.Ay], () => A.Ay.isInputProfileCustom()),
    Component: function() {
        let {
            autoThreshold: e,
            disabled: t
        } = (0, r.cf)([A.Ay], () => ({
            autoThreshold: A.Ay.getModeOptions().autoThreshold,
            disabled: A.Ay.getMode() !== p.TB.VOICE_ACTIVITY
        })), n = s.useCallback(e => {
            let t = A.Ay.getMode(),
                {
                    threshold: n
                } = A.Ay.getModeOptions();
            m.A.setMode(t, {
                autoThreshold: e,
                threshold: n
            })
        }, []), l = (0, r.bG)([A.Ay], () => A.Ay.supports(p.O5.AUTOMATIC_VAD)), {
            volume: a,
            isSpeaking: c
        } = function() {
            let [e, t] = s.useState(-100), [n, i] = s.useState(!1);

            function l(e, n) {
                t(e), i((n & p.ME.VOICE) === p.ME.VOICE)
            }
            return s.useEffect(() => {
                let e = new d.Ep;
                return e.start(1e3, () => {
                    A.Ay.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop()
                }), () => {
                    A.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop()
                }
            }, []), {
                volume: e,
                isSpeaking: n
            }
        }(), _ = (0, r.bG)([A.Ay], () => A.Ay.isEnabled()), g = s.useMemo(() => !_ && (0, i.jsx)("div", {
            className: T.B4,
            children: (0, i.jsx)(u.wx6, {
                type: "warning",
                children: h.intl.format(h.t["O13I+O"], {
                    onEnableClick: () => m.A.enable(!0)
                })
            })
        }), [_]), x = s.useMemo(() => e ? h.intl.string(h.t.JsbzjA) : h.intl.string(h.t.MLmyMY), [e]), E = s.useId(), f = s.useId();
        return l ? (0, i.jsxs)("fieldset", {
            "aria-describedby": f,
            children: [(0, i.jsx)(u.AC4, {
                tag: "legend",
                id: E,
                children: h.intl.string(h.t.GByLar)
            }), (0, i.jsx)(u.AC4, {
                id: f,
                children: x
            }), (0, i.jsxs)(u.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, i.jsx)(u.dOG, {
                    disabled: t,
                    label: h.intl.string(h.t.lY6j47),
                    description: x,
                    checked: e,
                    onChange: n
                }), e ? (0, i.jsx)(S, {
                    isSpeaking: c,
                    className: T.UJ,
                    ariaDescribedBy: f,
                    ariaLabelledBy: E,
                    disabled: t
                }) : (0, i.jsx)(C, {
                    volume: a,
                    ariaDescribedBy: f,
                    ariaLabelledBy: E,
                    disabled: t
                }), g]
            })]
        }) : (0, i.jsxs)(u.BJc, {
            direction: "vertical",
            gap: 8,
            children: [(0, i.jsx)(u.D0$, {
                label: h.intl.string(h.t["sqUm+k"]),
                description: x,
                layout: "vertical",
                children: n => e ? (0, i.jsx)(S, {
                    isSpeaking: c,
                    className: T.UJ,
                    id: n.controlId,
                    ariaDescribedBy: n.describedById,
                    ariaLabelledBy: n.labelId,
                    disabled: t
                }) : (0, i.jsx)(C, {
                    volume: a,
                    id: n.controlId,
                    ariaDescribedBy: n.describedById,
                    ariaLabelledBy: n.labelId,
                    disabled: t
                })
            }), g]
        })
    }
})