/** chunk id: 124064 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(355622),
    r = n(408018),
    o = n(133343),
    d = n(915089),
    c = n(840065),
    u = n(95701),
    m = n(128450),
    g = n(652215),
    _ = n(985018),
    x = n(973746);
let A = (0, d.Ld)(),
    h = (0, u.createChannelRecord)({
        id: "1",
        type: g.rbe.DM
    }),
    p = (0, d.Ld)();

function f(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: d,
        pendingBio: u,
        placeholder: f,
        currentBio: T,
        disabled: E = !1
    } = e, [S, b] = s.useState(u ?? T), [C, N] = s.useState((0, r.x7)(S)), v = s.useRef(T), I = s.useRef(!1);
    return s.useEffect(() => {
        if (v.current !== T) {
            let e = (0, r.x7)(T);
            b(T), N(e)
        }
        v.current = T
    }, [T]), s.useEffect(() => {
        void 0 !== u || S === T || I.current || (b(T), N((0, r.x7)(T)))
    }, [u, T, S]), (0, i.jsxs)(m.A, {
        title: t,
        titleId: A,
        description: _.intl.string(_.t.Bbw6Ac),
        errors: n,
        disabled: E,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": p,
            "aria-labelledby": A,
            className: x.i,
            innerClassName: x.Z,
            maxCharacterCount: g.NA2,
            onChange: function(e, t, n) {
                t !== S && (b(t), N(n), d(t))
            },
            placeholder: f,
            channel: h,
            textValue: S,
            richValue: C,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: c.USER_SETTINGS_MODAL_KEY,
            type: a.oU.PROFILE_BIO_INPUT,
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