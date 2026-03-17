/** chunk id: 546136 params = (module,exports,require) **/
t.d(l, {
    A: () => c
});
var i = t(627968);
t(64700);
var n = t(503698),
    s = t.n(n),
    a = t(397927),
    r = t(642737),
    o = t(891726);

function d(e) {
    let {
        onClick: l
    } = e;
    return (0, i.jsxs)(a.DUT, {
        className: o.cS,
        "aria-label": "Close editing panel",
        onClick: l,
        children: [(0, i.jsx)(a._BQ, {
            size: "md",
            color: "currentColor"
        }), (0, i.jsx)(a._BQ, {
            size: "md",
            color: "currentColor"
        })]
    })
}

function c(e) {
    let {
        guildId: l,
        onChangeGuildId: t,
        onClose: n,
        className: c
    } = e;
    return (0, i.jsxs)("aside", {
        className: s()(o.nd, c),
        children: [(0, i.jsxs)("div", {
            className: o.wx,
            children: [(0, i.jsx)(r.A, {
                selectedGuildId: l ?? null,
                onChange: t
            }), (0, i.jsx)(d, {
                onClick: n
            })]
        }), (0, i.jsx)(a.HOs, {
            className: o.XG,
            fade: !0,
            children: (0, i.jsx)("div", {})
        })]
    })
}