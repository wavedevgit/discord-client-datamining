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
    _ = n(652215),
    g = n(985018),
    A = n(973746);
let x = (0, d.Ld)(),
    p = (0, u.createChannelRecord)({
        id: "1",
        type: _.rbe.DM
    }),
    h = (0, d.Ld)();

function T(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: d,
        pendingBio: u,
        placeholder: T,
        currentBio: E,
        disabled: f = !1
    } = e, [S, C] = s.useState(u ?? E), [b, N] = s.useState((0, r.x7)(S)), I = s.useRef(E), v = s.useRef(!1);
    return s.useEffect(() => {
        if (I.current !== E) {
            let e = (0, r.x7)(E);
            C(E), N(e)
        }
        I.current = E
    }, [E]), s.useEffect(() => {
        void 0 !== u || S === E || v.current || (C(E), N((0, r.x7)(E)))
    }, [u, E, S]), (0, i.jsxs)(m.A, {
        title: t,
        titleId: x,
        description: g.intl.string(g.t.Bbw6Ac),
        errors: n,
        disabled: f,
        children: [(0, i.jsx)(o.Ay, {
            "aria-describedby": h,
            "aria-labelledby": x,
            className: A.i,
            innerClassName: A.Z,
            maxCharacterCount: _.NA2,
            onChange: function(e, t, n) {
                t !== S && (C(t), N(n), d(t))
            },
            placeholder: T,
            channel: p,
            textValue: S,
            richValue: b,
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
            id: h,
            children: g.intl.format(g.t["+DFxLc"], {
                maxLength: _.NA2
            })
        })]
    })
}