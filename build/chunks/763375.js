/** chunk id: 763375, original params: e,a,t (module,exports,require) **/
t.d(a, {
    default: () => h
});
var n = t(627968),
    r = t(64700),
    s = t(397927),
    o = t(843472),
    c = t(9578),
    _ = t(688810),
    i = t(429913),
    l = t(911269),
    d = t(451909),
    C = t(223863),
    E = t(734057),
    A = t(954571),
    u = t(957565),
    N = t(403362),
    m = t(871123),
    O = t(366523),
    T = t(995393),
    I = t(652215),
    R = t(381941),
    p = t(985018),
    f = t(704417);

function P(e) {
    let {
        sku: a,
        guildId: t
    } = e, o = (0, i.h)(a.applicationId), _ = r.useMemo(() => (0, m.OY)(t, a), [t, a]);
    return (0, n.jsxs)("div", {
        className: f.sq,
        children: [(0, n.jsxs)("div", {
            className: f.kx,
            children: [(0, n.jsx)(c.A, {
                title: a.name,
                href: _,
                children: (0, n.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-link",
                    lineClamp: 1,
                    children: a.name
                })
            }), (0, n.jsxs)("div", {
                className: f.Bo,
                children: [(0, n.jsx)(s.qYV, {
                    size: "xs",
                    color: "currentColor",
                    className: f.ds
                }), (0, n.jsx)(s.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: p.intl.formatToPlainString(p.t["CqpEC+"], {
                        applicationName: o?.name
                    })
                })]
            })]
        }), (0, n.jsx)(O.e, {
            containerClassName: f.wP,
            foregroundImageClassName: f.wP,
            backgroundImageClassName: f.wP,
            sku: a,
            shape: "square"
        })]
    })
}

function h(e) {
    let {
        sku: a,
        guildId: t,
        source: c,
        onClose: i,
        analyticsLocations: O,
        analyticsContext: f,
        ...h
    } = e, {
        analyticsLocations: S
    } = (0, _.Ay)(O ?? []), g = r.useCallback(async (e, n, r) => {
        let {
            withMessage: c,
            closeAfterSend: _
        } = n;
        r(!0);
        try {
            let n = (await Promise.all(e.map(C.pk))).filter(N.Vq);
            if (0 === n.length) return void r(!1);
            _ && i();
            let l = (0, m.Q6)(t, a);
            for (let e of n) {
                let a = E.A.getChannel(e);
                null != a && await o.A.sendMessage(a.id, d.Ay.parse(a, l + (c ?? "")), !1, {
                    location: R.Hx.SOCIAL_LAYER_STOREFRONT
                })
            }(0, s.showToast)((0, s.createToast)(p.intl.string(p.t.kwmYkt), s.ToastType.SUCCESS))
        } catch (e) {
            (0, s.showToast)((0, s.createToast)(p.intl.string(p.t.iufib1), s.ToastType.FAILURE))
        } finally {
            r(!1)
        }
    }, [i, t, a]), b = r.useMemo(() => [{
        variant: "secondary",
        text: void 0,
        onClick: () => {
            A.default.track(I.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                slayer_storefront_session_id: f?.sessionId,
                guild_id: t,
                sku_id: a.id,
                cta_type: T.Ng.COPY_LINK_BUTTON,
                location_stack: S
            }), (0, u.C)((0, m.OY)(t, a), () => (0, s.showToast)((0, s.createToast)(p.intl.string(p.t["L/PwZf"]), s.ToastType.SUCCESS)))
        },
        icon: s.qYV
    }], [t, a, f?.sessionId, S]);
    return (0, n.jsx)(l.ForwardModal, {
        ...h,
        onClose: i,
        source: c,
        customPreview: (0, n.jsx)(P, {
            sku: a,
            guildId: t
        }),
        customSubtitle: p.intl.string(p.t.yiaXeN),
        customSendHandler: g,
        additionalActions: b
    })
}