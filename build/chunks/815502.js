/** chunk id: 815502 params = (module,exports,require) **/
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
    } = e, [g, m] = s.useState(!1), [f, x] = s.useState(null), [S, p] = s.useState(""), j = s.useRef(null), b = o.intl.string(o.t["C/ZAw/"]), A = o.intl.string(o.t.fZSi1D), y = s.useCallback(e => {
        p(e), x(null)
    }, [p, x]);
    return s.useEffect(() => {
        c && j.current?.focus()
    }, [c]), (0, l.jsxs)("form", {
        onSubmit: e => {
            e.preventDefault(), m(!0), n({
                mfaType: "backup",
                data: S.replace(/-/g, "")
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
            children: [(0, l.jsx)(i.ksK, {
                label: b,
                inputRef: j,
                onChange: y,
                placeholder: A,
                maxLength: r.pu,
                minLength: r.Zp,
                value: S,
                spellCheck: "false",
                disabled: g
            }), (0, l.jsx)(a.A.SlideError, {
                error: f
            })]
        }), (0, l.jsx)(a.A.SlideFooter, {
            mfaChallenge: t,
            setSlide: d,
            showConfirm: !0,
            disabled: S.length < 8,
            submitting: g
        })]
    })
}