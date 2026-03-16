/** chunk id: 59375 params = (module,exports,require) **/
s.d(t, {
    A: () => l
});
var a = s(627968);
s(64700);
var n = s(397927),
    i = s(407943);

function l(e) {
    let {
        attachment: t
    } = e, s = Math.round((t.size ?? 0) / 1024 / 1024 * 100) / 100;
    return (0, a.jsxs)("div", {
        className: i.kL,
        children: [(0, a.jsx)(n.DF1, {
            size: "xs",
            color: "currentColor",
            className: i.Yg
        }), (0, a.jsx)(n.hKd, {
            size: 8,
            horizontal: !0
        }), (0, a.jsx)(n.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: i.Md,
            children: t.filename
        }), (0, a.jsx)(n.hKd, {
            size: 8,
            horizontal: !0
        }), (0, a.jsx)("div", {
            className: i.Om
        }), (0, a.jsx)(n.hKd, {
            size: 8,
            horizontal: !0
        }), (0, a.jsxs)(n.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [s, "MB"]
        })]
    })
}