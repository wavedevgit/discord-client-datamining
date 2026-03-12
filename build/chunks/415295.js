/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(397927),
    a = n(985018),
    s = n(724001);

function o(e) {
    let {
        label: t,
        backgroundColor: n = r.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: a,
        iconColor: o
    } = e;
    return (0, i.jsxs)("div", {
        className: s.q,
        style: {
            backgroundColor: n
        },
        children: [(0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: s.__invalid_badgeText,
            children: t
        }), (0, i.jsx)(a, {
            className: s.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: a.intl.string(a.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: l.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: a.intl.string(a.t.TgsPaP),
        icon: l.R2l,
        iconColor: r.A.unsafe_rawColors.PRIMARY_330.css
    })
}