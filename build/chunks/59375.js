/** Chunk was on 69079 **/
/** chunk id: 59375, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(407943);

function i(e) {
    var t;
    let {
        attachment: n
    } = e, i = Math.round((null != (t = n.size) ? t : 0) / 1024 / 1024 * 100) / 100;
    return (0, r.jsxs)("div", {
        className: a.kL,
        children: [(0, r.jsx)(l.DF1, {
            size: "xs",
            color: "currentColor",
            className: a.Yg
        }), (0, r.jsx)(l.hKd, {
            size: 8,
            horizontal: !0
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: a.Md,
            children: n.filename
        }), (0, r.jsx)(l.hKd, {
            size: 8,
            horizontal: !0
        }), (0, r.jsx)("div", {
            className: a.Om
        }), (0, r.jsx)(l.hKd, {
            size: 8,
            horizontal: !0
        }), (0, r.jsxs)(l.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [i, "MB"]
        })]
    })
}