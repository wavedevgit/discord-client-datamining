/** chunk id: 54605, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(136722),
    a = n(397927),
    o = n(652215),
    s = n(985018),
    l = n(80739);
let c = 5;

function u(e) {
    let {
        error: t,
        selectedGuildId: n,
        onGuildChange: u,
        guilds: d,
        disabled: f = !1
    } = e, p = d.filter(e => i.zy(e.permissions, o.xBc.MANAGE_GUILD)).map(e => ({
        id: e.id,
        value: e.id,
        label: e.name
    }));
    return (0, r.jsx)("div", {
        className: l.g,
        children: (0, r.jsx)(a.ZiE, {
            label: s.intl.string(s.t["1DXFFd"]),
            helperText: s.intl.format(s.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: c,
            placeholder: s.intl.string(s.t.oM4E1A),
            options: p,
            onSelectionChange: u,
            disabled: f,
            value: null != n ? n : void 0
        })
    })
}