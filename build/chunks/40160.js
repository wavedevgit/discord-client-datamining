/** chunk id: 40160, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968);
n(64700);
var i = n(735438),
    l = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(780964),
    c = n(840065),
    d = n(260509),
    u = n(576705),
    g = n(287809),
    m = n(997509),
    p = n(600955),
    f = n(652215),
    h = n(985018),
    b = n(690450);

function x(e) {
    let t, {
            guild: n
        } = e,
        x = n.mfaLevel,
        j = (0, l.bG)([u.A], () => null != n && u.A.can(f.xBc.MANAGE_GUILD, n), [n]),
        _ = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        O = (0, d.bM)(n, _),
        v = null == _ ? void 0 : _.mfaEnabled,
        y = x === f.EkJ.ELEVATED,
        A = O && v,
        E = (0, i.throttle)(async e => {
            A && await m.A.updateMFALevel({
                guildId: n.id,
                level: e ? f.EkJ.ELEVATED : f.EkJ.NONE
            })
        }, 1e3);
    if (!j) return null;
    A || (t = O ? h.intl.format(h.t.nFwNyR, {
        settingsHook: () => (0, c.openUserSettings)(o.X.ACCOUNT_PANEL, {
            section: f.nc_.ACCOUNT
        })
    }) : h.intl.string(h.t["9Ghu40"]));
    let N = n.features.has(f.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: b.ph,
        children: [(0, r.jsxs)("div", {
            className: b.Ly,
            children: [(0, r.jsx)(a.Heading, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: h.intl.string(h.t.lbBfEQ)
            }), (0, r.jsxs)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: [h.intl.string(h.t["a/93J6"]), " ", t]
            })]
        }), !A || y && N ? (0, r.jsx)(s.m, {
            text: N ? h.intl.string(h.t["KG1V/E"]) : O ? h.intl.string(h.t.NmsheT) : h.intl.string(h.t.LieBta),
            children: (0, r.jsx)(p.A, {
                checked: y,
                disabled: !0,
                onChange: E,
                className: b.R0
            })
        }) : (0, r.jsx)(p.A, {
            checked: y,
            onChange: E,
            className: b.R0
        })]
    })
}