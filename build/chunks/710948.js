/** chunk id: 710948, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => d
});
var i = s(627968);
s(64700);
var n = s(503698),
    r = s.n(n),
    l = s(397927),
    a = s(338717),
    o = s(116806);
let d = e => {
    let {
        obscureReason: t,
        iconClassname: s
    } = e;
    switch (t) {
        case a.Oc.EXPLICIT_CONTENT:
        case a.Oc.GORE_CONTENT:
        case a.Oc.SELF_HARM_CONTENT:
            return (0, i.jsx)(l.DAq, {
                className: r()(s, o.x),
                color: "white"
            });
        case a.Oc.SPOILER:
            return (0, i.jsx)(l.bMW, {
                size: "md",
                color: "currentColor",
                className: s
            });
        default:
            return null
    }
}