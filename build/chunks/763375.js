/** Chunk was on 2644 **/
/** chunk id: 763375, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => j
}), r(896048);
var n = r(627968),
    o = r(64700),
    a = r(397927),
    s = r(843472),
    i = r(9578),
    l = r(688810),
    c = r(429913),
    u = r(911269),
    _ = r(451909),
    p = r(223863),
    d = r(734057),
    f = r(954571),
    b = r(957565),
    m = r(403362),
    y = r(871123),
    O = r(366523),
    w = r(995393),
    h = r(652215),
    g = r(381941),
    v = r(985018),
    x = r(588187);

function P(e) {
    let {
        sku: t,
        guildId: r
    } = e, s = (0, c.h)(t.applicationId), l = o.useMemo(() => (0, y.OY)(r, t), [r, t]);
    return (0, n.jsxs)("div", {
        className: x.sq,
        children: [(0, n.jsxs)("div", {
            className: x.kx,
            children: [(0, n.jsx)(i.A, {
                title: t.name,
                href: l,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-md/medium",
                    color: "text-link",
                    lineClamp: 1,
                    children: t.name
                })
            }), (0, n.jsxs)("div", {
                className: x.Bo,
                children: [(0, n.jsx)(a.qYV, {
                    size: "xs",
                    color: "currentColor",
                    className: x.ds
                }), (0, n.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: v.intl.formatToPlainString(v.t["CqpEC+"], {
                        applicationName: null == s ? void 0 : s.name
                    })
                })]
            })]
        }), (0, n.jsx)(O.e, {
            containerClassName: x.wP,
            foregroundImageClassName: x.wP,
            backgroundImageClassName: x.wP,
            sku: t,
            shape: "square"
        })]
    })
}

function j(e) {
    var t, r;
    let {
        sku: i,
        guildId: c,
        source: O,
        onClose: x,
        analyticsLocations: j,
        analyticsContext: k
    } = e, C = function(e, t) {
        if (null == e) return {};
        var r, n, o, a = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a
        }
        if (a = function(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    a = Object.getOwnPropertyNames(e);
                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
    }(e, ["sku", "guildId", "source", "onClose", "analyticsLocations", "analyticsContext"]), {
        analyticsLocations: I
    } = (0, l.Ay)(null != j ? j : []), T = o.useCallback(async (e, t, r) => {
        let {
            withMessage: n,
            closeAfterSend: o
        } = t;
        r(!0);
        try {
            let t = (await Promise.all(e.map(p.pk))).filter(m.Vq);
            if (0 === t.length) return void r(!1);
            o && x();
            let l = (0, y.Q6)(c, i);
            for (let e of t) {
                let t = d.A.getChannel(e);
                null != t && await s.A.sendMessage(t.id, _.Ay.parse(t, l + (null != n ? n : "")), !1, {
                    location: g.Hx.SOCIAL_LAYER_STOREFRONT
                })
            }(0, a.showToast)((0, a.createToast)(v.intl.string(v.t.kwmYkt), a.ToastType.SUCCESS))
        } catch (e) {
            (0, a.showToast)((0, a.createToast)(v.intl.string(v.t.iufib1), a.ToastType.FAILURE))
        } finally {
            r(!1)
        }
    }, [x, c, i]), S = o.useMemo(() => [{
        variant: "secondary",
        text: void 0,
        onClick: () => {
            f.default.track(h.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                slayer_storefront_session_id: null == k ? void 0 : k.sessionId,
                guild_id: c,
                sku_id: i.id,
                cta_type: w.Ng.COPY_LINK_BUTTON,
                location_stack: I
            }), (0, b.C)((0, y.OY)(c, i), () => (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["L/PwZf"]), a.ToastType.SUCCESS)))
        },
        icon: a.qYV
    }], [c, i, null == k ? void 0 : k.sessionId, I]);
    return (0, n.jsx)(u.ForwardModal, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({}, C), r = r = {
        onClose: x,
        source: O,
        customPreview: (0, n.jsx)(P, {
            sku: i,
            guildId: c
        }),
        customSubtitle: v.intl.string(v.t.yiaXeN),
        customSendHandler: T,
        additionalActions: S
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
}