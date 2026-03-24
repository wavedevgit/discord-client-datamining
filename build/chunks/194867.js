/** chunk id: 194867 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(990078),
    o = n(397927),
    a = n(775602),
    u = n(600941),
    d = n(890942),
    c = n(744201),
    p = n(271484),
    m = n(628743);

function _(e) {
    let {
        guildId: t,
        group: n,
        powerups: _
    } = e, [f, g] = i.useState(!1), x = (0, s.bG)([a.A], () => a.A.useReducedMotion), A = (0, p.A)(n, t), v = !x && f ? A?.image?.animatedUrl : A?.image?.staticUrl, h = (0, u.A)({
        guildId: t,
        powerups: _
    }), {
        textColor: E
    } = (0, c.A)(h?.isActive ?? !1);
    if (null == h || null == A) return null;
    let {
        status: j,
        cost: b,
        costDecorator: I
    } = h;
    return (0, r.jsxs)(d.NI, {
        label: A.title,
        isActive: j?.type === "active",
        isWarning: j?.type === "expiring",
        badge: A.badge,
        onClick: () => A.openModal(_),
        onMouseOver: () => g(!0),
        onMouseLeave: () => g(!1),
        children: [(0, r.jsx)("img", {
            alt: "",
            src: v,
            className: m.S
        }), (0, r.jsx)(d.Ft, {
            title: A.title,
            textColor: E,
            footer: (0, r.jsx)(d.$L, {
                status: j,
                cost: b,
                costDecorator: I
            }),
            children: (0, r.jsx)(o.Text, {
                className: m.h,
                color: E,
                variant: "text-sm/medium",
                children: A.description
            })
        }), (0, r.jsx)(d.kd, {
            children: A?.viewCtaTooltip != null ? (0, r.jsx)(l.m, {
                asContainer: !0,
                text: A.viewCtaTooltip,
                delay: 100,
                children: (0, r.jsx)(o.Button, {
                    text: A.viewCta,
                    fullWidth: !0
                })
            }) : (0, r.jsx)(o.Button, {
                text: A.viewCta,
                fullWidth: !0
            })
        })]
    })
}