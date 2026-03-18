/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var r = n(827734),
    a = n(397927),
    l = n(985018),
    s = n(530611);

function o(e) {
    let {
        label: t,
        backgroundColor: n = r.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: l,
        iconColor: o
    } = e;
    return (0, i.jsxs)("div", {
        className: s.q,
        style: {
            backgroundColor: n
        },
        children: [(0, i.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: s.__invalid_badgeText,
            children: t
        }), (0, i.jsx)(l, {
            className: s.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: l.intl.string(l.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: a.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: l.intl.string(l.t.TgsPaP),
        icon: a.R2l,
        iconColor: r.A.unsafe_rawColors.PRIMARY_330.css
    })
}