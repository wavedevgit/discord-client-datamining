/** chunk id: 201700, original params: t,e,a (module,exports,require) **/
a.d(e, {
    default: () => g
}), a(896048), a(228524);
var i = a(627968),
    l = a(64700),
    n = a(158954),
    r = a(397927),
    s = a(181658),
    o = a(208882),
    c = a(946116),
    d = a(985018),
    u = a(550886);

function g(t) {
    var e, a;
    let {
        transitionState: g,
        onClose: p,
        entry: b
    } = t, [h, m] = l.useState(null != (e = b.description) ? e : ""), [C, x] = l.useState(null != (a = b.primaryCategoryId) ? a : c.mU.UNCATEGORIZED), [_, v] = l.useState(!1), [y, I] = l.useState(null), k = async () => {
        if (I(null), h !== b.description || C !== b.primaryCategoryId) {
            v(!0);
            try {
                await (0, o.FA)(b.channelId, b.guildId, h, C), v(!1), p()
            } catch (t) {
                v(!1), I(new s.A(t))
            }
        }
    };
    return (0, i.jsx)(n.Modal, {
        transitionState: g,
        "aria-label": d.intl.string(d.t.eQ2bLp),
        onClose: p,
        title: d.intl.formatToPlainString(d.t.w9tsNk, {
            guildName: b.name
        }),
        subtitle: d.intl.string(d.t["vEkX/8"]),
        actions: [{
            variant: "primary",
            text: d.intl.string(d.t["R3BPH+"]),
            onClick: k,
            loading: _
        }],
        children: (0, i.jsxs)("div", {
            className: u.iW,
            children: [(0, i.jsx)(r.fs1, {
                label: d.intl.string(d.t.FFFAGt),
                value: h,
                maxLength: 200,
                placeholder: d.intl.string(d.t.VzuITC),
                onChange: m,
                error: null == y ? void 0 : y.getAnyErrorMessage()
            }), (0, i.jsx)(r.l6P, {
                selectionMode: "single",
                label: d.intl.string(d.t.Olo8FB),
                placeholder: d.intl.string(d.t.XqMe3N),
                options: (0, c.g2)(b.channelId),
                clearable: !1,
                value: C,
                onSelectionChange: x,
                maxOptionsVisible: 4
            })]
        })
    })
}