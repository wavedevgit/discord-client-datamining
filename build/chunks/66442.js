/** Chunk was on 77870 **/
/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => x,
    default: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(308528),
    d = n(964486),
    p = n(793574),
    h = n(688810),
    f = n(571694),
    g = n(47167),
    m = n(734057),
    b = n(954571),
    A = n(396787),
    y = n(652215),
    _ = n(985018),
    O = n(353528);

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function x(e) {
    let {
        channel: t,
        previewIcon: n,
        onIconChange: l,
        onIconRemove: i,
        analyticsLocations: a,
        petite: o = !1,
        className: u,
        allowRemovingIcon: d = !0
    } = e, g = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, f.Y)(t, 120) : null, {
        analyticsLocations: m
    } = (0, h.Ay)(a, p.A.GROUP_DM_ICON_EDITOR), b = o ? 32 : 64;
    return (0, r.jsxs)("div", {
        className: s()(O.r2, u),
        children: [(0, r.jsxs)(c.DUT, {
            className: s()(O.zc, {
                [O.ud]: o
            }),
            "aria-label": _.intl.string(_.t["0qPSMV"]),
            onClick: () => (0, A.F5)(l, m),
            children: [null != g ? (0, r.jsx)("img", {
                src: g,
                alt: "",
                className: O.Dp
            }) : (0, r.jsx)("div", {
                className: O.Pz,
                children: (0, r.jsx)(c.nFg, {
                    size: "custom",
                    width: b,
                    height: b,
                    color: "currentColor"
                })
            }), (0, r.jsx)("div", {
                className: O.qc,
                children: (0, r.jsx)(c.R2l, {
                    color: "currentColor",
                    size: o ? "xs" : "refresh_sm"
                })
            })]
        }), null != g && d ? (0, r.jsx)(c.QWc, {
            variant: "critical",
            onClick: i,
            "aria-label": _.intl.string(_.t["uY+Nk/"]),
            text: _.intl.string(_.t["uY+Nk/"]),
            textVariant: "text-sm/medium",
            size: "sm",
            role: "button",
            type: "button"
        }) : null]
    })
}
let E = function(e) {
    let {
        channelId: t,
        onClose: n,
        transitionState: i,
        setHasPendingChanges: s,
        closeOrShowDiscardChangesAlert: f,
        location: E
    } = e, C = (0, o.bG)([m.A], () => m.A.getChannel(t)), S = null == C ? void 0 : C.name, I = (0, g.e5)(C), [N, T] = l.useState(null != S ? S : ""), [P, w] = l.useState(void 0), R = void 0 !== P, {
        analyticsLocations: D
    } = (0, h.Ay)(E, p.A.GROUP_DM_EDIT_MODAL), M = {
        channel_id: t,
        channel_type: null == C ? void 0 : C.type,
        location: E,
        location_stack: D,
        old_name_set: "" !== S,
        old_icon_set: (null == C ? void 0 : C.icon) != null
    };
    return (l.useEffect(() => {
        s(N !== S || R)
    }, [N, S, R, s]), (0, d.Ay)(() => (b.default.track(y.HAw.GDM_EDIT_INTERACTED, v(j({}, M), {
        action: "opened"
    })), () => {
        b.default.track(y.HAw.GDM_EDIT_INTERACTED, v(j({}, M), {
            action: "dismissed"
        }))
    })), null == C) ? null : (0, r.jsx)(h.f5, {
        value: D,
        children: (0, r.jsx)("form", {
            onSubmit: e => {
                e.preventDefault();
                let r = N !== S,
                    l = void 0 !== P;
                if (b.default.track(y.HAw.GDM_EDIT_INTERACTED, v(j({}, M), {
                        action: "saved",
                        new_name_set: "" !== N,
                        new_icon_set: (l ? P : null == C ? void 0 : C.icon) != null,
                        name_changed: r,
                        icon_changed: l
                    })), r || l) {
                    let e = {};
                    r && (e.name = N), l && (e.icon = P), u.A.updateChannel(t, e, E).catch(A.XA)
                }
                n()
            },
            children: (0, r.jsx)(a.Modal, {
                title: _.intl.string(_.t["5Q9+/L"]),
                actions: [{
                    text: _.intl.string(_.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: f
                }, {
                    text: _.intl.string(_.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: N === S && !R
                }],
                onClose: () => Promise.resolve(f()),
                transitionState: i,
                children: (0, r.jsxs)("div", {
                    className: O.jE,
                    children: [(0, r.jsx)(x, {
                        channel: C,
                        previewIcon: P,
                        onIconChange: e => w(e.imageUri),
                        onIconRemove: () => w(null),
                        analyticsLocations: D
                    }), (0, r.jsx)(c.ksK, {
                        "aria-label": _.intl.string(_.t.GEGW3P),
                        placeholder: null != I ? I : "",
                        value: N,
                        onChange: T,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}