/** chunk id: 385310, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(990078),
    s = n(397927),
    o = n(624458),
    c = n(212455),
    u = n(332118),
    d = n(985018),
    p = n(400783);
let h = e => {
    let {
        headerId: t,
        reapplyText: n,
        onReapply: h,
        confirmText: f,
        onWithdrawApplication: g,
        rejectionReason: m = null,
        guild: A = null
    } = e, _ = (0, l.bG)([c.A], () => {
        var e;
        return c.A.getCooldown(null != (e = null == A ? void 0 : A.id) ? e : "0")
    }), {
        canReapply: b,
        isLoading: E
    } = (0, u.f)(null == A ? void 0 : A.id);
    i.useEffect(() => {
        null == _ && null != A && o.A.fetchJoinRequestCooldown(A.id)
    }, [_, A]);
    let O = (null != _ ? _ : 0) > 0,
        y = O && null != _ ? Math.ceil((1e3 * _ - Date.now()) / 864e5) : 0;
    return (0, r.jsxs)("div", {
        className: p.EL,
        children: [(0, r.jsx)("div", {
            className: p.P0,
            children: (0, r.jsx)(s.aoi, {
                size: "md",
                color: s.LU0.colors.INTERACTIVE_TEXT_ACTIVE
            })
        }), (0, r.jsxs)("div", {
            className: p.bc,
            children: [(0, r.jsx)(s.Heading, {
                id: t,
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: (null == A ? void 0 : A.name) != null ? d.intl.formatToPlainString(d.t["P+/gzA"], {
                    guildName: A.name
                }) : d.intl.string(d.t.gBPcuP)
            }), null != m && "" !== m ? (0, r.jsxs)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: [(0, r.jsx)("span", {
                    className: p.Wj,
                    children: d.intl.string(d.t.cf1psW)
                }), (0, r.jsx)("span", {
                    children: m
                })]
            }) : null]
        }), (0, r.jsxs)("div", {
            className: p.Ow,
            children: [b || E ? (0, r.jsx)(a.m, {
                asContainer: !0,
                text: O ? d.intl.formatToPlainString(d.t.A0f0P7, {
                    days: y
                }) : null,
                "aria-label": O ? d.intl.formatToPlainString(d.t.A0f0P7, {
                    days: y
                }) : void 0,
                children: (0, r.jsx)(s.Button, {
                    onClick: h,
                    variant: "secondary",
                    size: "md",
                    loading: null == _ || E,
                    disabled: O || E,
                    text: n,
                    fullWidth: !0
                })
            }) : null, (0, r.jsx)(s.Button, {
                onClick: () => g(b || E),
                variant: "critical-primary",
                size: "md",
                text: f,
                fullWidth: !0
            })]
        })]
    })
}