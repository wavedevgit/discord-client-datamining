/** chunk id: 285899, original params: e,t,a (module,exports,require) **/
a.d(t, {
    O: () => I,
    default: () => T
});
var r = a(627968),
    n = a(64700),
    s = a(512750),
    i = a(158954),
    l = a(397927),
    o = a(503852),
    c = a(661685),
    d = a(898190),
    u = a(490557),
    k = a(193157),
    m = a(568065),
    b = a(136708),
    f = a(985018),
    p = a(174069);

function I(e) {
    let {
        size: t,
        title: a,
        body: s,
        warningText: o,
        acknowledgementText: c,
        error: d,
        isLoading: u,
        onDeactivate: k,
        ...m
    } = e, [I, T] = n.useState(!1);
    return (0, r.jsxs)(i.Modal, {
        ...m,
        size: t,
        title: f.intl.formatToPlainString(b.default.iEBw1M, {
            perk: a
        }),
        subtitle: f.intl.formatToPlainString(b.default["7o0K+2"], {
            perk: a
        }),
        actions: [{
            variant: "secondary",
            text: f.intl.string(f.t["ETE/oC"]),
            onClick: m.onClose
        }, {
            variant: "critical-primary",
            text: f.intl.string(b.default.PYPdl4),
            loading: u,
            onClick: k,
            disabled: null != c && !I
        }],
        children: [s, (0, r.jsxs)("div", {
            className: p.UW,
            children: [(0, r.jsx)(i.EYj, {
                color: "text-feedback-critical",
                variant: "eyebrow",
                children: f.intl.string(b.default.OVt5CC)
            }), (0, r.jsx)(i.EYj, {
                className: p.i4,
                tag: "span",
                variant: "text-sm/medium",
                children: o
            })]
        }), null != d && (0, r.jsx)(i.EYj, {
            className: p.kc,
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: d
        }), null != c && (0, r.jsx)("div", {
            className: p.ud,
            children: (0, r.jsx)(l.Checkbox, {
                checked: I,
                onChange: T,
                label: c,
                labelType: "secondary"
            })
        })]
    })
}

function T(e) {
    let {
        guildId: t,
        powerup: a,
        ...l
    } = e, {
        onDeactivate: b,
        error: f,
        isLoading: T
    } = (0, d.A)(t, a), {
        onClose: _
    } = l, x = n.useCallback(e => {
        e.stopPropagation(), b().then(() => {
            _?.()
        })
    }, [_, b]), E = function(e, t) {
        let {
            warningText: a,
            vanityUrlWarning: l
        } = (0, c.A)(e, t);
        return n.useMemo(() => t.skuId === s.FB ? (0, r.jsx)(i.EYj, {
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: a
        }) : null != l ? (0, r.jsxs)(r.Fragment, {
            children: [a, (0, r.jsx)(i.EYj, {
                color: "text-feedback-critical",
                variant: "text-sm/semibold",
                children: l
            })]
        }) : a, [t.skuId, a, l])
    }(t, a);
    return (0, o.Z)(t, a, o.q.DEACTIVATE), (0, r.jsx)(I, {
        size: a.type === m.o9.LEVEL ? "md" : "sm",
        title: a.title,
        body: (() => {
            switch (a.type) {
                case m.o9.LEVEL:
                    return (0, r.jsx)(k.A, {
                        powerup: a
                    });
                case m.o9.PERK:
                    return (0, r.jsx)(u.l, {
                        className: p.Sl,
                        powerup: a
                    })
            }
        })(),
        warningText: E,
        error: f,
        isLoading: T,
        onDeactivate: x,
        ...l
    })
}