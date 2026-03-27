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
    _ = n(652215),
    g = n(985018),
    x = n(779476);
let A = (0, d.Ld)(),
    h = (0, u.createChannelRecord)({
        id: "1",
        type: _.rbe.DM
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
        disabled: S = !1
    } = e, [E, b] = s.useState(u ?? T), [C, v] = s.useState((0, r.x7)(E)), N = s.useRef(T), I = s.useRef(!1);
    return s.useEffect(() => {
        if (N.current !== T) {
            let e = (0, r.x7)(T);
            b(T), v(e)
        }
        N.current = T
    }, [T]), s.useEffect(() => {
        void 0 !== u || E === T || I.current || (b(T), v((0, r.x7)(T)))
    }, [u, T, E]), (0, i.jsxs)(m.A, {
        title: t,
        titleId: A,
        description: g.intl.string(g.t.Bbw6Ac),
        errors: n,
        disabled: S,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": p,
            "aria-labelledby": A,
            className: x.i,
            innerClassName: x.Z,
            maxCharacterCount: _.NA2,
            onChange: function(e, t, n) {
                t !== E && (b(t), v(n), d(t))
            },
            placeholder: f,
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
            children: g.intl.format(g.t["+DFxLc"], {
                maxLength: _.NA2
            })
        })]
    })
}