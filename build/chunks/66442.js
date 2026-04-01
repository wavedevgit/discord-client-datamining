/** chunk id: 66442 params = (module,exports,require) **/
n.d(e, {
    X: () => D,
    default: () => j
});
var l = n(627968),
    i = n(64700),
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
    f = n(954571),
    x = n(396787),
    A = n(652215),
    g = n(985018),
    y = n(514693);

function D(t) {
    let {
        channel: e,
        previewIcon: n,
        onIconChange: i,
        onIconRemove: a,
        analyticsLocations: r,
        petite: o = !1,
        className: d,
        allowRemovingIcon: u = !0
    } = t, p = void 0 !== n ? n : e?.icon != null ? (0, m.Y)(e, 120) : null, {
        analyticsLocations: v
    } = (0, _.Ay)(r, h.A.GROUP_DM_ICON_EDITOR), f = o ? 32 : 64;
    return (0, l.jsxs)("div", {
        className: s()(y.r2, d),
        children: [(0, l.jsxs)(c.DUT, {
            className: s()(y.zc, {
                [y.ud]: o
            }),
            "aria-label": g.intl.string(g.t["0qPSMV"]),
            onClick: () => (0, x.F5)(i, v),
            children: [null != p ? (0, l.jsx)("img", {
                src: p,
                alt: "",
                className: y.Dp
            }) : (0, l.jsx)("div", {
                className: y.Pz,
                children: (0, l.jsx)(c.nFg, {
                    size: "custom",
                    width: f,
                    height: f,
                    color: "currentColor"
                })
            }), (0, l.jsx)("div", {
                className: y.qc,
                children: (0, l.jsx)(c.R2l, {
                    color: "currentColor",
                    size: o ? "xs" : "refresh_sm"
                })
            })]
        }), null != p && u ? (0, l.jsx)(c.QWc, {
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
    } = t, C = (0, o.bG)([v.A], () => v.A.getChannel(e)), I = C?.name, w = (0, p.e5)(C), [E, T] = i.useState(I ?? ""), [b, R] = i.useState(void 0), k = void 0 !== b, {
        analyticsLocations: N
    } = (0, _.Ay)(j, h.A.GROUP_DM_EDIT_MODAL), P = {
        channel_id: e,
        channel_type: C?.type,
        location: j,
        location_stack: N,
        old_name_set: "" !== I,
        old_icon_set: C?.icon != null
    };
    return (i.useEffect(() => {
        s(E !== I || k)
    }, [E, I, k, s]), (0, u.Ay)(() => (f.default.track(A.HAw.GDM_EDIT_INTERACTED, {
        ...P,
        action: "opened"
    }), () => {
        f.default.track(A.HAw.GDM_EDIT_INTERACTED, {
            ...P,
            action: "dismissed"
        })
    })), null == C) ? null : (0, l.jsx)(_.f5, {
        value: N,
        children: (0, l.jsx)("form", {
            onSubmit: t => {
                t.preventDefault();
                let l = E !== I,
                    i = void 0 !== b;
                if (f.default.track(A.HAw.GDM_EDIT_INTERACTED, {
                        ...P,
                        action: "saved",
                        new_name_set: "" !== E,
                        new_icon_set: (i ? b : C?.icon) != null,
                        name_changed: l,
                        icon_changed: i
                    }), l || i) {
                    let t = {};
                    l && (t.name = E), i && (t.icon = b), d.A.updateChannel(e, t, j).catch(x.XA)
                }
                n()
            },
            children: (0, l.jsx)(r.Modal, {
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
                children: (0, l.jsxs)("div", {
                    className: y.jE,
                    children: [(0, l.jsx)(D, {
                        channel: C,
                        previewIcon: b,
                        onIconChange: t => R(t.imageUri),
                        onIconRemove: () => R(null),
                        analyticsLocations: N
                    }), (0, l.jsx)(c.ksK, {
                        "aria-label": g.intl.string(g.t.GEGW3P),
                        placeholder: w ?? "",
                        maxLength: A.Ign,
                        value: E,
                        onChange: T,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}