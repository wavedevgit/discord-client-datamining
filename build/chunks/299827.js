/** chunk id: 299827 params = (module,exports,require) **/
n.d(t, {
    X: () => g
});
var l = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(181658),
    r = n(997509),
    o = n(576705),
    d = n(652215),
    u = n(985018),
    c = n(640852);

function g(e) {
    let {
        guild: t,
        error: n,
        onClose: g
    } = e, h = t.id, A = i.useCallback(() => {
        g(), r.A.open(h, d.BEX.INVITES)
    }, [h, g]), x = i.useCallback(e => (0, l.jsx)(a.DUT, {
        className: c.P5,
        onClick: A,
        children: (0, l.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            tag: "span",
            children: e
        })
    }), [A]), p = i.useCallback(e => (0, l.jsx)(a.MzZ, {
        href: d.X7G.INVITES_HELP,
        target: "_blank",
        children: (0, l.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            tag: "span",
            children: e
        })
    }), []), I = n instanceof s.A ? n.code !== d.t02.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.A.can(d.xBc.MANAGE_GUILD, t) ? u.intl.format(u.t["H/RUY1"], {
        inviteListHook: x,
        inviteHelpHook: p
    }) : u.intl.string(u.t["/FxH6G"]) : "message" in n ? n.message : u.intl.string(u.t.eAn6z2);
    return (0, l.jsx)(a.Text, {
        className: c.gJ,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: I
    })
}