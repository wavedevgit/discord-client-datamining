/** chunk id: 986350 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(29352),
    r = n(652215),
    a = n(985018),
    o = n(185823);

function d(e) {
    let t, {
            message: n,
            onDeleteMessage: d,
            children: c
        } = e,
        u = n.interactionMetadata?.ephemerality_reason,
        _ = () => d(n, !0);
    if (null != u) {
        let e = (0, s.R)(u);
        t = (0, i.jsx)("div", {
            className: o.rd,
            children: a.intl.format(a.t.wx1tLQ, {
                handleDelete: _,
                reason: e
            })
        })
    } else t = n.type === r.lAJ.STAGE_RAISE_HAND ? a.intl.format(a.t["qDAX++"], {
        handleDelete: _
    }) : a.intl.format(a.t.uX3ecL, {
        count: 1,
        countMessages: 1,
        handleDelete: _
    });
    return (0, i.jsxs)("div", {
        className: o.XO,
        onClick: e => e.stopPropagation(),
        children: [(0, i.jsx)(l.bMW, {
            size: "xs",
            color: "currentColor",
            className: o.Kk
        }), t, c]
    })
}