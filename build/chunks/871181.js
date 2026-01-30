/** chunk id: 871181, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(355622),
    c = n(408018),
    u = n(133343),
    d = n(915089),
    f = n(95701),
    p = n(788868),
    _ = n(652215),
    h = n(985018),
    m = n(3477);
let g = (0, f.createChannelRecord)({
        id: "1",
        type: _.rbe.DM
    }),
    E = (0, d.Ld)();

function y(e) {
    let {
        label: t = h.intl.string(h.t.B3miE8),
        onTextChange: n,
        pendingText: a,
        currentText: d,
        className: f,
        innerClassName: _,
        disableThemedBackground: y = !1
    } = e, [b, O] = i.useState(null != a ? a : d), [v, A] = i.useState((0, c.x7)(b)), I = i.useRef(!1);

    function S(e, t, r) {
        t !== b && (O(t), A(r), n(t))
    }

    function T() {
        return new Promise(e => {
            e({
                shouldClear: !1,
                shouldRefocus: !0
            })
        })
    }
    return i.useEffect(() => {
        I.current = !0
    }, []), i.useEffect(() => {
        if (void 0 === a) {
            let e = (0, c.x7)(d);
            O(d), A(e)
        }
    }, [a, d]), (0, r.jsx)("div", {
        className: o()(m.rf, f),
        children: (0, r.jsx)(s.D0$, {
            label: t,
            children: e => (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Ay, {
                    "aria-describedby": "".concat(e.describedById, " ").concat(E),
                    "aria-labelledby": e.labelId,
                    innerClassName: o()(m.Tg, _),
                    editorClassName: m.OT,
                    maxCharacterCount: p.Jo,
                    onChange: S,
                    channel: g,
                    textValue: b,
                    richValue: v,
                    type: l.oU.CUSTOM_GIFT,
                    onBlur: () => {
                        I.current = !1
                    },
                    onFocus: () => {
                        I.current = !0
                    },
                    focused: I.current,
                    onSubmit: T,
                    disableThemedBackground: y
                }), (0, r.jsx)(s.AC4, {
                    id: E,
                    children: h.intl.format(h.t["+DFxLc"], {
                        maxLength: p.Jo
                    })
                })]
            })
        })
    })
}