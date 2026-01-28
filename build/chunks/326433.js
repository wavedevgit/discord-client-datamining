/** Chunk was on 60449 **/
/** chunk id: 326433, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => C,
    Uz: () => S,
    lm: () => b,
    xu: () => v
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(205693),
    c = n(451988),
    d = n(827734),
    u = n(397927),
    g = n(827343),
    h = n(915089),
    x = n(430452),
    A = n(731854),
    p = n(985018),
    m = n(90444),
    j = n(785294),
    O = n(473169);
let E = (0, h.Ld)();

function b() {
    let [e, t] = s.useState(-100), [n, i] = s.useState(!1);

    function l(e, n) {
        t(e), i((n & A.ME.VOICE) === A.ME.VOICE)
    }
    return s.useEffect(() => {
        let e = new c.Ep;
        return e.start(1e3, () => {
            x.A.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop()
        }), () => {
            x.A.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop()
        }
    }, []), {
        volume: e,
        isSpeaking: n
    }
}

function S(e) {
    let {
        isSpeaking: t,
        className: n,
        id: s,
        ariaDescribedBy: l,
        ariaLabelledBy: a,
        disabled: o
    } = e;
    return (0, i.jsx)("div", {
        className: r()(m.$I, n),
        id: s,
        "aria-describedby": l,
        "aria-labelledby": a,
        children: (0, i.jsx)("div", {
            className: r()(m.Jx, m.NU, {
                [m.zY]: t && !o,
                [m.r9]: o
            })
        })
    })
}

function v(e) {
    let {
        volume: t,
        id: n,
        ariaDescribedBy: s,
        ariaLabelledBy: l,
        disabled: o
    } = e, {
        threshold: c,
        autoThreshold: h
    } = (0, a.cf)([x.A], () => ({
        threshold: x.A.getModeOptions().threshold,
        autoThreshold: x.A.getModeOptions().autoThreshold
    })), A = (0, a.bG)([x.A], () => x.A.getMode());
    return (0, i.jsx)("section", {
        className: r()(m.Mo, m.jW),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        children: (0, i.jsx)(u.Apm, {
            initialValue: c + 100,
            onValueRender: e => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: e => {
                var t;
                return t = -((100 - e) * 1), void g.A.setMode(A, {
                    threshold: t,
                    autoThreshold: h
                })
            },
            barStyles: {
                background: d.A.unsafe_rawColors.GREEN_360.css
            },
            fillStyles: {
                background: d.A.unsafe_rawColors.YELLOW_300.css
            },
            "aria-labelledby": E,
            disabled: o,
            children: (0, i.jsxs)("div", {
                className: r()(m.NU, m.TL, m.Jx, j.bar),
                children: [(0, i.jsx)("div", {
                    className: r()(m.GS, m.SH),
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

function C() {
    let {
        threshold: e,
        autoThreshold: t
    } = (0, a.cf)([x.A], () => ({
        threshold: x.A.getModeOptions().threshold,
        autoThreshold: x.A.getModeOptions().autoThreshold
    })), {
        inputMode: n,
        automaticVADSupported: s
    } = (0, a.cf)([x.A], () => ({
        inputMode: x.A.getMode(),
        automaticVADSupported: x.A.supports(A.O5.AUTOMATIC_VAD)
    })), {
        volume: l,
        isSpeaking: r
    } = b(), o = (0, a.bG)([x.A], () => x.A.isEnabled());
    return (0, i.jsxs)(u.nVY, {
        label: p.intl.string(p.t["sqUm+k"]),
        className: m.yQ,
        children: [s && (0, i.jsx)(u.dOG, {
            label: p.intl.string(p.t.I1Zuq0),
            checked: t,
            onChange: t => {
                g.A.setMode(n, {
                    threshold: e,
                    autoThreshold: t
                })
            }
        }), t ? (0, i.jsxs)("section", {
            className: m.Mo,
            children: [(0, i.jsx)(S, {
                isSpeaking: r
            }), (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                className: O.QB,
                children: p.intl.string(p.t.W3K5Im)
            })]
        }) : (0, i.jsx)(v, {
            volume: l
        }), !o && (0, i.jsx)(u.po8, {
            messageType: u.YCn.WARNING,
            className: O.QB,
            children: p.intl.format(p.t["O13I+O"], {
                onEnableClick: () => g.A.enable(!0)
            })
        })]
    })
}