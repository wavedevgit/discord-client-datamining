/** chunk id: 231545, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048), n(747238);
var a = n(627968);
n(64700);
var l = n(92653),
    r = n(827734),
    i = n(736653),
    s = n(302031),
    o = n(652215),
    c = n(661251);
let d = {
    base00: r.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: r.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: r.A.colors.TEXT_DEFAULT.css,
    base08: r.A.colors.TEXT_MUTED.css,
    base09: r.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: r.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: r.A.colors.TEXT_BRAND.css
};

function u(e) {
    let t = {};
    for (let [n, a] of Object.entries(e)) t[n] = a;
    return t
}
let m = u(d),
    p = u(d);

function h(e) {
    return o.AKn.test(e) ? (0, a.jsx)(s.Ay, {
        type: s.Ay.Types.TEXT,
        children: () => e
    }) : e
}

function x(e) {
    let {
        data: t
    } = e, n = (0, i.Ay)();
    return (0, a.jsx)("div", {
        className: c.H$,
        children: (0, a.jsx)(l.d, {
            data: t,
            theme: "light" === n ? p : m,
            invertTheme: !1,
            valueRenderer: h,
            shouldExpandNode: () => !0
        })
    })
}