/** chunk id: 986350 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(29352),
    s = n(652215),
    r = n(985018),
    o = n(473988);

function d(e) {
    let t, {
            message: n,
            onDeleteMessage: d,
            children: c
        } = e,
        u = n.interactionMetadata?.ephemerality_reason,
        _ = () => d(n, !0);
    if (null != u) {
        let e = (0, l.R)(u);
        t = (0, i.jsx)("div", {
            className: o.rd,
            children: r.intl.format(r.t.wx1tLQ, {
                handleDelete: _,
                reason: e
            })
        })
    } else t = n.type === s.lAJ.STAGE_RAISE_HAND ? r.intl.format(r.t["qDAX++"], {
        handleDelete: _
    }) : r.intl.format(r.t.uX3ecL, {
        count: 1,
        countMessages: 1,
        handleDelete: _
    });
    return (0, i.jsxs)("div", {
        className: o.XO,
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(a.bMW, {
            size: "xs",
            color: "currentColor",
            className: o.Kk
        }), t, c]
    })
}