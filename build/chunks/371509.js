/** Chunk was on 2827 **/
/** chunk id: 371509, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(934551),
    s = n(873298),
    a = n(397927),
    o = n(308757);

function c(e) {
    let {
        redactionType: t,
        label: n
    } = e, c = i.useMemo(() => {
        switch (t) {
            case s.TO.BLUR:
                return l.ImageIcon;
            case s.TO.BLOCK:
                return l.DenyIcon;
            case s.TO.SHOW:
                return l.EyeIcon;
            default:
                return null
        }
    }, [t]);
    return (0, r.jsxs)("div", {
        className: o.q,
        children: [null != c && (0, r.jsx)(c, {
            size: "xs",
            color: "currentColor"
        }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: n
        })]
    })
}
let d = i.memo(function(e) {
    let {
        option: t
    } = e;
    return (0, r.jsx)(c, {
        redactionType: t.value,
        label: t.label
    })
})