/** Chunk was on web.js **/
/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(355622),
    o = n(408018),
    l = n(133343),
    c = n(915089),
    u = n(840065),
    d = n(95701),
    f = n(128450),
    p = n(652215),
    _ = n(985018),
    h = n(973746);
let m = (0, c.Ld)(),
    g = (0, d.createChannelRecord)({
        id: "1",
        type: p.rbe.DM
    }),
    E = (0, c.Ld)();

function y(e) {
    let {
        sectionTitle: t,
        errors: n,
        onBioChange: c,
        pendingBio: d,
        placeholder: y,
        currentBio: b,
        disabled: O = !1
    } = e, [v, A] = i.useState(null != d ? d : b), [I, S] = i.useState((0, o.x7)(v)), T = i.useRef(b), C = i.useRef(!1);

    function N(e, t, n) {
        t !== v && (A(t), S(n), c(t))
    }

    function w() {
        return new Promise(e => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            })
        })
    }
    return i.useEffect(() => {
        if (T.current !== b) {
            let e = (0, o.x7)(b);
            A(b), S(e)
        }
        T.current = b
    }, [b]), (0, r.jsxs)(f.A, {
        title: t,
        titleId: m,
        description: _.intl.string(_.t.Bbw6Ac),
        errors: n,
        disabled: O,
        children: [(0, r.jsx)(l.Ay, {
            "aria-describedby": E,
            "aria-labelledby": m,
            className: h.i,
            innerClassName: h.Z,
            maxCharacterCount: p.NA2,
            onChange: N,
            placeholder: y,
            channel: g,
            textValue: v,
            richValue: I,
            emojiPickerCloseOnModalOuterClick: !0,
            parentModalKey: u.USER_SETTINGS_MODAL_KEY,
            type: s.oU.PROFILE_BIO_INPUT,
            onBlur: () => {
                C.current = !1
            },
            onFocus: () => {
                C.current = !0
            },
            focused: C.current,
            onSubmit: w
        }), (0, r.jsx)(a.AC4, {
            id: E,
            children: _.intl.format(_.t["+DFxLc"], {
                maxLength: p.NA2
            })
        })]
    })
}