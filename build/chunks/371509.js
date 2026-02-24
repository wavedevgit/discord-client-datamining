/** chunk id: 371509, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    a = n(934551),
    l = n(873298),
    r = n(397927),
    o = n(355883);

function c(e) {
    let {
        redactionType: t,
        label: n
    } = e, c = s.useMemo(() => {
        switch (t) {
            case l.TO.BLUR:
                return a.ImageIcon;
            case l.TO.BLOCK:
                return a.DenyIcon;
            case l.TO.SHOW:
                return a.EyeIcon;
            default:
                return null
        }
    }, [t]);
    return (0, i.jsxs)("div", {
        className: o.q,
        children: [null != c && (0, i.jsx)(c, {
            size: "xs",
            color: "currentColor"
        }), (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: n
        })]
    })
}
let d = s.memo(function(e) {
    let {
        option: t
    } = e;
    return (0, i.jsx)(c, {
        redactionType: t.value,
        label: t.label
    })
})