/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(355622),
    a = n(408018),
    o = n(133343),
    c = n(915089),
    d = n(840065),
    u = n(95701),
    _ = n(128450),
    p = n(652215),
    m = n(985018),
    g = n(973746);
let A = (0, c.Ld)(),
    f = (0, u.createChannelRecord)({
        id: "1",
        type: p.rbe.DM
    }),
    b = (0, c.Ld)();

function h(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: c,
        pendingBio: u,
        placeholder: h,
        currentBio: E,
        disabled: O = !1
    } = e, [C, x] = i.useState(null != u ? u : E), [S, T] = i.useState((0, a.x7)(C)), I = i.useRef(E), y = i.useRef(!1);
    return i.useEffect(() => {
        if (I.current !== E) {
            let e = (0, a.x7)(E);
            x(E), T(e)
        }
        I.current = E
    }, [E]), (0, r.jsxs)(_.A, {
        title: t,
        titleId: A,
        description: m.intl.string(m.t.Bbw6Ac),
        errors: n,
        disabled: O,
        children: [(0, r.jsx)(o.Ay, {
            "aria-describedby": b,
            "aria-labelledby": A,
            className: g.i,
            innerClassName: g.Z,
            maxCharacterCount: p.NA2,
            onChange: function(e, t, n) {
                t !== C && (x(t), T(n), c(t))
            },
            placeholder: h,
            channel: f,
            textValue: C,
            richValue: S,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: d.USER_SETTINGS_MODAL_KEY,
            type: s.oU.PROFILE_BIO_INPUT,
            onBlur: () => {
                y.current = !1
            },
            onFocus: () => {
                y.current = !0
            },
            focused: y.current,
            onSubmit: function() {
                return new Promise(e => {
                    e({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }
        }), (0, r.jsx)(l.AC4, {
            id: b,
            children: m.intl.format(m.t["+DFxLc"], {
                maxLength: p.NA2
            })
        })]
    })
}