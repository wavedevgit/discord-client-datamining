/** chunk id: 231545 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968);
n(64700);
var i = n(92653),
    l = n(827734),
    s = n(736653),
    r = n(302031),
    o = n(652215),
    d = n(793877);
let c = {
    base00: l.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: l.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: l.A.colors.TEXT_DEFAULT.css,
    base08: l.A.colors.TEXT_MUTED.css,
    base09: l.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: l.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: l.A.colors.TEXT_BRAND.css
};

function u(e) {
    let t = {};
    for (let [n, a] of Object.entries(e)) t[n] = a;
    return t
}
let m = u(c),
    h = u(c);

function x(e) {
    return o.AKn.test(e) ? (0, a.jsx)(r.Ay, {
        type: r.Ay.Types.TEXT,
        children: () => e
    }) : e
}

function p(e) {
    let {
        data: t
    } = e, n = (0, s.Ay)();
    return (0, a.jsx)("div", {
        className: d.H$,
        children: (0, a.jsx)(i.d, {
            data: t,
            theme: "light" === n ? h : m,
            invertTheme: !1,
            valueRenderer: x,
            shouldExpandNode: () => !0
        })
    })
}