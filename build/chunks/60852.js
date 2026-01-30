/** chunk id: 60852, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => u
});
var n = i(627968),
    l = i(64700),
    c = i(732955),
    r = i(369162),
    o = i(427562),
    s = i(652215),
    a = i(985018),
    d = i(390790);

function u(e) {
    let {
        guildId: t,
        transitionState: i,
        onClose: u,
        onConfirm: _
    } = e, {
        rules: h,
        rulesAccepted: p
    } = (0, r.P)(), k = l.useCallback(() => {
        u(), _()
    }, [u, _]);
    return (0, n.jsx)(c.aFV, {
        title: a.intl.string(a.t["Q8OFN+"]),
        subtitle: a.intl.format(a.t.JLUVfo, {
            onCommunityGuidelinesClick: () => (0, o.p3)({
                articleId: s.MVz.PUBLIC_GUILD_GUILDLINES,
                guildId: t,
                modalStep: o.iv.AGREE_TO_RULES
            }),
            onDiscoveryGuidelinesClick: () => (0, o.p3)({
                articleId: s.MVz.SERVER_DISCOVERY_GUIDELINES,
                guildId: t,
                modalStep: o.iv.AGREE_TO_RULES
            })
        }),
        actions: [{
            disabled: !p,
            text: a.intl.string(a.t["qjtt/p"]),
            onClick: k
        }],
        transitionState: i,
        onClose: u,
        children: (0, n.jsx)("div", {
            className: d.H,
            children: h.map(e => (0, n.jsx)("div", {
                className: d.k,
                children: (0, n.jsx)(c.Sc0, {
                    checked: e.checked,
                    onChange: e.onCheck,
                    label: e.title,
                    description: e.body
                })
            }, e.key))
        })
    })
}