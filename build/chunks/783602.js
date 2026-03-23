/** chunk id: 783602 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(341915),
    d = n(890687),
    c = n(270045),
    u = n(963713),
    m = n(985018),
    h = n(729836);

function p() {
    let {
        quest: e,
        onCtxMenuOpen: t,
        onCtxMenuClose: n,
        onCtxMenuSelect: l
    } = i.useContext(u.T), p = (0, d.S5)(e.config.expiresAt);
    return (0, a.jsxs)("div", {
        className: h.pS,
        children: [(0, a.jsx)(r.Text, {
            variant: "text-xxs/medium",
            className: s()(h.Uu, h.TK),
            children: m.intl.format(m.t["pX+fmn"], {
                expirationDate: p
            })
        }), (0, a.jsx)(c.C, {
            onOpen: t,
            onClose: n,
            onSelect: l,
            questContent: o.uF.QUEST_BAR_V2,
            quest: e,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            sourceQuestContent: o.uF.QUEST_BAR_V2,
            children: e => (0, a.jsx)(r.DUT, {
                ...e,
                className: h.rb,
                "aria-label": m.intl.string(m.t.DEoVWZ),
                children: (0, a.jsx)(r.jNK, {
                    size: "md",
                    color: "currentColor",
                    className: s()(h.Bx, h.U9)
                })
            })
        })]
    })
}