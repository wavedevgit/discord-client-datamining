/** chunk id: 197654 params = (module,exports,require) **/
i.d(e, {
    A: () => E
});
var a = i(627968),
    l = i(64700),
    n = i(158954),
    r = i(397927),
    s = i(154672),
    o = i(198982),
    c = i(734057),
    d = i(330936),
    u = i(652215),
    _ = i(985018),
    I = i(321222);
let E = t => {
    let {
        setStep: e,
        setGuildsInfo: i,
        email: E,
        setEmail: A,
        setGuildId: g,
        invite: h,
        ...m
    } = t, [S, y] = l.useState(null), [x, f] = l.useState(!1), L = async t => {
        t.preventDefault(), y(null), f(!0);
        try {
            let t = h?.guild?.id ?? c.A.getChannel(h?.channel?.id)?.getGuildId() ?? void 0;
            t === d.TA && (t = void 0);
            let a = await s.A.sendVerificationEmail(E, !0, t),
                l = a.guilds_info;
            a.has_matching_guild ? (g(t), e(d.Di.VERIFY_PIN)) : 0 === l.length ? e(d.Di.SUBMIT_SCHOOL) : 1 === l.length ? (g(l[0].id), await s.A.sendVerificationEmail(E, !0, l[0].id), e(d.Di.VERIFY_PIN)) : (i(l), e(d.Di.SELECT_SCHOOL))
        } catch (t) {
            y(new o.LG(t))
        } finally {
            f(!1)
        }
    }, p = _.intl.string(_.t.H1jCHH);
    if (h?.guild != null && h.guild.id !== d.TA && h?.approximate_member_count != null) {
        let {
            name: t
        } = h.guild;
        p = _.intl.formatToPlainString(_.t["4T4+p1"], {
            guildName: t,
            count: h.approximate_member_count
        })
    }
    return (0, a.jsx)("form", {
        className: I.o,
        onSubmit: L,
        children: (0, a.jsxs)(n.Modal, {
            ...m,
            title: p,
            actions: [{
                variant: "primary",
                type: "submit",
                loading: x,
                text: _.intl.string(_.t["8vmKO0"])
            }],
            children: [(0, a.jsx)(r.ksK, {
                label: _.intl.string(_.t.kmCxkf),
                placeholder: _.intl.string(_.t.ImAOh5),
                onChange: t => {
                    A(t)
                },
                error: S?.getAnyErrorMessage()
            }), (0, a.jsx)(r.Text, {
                className: I.V,
                color: "text-muted",
                variant: "text-xs/normal",
                children: _.intl.format(_.t.cgT481, {
                    termsURL: u.X7G.TERMS,
                    privacyURL: u.X7G.PRIVACY
                })
            })]
        })
    })
}