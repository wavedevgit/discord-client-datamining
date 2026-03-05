/** chunk id: 542229 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    s = n(64700),
    r = n(533925),
    i = n(562465),
    a = n(397927),
    o = n(398450),
    d = n(652215),
    u = n(985018);

function c(e) {
    let {
        mfaChallenge: t,
        finish: n,
        setSlide: c,
        onClose: h,
        isSlideReady: g,
        headerAlignStart: m
    } = e, [f, x] = s.useState(!1), [S, p] = s.useState(null), [j, b] = s.useState(!1), [A, y] = s.useState(null), [C, k] = s.useState(""), v = s.useRef(null);
    s.useEffect(() => {
        x(!0), i.Bo.post({
            url: d.Rsh.LOGIN_SMS_SEND,
            body: {
                ticket: t.ticket
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            p(e.body.phone)
        }).catch(e => {
            y(e.body?.message ?? e.message)
        }).finally(() => {
            x(!1)
        })
    }, [t.ticket]), s.useEffect(() => {
        g && v.current?.focus()
    }, [g]);
    let w = null == S ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t["8r6h7+"], {
        phoneNumber: S
    });
    return (0, l.jsxs)("form", {
        onSubmit: e => {
            e.preventDefault(), b(!0), n({
                mfaType: "sms",
                data: C
            }).catch(e => {
                y(e.message ?? e.body?.message)
            }).finally(() => {
                b(!1)
            })
        },
        children: [(0, l.jsx)(o.A.SlideHeader, {
            subtitle: w,
            onClose: h,
            headerAlignStart: m
        }), (0, l.jsxs)(o.A.SlideContent, {
            children: [(0, l.jsxs)(a.M_l, {
                children: [(0, l.jsx)(a.ksK, {
                    label: u.intl.string(u.t.HZPBOd),
                    inputRef: v,
                    onChange: k,
                    placeholder: u.intl.string(u.t.tARzgo),
                    maxLength: 10,
                    value: C,
                    autoComplete: "one-time-code",
                    spellCheck: "false",
                    disabled: j
                }), (0, l.jsx)(a.Button, {
                    variant: "secondary",
                    text: u.intl.string(u.t.ZF29L6),
                    loading: f,
                    onClick: () => {
                        i.Bo.post({
                            url: d.Rsh.LOGIN_SMS_SEND,
                            body: {
                                ticket: t.ticket
                            },
                            oldFormErrors: !0,
                            rejectWithError: !1
                        }).then(e => {
                            p(e.body.phone)
                        }).catch(e => {
                            y(e.message || e.body?.message)
                        })
                    }
                })]
            }), (0, l.jsx)(o.A.SlideError, {
                error: A
            })]
        }), (0, l.jsx)(o.A.SlideFooter, {
            mfaChallenge: t,
            setSlide: c,
            showConfirm: !0,
            disabled: C.length !== r.$A,
            submitting: j
        })]
    })
}