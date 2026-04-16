/** chunk id: 124064 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(355622),
    a = n(408018),
    o = n(133343),
    d = n(915089),
    c = n(858897),
    u = n(95701),
    m = n(128450),
    g = n(652215),
    _ = n(985018),
    x = n(158983);
let h = (0, d.Ld)(),
    A = (0, u.createChannelRecord)({
        id: "1",
        type: g.rbe.DM
    }),
    p = (0, d.Ld)();

function T(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: d,
        pendingBio: u,
        placeholder: T,
        currentBio: f,
        disabled: S = !1
    } = e, [E, b] = s.useState(u ?? f), [C, v] = s.useState((0, a.x7)(E)), N = s.useRef(f), I = s.useRef(!1);
    return s.useEffect(() => {
        if (N.current !== f) {
            let e = (0, a.x7)(f);
            b(f), v(e)
        }
        N.current = f
    }, [f]), s.useEffect(() => {
        void 0 !== u || E === f || I.current || (b(f), v((0, a.x7)(f)))
    }, [u, f, E]), (0, i.jsxs)(m.A, {
        title: t,
        titleId: h,
        description: _.intl.string(_.t.Bbw6Ac),
        errors: n,
        disabled: S,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": p,
            "aria-labelledby": h,
            className: x.i,
            innerClassName: x.Z,
            maxCharacterCount: g.NA2,
            onChange: function(e, t, n) {
                t !== E && (b(t), v(n), d(t))
            },
            placeholder: T,
            channel: A,
            textValue: E,
            richValue: C,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: c.USER_SETTINGS_MODAL_KEY,
            type: r.oU.PROFILE_BIO_INPUT,
            onBlur: () => {
                I.current = !1
            },
            onFocus: () => {
                I.current = !0
            },
            focused: I.current,
            onSubmit: function() {
                return new Promise(e => {
                    e({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }
        }), (0, i.jsx)(l.AC4, {
            id: p,
            children: _.intl.format(_.t["+DFxLc"], {
                maxLength: g.NA2
            })
        })]
    })
}