/** chunk id: 467181, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    s = n(64700),
    r = n(533925),
    i = n(397927),
    a = n(398450),
    o = n(985018);

function d(e) {
    let {
        mfaChallenge: t,
        finish: n,
        setSlide: d,
        onClose: u,
        isSlideReady: c,
        headerAlignStart: h
    } = e, [g, m] = s.useState(!1), [f, x] = s.useState(null), [S, p] = s.useState(""), j = s.useRef(null);
    return s.useEffect(() => {
        c && j.current?.focus()
    }, [c]), (0, l.jsxs)("form", {
        onSubmit: e => {
            e.preventDefault(), m(!0), x(null), n({
                mfaType: "totp",
                data: S
            }).catch(e => {
                x(e.body?.message ?? e.message)
            }).finally(() => {
                m(!1)
            })
        },
        children: [(0, l.jsx)(a.A.SlideHeader, {
            onClose: u,
            headerAlignStart: h
        }), (0, l.jsxs)(a.A.SlideContent, {
            scrollbarType: "none",
            children: [(0, l.jsx)(i.ksK, {
                label: o.intl.string(o.t.HZPBOd),
                inputRef: j,
                onChange: p,
                placeholder: o.intl.string(o.t.tARzgo),
                maxLength: r.XZ,
                minLength: r.XZ,
                value: S,
                autoComplete: "one-time-code",
                spellCheck: "false",
                disabled: g
            }), (0, l.jsx)(a.A.SlideError, {
                error: f
            })]
        }), (0, l.jsx)(a.A.SlideFooter, {
            mfaChallenge: t,
            setSlide: d,
            showConfirm: !0,
            disabled: S.length !== r.XZ,
            submitting: g
        })]
    })
}