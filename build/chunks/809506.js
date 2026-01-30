/** chunk id: 809506, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => C
}), t(896048);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(835245),
    s = t(397927),
    o = t(408018),
    d = t(133343),
    u = t(95701),
    c = t(31717),
    g = t(652215),
    f = t(985018),
    p = t(502512),
    m = t(648359);
let v = (0, i.A)(),
    h = (0, u.createChannelRecord)({
        id: "1",
        type: g.rbe.DM
    });

function b() {
    return new Promise(e => {
        e({
            shouldClear: !1,
            shouldRefocus: !0
        })
    })
}

function q(e) {
    var A;
    let {
        hasError: t,
        maxLength: n,
        text: l
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(m.Ru, {
            [m.hz]: t
        }),
        "aria-hidden": "true",
        children: [null != (A = null == l ? void 0 : l.length) ? A : 0, " ", null != n && "/ ".concat(n)]
    })
}

function C(e) {
    var A;
    let {
        "aria-labelledby": t,
        className: l,
        id: i,
        autoFocus: u,
        maxLength: g,
        onChange: m,
        onSubmit: C,
        showCharacterCount: j = !1,
        placeholder: U,
        required: V,
        value: x,
        enableThemedBackground: O = !1,
        parentModalKey: y,
        label: P,
        errorMessage: K
    } = e, N = (0, s.xW1)(), [I, F] = n.useState(() => (0, o.x7)(x)), T = n.useRef(!0 === u), X = null != t ? t : null == N ? void 0 : N.titleId, W = null != (A = null == N ? void 0 : N.errorId) ? A : v;

    function Q(e, A, t) {
        m(A), F(t)
    }
    let S = n.useMemo(() => ({
        analyticsName: "simple",
        autocomplete: {
            alwaysUseLayer: !0,
            small: !0
        },
        disableAutoFocus: !0 !== u,
        drafts: {
            type: c.C.ChannelMessage
        },
        emojis: {
            button: !0
        },
        permissions: {
            requireSendMessages: !1
        },
        submit: {
            useDisabledStylesOnSubmit: !0,
            disableEnterToSubmit: !0
        }
    }), [u]);
    return (0, r.jsx)(s.D0$, {
        label: P,
        errorMessage: K,
        id: i,
        required: V,
        children: e => {
            var A, t;
            return (0, r.jsxs)(d.Ay, {
                id: null != (A = null == e ? void 0 : e.controlId) ? A : i,
                "aria-describedby": null != (t = null == e ? void 0 : e.describedById) ? t : W,
                "aria-labelledby": X,
                "aria-errormessage": null == e ? void 0 : e.errorMessageId,
                "aria-invalid": (null == e ? void 0 : e.errorMessageId) != null,
                className: p.T,
                innerClassName: a()(l, p.n),
                maxCharacterCount: g,
                onChange: Q,
                placeholder: U,
                required: V,
                channel: h,
                textValue: x,
                richValue: I,
                type: S,
                onBlur: () => {
                    T.current = !1
                },
                onFocus: () => {
                    T.current = !0
                },
                focused: T.current,
                onSubmit: null != C ? C : b,
                disableThemedBackground: !O,
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                children: [!0 === j && (0, r.jsx)(q, {
                    hasError: null != N.error || null != g && x.length > g,
                    text: x,
                    maxLength: g
                }), null != g && (0, r.jsx)(s.AC4, {
                    id: v,
                    children: f.intl.format(f.t["+DFxLc"], {
                        maxLength: g
                    })
                })]
            })
        }
    })
}