/** chunk id: 439156 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(435371),
    o = n(732955),
    c = n(397927),
    d = n(470934),
    u = n(898190),
    h = n(998418),
    A = n(220628),
    m = n(933337),
    p = n(568065),
    g = n(136708),
    _ = n(985018),
    f = n(163648);

function x(e) {
    let {
        guildId: t,
        powerup: n,
        compact: l,
        iconSize: x,
        size: C,
        grow: E,
        className: I,
        onError: N
    } = e, {
        onActivate: b,
        isLoading: S,
        error: T
    } = (0, A.A)(t, n), {
        isLoading: v,
        error: y
    } = (0, u.A)(t, n), j = (0, m.A)(t, n), R = (0, h.Ay)(t, n), O = R.type !== p.b_.INACTIVE, {
        disabled: L,
        reason: M
    } = (0, d.A)(t, n, O), D = null != M ? {
        title: null,
        body: M
    } : R.type === p.b_.LEVEL_ACTIVATED ? {
        title: _.intl.string(g.default["9oYuvb"]),
        body: _.intl.formatToPlainString(g.default.WRRYUT, {
            perkName: R.sourcePowerup?.title ?? _.intl.string(_.t.BfF6ED)
        })
    } : R.type === p.b_.POWERUP_ACTIVATED ? {
        title: _.intl.string(g.default.TZsu1U),
        body: _.intl.formatToPlainString(g.default["5HQUzD"], {
            boostCount: n.cost
        })
    } : null;
    return s.useEffect(() => {
        N?.(T ?? y)
    }, [T, y, N]), (0, i.jsx)(a.un, {
        body: D?.body ?? "",
        title: D?.title ?? void 0,
        shouldShow: null != D,
        delay: 100,
        "aria-label": null != M ? M : O ? _.intl.string(g.default.TZsu1U) : void 0,
        children: (0, i.jsx)("div", {
            className: r()(f.zr, {
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
                    } = e, r = l ?? "sm", a = n ? c.x8N : c._Jp;
                    return s ? {
                        text: t.toString(),
                        icon: a
                    } : {
                        text: _.intl.format(n ? g.default.uzQpQd : g.default.ad2Mfj, {
                            boostCount: t,
                            dotHook: () => (0, i.jsx)("span", {
                                className: f.Om,
                                children: "•"
                            }),
                            boostIconHook: () => (0, i.jsx)(a, {
                                size: r,
                                color: "currentColor",
                                className: f.$J
                            })
                        })
                    }
                }({
                    cost: n.cost,
                    isActive: O,
                    compact: l,
                    iconSize: x
                });
                return (0, i.jsx)(o.$nd, {
                    variant: O ? "secondary" : "primary",
                    "aria-label": _.intl.string(O ? g.default.TZsu1U : g.default.gSxlHf),
                    disabled: L,
                    onClick: e => {
                        e.stopPropagation(), O ? j() : b()
                    },
                    loading: S || v,
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