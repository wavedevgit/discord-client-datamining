/** Chunk was on 92917 **/
/** chunk id: 986350, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(29352),
    a = n(652215),
    s = n(985018),
    o = n(144365);

function c(e) {
    var t;
    let n, {
            message: c,
            onDeleteMessage: u,
            children: d
        } = e,
        p = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
        m = () => u(c, !0);
    if (null != p) {
        let e = (0, l.R)(p);
        n = (0, r.jsx)("div", {
            className: o.rd,
            children: s.intl.format(s.t.wx1tLQ, {
                handleDelete: m,
                reason: e
            })
        })
    } else n = c.type === a.lAJ.STAGE_RAISE_HAND ? s.intl.format(s.t["qDAX++"], {
        handleDelete: m
    }) : s.intl.format(s.t.uX3ecL, {
        count: 1,
        countMessages: 1,
        handleDelete: m
    });
    return (0, r.jsxs)("div", {
        className: o.XO,
        onClick: e => e.stopPropagation(),
        children: [(0, r.jsx)(i.bMW, {
            size: "xs",
            color: "currentColor",
            className: o.Kk
        }), n, d]
    })
}