/** Chunk was on 5606 **/
/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
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
    p = n(128450),
    _ = n(652215),
    m = n(985018),
    g = n(973746);
let f = (0, c.Ld)(),
    b = (0, u.createChannelRecord)({
        id: "1",
        type: _.rbe.DM
    }),
    h = (0, c.Ld)();

function A(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: c,
        pendingBio: u,
        placeholder: A,
        currentBio: E,
        disabled: x = !1
    } = e, [O, C] = i.useState(null != u ? u : E), [y, j] = i.useState((0, a.x7)(O)), T = i.useRef(E), v = i.useRef(!1);
    return i.useEffect(() => {
        if (T.current !== E) {
            let e = (0, a.x7)(E);
            C(E), j(e)
        }
        T.current = E
    }, [E]), (0, r.jsxs)(p.A, {
        title: t,
        titleId: f,
        description: m.intl.string(m.t.Bbw6Ac),
        errors: n,
        disabled: x,
        children: [(0, r.jsx)(o.Ay, {
            "aria-describedby": h,
            "aria-labelledby": f,
            className: g.i,
            innerClassName: g.Z,
            maxCharacterCount: _.NA2,
            onChange: function(e, t, n) {
                t !== O && (C(t), j(n), c(t))
            },
            placeholder: A,
            channel: b,
            textValue: O,
            richValue: y,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: d.USER_SETTINGS_MODAL_KEY,
            type: s.oU.PROFILE_BIO_INPUT,
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
        }), (0, r.jsx)(l.AC4, {
            id: h,
            children: m.intl.format(m.t["+DFxLc"], {
                maxLength: _.NA2
            })
        })]
    })
}