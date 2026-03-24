/** chunk id: 986350 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(29352),
    l = n(652215),
    s = n(985018),
    o = n(144365);

function d(e) {
    let t, {
            message: n,
            onDeleteMessage: d,
            children: c
        } = e,
        u = n.interactionMetadata?.ephemerality_reason,
        _ = () => d(n, !0);
    if (null != u) {
        let e = (0, r.R)(u);
        t = (0, i.jsx)("div", {
            className: o.rd,
            children: s.intl.format(s.t.wx1tLQ, {
                handleDelete: _,
                reason: e
            })
        })
    } else t = n.type === l.lAJ.STAGE_RAISE_HAND ? s.intl.format(s.t["qDAX++"], {
        handleDelete: _
    }) : s.intl.format(s.t.uX3ecL, {
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