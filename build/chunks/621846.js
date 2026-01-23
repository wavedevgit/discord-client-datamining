/** Chunk was on 16864 **/
/** chunk id: 621846, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    H: () => f
}), r(896048), r(747238);
var n = r(627968),
    a = r(64700),
    s = r(492462),
    i = r(960488),
    l = r(397927),
    o = r(716965),
    c = r(102028),
    d = r(533553),
    u = r(985018),
    p = r(694900);

function f(e) {
    let {
        onUserCodeAccepted: t,
        usePrefilledCode: r
    } = e, [f, h] = a.useState(() => {
        let {
            user_code: e
        } = s.parse(window.location.search);
        return r && null != e ? e : ""
    }), x = (0, i.zy)(), m = a.useCallback(() => {
        (0, o.Vh)(x, "user_code_input_unauthorized")
    }, [x]), {
        manualSubmit: g,
        error: _,
        submitting: b
    } = (0, c.e)(f, t, m);
    return (0, n.jsxs)("div", {
        className: p.Qs,
        children: [(0, n.jsxs)("div", {
            className: p.gx,
            children: [(0, n.jsx)(l.Heading, {
                variant: "heading-xl/extrabold",
                className: p.Qq,
                children: u.intl.string(u.t.KYPNUv)
            }), (0, n.jsxs)(l.BJc, {
                gap: 24,
                children: [(0, n.jsx)(l.Text, {
                    variant: "text-md/medium",
                    color: "text-default",
                    className: p.Qq,
                    children: u.intl.string(u.t.xRHk7f)
                }), (0, n.jsx)(l.ksK, {
                    placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
                        number: d.D.USER_CODE_LENGTH
                    }),
                    maxLength: d.D.USER_CODE_LENGTH,
                    autoComplete: "off",
                    autoFocus: !0,
                    value: f,
                    onChange: h,
                    error: _,
                    fullWidth: !0
                })]
            })]
        }), (0, n.jsx)(l.Button, {
            fullWidth: !0,
            variant: "primary",
            text: u.intl.string(u.t["3PatSz"]),
            onClick: g,
            loading: b,
            disabled: f.length !== d.D.USER_CODE_LENGTH
        })]
    })
}