/** Chunk was on 42455 **/
/** chunk id: 66442, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => D,
    default: () => P
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(158954),
    s = n(311907),
    c = n(397927),
    u = n(308528),
    d = n(964486),
    p = n(793574),
    h = n(688810),
    f = n(571694),
    m = n(47167),
    y = n(734057),
    b = n(954571),
    v = n(396787),
    _ = n(652215),
    g = n(985018),
    j = n(353528);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function D(e) {
    let {
        channel: t,
        previewIcon: n,
        onIconChange: r,
        onIconRemove: i,
        analyticsLocations: o,
        petite: s = !1,
        className: u,
        allowRemovingIcon: d = !0
    } = e, m = void 0 !== n ? n : (null == t ? void 0 : t.icon) != null ? (0, f.Y)(t, 120) : null, {
        analyticsLocations: y
    } = (0, h.Ay)(o, p.A.GROUP_DM_ICON_EDITOR), b = s ? 32 : 64;
    return (0, l.jsxs)("div", {
        className: a()(j.r2, u),
        children: [(0, l.jsxs)(c.DUT, {
            className: a()(j.zc, {
                [j.ud]: s
            }),
            "aria-label": g.intl.string(g.t["0qPSMV"]),
            onClick: () => (0, v.F5)(r, y),
            children: [null != m ? (0, l.jsx)("img", {
                src: m,
                alt: "",
                className: j.Dp
            }) : (0, l.jsx)("div", {
                className: j.Pz,
                children: (0, l.jsx)(c.nFg, {
                    size: "custom",
                    width: b,
                    height: b,
                    color: "currentColor"
                })
            }), (0, l.jsx)("div", {
                className: j.qc,
                children: (0, l.jsx)(c.R2l, {
                    color: "currentColor",
                    size: s ? "xs" : "refresh_sm"
                })
            })]
        }), null != m && d ? (0, l.jsx)(c.QWc, {
            variant: "critical",
            onClick: i,
            "aria-label": g.intl.string(g.t["uY+Nk/"]),
            text: g.intl.string(g.t["uY+Nk/"]),
            textVariant: "text-sm/medium",
            size: "sm",
            role: "button",
            type: "button"
        }) : null]
    })
}
let P = function(e) {
    let {
        channelId: t,
        onClose: n,
        transitionState: i,
        setHasPendingChanges: a,
        closeOrShowDiscardChangesAlert: f,
        location: P
    } = e, x = (0, s.bG)([y.A], () => y.A.getChannel(t)), A = null == x ? void 0 : x.name, C = (0, m.e5)(x), [E, I] = r.useState(null != A ? A : ""), [k, T] = r.useState(void 0), R = void 0 !== k, {
        analyticsLocations: N
    } = (0, h.Ay)(P, p.A.GROUP_DM_EDIT_MODAL), S = {
        channel_id: t,
        channel_type: null == x ? void 0 : x.type,
        location: P,
        location_stack: N,
        old_name_set: "" !== A,
        old_icon_set: (null == x ? void 0 : x.icon) != null
    };
    return (r.useEffect(() => {
        a(E !== A || R)
    }, [E, A, R, a]), (0, d.Ay)(() => (b.default.track(_.HAw.GDM_EDIT_INTERACTED, w(O({}, S), {
        action: "opened"
    })), () => {
        b.default.track(_.HAw.GDM_EDIT_INTERACTED, w(O({}, S), {
            action: "dismissed"
        }))
    })), null == x) ? null : (0, l.jsx)(h.f5, {
        value: N,
        children: (0, l.jsx)("form", {
            onSubmit: e => {
                e.preventDefault();
                let l = E !== A,
                    r = void 0 !== k;
                if (b.default.track(_.HAw.GDM_EDIT_INTERACTED, w(O({}, S), {
                        action: "saved",
                        new_name_set: "" !== E,
                        new_icon_set: (r ? k : null == x ? void 0 : x.icon) != null,
                        name_changed: l,
                        icon_changed: r
                    })), l || r) {
                    let e = {};
                    l && (e.name = E), r && (e.icon = k), u.A.updateChannel(t, e, P).catch(v.XA)
                }
                n()
            },
            children: (0, l.jsx)(o.Modal, {
                title: g.intl.string(g.t["5Q9+/L"]),
                actions: [{
                    text: g.intl.string(g.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: f
                }, {
                    text: g.intl.string(g.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    disabled: E === A && !R
                }],
                onClose: () => Promise.resolve(f()),
                transitionState: i,
                children: (0, l.jsxs)("div", {
                    className: j.jE,
                    children: [(0, l.jsx)(D, {
                        channel: x,
                        previewIcon: k,
                        onIconChange: e => T(e.imageUri),
                        onIconRemove: () => T(null),
                        analyticsLocations: N
                    }), (0, l.jsx)(c.ksK, {
                        "aria-label": g.intl.string(g.t.GEGW3P),
                        placeholder: null != C ? C : "",
                        value: E,
                        onChange: I,
                        autoFocus: !0
                    })]
                })
            })
        })
    })
}