/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(397927),
    a = n(985018),
    r = n(387130);

function o(e) {
    let {
        label: t,
        backgroundColor: n = l.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: a,
        iconColor: o
    } = e;
    return (0, i.jsxs)("div", {
        className: r.q,
        style: {
            backgroundColor: n
        },
        children: [(0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: r.__invalid_badgeText,
            children: t
        }), (0, i.jsx)(a, {
            className: r.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: a.intl.string(a.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: s.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: a.intl.string(a.t.TgsPaP),
        icon: s.R2l,
        iconColor: l.A.unsafe_rawColors.PRIMARY_330.css
    })
}