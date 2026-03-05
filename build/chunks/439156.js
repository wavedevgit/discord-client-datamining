/** chunk id: 439156, original params: e,t,n (module,exports,require) **/
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
    p = n(568065),
    g = n(333354),
    _ = n(985018),
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
    }, [T, y, N]), (0, i.jsx)(r.un, {
        body: D?.body ?? "",
        title: D?.title ?? void 0,
        shouldShow: null != D,
        delay: 100,
        "aria-label": null != M ? M : O ? _.intl.string(g.default.TZsu1U) : void 0,
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
                        text: _.intl.format(n ? g.default.uzQpQd : g.default.ad2Mfj, {
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