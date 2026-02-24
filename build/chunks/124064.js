/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(355622),
    r = n(408018),
    o = n(133343),
    c = n(915089),
    d = n(840065),
    u = n(95701),
    _ = n(128450),
    m = n(652215),
    A = n(985018),
    g = n(656420);
let h = (0, c.Ld)(),
    x = (0, u.createChannelRecord)({
        id: "1",
        type: m.rbe.DM
    }),
    p = (0, c.Ld)();

function E(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: c,
        pendingBio: u,
        placeholder: E,
        currentBio: C,
        disabled: T = !1
    } = e, [S, I] = s.useState(u ?? C), [f, N] = s.useState((0, r.x7)(S)), b = s.useRef(C), j = s.useRef(!1);
    return s.useEffect(() => {
        if (b.current !== C) {
            let e = (0, r.x7)(C);
            I(C), N(e)
        }
        b.current = C
    }, [C]), (0, i.jsxs)(_.A, {
        title: t,
        titleId: h,
        description: A.intl.string(A.t.Bbw6Ac),
        errors: n,
        disabled: T,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": p,
            "aria-labelledby": h,
            className: g.i,
            innerClassName: g.Z,
            maxCharacterCount: m.NA2,
            onChange: function(e, t, n) {
                t !== S && (I(t), N(n), c(t))
            },
            placeholder: E,
            channel: x,
            textValue: S,
            richValue: f,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: d.USER_SETTINGS_MODAL_KEY,
            type: l.oU.PROFILE_BIO_INPUT,
            onBlur: () => {
                j.current = !1
            },
            onFocus: () => {
                j.current = !0
            },
            focused: j.current,
            onSubmit: function() {
                return new Promise(e => {
                    e({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }
        }), (0, i.jsx)(a.AC4, {
            id: p,
            children: A.intl.format(A.t["+DFxLc"], {
                maxLength: m.NA2
            })
        })]
    })
}