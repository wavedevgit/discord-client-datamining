/** chunk id: 124064 params = (module,exports,require) **/
n.d(t, {
    A: () => E
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
    _ = n(128450),
    g = n(652215),
    m = n(985018),
    A = n(656420);
let h = (0, d.Ld)(),
    p = (0, u.createChannelRecord)({
        id: "1",
        type: g.rbe.DM
    }),
    x = (0, d.Ld)();

function E(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: d,
        pendingBio: u,
        placeholder: E,
        currentBio: T,
        disabled: S = !1
    } = e, [C, f] = s.useState(u ?? T), [I, b] = s.useState((0, r.x7)(C)), N = s.useRef(T), v = s.useRef(!1);
    return s.useEffect(() => {
        if (N.current !== T) {
            let e = (0, r.x7)(T);
            f(T), b(e)
        }
        N.current = T
    }, [T]), (0, i.jsxs)(_.A, {
        title: t,
        titleId: h,
        description: m.intl.string(m.t.Bbw6Ac),
        errors: n,
        disabled: S,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": x,
            "aria-labelledby": h,
            className: A.i,
            innerClassName: A.Z,
            maxCharacterCount: g.NA2,
            onChange: function(e, t, n) {
                t !== C && (f(t), b(n), d(t))
            },
            placeholder: E,
            channel: p,
            textValue: C,
            richValue: I,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: c.USER_SETTINGS_MODAL_KEY,
            type: a.oU.PROFILE_BIO_INPUT,
            onBlur: () => {
                v.current = !1
            },
            onFocus: () => {
                v.current = !0
            },
            focused: v.current,
            onSubmit: function() {
                return new Promise(e => {
                    e({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }
        }), (0, i.jsx)(l.AC4, {
            id: x,
            children: m.intl.format(m.t["+DFxLc"], {
                maxLength: g.NA2
            })
        })]
    })
}