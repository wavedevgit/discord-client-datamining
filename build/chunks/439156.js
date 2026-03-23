/** chunk id: 439156 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(435371),
    o = n(732955),
    c = n(397927),
    d = n(470934),
    u = n(898190),
    h = n(998418),
    A = n(220628),
    m = n(933337),
    _ = n(568065),
    p = n(333354),
    g = n(985018),
    f = n(294590);

function x(e) {
    let {
        guildId: t,
        powerup: n,
        compact: l,
        iconSize: x,
        size: C,
        grow: E,
        className: I,
        expressiveCta: N,
        onError: b
    } = e, {
        onActivate: S,
        isLoading: T,
        error: v
    } = (0, A.A)(t, n), {
        isLoading: y,
        error: j
    } = (0, u.A)(t, n), R = (0, m.A)(t, n), O = (0, h.Ay)(t, n), L = O.type !== _.b_.INACTIVE, {
        disabled: M,
        reason: D
    } = (0, d.A)(t, n, L), G = null != D ? {
        title: null,
        body: D
    } : O.type === _.b_.LEVEL_ACTIVATED ? {
        title: g.intl.string(p.default["9oYuvb"]),
        body: g.intl.formatToPlainString(p.default.WRRYUT, {
            perkName: O.sourcePowerup?.title ?? g.intl.string(g.t.BfF6ED)
        })
    } : O.type === _.b_.POWERUP_ACTIVATED ? {
        title: g.intl.string(p.default.TZsu1U),
        body: g.intl.formatToPlainString(p.default["5HQUzD"], {
            boostCount: n.cost
        })
    } : null;
    return s.useEffect(() => {
        b?.(v ?? j)
    }, [v, j, b]), (0, i.jsx)(r.un, {
        body: G?.body ?? "",
        title: G?.title ?? void 0,
        shouldShow: null != G,
        delay: 100,
        "aria-label": null != D ? D : L ? g.intl.string(p.default.TZsu1U) : void 0,
        children: (0, i.jsx)("div", {
            className: a()(f.zr, {
                [f._o]: E,
                [f.nB]: !E
            }, I),
            children: (() => {
                let {
                    text: e,
                    icon: t
                } = function(e) {
                    let {
                        cost: t,
                        isActive: n,
                        compact: s,
                        iconSize: l
                    } = e, a = l ?? "sm", r = n ? c.x8N : c._Jp;
                    return s ? {
                        text: t.toString(),
                        icon: r
                    } : {
                        text: g.intl.format(n ? p.default.uzQpQd : p.default.ad2Mfj, {
                            boostCount: t,
                            dotHook: () => (0, i.jsx)("span", {
                                className: f.Om,
                                children: "•"
                            }),
                            boostIconHook: () => (0, i.jsx)(r, {
                                size: a,
                                color: "currentColor",
                                className: f.$J
                            })
                        })
                    }
                }({
                    cost: n.cost,
                    isActive: L,
                    compact: l,
                    iconSize: x
                });
                return (0, i.jsx)(o.$nd, {
                    variant: L ? "secondary" : N ? "expressive" : "primary",
                    "aria-label": g.intl.string(L ? p.default.TZsu1U : p.default.gSxlHf),
                    disabled: M,
                    onClick: e => {
                        e.stopPropagation(), L ? R() : S()
                    },
                    loading: T || y,
                    fullWidth: E,
                    size: C ?? (l ? "md" : void 0),
                    text: e,
                    minWidth: 0,
                    ...l ? {
                        icon: t
                    } : {}
                })
            })()
        })
    })
}