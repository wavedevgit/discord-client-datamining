/** chunk id: 124064 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    x = n(779476);
let A = (0, d.Ld)(),
    h = (0, u.createChannelRecord)({
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
    } = e, [E, b] = s.useState(u ?? f), [C, N] = s.useState((0, r.x7)(E)), v = s.useRef(f), I = s.useRef(!1);
    return s.useEffect(() => {
        if (v.current !== f) {
            let e = (0, r.x7)(f);
            b(f), N(e)
        }
        v.current = f
    }, [f]), s.useEffect(() => {
        void 0 !== u || E === f || I.current || (b(f), N((0, r.x7)(f)))
    }, [u, f, E]), (0, i.jsxs)(m.A, {
        title: t,
        titleId: A,
        description: _.intl.string(_.t.Bbw6Ac),
        errors: n,
        disabled: S,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": p,
            "aria-labelledby": A,
            className: x.i,
            innerClassName: x.Z,
            maxCharacterCount: g.NA2,
            onChange: function(e, t, n) {
                t !== E && (b(t), N(n), d(t))
            },
            placeholder: T,
            channel: h,
            textValue: E,
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