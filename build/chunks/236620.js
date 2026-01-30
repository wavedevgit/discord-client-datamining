/** chunk id: 236620, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => u
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(498642),
    o = n(997509),
    c = n(652215),
    d = n(985018);

function u(e) {
    let {
        label: t,
        description: n,
        helperText: u,
        guildId: g,
        defaultSettings: m,
        canManageGuild: p
    } = e, f = (0, l.bG)([a.A], () => a.A.getMemberCount(g)), h = i.useMemo(() => [{
        name: d.intl.string(d.t["n/bTaY"]),
        value: c.orn.ALL_MESSAGES,
        desc: null != f && f >= c._4N ? d.intl.string(d.t["L+P4t2"]) : null
    }, {
        name: d.intl.string(d.t["6fQPhu"]),
        value: c.orn.ONLY_MENTIONS
    }], [f]), b = i.useCallback(e => {
        o.A.updateGuild({
            defaultMessageNotifications: e
        })
    }, []);
    return (0, r.jsx)(s.z6M, {
        label: t,
        description: n,
        helperText: u,
        options: h,
        value: m,
        disabled: !p,
        onChange: b
    })
}