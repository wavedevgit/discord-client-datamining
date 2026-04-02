/** chunk id: 385310 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(990078),
    s = n(397927),
    o = n(624458),
    d = n(212455),
    c = n(332118),
    u = n(985018),
    A = n(874628);
let h = e => {
    let {
        headerId: t,
        reapplyText: n,
        onReapply: h,
        confirmText: _,
        onWithdrawApplication: m,
        rejectionReason: p = null,
        guild: g = null
    } = e, E = (0, l.bG)([d.A], () => d.A.getCooldown(g?.id ?? "0")), {
        canReapply: I,
        isLoading: f
    } = (0, c.f)(g?.id);
    a.useEffect(() => {
        null == E && null != g && o.A.fetchJoinRequestCooldown(g.id)
    }, [E, g]);
    let C = (E ?? 0) > 0,
        T = C && null != E ? Math.ceil((1e3 * E - Date.now()) / 864e5) : 0;
    return (0, i.jsxs)("div", {
        className: A.EL,
        children: [(0, i.jsx)("div", {
            className: A.P0,
            children: (0, i.jsx)(s.aoi, {
                size: "md",
                color: s.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, i.jsxs)("div", {
            className: A.bc,
            children: [(0, i.jsx)(s.Heading, {
                id: t,
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: g?.name != null ? u.intl.formatToPlainString(u.t["P+/gzA"], {
                    guildName: g.name
                }) : u.intl.string(u.t.gBPcuP)
            }), null != p && "" !== p ? (0, i.jsxs)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: [(0, i.jsx)("span", {
                    className: A.Wj,
                    children: u.intl.string(u.t.cf1psW)
                }), (0, i.jsx)("span", {
                    children: p
                })]
            }) : null]
        }), (0, i.jsxs)("div", {
            className: A.Ow,
            children: [I || f ? (0, i.jsx)(r.m, {
                asContainer: !0,
                text: C ? u.intl.formatToPlainString(u.t.A0f0P7, {
                    days: T
                }) : null,
                "aria-label": C ? u.intl.formatToPlainString(u.t.A0f0P7, {
                    days: T
                }) : void 0,
                children: (0, i.jsx)(s.Button, {
                    onClick: h,
                    variant: "secondary",
                    size: "md",
                    loading: null == E || f,
                    disabled: C || f,
                    text: n,
                    fullWidth: !0
                })
            }) : null, (0, i.jsx)(s.Button, {
                onClick: () => m(I || f),
                variant: "critical-primary",
                size: "md",
                text: _,
                fullWidth: !0
            })]
        })]
    })
}