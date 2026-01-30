/** chunk id: 890514, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(997509),
    a = n(985018);
let o = "".concat(60),
    c = "".concat(300),
    d = "".concat(900),
    u = "".concat(1800),
    g = "".concat(3600);

function m(e) {
    var t;
    let {
        canManageGuild: n,
        afkTimeout: m,
        afkChannelId: p,
        label: f
    } = e, h = i.useMemo(() => [{
        id: "1min",
        value: o,
        label: a.intl.formatToPlainString(a.t.iXLF9W, {
            minutes: 1
        })
    }, {
        id: "5min",
        value: c,
        label: a.intl.formatToPlainString(a.t.iXLF9W, {
            minutes: 5
        })
    }, {
        id: "15min",
        value: d,
        label: a.intl.formatToPlainString(a.t.iXLF9W, {
            minutes: 15
        })
    }, {
        id: "30min",
        value: u,
        label: a.intl.formatToPlainString(a.t.iXLF9W, {
            minutes: 30
        })
    }, {
        id: "1hr",
        value: g,
        label: a.intl.formatToPlainString(a.t.xCjYxK, {
            hours: 1
        })
    }], []), b = i.useCallback(e => {
        s.A.updateGuild({
            afkTimeout: parseInt(e, 10)
        })
    }, []);
    return (0, r.jsx)(l.l6P, {
        selectionMode: "single",
        label: f,
        value: null != (t = null == m ? void 0 : m.toString()) ? t : void 0,
        options: h,
        disabled: null == p || !n,
        onSelectionChange: b
    })
}