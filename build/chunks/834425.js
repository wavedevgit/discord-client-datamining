/** chunk id: 834425 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(397927),
    r = i(729937),
    s = i(307600),
    a = i(998218);

function o(e) {
    let {
        activity: t,
        user: i,
        variant: o = "secondary",
        onAction: d,
        ...u
    } = e;
    if (t?.buttons == null || t.buttons.length < 1) return null;
    async function c(e, t, i) {
        try {
            let n = await (0, r.yb)(e, t);
            if (n.button_urls.length <= i) return;
            let l = n.button_urls[i];
            if ("string" != typeof l) return;
            let o = a.A.safeParseWithQuery(l);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, s.h)({
                href: a.A.format(o),
                trusted: !1
            })
        } catch (e) {}
    }
    return (0, n.jsx)(n.Fragment, {
        children: t.buttons.map((e, r) => (0, n.jsx)(l.Button, {
            text: e,
            variant: o,
            size: "sm",
            fullWidth: !0,
            onClick: () => {
                d?.(), c(t, i.id, r)
            },
            ...u
        }, `customButton-${r}`))
    })
}