/** chunk id: 89473 params = (module,exports,require) **/
n.d(t, {
    default: () => v
});
var r = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(73939),
    a = n(36525),
    o = n(732955),
    d = n(421380),
    c = n(397927),
    u = n(915089),
    _ = n(60175),
    h = n(890620),
    m = n(338724),
    f = n(29697),
    E = n(260197),
    x = n(985018),
    p = n(944970);
let g = () => (0, r.jsx)(a.A, {
        submitting: !1,
        message: x.intl.string(x.t["8g514U"]),
        onReset: () => {
            (0, h.C7)(!1)
        },
        onResetText: x.intl.string(x.t["ETE/oC"]),
        onSave: () => {
            (0, h.C7)(!1), (0, c.OoC)(E.LC)
        },
        onSaveText: x.intl.string(x.t["Xt+Uab"]),
        onSaveButtonColor: d.XD.RED
    }),
    v = e => {
        let {
            transitionState: t,
            guildId: n,
            onClose: a,
            onComplete: d,
            inviteKey: E,
            isPreview: x = !1
        } = e, v = (0, h.YN)(e => e.shouldShowWarning), {
            verificationForm: N,
            hasFetched: j
        } = (0, m.$x)(n, x, E), S = (0, u.GV)();
        return (s.useEffect(() => {
            j && N === _.U && a()
        }, [j, a, N]), N === _.U) ? null : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(i.dWK, {
                transitionState: t,
                "aria-labelledby": S,
                size: "xxl",
                onClose: a,
                children: [(0, r.jsx)("div", {
                    className: p.b,
                    children: (0, r.jsx)(o.JnF, {
                        onClick: () => a(!1)
                    })
                }), (0, r.jsx)("div", {
                    className: p.kL,
                    children: (0, r.jsx)(f.A, {
                        verificationForm: N,
                        headerId: S,
                        guildId: n,
                        onClose: a,
                        onComplete: d,
                        isPreview: x
                    })
                })]
            }), (0, r.jsx)(l.F, {
                children: !0 === v && (0, r.jsx)(c.FQk, {
                    className: p.lm,
                    children: (0, r.jsx)(g, {})
                })
            })]
        })
    }