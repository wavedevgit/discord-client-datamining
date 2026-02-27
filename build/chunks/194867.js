/** chunk id: 194867, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(990078),
    o = n(397927),
    a = n(775602),
    u = n(600941),
    d = n(890942),
    c = n(744201),
    p = n(271484),
    m = n(628743);

function A(e) {
    let {
        guildId: t,
        group: n,
        powerups: A
    } = e, [_, f] = l.useState(!1), g = (0, i.bG)([a.A], () => a.A.useReducedMotion), x = (0, p.A)(n, t), v = !g && _ ? x?.image?.animatedUrl : x?.image?.staticUrl, h = (0, u.A)({
        guildId: t,
        powerups: A
    }), {
        textColor: b
    } = (0, c.A)(h?.isActive ?? !1);
    if (null == h || null == x) return null;
    let {
        status: j,
        cost: E,
        costDecorator: I
    } = h;
    return (0, r.jsxs)(d.NI, {
        label: x.title,
        isActive: j?.type === "active",
        isWarning: j?.type === "expiring",
        badge: x.badge,
        onClick: () => x.openModal(A),
        onMouseOver: () => f(!0),
        onMouseLeave: () => f(!1),
        children: [(0, r.jsx)("img", {
            alt: "",
            src: v,
            className: m.S
        }), (0, r.jsx)(d.Ft, {
            title: x.title,
            textColor: b,
            footer: (0, r.jsx)(d.$L, {
                status: j,
                cost: E,
                costDecorator: I
            }),
            children: (0, r.jsx)(o.Text, {
                className: m.h,
                color: b,
                variant: "text-sm/medium",
                children: x.description
            })
        }), (0, r.jsx)(d.kd, {
            children: x?.viewCtaTooltip != null ? (0, r.jsx)(s.m, {
                asContainer: !0,
                text: x.viewCtaTooltip,
                delay: 100,
                children: (0, r.jsx)(o.Button, {
                    text: x.viewCta,
                    fullWidth: !0
                })
            }) : (0, r.jsx)(o.Button, {
                text: x.viewCta,
                fullWidth: !0
            })
        })]
    })
}