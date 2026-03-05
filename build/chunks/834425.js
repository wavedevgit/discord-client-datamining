/** chunk id: 834425, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(397927),
    r = i(729937),
    s = i(307600),
    a = i(998218);

function o(t) {
    let {
        activity: e,
        user: i,
        variant: o = "secondary",
        onAction: d,
        ...u
    } = t;
    if (e?.buttons == null || e.buttons.length < 1) return null;
    async function c(t, e, i) {
        try {
            let n = await (0, r.yb)(t, e);
            if (n.button_urls.length <= i) return;
            let l = n.button_urls[i];
            if ("string" != typeof l) return;
            let o = a.A.safeParseWithQuery(l);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, s.h)({
                href: a.A.format(o),
                trusted: !1
            })
        } catch (t) {}
    }
    return (0, n.jsx)(n.Fragment, {
        children: e.buttons.map((t, r) => (0, n.jsx)(l.Button, {
            text: t,
            variant: o,
            size: "sm",
            fullWidth: !0,
            onClick: () => {
                d?.(), c(e, i.id, r)
            },
            ...u
        }, `customButton-${r}`))
    })
}