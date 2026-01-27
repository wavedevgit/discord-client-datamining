/** Chunk was on 34078 **/
/** chunk id: 146571, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => f
}), r(896048);
var n = r(627968),
    s = r(64700),
    i = r(503698),
    l = r.n(i),
    a = r(421380),
    o = r(397927),
    c = r(915089),
    u = r(628387),
    h = r(920768),
    d = r(291255),
    p = r(713545);

function f(e) {
    let {
        alpha2: t,
        countryCode: r,
        forceMode: i,
        label: f,
        error: m,
        className: y,
        required: g,
        value: O,
        setRef: b,
        placeholder: j,
        autoFocus: w,
        maxLength: C,
        spellCheck: A,
        autoComplete: S,
        autoCapitalize: v,
        autoCorrect: E,
        onChange: x,
        inputClassName: P
    } = e, N = (0, c.GV)(), [k, T] = s.useState(!1), _ = (0, u.Vl)(i, O);
    return (0, n.jsx)("div", {
        className: null != y ? y : void 0,
        children: (0, n.jsx)(o.D0$, {
            label: f,
            errorMessage: m,
            required: g,
            id: N,
            children: (0, n.jsxs)("div", {
                className: l()(p.hF, d.hF, P, {
                    [p.z3]: null != m,
                    [p.in]: k
                }),
                children: [(0, n.jsx)(h.A, {
                    show: _,
                    alpha2: t,
                    countryCode: r
                }), (0, n.jsx)(a.ob, {
                    id: N,
                    name: "email",
                    type: i === u.Pd.EMAIL ? "email" : "text",
                    value: O,
                    inputRef: b,
                    placeholder: j,
                    "aria-label": f,
                    required: g,
                    onChange: function(e) {
                        let t = (0, u.Vl)(i, e) ? r : "";
                        x(e, t)
                    },
                    autoComplete: S,
                    autoCapitalize: v,
                    autoCorrect: E,
                    autoFocus: w,
                    maxLength: C,
                    spellCheck: A,
                    className: d.I6,
                    inputClassName: d.LF,
                    onFocus: () => T(!0),
                    onBlur: () => T(!1)
                })]
            })
        })
    })
}