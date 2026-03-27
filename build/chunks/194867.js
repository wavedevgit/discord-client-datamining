/** chunk id: 194867 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    o = n(397927),
    a = n(775602),
    d = n(600941),
    u = n(890942),
    c = n(744201),
    p = n(271484),
    _ = n(526652);

function m(e) {
    let {
        guildId: t,
        group: n,
        powerups: m
    } = e, [f, A] = i.useState(!1), g = (0, l.bG)([a.A], () => a.A.useReducedMotion), x = (0, p.A)(n, t), v = !g && f ? x?.image?.animatedUrl : x?.image?.staticUrl, h = (0, d.A)({
        guildId: t,
        powerups: m
    }), {
        textColor: E
    } = (0, c.A)(h?.isActive ?? !1);
    if (null == h || null == x) return null;
    let {
        status: b,
        cost: I,
        costDecorator: j
    } = h;
    return (0, r.jsxs)(u.NI, {
        label: x.title,
        isActive: b?.type === "active",
        isWarning: b?.type === "expiring",
        badge: x.badge,
        onClick: () => x.openModal(m),
        onMouseOver: () => A(!0),
        onMouseLeave: () => A(!1),
        children: [(0, r.jsx)("img", {
            alt: "",
            src: v,
            className: _.S
        }), (0, r.jsx)(u.Ft, {
            title: x.title,
            textColor: E,
            footer: (0, r.jsx)(u.$L, {
                status: b,
                cost: I,
                costDecorator: j
            }),
            children: (0, r.jsx)(o.Text, {
                className: _.h,
                color: E,
                variant: "text-sm/medium",
                children: x.description
            })
        }), (0, r.jsx)(u.kd, {
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