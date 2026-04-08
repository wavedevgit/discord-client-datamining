/** chunk id: 66442 params = (module,exports,require) **/
n.d(e, {
    X: () => D,
    default: () => j
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(308528),
    u = n(964486),
    h = n(793574),
    _ = n(688810),
    m = n(571694),
    p = n(47167),
    v = n(734057),
    A = n(954571),
    f = n(396787),
    x = n(652215),
    g = n(985018),
    y = n(514693);

function D(t) {
    let {
        channel: e,
        previewIcon: n,
        onIconChange: l,
        onIconRemove: a,
        analyticsLocations: r,
        petite: o = !1,
        className: d,
        allowRemovingIcon: u = !0
    } = t, p = void 0 !== n ? n : e?.icon != null ? (0, m.Y)(e, 120) : null, {
        analyticsLocations: v
    } = (0, _.Ay)(r, h.A.GROUP_DM_ICON_EDITOR), A = o ? 32 : 64;
    return (0, i.jsxs)("div", {
        className: s()(y.r2, d),
        children: [(0, i.jsxs)(c.DUT, {
            className: s()(y.zc, {
                [y.ud]: o
            }),
            "aria-label": g.intl.string(g.t["0qPSMV"]),
            onClick: () => (0, f.F5)(l, v),
            children: [null != p ? (0, i.jsx)("img", {
                src: p,
                alt: "",
                className: y.Dp
            }) : (0, i.jsx)("div", {
                className: y.Pz,
                children: (0, i.jsx)(c.nFg, {
                    size: "custom",
                    width: A,
                    height: A,
                    color: "currentColor"
                })
            }), (0, i.jsx)("div", {
                className: y.qc,
                children: (0, i.jsx)(c.R2l, {
                    color: "currentColor",
                    size: o ? "xs" : "refresh_sm"
                })
            })]
        }), null != p && u ? (0, i.jsx)(c.QWc, {
            variant: "critical",
            onClick: a,
            "aria-label": g.intl.string(g.t["uY+Nk/"]),
            text: g.intl.string(g.t["uY+Nk/"]),
            textVariant: "text-sm/medium",
            size: "sm",
            role: "button",
            type: "button"
        }) : null]
    })
}
let j = function(t) {
    let {
        channelId: e,
        onClose: n,
        transitionState: a,
        setHasPendingChanges: s,
        closeOrShowDiscardChangesAlert: m,
        location: j
    } = t, C = (0, o.bG)([v.A], () => v.A.getChannel(e)), I = C?.name, w = (0, p.e5)(C), [E, T] = l.useState(I ?? ""), [b, R] = l.useState(void 0), k = void 0 !== b, {
        analyticsLocations: N
    } = (0, _.Ay)(j, h.A.GROUP_DM_EDIT_MODAL), P = {
        channel_id: e,
        channel_type: C?.type,
        location: j,
        location_stack: N,
        old_name_set: "" !== I,
        old_icon_set: C?.icon != null
    };
    return (l.useEffect(() => {
        s(E !== I || k)
    }, [E, I, k, s]), (0, u.Ay)(() => (A.default.track(x.HAw.GDM_EDIT_INTERACTED, {
        ...P,
        action: "opened"
    }), () => {
        A.default.track(x.HAw.GDM_EDIT_INTERACTED, {
            ...P,
            action: "dismissed"
        })
    })), null == C) ? null : (0, i.jsx)(_.f5, {
        value: N,
        children: (0, i.jsx)("form", {
            onSubmit: t => {
                t.preventDefault();
                let i = E !== I,
                    l = void 0 !== b;
                if (A.default.track(x.HAw.GDM_EDIT_INTERACTED, {
                        ...P,
                        action: "saved",
                        new_name_set: "" !== E,
                        new_icon_set: (l ? b : C?.icon) != null,
                        name_changed: i,
                        icon_changed: l
                    }), i || l) {
                    let t = {};
                    i && (t.name = E), l && (t.icon = b), d.A.updateChannel(e, t, j).catch(f.XA)
                }
                n()
            },
            children: (0, i.jsx)(r.Modal, {
                title: g.intl.string(g.t["5Q9+/L"]),
                actions: [{
                    text: g.intl.string(g.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: m
                }, {
                    text: g.intl.string(g.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: E === I && !k
                }],
                onClose: () => Promise.resolve(m()),
                transitionState: a,
                children: (0, i.jsxs)("div", {
                    className: y.jE,
                    children: [(0, i.jsx)(D, {
                        channel: C,
                        previewIcon: b,
                        onIconChange: t => R(t.imageUri),
                        onIconRemove: () => R(null),
                        analyticsLocations: N
                    }), (0, i.jsx)(c.ksK, {
                        "aria-label": g.intl.string(g.t.GEGW3P),
                        placeholder: w ?? "",
                        maxLength: x.Ign,
                        value: E,
                        onChange: T,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}