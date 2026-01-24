/** Chunk was on 20601 **/
/** chunk id: 89473, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => p
});
var l = n(627968),
    r = n(64700),
    i = n(158954),
    s = n(73939),
    a = n(36525),
    o = n(732955),
    c = n(421380),
    u = n(397927),
    d = n(915089),
    m = n(60175),
    f = n(890620),
    x = n(338724),
    h = n(29697),
    g = n(260197),
    v = n(985018),
    j = n(70645);
let b = () => (0, l.jsx)(a.A, {
        submitting: !1,
        message: v.intl.string(v.t["8g514U"]),
        onReset: () => {
            (0, f.C7)(!1)
        },
        onResetText: v.intl.string(v.t["ETE/oC"]),
        onSave: () => {
            (0, f.C7)(!1), (0, u.OoC)(g.LC)
        },
        onSaveText: v.intl.string(v.t["Xt+Uab"]),
        onSaveButtonColor: c.XD.RED
    }),
    p = e => {
        let {
            transitionState: t,
            guildId: n,
            onClose: a,
            onComplete: c,
            inviteKey: g,
            isPreview: v = !1
        } = e, p = (0, f.YN)(e => e.shouldShowWarning), {
            verificationForm: _,
            hasFetched: C
        } = (0, x.$x)(n, v, g), y = (0, d.GV)();
        return (r.useEffect(() => {
            C && _ === m.U && a()
        }, [C, a, _]), _ === m.U) ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(i.dWK, {
                transitionState: t,
                "aria-labelledby": y,
                size: "xxl",
                onClose: a,
                children: [(0, l.jsx)("div", {
                    className: j.b,
                    children: (0, l.jsx)(o.JnF, {
                        onClick: () => a(!1)
                    })
                }), (0, l.jsx)("div", {
                    className: j.kL,
                    children: (0, l.jsx)(h.A, {
                        verificationForm: _,
                        headerId: y,
                        guildId: n,
                        onClose: a,
                        onComplete: c,
                        isPreview: v
                    })
                })]
            }), (0, l.jsx)(s.F, {
                children: !0 === p && (0, l.jsx)(u.FQk, {
                    className: j.lm,
                    children: (0, l.jsx)(b, {})
                })
            })]
        })
    }