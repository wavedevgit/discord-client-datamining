/** chunk id: 415295 params = (module,exports,require) **/
n.d(t, {
    $: () => c,
    S: () => d
});
var i = n(627968);
n(64700);
var a = n(827734),
    l = n(397927),
    r = n(985018),
    s = n(871466);

function o(e) {
    let {
        label: t,
        backgroundColor: n = a.A.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT.css,
        icon: r,
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
        }), (0, i.jsx)(r, {
            className: s.r,
            color: o ?? "currentColor",
            "aria-hidden": !0
        })]
    })
}

function d() {
    return (0, i.jsx)(o, {
        label: r.intl.string(r.t["I+02Gs"]),
        backgroundColor: "#207B8D",
        icon: l.BZI
    })
}

function c() {
    return (0, i.jsx)(o, {
        label: r.intl.string(r.t.TgsPaP),
        icon: l.R2l,
        iconColor: a.A.unsafe_rawColors.PRIMARY_330.css
    })
}