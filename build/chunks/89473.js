/** Chunk was on 20601 **/
/** chunk id: 89473, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(73939),
    a = n(36525),
    o = n(732955),
    c = n(421380),
    u = n(397927),
    d = n(915089),
    m = n(60175),
    f = n(890620),
    h = n(338724),
    x = n(29697),
    g = n(260197),
    v = n(985018),
    p = n(70645);
let j = () => (0, r.jsx)(a.A, {
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
    b = e => {
        let {
            transitionState: t,
            guildId: n,
            onClose: a,
            onComplete: c,
            inviteKey: g,
            isPreview: v = !1
        } = e, b = (0, f.YN)(e => e.shouldShowWarning), {
            verificationForm: _,
            hasFetched: E
        } = (0, h.$x)(n, v, g), C = (0, d.GV)();
        return (l.useEffect(() => {
            E && _ === m.U && a()
        }, [E, a, _]), _ === m.U) ? null : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(i.dWK, {
                transitionState: t,
                "aria-labelledby": C,
                size: "xxl",
                onClose: a,
                children: [(0, r.jsx)("div", {
                    className: p.b,
                    children: (0, r.jsx)(o.JnF, {
                        onClick: () => a(!1)
                    })
                }), (0, r.jsx)("div", {
                    className: p.kL,
                    children: (0, r.jsx)(x.A, {
                        verificationForm: _,
                        headerId: C,
                        guildId: n,
                        onClose: a,
                        onComplete: c,
                        isPreview: v
                    })
                })]
            }), (0, r.jsx)(s.F, {
                children: !0 === b && (0, r.jsx)(u.FQk, {
                    className: p.lm,
                    children: (0, r.jsx)(j, {})
                })
            })]
        })
    }