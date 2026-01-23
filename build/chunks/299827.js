/** Chunk was on 43600 **/
/** chunk id: 299827, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => g
});
var l = n(627968),
    i = n(64700),
    s = n(397927),
    r = n(181658),
    a = n(997509),
    o = n(576705),
    u = n(652215),
    d = n(985018),
    c = n(912579);

function g(e) {
    let {
        guild: t,
        error: n,
        onClose: g
    } = e, h = t.id, p = i.useCallback(() => {
        g(), a.A.open(h, u.BEX.INVITES)
    }, [h, g]), v = i.useCallback(e => (0, l.jsx)(s.DUT, {
        className: c.P5,
        onClick: p,
        children: (0, l.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            tag: "span",
            children: e
        })
    }), [p]), A = i.useCallback(e => (0, l.jsx)(s.MzZ, {
        href: u.X7G.INVITES_HELP,
        target: "_blank",
        children: (0, l.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            tag: "span",
            children: e
        })
    }), []), I = n instanceof r.A ? n.code !== u.t02.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.A.can(u.xBc.MANAGE_GUILD, t) ? d.intl.format(d.t["H/RUY1"], {
        inviteListHook: v,
        inviteHelpHook: A
    }) : d.intl.string(d.t["/FxH6G"]) : "message" in n ? n.message : d.intl.string(d.t.eAn6z2);
    return (0, l.jsx)(s.Text, {
        className: c.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: I
    })
}