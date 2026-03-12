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
    c = n(840065),
    u = n(95701),
    _ = n(128450),
    m = n(652215),
    g = n(985018),
    A = n(656420);
let h = (0, d.Ld)(),
    x = (0, u.createChannelRecord)({
        id: "1",
        type: m.rbe.DM
    }),
    p = (0, d.Ld)();

function T(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: d,
        pendingBio: u,
        placeholder: T,
        currentBio: E,
        disabled: C = !1
    } = e, [S, f] = s.useState(u ?? E), [N, b] = s.useState((0, a.x7)(S)), I = s.useRef(E), v = s.useRef(!1);
    return s.useEffect(() => {
        if (I.current !== E) {
            let e = (0, a.x7)(E);
            f(E), b(e)
        }
        I.current = E
    }, [E]), s.useEffect(() => {
        void 0 !== u || S === E || v.current || (f(E), b((0, a.x7)(E)))
    }, [u, E, S]), (0, i.jsxs)(_.A, {
        title: t,
        titleId: h,
        description: g.intl.string(g.t.Bbw6Ac),
        errors: n,
        disabled: C,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": p,
            "aria-labelledby": h,
            className: A.i,
            innerClassName: A.Z,
            maxCharacterCount: m.NA2,
            onChange: function(e, t, n) {
                t !== S && (f(t), b(n), d(t))
            },
            placeholder: T,
            channel: x,
            textValue: S,
            richValue: N,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: c.USER_SETTINGS_MODAL_KEY,
            type: r.oU.PROFILE_BIO_INPUT,
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
            id: p,
            children: g.intl.format(g.t["+DFxLc"], {
                maxLength: m.NA2
            })
        })]
    })
}