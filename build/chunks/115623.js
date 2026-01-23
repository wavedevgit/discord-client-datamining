/** Chunk was on 52396 **/
/** chunk id: 115623, original params: t,e,i (module,exports,require) **/
i.d(e, {
    default: () => c
});
var a = i(627968);
i(64700);
var r = i(158954),
    n = i(397927),
    s = i(915089),
    l = i(985018),
    o = i(399675),
    d = i(938430);

function c(t) {
    let {
        transitionState: e,
        onClose: i,
        storeListing: c,
        subscription: u
    } = t, p = (0, s.GV)();
    return (0, a.jsx)(r.ExpressiveModal, {
        actions: [{
            variant: "secondary",
            onClick: i,
            text: l.intl.string(l.t["JtWl+a"])
        }],
        "aria-labelledby": p,
        graphic: {
            type: "image",
            src: d
        },
        onClose: i,
        transitionState: e,
        title: l.intl.formatToPlainString(l.t.wLFT6z, {
            tier: c.summary
        }),
        children: (0, a.jsx)(n.Text, {
            className: o.VA,
            variant: "text-md/medium",
            color: "text-default",
            children: l.intl.format(l.t.OsAK9h, {
                timestamp: null == u ? void 0 : u.currentPeriodEnd
            })
        })
    })
}